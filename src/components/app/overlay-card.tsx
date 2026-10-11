import { Cloud, Cpu, RotateCcw, Send, X } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { refineOnCloud } from "@/lib/twin/cloud";
import { draftLocal, shouldEscalate } from "@/lib/twin/engine";
import { channelLabel, channelTone, relTime } from "@/lib/twin/format";
import { imprintFrom, serializeStyleCard } from "@/lib/twin/style";
import { useTwin } from "@/lib/twin/store";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

export function OverlayCard() {
  const overlayOpen = useTwin((s) => s.overlayOpen);
  const activeId = useTwin((s) => s.activeId);
  const threads = useTwin((s) => s.threads);
  const drafts = useTwin((s) => s.drafts);
  const style = useTwin((s) => s.style);
  const samples = useTwin((s) => s.samples);
  const tone = useTwin((s) => s.tone);
  const routeMode = useTwin((s) => s.routeMode);
  const nonce = useTwin((s) => s.nonce);
  const closeOverlay = useTwin((s) => s.closeOverlay);
  const setDraft = useTwin((s) => s.setDraft);
  const patchDraftText = useTwin((s) => s.patchDraftText);
  const sendDraft = useTwin((s) => s.sendDraft);
  const setTone = useTwin((s) => s.setTone);
  const logCloud = useTwin((s) => s.logCloud);
  const [busy, setBusy] = useState(false);

  const thread = threads.find((t) => t.id === activeId);

  useEffect(() => {
    if (!thread || drafts[thread.id]) return;
    const inbound = [...thread.messages].reverse().find((m) => m.from === "them");
    if (!inbound) return;
    setDraft(
      thread.id,
      draftLocal({
        inbound: inbound.text,
        relation: thread.relation,
        tone,
        style,
        samples,
        nonce,
      }),
    );
  }, [thread, drafts, nonce, samples, setDraft, style, tone]);

  if (!overlayOpen || !thread) return null;
  const active = thread;

  const inbound = [...active.messages].reverse().find((m) => m.from === "them");
  const draft =
    drafts[active.id] ??
    (inbound
      ? draftLocal({
          inbound: inbound.text,
          relation: active.relation,
          tone,
          style,
          samples,
          nonce,
        })
      : undefined);
  const joined = draft?.bubbles.join("\n") ?? "";
  const escalate = inbound ? shouldEscalate(inbound.text, routeMode) : false;

  function regenerate() {
    if (!inbound) return;
    setDraft(
      active.id,
      draftLocal({
        inbound: inbound.text,
        relation: active.relation,
        tone,
        style,
        samples,
        nonce: nonce + 7,
      }),
    );
  }

  async function cloudRefine() {
    if (!inbound) return;
    setBusy(true);
    try {
      const styleCard = serializeStyleCard(style, imprintFrom(samples));
      const result = await refineOnCloud({
        data: {
          inbound: inbound.text,
          styleCard,
          relation: active.relation,
          channel: active.channel,
          tone,
        },
      });
      if (!result.ok) {
        toast.error(result.error);
        return;
      }
      setDraft(active.id, {
        bubbles: result.bubbles,
        route: "cloud",
        note: result.note,
      });
      logCloud({
        id: `${Date.now()}`,
        at: Date.now(),
        fields: 5,
        chars: inbound.text.length + styleCard.length,
        preview: inbound.text.slice(0, 48),
      });
    } catch {
      toast.error("Cloud Twin could not run");
    } finally {
      setBusy(false);
    }
  }

  function send() {
    sendDraft(active.id);
    toast.success("Queued on-device. Nothing left this phone.");
  }

  return (
    <section
      className="absolute bottom-20 left-3 right-3 z-20 origin-bottom rounded-xl bg-surface p-3 shadow-[var(--shadow-lift)]"
      style={{ boxShadow: "var(--shadow-border), var(--shadow-lift)" }}
      aria-label="Twin overlay"
    >
      <header className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="truncate font-display text-lg leading-tight text-fg">{active.contact}</p>
            <Badge tone={channelTone(active.channel)}>{channelLabel(active.channel)}</Badge>
          </div>
          <p className="mt-0.5 text-xs text-muted">
            {draft?.route === "cloud" ? "Cloud Twin" : "On-device Twin"}
            {inbound ? ` · ${relTime(inbound.at)}` : ""}
          </p>
        </div>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-sm text-muted hover:bg-raised hover:text-fg"
          onClick={closeOverlay}
          aria-label="Close overlay"
        >
          <X className="size-4" />
        </button>
      </header>

      {inbound ? (
        <p className="mt-3 rounded-md bg-inset px-3 py-2 text-sm leading-normal text-fg/90">
          {inbound.text}
        </p>
      ) : (
        <p className="mt-3 text-sm text-muted">No inbound yet.</p>
      )}

      <div className="mt-3 flex gap-1">
        {(["chill", "busy", "soft"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTone(t)}
            className={cn(
              "h-9 flex-1 rounded-full text-xs font-medium capitalize",
              tone === t ? "bg-primary text-primary-fg" : "bg-raised text-muted",
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <label className="mt-3 block">
        <span className="mb-1 flex items-center gap-1.5 text-2xs font-medium uppercase tracking-wider text-subtle">
          {draft?.route === "cloud" ? <Cloud className="size-3" /> : <Cpu className="size-3" />}
          Twin draft
        </span>
        <Textarea
          value={joined}
          onChange={(e) => patchDraftText(active.id, e.target.value.split("\n"))}
          rows={2}
          aria-label="Edit Twin draft"
        />
      </label>

      {escalate && draft?.route !== "cloud" ? (
        <p className="mt-2 text-xs text-warn">Work-shaped message. Cloud refine stays optional.</p>
      ) : null}

      <div className="mt-3 flex items-center gap-2">
        <Button
          variant="secondary"
          size="icon"
          onClick={regenerate}
          aria-label="Regenerate local draft"
        >
          <RotateCcw className="size-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          disabled={busy || !inbound}
          onClick={() => void cloudRefine()}
        >
          <Cloud className="size-4" />
          {busy ? "Refining" : "Cloud"}
        </Button>
        <Button size="sm" className="flex-1" onClick={send} disabled={!joined.trim()}>
          <Send className="size-4" />
          Send
        </Button>
      </div>
    </section>
  );
}
