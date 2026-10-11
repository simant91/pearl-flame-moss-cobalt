import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SEED_THREADS, STYLE_SEEDS } from "./corpus";
import { draftLocal } from "./engine";
import { DEFAULT_STYLE } from "./style";
import type {
  CallState,
  CloudReceipt,
  Draft,
  Panel,
  RouteMode,
  StylePrint,
  Thread,
  Tone,
} from "./types";

type TwinState = {
  hydrated: boolean;
  style: StylePrint;
  samples: string[];
  threads: Thread[];
  activeId: string | null;
  overlayOpen: boolean;
  call: CallState | null;
  routeMode: RouteMode;
  cloudLog: CloudReceipt[];
  panel: Panel;
  bubble: { x: number; y: number };
  drafts: Record<string, Draft>;
  tone: Tone;
  nonce: number;
  markHydrated: () => void;
  ensureSeed: () => void;
  setStyle: (patch: Partial<StylePrint>) => void;
  setPanel: (panel: Panel) => void;
  setRouteMode: (mode: RouteMode) => void;
  setTone: (tone: Tone) => void;
  setBubble: (pos: { x: number; y: number }) => void;
  openThread: (id: string) => void;
  closeOverlay: () => void;
  setDraft: (threadId: string, draft: Draft) => void;
  patchDraftText: (threadId: string, bubbles: string[]) => void;
  sendDraft: (threadId: string) => void;
  addSample: (line: string) => void;
  removeSample: (index: number) => void;
  pushInbound: (threadId: string, text: string) => void;
  addDemoInbound: (text: string) => void;
  startCall: () => void;
  dismissCall: () => void;
  declineCallWithTwin: () => void;
  logCloud: (receipt: CloudReceipt) => void;
  wipe: () => void;
};

function lastInbound(thread: Thread | undefined): string {
  if (!thread) return "";
  const them = [...thread.messages].reverse().find((m) => m.from === "them");
  return them?.text ?? "";
}

