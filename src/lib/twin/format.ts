import type { Channel, Relation } from "./types";

export function relTime(at: number): string {
  const delta = Math.max(0, Date.now() - at);
  const m = Math.round(delta / 60000);
  if (m < 1) return "now";
  if (m < 60) return `${m}m`;
  const h = Math.round(m / 60);
  if (h < 24) return `${h}h`;
  return `${Math.round(h / 24)}d`;
}

export function channelLabel(channel: Channel): string {
  if (channel === "whatsapp") return "WhatsApp";
  if (channel === "messenger") return "Messenger";
  if (channel === "instagram") return "Instagram";
  return "Call";
}

export function channelTone(channel: Channel): "wa" | "msgr" | "ig" | "muted" {
  if (channel === "whatsapp") return "wa";
  if (channel === "messenger") return "msgr";
  if (channel === "instagram") return "ig";
  return "muted";
}

export function relationLabel(relation: Relation): string {
  if (relation === "friend") return "Friend";
  if (relation === "family") return "Family";
  return "Work";
}

export function clockLabel(d = new Date()): string {
  return d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
}

export function dateLabel(d = new Date()): string {
  return d.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}
