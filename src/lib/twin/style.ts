import type { Imprint, StylePrint } from "./types";

export const DEFAULT_STYLE: StylePrint = {
  banglish: 62,
  banglaScript: 28,
  lowercase: true,
  dropPeriods: true,
  openerHmm: true,
  openerAccha: true,
  broVai: true,
  doubleOk: true,
  splitShort: true,
  warmth: 64,
  brevity: 78,
};

export function englishShare(style: StylePrint): number {
  return Math.max(0, 100 - style.banglish - style.banglaScript);
}

export function serializeStyleCard(style: StylePrint, imprint: Imprint): string {
  const bits = [
    `banglish ${style.banglish}%`,
    `bangla-script ${style.banglaScript}%`,
    `english ${englishShare(style)}%`,
    style.lowercase ? "mostly-lowercase" : "normal-case",
    style.dropPeriods ? "no-end-periods" : "punctuated",
    style.openerHmm ? "opener:hmm" : null,
    style.openerAccha ? "opener:accha" : null,
    style.broVai ? "address:bro/vai" : null,
    style.doubleOk ? "double-ok" : null,
    style.splitShort ? "split-short-bubbles" : "single-bubble",
    `warmth ${style.warmth}`,
    `brevity ${style.brevity}`,
    imprint.openers.length ? `learned-openers:${imprint.openers.slice(0, 6).join(",")}` : null,
  ];
  return bits.filter(Boolean).join(" · ");
}

export function imprintFrom(samples: string[]): Imprint {
  const openers: string[] = [];
  let banglaChars = 0;
  let latinChars = 0;
  let totalLen = 0;

  for (const raw of samples) {
    const line = raw.trim();
    if (!line) continue;
    totalLen += line.length;
    const first = line.split(/\s+/)[0]?.toLowerCase() ?? "";
    if (first && first.length <= 10 && !openers.includes(first)) openers.push(first);
    for (const ch of line) {
      const code = ch.charCodeAt(0);
      if (code >= 0x0980 && code <= 0x09ff) banglaChars += 1;
      else if (/[a-zA-Z]/.test(ch)) latinChars += 1;
    }
  }

  const denom = banglaChars + latinChars || 1;
  return {
    openers: openers.slice(0, 8),
    avgLen: samples.length ? Math.round(totalLen / samples.length) : 28,
    banglaRatio: banglaChars / denom,
  };
}
