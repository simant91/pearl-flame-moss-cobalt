import { Phone, Signal, Wifi } from "lucide-react";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { OverlayCard } from "@/components/app/overlay-card";
import { Button } from "@/components/ui/button";
import { clockLabel, dateLabel } from "@/lib/twin/format";
import { useTwin } from "@/lib/twin/store";
import { cn } from "@/lib/utils";

function Bubble({
  x,
  y,
  unread,
  onOpen,
  onMove,
}: {
  x: number;
  y: number;
  unread: boolean;
  onOpen: () => void;
  onMove: (pos: { x: number; y: number }) => void;
}) {
  const dragging = useRef(false);
  const host = useRef<HTMLButtonElement>(null);

  function pointerDown(e: PointerEvent<HTMLButtonElement>) {
    dragging.current = false;
    host.current?.setPointerCapture(e.pointerId);
  }

  function pointerMove(e: PointerEvent<HTMLButtonElement>) {
    if (!host.current?.hasPointerCapture(e.pointerId)) return;
    const parent = host.current.offsetParent as HTMLElement | null;
    if (!parent) return;
    if (Math.abs(e.movementX) + Math.abs(e.movementY) > 2) dragging.current = true;
    const rect = parent.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 100;
    const ny = ((e.clientY - rect.top) / rect.height) * 100;
    onMove({
      x: Math.min(90, Math.max(8, nx)),
      y: Math.min(86, Math.max(10, ny)),
    });
  }

  function pointerUp() {
    if (!dragging.current) onOpen();
    dragging.current = false;
  }

  return (
    <button
      ref={host}
      type="button"
      aria-label="Open Twin overlay"
      onPointerDown={pointerDown}
      onPointerMove={pointerMove}
      onPointerUp={pointerUp}
      className={cn(
        "absolute z-30 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-fg",
        "shadow-[var(--shadow-lift)] touch-none select-none",
        unread && "ring-2 ring-accent ring-offset-2 ring-offset-inset",
      )}
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <span className="font-display text-2xl leading-none">স</span>
    </button>
  );
}

function CallBanner() {
  const call = useTwin((s) => s.call);
  const dismissCall = useTwin((s) => s.dismissCall);
  const declineCallWithTwin = useTwin((s) => s.declineCallWithTwin);
  if (!call) return null;

  return (
    <div className="absolute inset-x-3 top-12 z-40 rounded-lg bg-surface p-3 shadow-[var(--shadow-lift)]">
      <div className="flex items-center gap-3">
        <span className="flex size-11 items-center justify-center rounded-full bg-ava-1 font-display text-lg text-fg">
          {call.initial}
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-medium text-fg">{call.contact}</p>
          <p className="text-xs text-muted">Incoming call</p>
        </div>
        <Phone className="size-4 text-ok" />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <Button variant="secondary" size="sm" onClick={dismissCall}>
          Ignore
        </Button>
        <Button variant="primary" size="sm" onClick={declineCallWithTwin}>
          Twin decline
        </Button>
      </div>
    </div>
  );
}

export function DeviceStage({ framed }: { framed: boolean }) {
  const threads = useTwin((s) => s.threads);
  const bubble = useTwin((s) => s.bubble);
  const setBubble = useTwin((s) => s.setBubble);
  const openThread = useTwin((s) => s.openThread);
  const overlayOpen = useTwin((s) => s.overlayOpen);
  const activeId = useTwin((s) => s.activeId);
  const unread = threads.some((t) => t.unread);
  const [clock, setClock] = useState("9:41");
  const [date, setDate] = useState("Tuesday, 6 October");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setClock(clockLabel(d));
      setDate(dateLabel(d));
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  const inner = (
    <div
      className={cn(
        "relative overflow-hidden bg-inset",
        framed ? "h-stage rounded-[1.75rem]" : "h-full rounded-none",
      )}
    >
      <img
        src="/wallpaper.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover outline outline-1 -outline-offset-1 outline-fg/10"
      />
      <div className="absolute inset-0 bg-bg/35" />
      <div className="grain pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay" />

      <div className="relative z-10 flex items-center justify-between px-5 pt-3 text-2xs text-fg/80">
        <span className="tabular-nums font-medium">{clock}</span>
        <span className="flex items-center gap-1.5">
          <Signal className="size-3" />
          <Wifi className="size-3" />
        </span>
      </div>

      <div className="relative z-10 px-6 pt-14 text-center">
        <p className="font-display text-6xl leading-none tracking-tighter text-fg">{clock}</p>
        <p className="mt-2 text-sm text-fg/70">{date}</p>
        <p className="mt-6 font-display text-4xl italic text-fg/25">Twin</p>
      </div>

      {!overlayOpen ? (
        <div className="absolute inset-x-4 top-1/2 z-10 space-y-2">
          {threads
            .filter((t) => t.unread)
            .slice(0, 3)
            .map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => openThread(t.id)}
                className="flex w-full items-center gap-3 rounded-lg bg-surface/90 px-3 py-2 text-left shadow-[var(--shadow-border)]"
              >
                <span
                  className={cn(
                    "flex size-9 items-center justify-center rounded-full text-sm text-fg",
                    t.avatar === "ava-1" && "bg-ava-1",
                    t.avatar === "ava-2" && "bg-ava-2",
                    t.avatar === "ava-3" && "bg-ava-3",
                    t.avatar === "ava-4" && "bg-ava-4",
                  )}
                >
                  {t.initial}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium text-fg">{t.contact}</span>
                  <span className="block truncate text-xs text-muted">
                    {t.messages[t.messages.length - 1]?.text}
                  </span>
                </span>
              </button>
            ))}
        </div>
      ) : null}

      <CallBanner />
      <OverlayCard />

      <Bubble
        x={bubble.x}
        y={bubble.y}
        unread={unread}
        onOpen={() => openThread(activeId ?? threads[0]?.id ?? "rafi")}
        onMove={setBubble}
      />

      <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center pb-3">
        <span className="h-1.5 w-28 rounded-full bg-fg/25" />
      </div>
    </div>
  );

  if (!framed) {
    return <div className="h-full w-full">{inner}</div>;
  }

  return (
    <div className="mx-auto w-phone rounded-[2.25rem] bg-raised p-2 shadow-[var(--shadow-lift)]">
      <div className="rounded-[1.9rem] bg-bg p-1">{inner}</div>
    </div>
  );
}