export const useTwin = create<TwinState>()(
  persist(
    (set, get) => ({
      hydrated: false,
      style: DEFAULT_STYLE,
      samples: STYLE_SEEDS,
      threads: SEED_THREADS,
      activeId: "rafi",
      overlayOpen: true,
      call: null,
      routeMode: "local",
      cloudLog: [],
      panel: "inbox",
      bubble: { x: 82, y: 72 },
      drafts: {},
      tone: "chill",
      nonce: 1,
      markHydrated: () => set({ hydrated: true }),
      ensureSeed: () => {
        const s = get();
        const threads = s.threads.length ? s.threads : SEED_THREADS;
        const samples = s.samples.length ? s.samples : STYLE_SEEDS;
        const activeId = s.activeId ?? threads[0]?.id ?? null;
        const drafts = { ...s.drafts };
        for (const t of threads) {
          if (!drafts[t.id]) {
            drafts[t.id] = draftLocal({
              inbound: lastInbound(t),
              relation: t.relation,
              tone: s.tone,
              style: s.style,
              samples,
              nonce: s.nonce + t.id.length,
            });
          }
        }
        set({ threads, samples, activeId, drafts });
      },
      setStyle: (patch) => {
        const style = { ...get().style, ...patch };
        set({ style });
        const s = get();
        const drafts = { ...s.drafts };
        for (const t of s.threads) {
          drafts[t.id] = draftLocal({
            inbound: lastInbound(t),
            relation: t.relation,
            tone: s.tone,
            style,
            samples: s.samples,
            nonce: s.nonce,
          });
        }
        set({ drafts });
      },
      setPanel: (panel) => set({ panel }),
      setRouteMode: (routeMode) => set({ routeMode }),
      setTone: (tone) => {
        set({ tone, nonce: get().nonce + 1 });
        const s = get();
        const active = s.threads.find((t) => t.id === s.activeId);
        if (!active) return;
        set({
          drafts: {
            ...s.drafts,
            [active.id]: draftLocal({
              inbound: lastInbound(active),
              relation: active.relation,
              tone,
              style: s.style,
              samples: s.samples,
              nonce: s.nonce + 1,
            }),
          },
        });
      },
      setBubble: (bubble) => set({ bubble }),
      openThread: (id) => {
        const s = get();
        const threads = s.threads.map((t) => (t.id === id ? { ...t, unread: false } : t));
        const thread = threads.find((t) => t.id === id);
        const drafts = { ...s.drafts };
        if (thread && !drafts[thread.id]) {
          drafts[thread.id] = draftLocal({
            inbound: lastInbound(thread),
            relation: thread.relation,
            tone: s.tone,
            style: s.style,
            samples: s.samples,
            nonce: s.nonce + thread.id.length,
          });
        }
        set({ activeId: id, overlayOpen: true, threads, panel: "inbox", drafts });
      },
      closeOverlay: () => set({ overlayOpen: false }),
      setDraft: (threadId, draft) =>
        set({ drafts: { ...get().drafts, [threadId]: draft }, nonce: get().nonce + 1 }),
      patchDraftText: (threadId, bubbles) => {
        const current = get().drafts[threadId];
        set({
          drafts: {
            ...get().drafts,
            [threadId]: {
              bubbles,
              route: current?.route ?? "local",
              note: current?.note ?? "On-device",
            },
          },
        });
      },
      sendDraft: (threadId) => {
        const s = get();
        const draft = s.drafts[threadId];
        if (!draft) return;
        const threads = s.threads.map((t) => {
          if (t.id !== threadId) return t;
          const extra = draft.bubbles.map((text, i) => ({
            id: `${threadId}-me-${Date.now()}-${i}`,
            from: "me" as const,
            text,
            at: Date.now() + i,
          }));
          return { ...t, unread: false, messages: [...t.messages, ...extra] };
        });
        set({ threads, overlayOpen: true });
      },
      addSample: (line) => {
        const trimmed = line.trim();
        if (!trimmed) return;
        set({ samples: [...get().samples, trimmed].slice(-40) });
      },
      removeSample: (index) =>
        set({ samples: get().samples.filter((_, i) => i !== index) }),
      pushInbound: (threadId, text) => {
        const trimmed = text.trim();
        if (!trimmed) return;
        const s = get();
        const threads = s.threads.map((t) => {
          if (t.id !== threadId) return t;
          return {
            ...t,
            unread: true,
            messages: [
              ...t.messages,
              { id: `${threadId}-in-${Date.now()}`, from: "them" as const, text: trimmed, at: Date.now() },
            ],
          };
        });
        const thread = threads.find((t) => t.id === threadId);
        if (!thread) return;
        const draft = draftLocal({
          inbound: trimmed,
          relation: thread.relation,
          tone: s.tone,
          style: s.style,
          samples: s.samples,
          nonce: s.nonce + 3,
        });
        set({
          threads,
          drafts: { ...s.drafts, [threadId]: draft },
          overlayOpen: true,
          activeId: threadId,
        });
      },
      addDemoInbound: (text) => {
        const id = get().activeId ?? get().threads[0]?.id;
        if (id) get().pushInbound(id, text);
      },
      startCall: () =>
        set({
          call: { contact: "Shuvo", initial: "S", channel: "call" },
          overlayOpen: false,
        }),
      dismissCall: () => set({ call: null }),
      declineCallWithTwin: () => {
        const reply = draftLocal({
          inbound: "missed call",
          relation: "friend",
          tone: "busy",
          style: get().style,
          samples: get().samples,
          nonce: get().nonce + 9,
        });
        const threads = get().threads;
        const existing = threads.find((t) => t.contact === "Shuvo");
        const msg = {
          id: `call-${Date.now()}`,
          from: "me" as const,
          text: reply.bubbles.join(" / "),
          at: Date.now(),
        };
        if (existing) {
          set({
            threads: threads.map((t) =>
              t.id === existing.id ? { ...t, messages: [...t.messages, msg] } : t,
            ),
            call: null,
            activeId: existing.id,
            overlayOpen: true,
            drafts: { ...get().drafts, [existing.id]: reply },
          });
          return;
        }
        const thread: Thread = {
          id: "shuvo",
          contact: "Shuvo",
          initial: "S",
          avatar: "ava-1",
          channel: "call",
          relation: "friend",
          unread: false,
          messages: [
            {
              id: "shuvo-miss",
              from: "them",
              text: "missed call",
              at: Date.now() - 1000,
            },
            msg,
          ],
        };
        set({
          threads: [thread, ...threads],
          call: null,
          activeId: "shuvo",
          overlayOpen: true,
          drafts: { ...get().drafts, shuvo: reply },
        });
      },
      logCloud: (receipt) =>
        set({ cloudLog: [receipt, ...get().cloudLog].slice(0, 20) }),
      wipe: () =>
        set({
          style: DEFAULT_STYLE,
          samples: STYLE_SEEDS,
          threads: SEED_THREADS,
          activeId: "rafi",
          overlayOpen: true,
          call: null,
          routeMode: "local",
          cloudLog: [],
          drafts: {},
          nonce: 1,
          tone: "chill",
        }),
    }),
    {
      name: "twin.simanto.v1",
      skipHydration: true,
      partialize: (s) => ({
        style: s.style,
        samples: s.samples,
        threads: s.threads,
        routeMode: s.routeMode,
        cloudLog: s.cloudLog,
        bubble: s.bubble,
        tone: s.tone,
        activeId: s.activeId,
      }),
    },
  ),
);
