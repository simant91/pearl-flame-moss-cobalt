export type Channel = "whatsapp" | "messenger" | "instagram" | "call";
export type Relation = "friend" | "family" | "work";
export type Tone = "chill" | "busy" | "soft";
export type RouteMode = "local" | "auto" | "cloud";
export type Panel = "inbox" | "voice" | "route" | "vault";
export type RouteUsed = "local" | "cloud";

export type StylePrint = {
  banglish: number;
  banglaScript: number;
  lowercase: boolean;
  dropPeriods: boolean;
  openerHmm: boolean;
  openerAccha: boolean;
  broVai: boolean;
  doubleOk: boolean;
  splitShort: boolean;
  warmth: number;
  brevity: number;
};

export type Message = {
  id: string;
  from: "them" | "me";
  text: string;
  at: number;
};

export type Thread = {
  id: string;
  contact: string;
  initial: string;
  avatar: "ava-1" | "ava-2" | "ava-3" | "ava-4";
  channel: Channel;
  relation: Relation;
  unread: boolean;
  messages: Message[];
};

export type CallState = {
  contact: string;
  initial: string;
  channel: "call";
};

export type Draft = {
  bubbles: string[];
  route: RouteUsed;
  note: string;
};

export type CloudReceipt = {
  id: string;
  at: number;
  fields: number;
  chars: number;
  preview: string;
};

export type Imprint = {
  openers: string[];
  avgLen: number;
  banglaRatio: number;
};
