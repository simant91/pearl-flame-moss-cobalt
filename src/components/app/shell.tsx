import { DeviceStage } from "@/components/app/device-stage";
import { Dock } from "@/components/app/dock";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useTwin } from "@/lib/twin/store";
import { Toaster } from "sonner";
import { useEffect, useState } from "react";

export function AppShell() {
  const unread = useTwin((s) => s.threads.filter((t) => t.unread).length);
  const [framed, setFramed] = useState(false);

  useEffect(() => {
    const q = window.matchMedia("(min-width: 960px)");
    const apply = () => setFramed(q.matches);
    apply();
    q.addEventListener("change", apply);
    return () => q.removeEventListener("change", apply);
  }, []);

  return (
    <TooltipProvider>
      <div className="relative min-h-dvh overflow-x-hidden bg-bg text-fg">
        <div className="pointer-events-none absolute inset-0">
          <img
            src="/wallpaper.jpg"
            alt=""
            className="size-full object-cover opacity-40 outline outline-1 -outline-offset-1 outline-fg/10"
          />
          <div className="absolute inset-0 bg-bg/70" />
          <div className="grain absolute inset-0 opacity-30 mix-blend-overlay" />
        </div>

        <div className="relative mx-auto flex min-h-dvh min-w-0 max-w-7xl flex-col lg:flex-row lg:items-stretch">
          <section className="flex min-h-0 min-w-0 flex-1 flex-col px-0 pt-0 lg:justify-center lg:px-8 lg:py-6">
            <p className="hidden text-xs font-medium uppercase tracking-mark text-muted lg:block">
              Private overlay · {unread} waiting
            </p>
            <h1 className="mt-1 hidden font-display text-4xl leading-none tracking-tighter text-fg lg:block">
              Replies like you.
              <span className="mt-1 block italic text-fg/55">Stays on the phone.</span>
            </h1>
            <p className="mt-3 hidden max-w-md text-sm leading-normal text-muted lg:block">
              Twin drafts WhatsApp, Messenger, and Instagram replies in Simanto’s Banglish — locally
              first, cloud only on tap.
            </p>
            <div className="h-mobile-stage min-h-80 lg:mt-5 lg:h-auto lg:min-h-0">
              <DeviceStage framed={framed} />
            </div>
          </section>

          <div className="flex min-h-0 min-w-0 w-full flex-1 lg:w-96 lg:flex-none lg:py-6 lg:pr-6">
            <div className="flex min-h-0 w-full flex-1 overflow-hidden rounded-t-xl bg-surface shadow-[var(--shadow-lift)] lg:rounded-xl">
              <Dock />
            </div>
          </div>
        </div>
      </div>
      <Toaster
        theme="dark"
        position="bottom-center"
        toastOptions={{
          className: "bg-raised text-fg border-border",
        }}
      />
    </TooltipProvider>
  );
}
