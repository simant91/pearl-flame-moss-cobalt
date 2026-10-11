import { BANKS, CALL_DECLINE, INTENT_HINTS, type Intent } from "./corpus";
import { imprintFrom } from "./style";
import type { Draft, Imprint, Relation, StylePrint, Tone } from "./types";

const BN = /[\u0980-\u09FF]/;

const INTENT_ORDER = [
  "work",
  "call",
  "food",
  "plan",
  "where",
  "when",
  "thanks",
  "decline",
  "delay",
  "greet",
] as const satisfies ReadonlyArray<keyof typeof INTENT_HINTS>;

export function detectIntent(text: string): Intent {
  for (const key of INTENT_ORDER) {
    if (INTENT_HINTS[key].test(text)) return key;
  }
  return "generic";
}

function pick<T>(items: T[], nonce: number): T {
  return items[Math.abs(nonce) % items.length]!;
}

function applyStyle(raw: string, style: StylePrint, relation: Relation, imprint: Imprint): string {
  let out = raw.trim();

  if (style.lowercase && !BN.test(out)) {
    out = out.toLowerCase();
  }

  if (style.dropPeriods) {
    out = out.replace(/\.+$/g, "");
  }

  const openers: string[] = [];
  if (style.openerHmm && relation !== "work") openers.push("hmm");
  if (style.openerAccha && relation !== "work") openers.push("accha");
  for (const o of imprint.openers) {
    if (!openers.includes(o)) openers.push(o);
  }

  const alreadyOpens = /^(hmm|accha|areh|ha|ok|yes|kire|হ্যাঁ|জি|আচ্ছা)\b/i.test(out);
  if (!alreadyOpens && openers.length && relation !== "work" && style.brevity < 90) {
    if (Math.abs(out.length + style.warmth) % 3 === 0) {
      out = `${openers[Math.abs(out.length) % openers.length]} ${out}`;
    }
  }

  if (style.broVai && relation === "friend" && !/\b(bro|vai|bhai|re)\b/i.test(out) && !BN.test(out)) {
    if (style.warmth > 55 && out.length < 42) out = `${out} bro`;
  }

  if (style.doubleOk && /^(ok)\b/i.test(out) && !/^ok ok/i.test(out)) {
    out = out.replace(/^ok/i, "ok ok");
  }

  if (style.brevity > 82) {
    const words = out.split(/\s+/);
    if (words.length > 8) out = words.slice(0, 8).join(" ");
  }

  if (style.warmth < 30 && relation === "friend") {
    out = out.replace(/\b(bro|vai)\b/gi, "").replace(/\s{2,}/g, " ").trim();
  }

  return out.replace(/\s{2,}/g, " ").trim();
}

function maybeSplit(text: string, style: StylePrint): string[] {
  if (!style.splitShort) return [text];
  const parts = text.split(/,\s+/);
  if (parts.length >= 2 && parts[0]!.length <= 22 && text.length > 28) {
    return [parts[0]!, parts.slice(1).join(", ")];
  }
  return [text];
}

function mixTowardInbound(text: string, inbound: string, style: StylePrint, relation: Relation): string {
  const inboundBn = BN.test(inbound);
  if (inboundBn && style.banglaScript >= 20 && relation !== "work") return text;
  if (!inboundBn && BN.test(text) && style.banglish >= 40 && relation === "friend") {
    return text;
  }
  return text;
}

export function draftLocal(opts: {
  inbound: string;
  relation: Relation;
  tone: Tone;
  style: StylePrint;
  samples: string[];
  nonce?: number;
}): Draft {
  const nonce = opts.nonce ?? Date.now();
  const intent = detectIntent(opts.inbound);
  const bank = BANKS[intent][opts.relation];
  const pool = bank[opts.tone] ?? bank.chill ?? ["ok"];
  const imprint: Imprint = imprintFrom(opts.samples);
  const chosen = pick(pool, nonce + opts.inbound.length);
  const styled = applyStyle(
    mixTowardInbound(chosen, opts.inbound, opts.style, opts.relation),
    opts.style,
    opts.relation,
    imprint,
  );
  const bubbles = maybeSplit(styled, opts.style).filter(Boolean);

  return {
    bubbles: bubbles.length ? bubbles : [styled],
    route: "local",
    note: `On-device · ${intent} · ${opts.relation}`,
  };
}

export function declineCall(relation: Relation): string {
  return CALL_DECLINE[relation];
}

export function shouldEscalate(inbound: string, mode: "local" | "auto" | "cloud"): boolean {
  if (mode === "cloud") return true;
  if (mode === "local") return false;
  return inbound.length > 90 || /\b(need the|deadline|deck|contract|invoice)\b/i.test(inbound);
}
