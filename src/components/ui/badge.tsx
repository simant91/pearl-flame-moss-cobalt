import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Badge({
  className,
  tone = "muted",
  ...props
}: HTMLAttributes<HTMLSpanElement> & { tone?: "muted" | "ok" | "wa" | "msgr" | "ig" | "warn" }) {
  const tones = {
    muted: "text-muted bg-raised",
    ok: "text-ok bg-raised",
    wa: "text-wa bg-raised",
    msgr: "text-msgr bg-raised",
    ig: "text-ig bg-raised",
    warn: "text-warn bg-raised",
  };
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-full px-2.5 text-2xs font-medium tracking-wide",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
