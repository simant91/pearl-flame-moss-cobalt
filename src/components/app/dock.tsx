import {
  Fingerprint,
  Inbox,
  Lock,
  MessageCircle,
  Plus,
  Radio,
  Shield,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { draftLocal } from "@/lib/twin/engine";
import { channelLabel, channelTone, relTime } from "@/lib/twin/format";
import { englishShare } from "@/lib/twin/style";
import { useTwin } from "@/lib/twin/store";
import type { Panel, StylePrint } from "@/lib/twin/types";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

const RAIL: { id: Panel; label: string; icon: typeof Inbox }[] = [
  { id: "inbox", label: "Inbox", icon: Inbox },
  { id: "voice", label: "Voice", icon: Fingerprint },
  { id: "route", label: "Route", icon: Radio },
  { id: "vault", label: "Vault", icon: Shield },
];

function InboxPanel() {
  const threads = useTwin((s) => s.threads);
  const activeId = useTwin((s) => s.activeId);
  const openThread = useTwin((s) => s.openThread);
  const addDemoInbound = useTwin((s) => s.addDemoInbound);
  const startCall = useTwin((s) => s.startCall);
  const [demo, setDemo] = useState("");

  return (
    <div className="flex h-full flex-col">
      <header className="mb-5">
        <h2 className="font-display text-3xl leading-tight tracking-tight text-fg">Inbox</h2>
        <p className="mt-1 text-sm leading-normal text-muted">
          Waiting on you. Twin drafts stay on this device until you send.
        </p>
      </header>
      <ul className="space-y-1">
        {threads.map((t) => {
          const last = t.messages[t.messages.length - 1];
          return (
            <li key={t.id}>
              <button
                type="button"
                onClick={() => openThread(t.id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition-colors duration-150",
                  t.id === activeId ? "bg-raised" : "hover:bg-raised/60",
                )}
              >
                <span
                  className={cn(
                    "relative flex size-11 items-center justify-center rounded-full text-sm text-fg",
                    t.avatar === "ava-1" && "bg-ava-1",
                    t.avatar === "ava-2" && "bg-ava-2",
                    t.avatar === "ava-3" && "bg-ava-3",
                    t.avatar === "ava-4" && "bg-ava-4",
                  )}
                >
                  {t.initial}
                  {t.unread ? (
                    <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-primary" />
                  ) : null}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2">
                    <span className="truncate text-sm font-medium text-fg">{t.contact}</span>
                    <span className="tabular-nums text-2xs text-subtle">
                      {last ? relTime(last.at) : ""}
                    </span>
                  </span>
                  <span className="mt-0.5 flex items-center gap-2">
                    <Badge tone={channelTone(t.channel)}>{channelLabel(t.channel)}</Badge>
                    <span className="truncate text-xs text-muted">{last?.text}</span>
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <form
        className="mt-auto space-y-2 pt-6"
        onSubmit={(e) => {
          e.preventDefault();
          addDemoInbound(demo);
          setDemo("");
        }}
      >
        <p className="text-2xs font-medium uppercase tracking-wider text-subtle">Simulate inbound</p>
        <div className="flex gap-2">
          <Input
            value={demo}
            onChange={(e) => setDemo(e.target.value)}
            placeholder="kire ki obostha"
            aria-label="Simulate inbound message"
          />
          <Button type="submit" size="icon" variant="secondary" aria-label="Add inbound">
            <Plus className="size-4" />
          </Button>
        </div>
        <Button type="button" variant="outline" className="w-full" onClick={startCall}>
          Incoming call
        </Button>
      </form>
    </div>
  );
}

function VoiceRow({
  label,
  hint,
  value,
  onChange,
}: {
  label: string;
  hint: string;
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <p className="text-sm text-fg">{label}</p>
        <p className="tabular-nums text-xs text-muted">{value}</p>
      </div>
      <p className="text-xs text-subtle">{hint}</p>
      <Slider value={[value]} max={90} min={5} step={1} onValueChange={(v) => onChange(v[0] ?? value)} />
    </div>
  );
}

function VoicePanel() {
  const style = useTwin((s) => s.style);
  const setStyle = useTwin((s) => s.setStyle);
  const samples = useTwin((s) => s.samples);
  const addSample = useTwin((s) => s.addSample);
  const removeSample = useTwin((s) => s.removeSample);
  const tone = useTwin((s) => s.tone);
  const [line, setLine] = useState("");

  const preview = draftLocal({
    inbound: "kire kal asbi?",
    relation: "friend",
    tone,
    style,
    samples,
    nonce: 21,
  });

  function toggle(key: keyof StylePrint, current: boolean) {
    setStyle({ [key]: !current } as Partial<StylePrint>);
  }

  return (
    <div className="flex h-full flex-col">
      <header className="mb-5">
        <h2 className="font-display text-3xl leading-tight tracking-tight text-fg">Voice print</h2>
        <p className="mt-1 text-sm leading-normal text-muted">
          Learned on-device from chat-shaped samples. Nothing is uploaded.
        </p>
      </header>

      <div className="rounded-lg bg-raised p-4">
        <p className="text-2xs font-medium uppercase tracking-wider text-subtle">Live rewrite</p>
        <p className="mt-1 text-xs text-muted">Inbound · kire kal asbi?</p>
        <p className="mt-2 font-display text-xl leading-snug text-fg">{preview.bubbles.join(" / ")}</p>
        <p className="mt-2 text-xs text-subtle">
          Banglish {style.banglish} · Bangla {style.banglaScript} · English {englishShare(style)}
        </p>
      </div>

      <div className="mt-5 space-y-4">
        <VoiceRow
          label="Banglish"
          hint="Romanized Bangla mix"
          value={style.banglish}
          onChange={(banglish) => setStyle({ banglish, banglaScript: Math.min(style.banglaScript, 95 - banglish) })}
        />
        <VoiceRow
          label="Bangla script"
          hint="Family threads, quieter"
          value={style.banglaScript}
          onChange={(banglaScript) => setStyle({ banglaScript, banglish: Math.min(style.banglish, 95 - banglaScript) })}
        />
        <VoiceRow label="Warmth" hint="bro / vai / soft closers" value={style.warmth} onChange={(warmth) => setStyle({ warmth })} />
        <VoiceRow label="Brevity" hint="Shorter bubbles" value={style.brevity} onChange={(brevity) => setStyle({ brevity })} />
      </div>

      <ul className="mt-5 space-y-3">
        {(
          [
            ["lowercase", "Mostly lowercase", style.lowercase],
            ["dropPeriods", "Drop end periods", style.dropPeriods],
            ["openerHmm", "hmm openers", style.openerHmm],
            ["openerAccha", "accha openers", style.openerAccha],
            ["broVai", "bro / vai", style.broVai],
            ["doubleOk", "ok ok", style.doubleOk],
            ["splitShort", "Split short bubbles", style.splitShort],
          ] as const
        ).map(([key, label, on]) => (
          <li key={key} className="flex items-center justify-between gap-3">
            <span className="text-sm text-fg">{label}</span>
            <Switch checked={on} onCheckedChange={() => toggle(key, on)} aria-label={label} />
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <p className="text-2xs font-medium uppercase tracking-wider text-subtle">Style seeds</p>
        <ul className="mt-2 max-h-40 space-y-1 overflow-auto">
          {samples.map((s, i) => (
            <li key={`${s}-${i}`} className="flex items-center justify-between gap-2 rounded-sm bg-inset px-2 py-1.5">
              <span className="truncate text-xs text-fg">{s}</span>
              <button
                type="button"
                className="size-9 text-subtle hover:text-danger"
                onClick={() => removeSample(i)}
                aria-label={`Remove sample ${i + 1}`}
              >
                <Trash2 className="mx-auto size-4" />
              </button>
            </li>
          ))}
        </ul>
        <form
          className="mt-2 flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            addSample(line);
            setLine("");
          }}
        >
          <Input
            value={line}
            onChange={(e) => setLine(e.target.value)}
            placeholder="Paste a line you actually send"
            aria-label="Add style sample"
          />
          <Button type="submit" size="icon" variant="secondary" aria-label="Save sample">
            <Plus className="size-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}

function RoutePanel() {
  const routeMode = useTwin((s) => s.routeMode);
  const setRouteMode = useTwin((s) => s.setRouteMode);
  const cloudLog = useTwin((s) => s.cloudLog);

  return (
    <div>
      <header className="mb-5">
        <h2 className="font-display text-3xl leading-tight tracking-tight text-fg">Hybrid route</h2>
        <p className="mt-1 text-sm leading-normal text-muted">
          Local Twin first. Cloud only when you ask, and only a compact style card plus the inbound line.
        </p>
      </header>

      <div className="grid grid-cols-3 gap-1 rounded-lg bg-inset p-1">
        {(["local", "auto", "cloud"] as const).map((mode) => (
          <button
            key={mode}
            type="button"
            onClick={() => setRouteMode(mode)}
            className={cn(
              "h-11 rounded-md text-sm font-medium capitalize",
              routeMode === mode ? "bg-primary text-primary-fg" : "text-muted hover:text-fg",
            )}
          >
            {mode}
          </button>
        ))}
      </div>

      <ol className="mt-6 space-y-4">
        <li className="rounded-lg bg-raised p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-accent">Primary</p>
          <p className="mt-1 font-display text-xl text-fg">On-device Twin</p>
          <p className="mt-1 text-sm leading-normal text-muted">
            Style engine on this phone. Stands in for a local Ollama box when the PC is nearby — zero history leaves the device.
          </p>
        </li>
        <li className="rounded-lg bg-raised p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-warn">Fallback</p>
          <p className="mt-1 font-display text-xl text-fg">Cloud Twin</p>
          <p className="mt-1 text-sm leading-normal text-muted">
            User-initiated refine. Compact style card only. Intended Gemini downtime path; this runtime uses a private cloud draft.
          </p>
        </li>
      </ol>

      <div className="mt-6">
        <p className="text-2xs font-medium uppercase tracking-wider text-subtle">Cloud receipts</p>
        {cloudLog.length === 0 ? (
          <p className="mt-2 text-sm text-muted">No cloud calls yet. Local drafts leave no receipt.</p>
        ) : (
          <ul className="mt-2 space-y-2">
            {cloudLog.map((r) => (
              <li key={r.id} className="rounded-md bg-inset px-3 py-2">
                <p className="text-xs text-fg">
                  {r.fields} fields · {r.chars} chars
                </p>
                <p className="truncate text-xs text-muted">{r.preview}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function VaultPanel() {
  const wipe = useTwin((s) => s.wipe);
  const threads = useTwin((s) => s.threads);
  const samples = useTwin((s) => s.samples);
  const cloudLog = useTwin((s) => s.cloudLog);

  return (
    <div>
      <header className="mb-5">
        <h2 className="font-display text-3xl leading-tight tracking-tight text-fg">Vault</h2>
        <p className="mt-1 text-sm leading-normal text-muted">
          Private by default. Threads, voice print, and receipts live in this browser only.
        </p>
      </header>

      <dl className="grid grid-cols-3 gap-2">
        {[
          [String(threads.length), "threads"],
          [String(samples.length), "seeds"],
          [String(cloudLog.length), "receipts"],
        ].map(([n, k]) => (
          <div key={k} className="rounded-lg bg-raised px-3 py-4">
            <dt className="text-xs text-muted">{k}</dt>
            <dd className="mt-1 font-display text-2xl tabular-nums text-fg">{n}</dd>
          </div>
        ))}
      </dl>

      <ul className="mt-6 space-y-3 text-sm leading-normal text-muted">
        <li className="flex gap-2">
          <Lock className="mt-0.5 size-4 shrink-0 text-accent" />
          Chat history never syncs, exports, or trains a public model.
        </li>
        <li className="flex gap-2">
          <MessageCircle className="mt-0.5 size-4 shrink-0 text-accent" />
          Overlay replies are formatted for a small floating Android window.
        </li>
        <li className="flex gap-2">
          <Shield className="mt-0.5 size-4 shrink-0 text-accent" />
          Cloud refine sends a style card plus one inbound line. You can see every receipt.
        </li>
      </ul>

      <Button variant="danger" className="mt-8 w-full" onClick={wipe}>
        Wipe this device
      </Button>
    </div>
  );
}

export function Dock() {
  const panel = useTwin((s) => s.panel);
  const setPanel = useTwin((s) => s.setPanel);

  return (
    <aside className="flex h-full min-h-0 flex-col bg-surface">
      <nav className="flex gap-1 border-b border-border p-2 md:px-3">
        {RAIL.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setPanel(id)}
            className={cn(
              "flex h-11 flex-1 items-center justify-center gap-2 rounded-md text-sm font-medium",
              panel === id ? "bg-raised text-fg" : "text-muted hover:text-fg",
            )}
            aria-current={panel === id ? "page" : undefined}
          >
            <Icon className="size-4" />
            <span className="hidden sm:inline">{label}</span>
          </button>
        ))}
      </nav>
      <div className="min-h-0 flex-1 overflow-y-auto p-5 pb-20 md:p-6 md:pb-20">
        {panel === "inbox" ? <InboxPanel /> : null}
        {panel === "voice" ? <VoicePanel /> : null}
        {panel === "route" ? <RoutePanel /> : null}
        {panel === "vault" ? <VaultPanel /> : null}
      </div>
    </aside>
  );
}
