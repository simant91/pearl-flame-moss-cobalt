import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app/shell";
import { useTwin } from "@/lib/twin/store";
import { useEffect } from "react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  useEffect(() => {
    void (async () => {
      await useTwin.persist.rehydrate();
      useTwin.getState().ensureSeed();
      useTwin.getState().markHydrated();
    })();
  }, []);

  return <AppShell />;
}
