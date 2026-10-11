import { i as __toESM } from "../_runtime.mjs";
import { c as require_react, r as Slot, s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { _ as Cloud, a as Signal, c as RotateCcw, d as Phone, f as MessageCircle, g as Cpu, h as Fingerprint, i as Trash2, l as Radio, m as Inbox, n as Wifi, o as Shield, p as Lock, s as Send, t as X, u as Plus } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
import { t as Provider } from "../_libs/radix-ui__react-tooltip.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-kry1PcIQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-[opacity,transform,background-color,box-shadow] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg", {
	variants: {
		variant: {
			primary: "bg-primary text-primary-fg shadow-[var(--shadow-border)] hover:opacity-90",
			secondary: "bg-raised text-fg shadow-[var(--shadow-border)] hover:bg-surface",
			ghost: "bg-transparent text-fg hover:bg-raised",
			outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:bg-raised",
			danger: "bg-danger text-fg hover:opacity-90"
		},
		size: {
			sm: "h-9 rounded-sm px-3 text-sm",
			md: "h-11 rounded-md px-4 text-sm",
			lg: "h-12 rounded-lg px-5 text-base",
			icon: "size-11 rounded-md",
			pill: "h-10 rounded-full px-4 text-sm"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-20 w-full resize-none rounded-md bg-inset px-3 py-2.5 text-sm leading-normal text-fg shadow-[var(--shadow-border)] placeholder:text-subtle", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40", className),
		...props
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var refineOnCloud = createServerFn({ method: "POST" }).validator((input) => ({
	inbound: String(input.inbound ?? "").slice(0, 500),
	styleCard: String(input.styleCard ?? "").slice(0, 400),
	relation: String(input.relation ?? "friend").slice(0, 24),
	channel: String(input.channel ?? "whatsapp").slice(0, 24),
	tone: String(input.tone ?? "chill").slice(0, 16)
})).handler(createSsrRpc("87e5a29217066418fb7d54c81194630bab0c7e0c6a6523b45372a596f9031816"));
var SEED_THREADS = [
	{
		id: "rafi",
		contact: "Rafi",
		initial: "R",
		avatar: "ava-1",
		channel: "whatsapp",
		relation: "friend",
		unread: true,
		messages: [{
			id: "r1",
			from: "them",
			text: "kire kal cricket asbi?",
			at: Date.now() - 48e4
		}]
	},
	{
		id: "nabila",
		contact: "Nabila",
		initial: "N",
		avatar: "ava-2",
		channel: "messenger",
		relation: "friend",
		unread: true,
		messages: [{
			id: "n1",
			from: "them",
			text: "bhai tumi ki aso? wait kortesi",
			at: Date.now() - 24e4
		}]
	},
	{
		id: "ma",
		contact: "Ma",
		initial: "ম",
		avatar: "ava-3",
		channel: "whatsapp",
		relation: "family",
		unread: true,
		messages: [{
			id: "m1",
			from: "them",
			text: "বাসায় খেয়ে যাস, রাতের খাবার রেডি",
			at: Date.now() - 126e4
		}]
	},
	{
		id: "farhan",
		contact: "Farhan",
		initial: "F",
		avatar: "ava-4",
		channel: "whatsapp",
		relation: "work",
		unread: true,
		messages: [{
			id: "f1",
			from: "them",
			text: "Need the deck before 11. Can you ping it?",
			at: Date.now() - 84e4
		}]
	},
	{
		id: "meherin",
		contact: "Meherin",
		initial: "M",
		avatar: "ava-2",
		channel: "instagram",
		relation: "friend",
		unread: true,
		messages: [{
			id: "i1",
			from: "them",
			text: "your story kothay chilo ajke",
			at: Date.now() - 252e4
		}]
	}
];
var STYLE_SEEDS = [
	"hmm dekhte hobe bro",
	"accha wait 5 min",
	"kire ki obostha",
	"ok ok aschi",
	"thik ase, pore call dibo",
	"আসছি মা",
	"yes sending in 2",
	"na re aj busy, kal?",
	"lol just saw msg",
	"kmn asos vai"
];
var INTENT_HINTS = {
	greet: /\b(hi|hello|salam|assalam|kemon|kmn asos|ki obostha|kire)\b/i,
	plan: /\b(kal|ashbi|asbi|khela|cricket|hangout|movie|coffee|jabi|ber)\b/i,
	where: /\b(kothay|where|kothai)\b/i,
	when: /\b(kokhon|kobe|when|khon)\b/i,
	work: /\b(file|deck|meeting|ping|deadline|send|need the)\b/i,
	thanks: /\b(thanks|thx|dhonnobad|thank)\b/i,
	food: /\b(khabi|khawa|lunch|dinner|খাবার|খেয়ে|kheye)\b/i,
	delay: /\b(wait|late|delay|ekhon)\b/i,
	decline: /\b(parbo na|can't|cant|busy|na re|hobe na)\b/i,
	call: /\b(call|phone|pickup|missed)\b/i
};
var BANKS = {
	greet: {
		friend: {
			chill: [
				"kire ki obostha",
				"hmm kmn asos vai",
				"ha bol"
			],
			busy: ["ha bol, ekhon ektu busy", "hmm ki hoise"],
			soft: ["kmn asos re", "accha hey, ki khobor"]
		},
		family: {
			chill: ["হ্যাঁ বলো", "জি, কী হয়েছে"],
			busy: ["একটু ব্যস্ত, বলো", "হ্যাঁ মা"],
			soft: ["হ্যাঁ মা, বলো", "আছি, কী খবর"]
		},
		work: {
			chill: ["hey, tell me", "yes?"],
			busy: ["yes, in a bit", "on a call, text me"],
			soft: ["hey, what's up"]
		}
	},
	plan: {
		friend: {
			chill: [
				"hmm dekhte hobe bro",
				"kal try korbo",
				"ha ashar try korbo"
			],
			busy: ["aj tight, kal?", "maybe, office theke late hote pare"],
			soft: ["ha cholo, time fix kori", "thik ase, kal dekhi"]
		},
		family: {
			chill: ["দেখি মা, সময় হলে যাব", "কাল চেষ্টা করব"],
			busy: ["আজ ব্যস্ত, কাল বলি", "দেখি, অফিস থেকে দেরি হতে পারে"],
			soft: ["ইনশাআল্লাহ যাব", "চেষ্টা করব মা"]
		},
		work: {
			chill: ["can do, ping me the time", "ok let's lock it"],
			busy: ["today's packed, tomorrow?"],
			soft: ["sure, I'll make time"]
		}
	},
	where: {
		friend: {
			chill: [
				"bari te",
				"underway, 10 min",
				"uttara e ekhon"
			],
			busy: ["office e, pore boltechi", "bair e, wait"],
			soft: ["bari te re, aso", "ekhanei, tumi kothay"]
		},
		family: {
			chill: ["অফিসে মা", "আসছি, রাস্তায়"],
			busy: ["মিটিং এ, পরে ফোন দিব"],
			soft: ["বাসায় যাচ্ছি মা", "কাছেই, চিন্তা কইরো না"]
		},
		work: {
			chill: ["at the desk", "on the way, 10"],
			busy: ["in a meeting, text you after"],
			soft: ["here, come by"]
		}
	},
	when: {
		friend: {
			chill: [
				"9 tar dike",
				"wait wait, pore boltechi",
				"8-9 er majhe"
			],
			busy: ["not sure yet, ping korbo"],
			soft: ["sham theke free, tokhon?"]
		},
		family: {
			chill: ["৯টার দিকে", "একটু পরে বলছি"],
			busy: ["এখন বলা যাচ্ছে না, পরে বলি"],
			soft: ["রাত ৯টার আগে আসছি"]
		},
		work: {
			chill: ["before 11", "give me 20"],
			busy: ["after this meeting"],
			soft: ["I'll send a time in a bit"]
		}
	},
	work: {
		friend: {
			chill: ["ok sending", "wait 2 min"],
			busy: ["on it, 10 min"],
			soft: ["yes yes, ping kortesi"]
		},
		family: {
			chill: ["অফিসের কাজ, একটু পরে", "হ্যাঁ করছি"],
			busy: ["এখন পারব না, পরে"],
			soft: ["করছি মা, চিন্তা কইরো না"]
		},
		work: {
			chill: ["yes sending in 2", "on it"],
			busy: ["need 15, then pinging"],
			soft: ["got it, sending before 11"]
		}
	},
	thanks: {
		friend: {
			chill: ["np np", "thik ase"],
			busy: ["ok"],
			soft: ["areh nothing", "anytime vai"]
		},
		family: {
			chill: ["কিছু না", "ঠিক আছে"],
			busy: ["হুম"],
			soft: ["আচ্ছা মা"]
		},
		work: {
			chill: ["np", "anytime"],
			busy: ["ok"],
			soft: ["glad it helped"]
		}
	},
	food: {
		friend: {
			chill: ["ha khabo, kothay", "wait, ber hocchi"],
			busy: ["aj skip, kal?"],
			soft: ["cholo, starving"]
		},
		family: {
			chill: ["খেয়ে আসছি মা", "রাখো, আসছি"],
			busy: ["দেরি হবে, রেখে দিও"],
			soft: ["আসছি, গরম রেখো"]
		},
		work: {
			chill: ["grabbing food, back in 20"],
			busy: ["skipping lunch, ping me"],
			soft: ["want me to pick something?"]
		}
	},
	delay: {
		friend: {
			chill: [
				"wait wait",
				"5 min de",
				"aschi, traffic e"
			],
			busy: ["late hocchi, start without me"],
			soft: ["sorry bro just saw", "ektu wait koro"]
		},
		family: {
			chill: ["আসছি, একটু লেট", "৫ মিনিট"],
			busy: ["দেরি হচ্ছে মা"],
			soft: ["দুঃখিত, এখন দেখলাম"]
		},
		work: {
			chill: ["running 10 late"],
			busy: ["stuck, start without me"],
			soft: ["sorry, just saw this"]
		}
	},
	decline: {
		friend: {
			chill: ["na re aj busy, kal?", "parbo na ajke"],
			busy: ["aj impossible, tomorrow"],
			soft: ["aj parbo na vai, miss korbo"]
		},
		family: {
			chill: ["আজ পারব না মা", "কাল যাব"],
			busy: ["আজ অসম্ভব"],
			soft: ["দুঃখিত মা, আজ হবে না"]
		},
		work: {
			chill: ["can't today, tomorrow works"],
			busy: ["blocked today"],
			soft: ["won't make this one, sorry"]
		}
	},
	call: {
		friend: {
			chill: ["busy e ekhon, pore call dibo", "missed, text koro"],
			busy: ["can't pick up, ping me"],
			soft: ["sorry miss korlam, ekhon free"]
		},
		family: {
			chill: ["এখন পারব না, পরে দিব", "মিসড কল, পরে ফোন করব"],
			busy: ["মিটিং এ মা"],
			soft: ["পরে ফোন দিব মা"]
		},
		work: {
			chill: ["can't pick up, I'll call back"],
			busy: ["in a meeting, text me"],
			soft: ["missed you, calling in 10"]
		}
	},
	generic: {
		friend: {
			chill: [
				"hmm dekhtechi",
				"accha",
				"ok ok"
			],
			busy: ["ok wait", "later boltechi"],
			soft: ["thik ase re", "ha ha thik"]
		},
		family: {
			chill: [
				"আচ্ছা",
				"ঠিক আছে",
				"হুম"
			],
			busy: ["পরে বলছি"],
			soft: ["ঠিক আছে মা"]
		},
		work: {
			chill: ["ok noted", "got it"],
			busy: ["on it"],
			soft: ["thanks, will do"]
		}
	}
};
var DEFAULT_STYLE = {
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
	brevity: 78
};
function englishShare(style) {
	return Math.max(0, 100 - style.banglish - style.banglaScript);
}
function serializeStyleCard(style, imprint) {
	return [
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
		imprint.openers.length ? `learned-openers:${imprint.openers.slice(0, 6).join(",")}` : null
	].filter(Boolean).join(" · ");
}
function imprintFrom(samples) {
	const openers = [];
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
			if (code >= 2432 && code <= 2559) banglaChars += 1;
			else if (/[a-zA-Z]/.test(ch)) latinChars += 1;
		}
	}
	const denom = banglaChars + latinChars || 1;
	return {
		openers: openers.slice(0, 8),
		avgLen: samples.length ? Math.round(totalLen / samples.length) : 28,
		banglaRatio: banglaChars / denom
	};
}
var BN = /[\u0980-\u09FF]/;
var INTENT_ORDER = [
	"work",
	"call",
	"food",
	"plan",
	"where",
	"when",
	"thanks",
	"decline",
	"delay",
	"greet"
];
function detectIntent(text) {
	for (const key of INTENT_ORDER) if (INTENT_HINTS[key].test(text)) return key;
	return "generic";
}
function pick(items, nonce) {
	return items[Math.abs(nonce) % items.length];
}
function applyStyle(raw, style, relation, imprint) {
	let out = raw.trim();
	if (style.lowercase && !BN.test(out)) out = out.toLowerCase();
	if (style.dropPeriods) out = out.replace(/\.+$/g, "");
	const openers = [];
	if (style.openerHmm && relation !== "work") openers.push("hmm");
	if (style.openerAccha && relation !== "work") openers.push("accha");
	for (const o of imprint.openers) if (!openers.includes(o)) openers.push(o);
	if (!/^(hmm|accha|areh|ha|ok|yes|kire|হ্যাঁ|জি|আচ্ছা)\b/i.test(out) && openers.length && relation !== "work" && style.brevity < 90) {
		if (Math.abs(out.length + style.warmth) % 3 === 0) out = `${openers[Math.abs(out.length) % openers.length]} ${out}`;
	}
	if (style.broVai && relation === "friend" && !/\b(bro|vai|bhai|re)\b/i.test(out) && !BN.test(out)) {
		if (style.warmth > 55 && out.length < 42) out = `${out} bro`;
	}
	if (style.doubleOk && /^(ok)\b/i.test(out) && !/^ok ok/i.test(out)) out = out.replace(/^ok/i, "ok ok");
	if (style.brevity > 82) {
		const words = out.split(/\s+/);
		if (words.length > 8) out = words.slice(0, 8).join(" ");
	}
	if (style.warmth < 30 && relation === "friend") out = out.replace(/\b(bro|vai)\b/gi, "").replace(/\s{2,}/g, " ").trim();
	return out.replace(/\s{2,}/g, " ").trim();
}
function maybeSplit(text, style) {
	if (!style.splitShort) return [text];
	const parts = text.split(/,\s+/);
	if (parts.length >= 2 && parts[0].length <= 22 && text.length > 28) return [parts[0], parts.slice(1).join(", ")];
	return [text];
}
function mixTowardInbound(text, inbound, style, relation) {
	const inboundBn = BN.test(inbound);
	if (inboundBn && style.banglaScript >= 20 && relation !== "work") return text;
	if (!inboundBn && BN.test(text) && style.banglish >= 40 && relation === "friend") return text;
	return text;
}
function draftLocal(opts) {
	const nonce = opts.nonce ?? Date.now();
	const intent = detectIntent(opts.inbound);
	const bank = BANKS[intent][opts.relation];
	const pool = bank[opts.tone] ?? bank.chill ?? ["ok"];
	const imprint = imprintFrom(opts.samples);
	const styled = applyStyle(mixTowardInbound(pick(pool, nonce + opts.inbound.length), opts.inbound, opts.style, opts.relation), opts.style, opts.relation, imprint);
	const bubbles = maybeSplit(styled, opts.style).filter(Boolean);
	return {
		bubbles: bubbles.length ? bubbles : [styled],
		route: "local",
		note: `On-device · ${intent} · ${opts.relation}`
	};
}
function shouldEscalate(inbound, mode) {
	if (mode === "cloud") return true;
	if (mode === "local") return false;
	return inbound.length > 90 || /\b(need the|deadline|deck|contract|invoice)\b/i.test(inbound);
}
function relTime(at) {
	const delta = Math.max(0, Date.now() - at);
	const m = Math.round(delta / 6e4);
	if (m < 1) return "now";
	if (m < 60) return `${m}m`;
	const h = Math.round(m / 60);
	if (h < 24) return `${h}h`;
	return `${Math.round(h / 24)}d`;
}
function channelLabel(channel) {
	if (channel === "whatsapp") return "WhatsApp";
	if (channel === "messenger") return "Messenger";
	if (channel === "instagram") return "Instagram";
	return "Call";
}
function channelTone(channel) {
	if (channel === "whatsapp") return "wa";
	if (channel === "messenger") return "msgr";
	if (channel === "instagram") return "ig";
	return "muted";
}
function clockLabel(d = /* @__PURE__ */ new Date()) {
	return d.toLocaleTimeString("en-GB", {
		hour: "2-digit",
		minute: "2-digit"
	});
}
function dateLabel(d = /* @__PURE__ */ new Date()) {
	return d.toLocaleDateString("en-GB", {
		weekday: "long",
		day: "numeric",
		month: "long"
	});
}
function lastInbound(thread) {
	if (!thread) return "";
	return [...thread.messages].reverse().find((m) => m.from === "them")?.text ?? "";
}
var useTwin = create()(persist((set, get) => ({
	hydrated: false,
	style: DEFAULT_STYLE,
	samples: STYLE_SEEDS,
	threads: SEED_THREADS,
	activeId: "rafi",
	overlayOpen: true,
	call: null,
	routeMode: "local",
	cloudLog: [],
	panel: "inbox",
	bubble: {
		x: 82,
		y: 72
	},
	drafts: {},
	tone: "chill",
	nonce: 1,
	markHydrated: () => set({ hydrated: true }),
	ensureSeed: () => {
		const s = get();
		const threads = s.threads.length ? s.threads : SEED_THREADS;
		const samples = s.samples.length ? s.samples : STYLE_SEEDS;
		const activeId = s.activeId ?? threads[0]?.id ?? null;
		const drafts = { ...s.drafts };
		for (const t of threads) if (!drafts[t.id]) drafts[t.id] = draftLocal({
			inbound: lastInbound(t),
			relation: t.relation,
			tone: s.tone,
			style: s.style,
			samples,
			nonce: s.nonce + t.id.length
		});
		set({
			threads,
			samples,
			activeId,
			drafts
		});
	},
	setStyle: (patch) => {
		const style = {
			...get().style,
			...patch
		};
		set({ style });
		const s = get();
		const drafts = { ...s.drafts };
		for (const t of s.threads) drafts[t.id] = draftLocal({
			inbound: lastInbound(t),
			relation: t.relation,
			tone: s.tone,
			style,
			samples: s.samples,
			nonce: s.nonce
		});
		set({ drafts });
	},
	setPanel: (panel) => set({ panel }),
	setRouteMode: (routeMode) => set({ routeMode }),
	setTone: (tone) => {
		set({
			tone,
			nonce: get().nonce + 1
		});
		const s = get();
		const active = s.threads.find((t) => t.id === s.activeId);
		if (!active) return;
		set({ drafts: {
			...s.drafts,
			[active.id]: draftLocal({
				inbound: lastInbound(active),
				relation: active.relation,
				tone,
				style: s.style,
				samples: s.samples,
				nonce: s.nonce + 1
			})
		} });
	},
	setBubble: (bubble) => set({ bubble }),
	openThread: (id) => {
		const s = get();
		const threads = s.threads.map((t) => t.id === id ? {
			...t,
			unread: false
		} : t);
		const thread = threads.find((t) => t.id === id);
		const drafts = { ...s.drafts };
		if (thread && !drafts[thread.id]) drafts[thread.id] = draftLocal({
			inbound: lastInbound(thread),
			relation: thread.relation,
			tone: s.tone,
			style: s.style,
			samples: s.samples,
			nonce: s.nonce + thread.id.length
		});
		set({
			activeId: id,
			overlayOpen: true,
			threads,
			panel: "inbox",
			drafts
		});
	},
	closeOverlay: () => set({ overlayOpen: false }),
	setDraft: (threadId, draft) => set({
		drafts: {
			...get().drafts,
			[threadId]: draft
		},
		nonce: get().nonce + 1
	}),
	patchDraftText: (threadId, bubbles) => {
		const current = get().drafts[threadId];
		set({ drafts: {
			...get().drafts,
			[threadId]: {
				bubbles,
				route: current?.route ?? "local",
				note: current?.note ?? "On-device"
			}
		} });
	},
	sendDraft: (threadId) => {
		const s = get();
		const draft = s.drafts[threadId];
		if (!draft) return;
		set({
			threads: s.threads.map((t) => {
				if (t.id !== threadId) return t;
				const extra = draft.bubbles.map((text, i) => ({
					id: `${threadId}-me-${Date.now()}-${i}`,
					from: "me",
					text,
					at: Date.now() + i
				}));
				return {
					...t,
					unread: false,
					messages: [...t.messages, ...extra]
				};
			}),
			overlayOpen: true
		});
	},
	addSample: (line) => {
		const trimmed = line.trim();
		if (!trimmed) return;
		set({ samples: [...get().samples, trimmed].slice(-40) });
	},
	removeSample: (index) => set({ samples: get().samples.filter((_, i) => i !== index) }),
	pushInbound: (threadId, text) => {
		const trimmed = text.trim();
		if (!trimmed) return;
		const s = get();
		const threads = s.threads.map((t) => {
			if (t.id !== threadId) return t;
			return {
				...t,
				unread: true,
				messages: [...t.messages, {
					id: `${threadId}-in-${Date.now()}`,
					from: "them",
					text: trimmed,
					at: Date.now()
				}]
			};
		});
		const thread = threads.find((t) => t.id === threadId);
		if (!thread) return;
		const draft = draftLocal({
			inbound: trimmed,
			relation: thread.relation,
			tone: s.tone,
			style: s.style,
			samples: s.samples,
			nonce: s.nonce + 3
		});
		set({
			threads,
			drafts: {
				...s.drafts,
				[threadId]: draft
			},
			overlayOpen: true,
			activeId: threadId
		});
	},
	addDemoInbound: (text) => {
		const id = get().activeId ?? get().threads[0]?.id;
		if (id) get().pushInbound(id, text);
	},
	startCall: () => set({
		call: {
			contact: "Shuvo",
			initial: "S",
			channel: "call"
		},
		overlayOpen: false
	}),
	dismissCall: () => set({ call: null }),
	declineCallWithTwin: () => {
		const reply = draftLocal({
			inbound: "missed call",
			relation: "friend",
			tone: "busy",
			style: get().style,
			samples: get().samples,
			nonce: get().nonce + 9
		});
		const threads = get().threads;
		const existing = threads.find((t) => t.contact === "Shuvo");
		const msg = {
			id: `call-${Date.now()}`,
			from: "me",
			text: reply.bubbles.join(" / "),
			at: Date.now()
		};
		if (existing) {
			set({
				threads: threads.map((t) => t.id === existing.id ? {
					...t,
					messages: [...t.messages, msg]
				} : t),
				call: null,
				activeId: existing.id,
				overlayOpen: true,
				drafts: {
					...get().drafts,
					[existing.id]: reply
				}
			});
			return;
		}
		set({
			threads: [{
				id: "shuvo",
				contact: "Shuvo",
				initial: "S",
				avatar: "ava-1",
				channel: "call",
				relation: "friend",
				unread: false,
				messages: [{
					id: "shuvo-miss",
					from: "them",
					text: "missed call",
					at: Date.now() - 1e3
				}, msg]
			}, ...threads],
			call: null,
			activeId: "shuvo",
			overlayOpen: true,
			drafts: {
				...get().drafts,
				shuvo: reply
			}
		});
	},
	logCloud: (receipt) => set({ cloudLog: [receipt, ...get().cloudLog].slice(0, 20) }),
	wipe: () => set({
		style: DEFAULT_STYLE,
		samples: STYLE_SEEDS,
		threads: SEED_THREADS,
		activeId: "rafi",
		overlayOpen: true,
		call: null,
		routeMode: "local",
		cloudLog: [],
		drafts: {},
		nonce: 1,
		tone: "chill"
	})
}), {
	name: "twin.simanto.v1",
	skipHydration: true,
	partialize: (s) => ({
		style: s.style,
		samples: s.samples,
		threads: s.threads,
		routeMode: s.routeMode,
		cloudLog: s.cloudLog,
		bubble: s.bubble,
		tone: s.tone,
		activeId: s.activeId
	})
}));
function Badge({ className, tone = "muted", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex h-6 items-center rounded-full px-2.5 text-2xs font-medium tracking-wide", {
			muted: "text-muted bg-raised",
			ok: "text-ok bg-raised",
			wa: "text-wa bg-raised",
			msgr: "text-msgr bg-raised",
			ig: "text-ig bg-raised",
			warn: "text-warn bg-raised"
		}[tone], className),
		...props
	});
}
function OverlayCard() {
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
	const [busy, setBusy] = (0, import_react.useState)(false);
	const thread = threads.find((t) => t.id === activeId);
	(0, import_react.useEffect)(() => {
		if (!thread || drafts[thread.id]) return;
		const inbound = [...thread.messages].reverse().find((m) => m.from === "them");
		if (!inbound) return;
		setDraft(thread.id, draftLocal({
			inbound: inbound.text,
			relation: thread.relation,
			tone,
			style,
			samples,
			nonce
		}));
	}, [
		thread,
		drafts,
		nonce,
		samples,
		setDraft,
		style,
		tone
	]);
	if (!overlayOpen || !thread) return null;
	const active = thread;
	const inbound = [...active.messages].reverse().find((m) => m.from === "them");
	const draft = drafts[active.id] ?? (inbound ? draftLocal({
		inbound: inbound.text,
		relation: active.relation,
		tone,
		style,
		samples,
		nonce
	}) : void 0);
	const joined = draft?.bubbles.join("\n") ?? "";
	const escalate = inbound ? shouldEscalate(inbound.text, routeMode) : false;
	function regenerate() {
		if (!inbound) return;
		setDraft(active.id, draftLocal({
			inbound: inbound.text,
			relation: active.relation,
			tone,
			style,
			samples,
			nonce: nonce + 7
		}));
	}
	async function cloudRefine() {
		if (!inbound) return;
		setBusy(true);
		try {
			const styleCard = serializeStyleCard(style, imprintFrom(samples));
			const result = await refineOnCloud({ data: {
				inbound: inbound.text,
				styleCard,
				relation: active.relation,
				channel: active.channel,
				tone
			} });
			if (!result.ok) {
				toast.error(result.error);
				return;
			}
			setDraft(active.id, {
				bubbles: result.bubbles,
				route: "cloud",
				note: result.note
			});
			logCloud({
				id: `${Date.now()}`,
				at: Date.now(),
				fields: 5,
				chars: inbound.text.length + styleCard.length,
				preview: inbound.text.slice(0, 48)
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "absolute bottom-20 left-3 right-3 z-20 origin-bottom rounded-xl bg-surface p-3 shadow-[var(--shadow-lift)]",
		style: { boxShadow: "var(--shadow-border), var(--shadow-lift)" },
		"aria-label": "Twin overlay",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-display text-lg leading-tight text-fg",
							children: active.contact
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: channelTone(active.channel),
							children: channelLabel(active.channel)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-0.5 text-xs text-muted",
						children: [draft?.route === "cloud" ? "Cloud Twin" : "On-device Twin", inbound ? ` · ${relTime(inbound.at)}` : ""]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex size-11 items-center justify-center rounded-sm text-muted hover:bg-raised hover:text-fg",
					onClick: closeOverlay,
					"aria-label": "Close overlay",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}),
			inbound ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 rounded-md bg-inset px-3 py-2 text-sm leading-normal text-fg/90",
				children: inbound.text
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "No inbound yet."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex gap-1",
				children: [
					"chill",
					"busy",
					"soft"
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTone(t),
					className: cn("h-9 flex-1 rounded-full text-xs font-medium capitalize", tone === t ? "bg-primary text-primary-fg" : "bg-raised text-muted"),
					children: t
				}, t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-3 block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mb-1 flex items-center gap-1.5 text-2xs font-medium uppercase tracking-wider text-subtle",
					children: [draft?.route === "cloud" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, { className: "size-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "size-3" }), "Twin draft"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					value: joined,
					onChange: (e) => patchDraftText(active.id, e.target.value.split("\n")),
					rows: 2,
					"aria-label": "Edit Twin draft"
				})]
			}),
			escalate && draft?.route !== "cloud" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-warn",
				children: "Work-shaped message. Cloud refine stays optional."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						size: "icon",
						onClick: regenerate,
						"aria-label": "Regenerate local draft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						className: "flex-1",
						disabled: busy || !inbound,
						onClick: () => void cloudRefine(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, { className: "size-4" }), busy ? "Refining" : "Cloud"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						className: "flex-1",
						onClick: send,
						disabled: !joined.trim(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" }), "Send"]
					})
				]
			})
		]
	});
}
function Bubble({ x, y, unread, onOpen, onMove }) {
	const dragging = (0, import_react.useRef)(false);
	const host = (0, import_react.useRef)(null);
	function pointerDown(e) {
		dragging.current = false;
		host.current?.setPointerCapture(e.pointerId);
	}
	function pointerMove(e) {
		if (!host.current?.hasPointerCapture(e.pointerId)) return;
		const parent = host.current.offsetParent;
		if (!parent) return;
		if (Math.abs(e.movementX) + Math.abs(e.movementY) > 2) dragging.current = true;
		const rect = parent.getBoundingClientRect();
		const nx = (e.clientX - rect.left) / rect.width * 100;
		const ny = (e.clientY - rect.top) / rect.height * 100;
		onMove({
			x: Math.min(90, Math.max(8, nx)),
			y: Math.min(86, Math.max(10, ny))
		});
	}
	function pointerUp() {
		if (!dragging.current) onOpen();
		dragging.current = false;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		ref: host,
		type: "button",
		"aria-label": "Open Twin overlay",
		onPointerDown: pointerDown,
		onPointerMove: pointerMove,
		onPointerUp: pointerUp,
		className: cn("absolute z-30 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-fg", "shadow-[var(--shadow-lift)] touch-none select-none", unread && "ring-2 ring-accent ring-offset-2 ring-offset-inset"),
		style: {
			left: `${x}%`,
			top: `${y}%`
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-2xl leading-none",
			children: "স"
		})
	});
}
function CallBanner() {
	const call = useTwin((s) => s.call);
	const dismissCall = useTwin((s) => s.dismissCall);
	const declineCallWithTwin = useTwin((s) => s.declineCallWithTwin);
	if (!call) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-x-3 top-12 z-40 rounded-lg bg-surface p-3 shadow-[var(--shadow-lift)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-11 items-center justify-center rounded-full bg-ava-1 font-display text-lg text-fg",
					children: call.initial
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-fg",
						children: call.contact
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "Incoming call"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-ok" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 grid grid-cols-2 gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "secondary",
				size: "sm",
				onClick: dismissCall,
				children: "Ignore"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "primary",
				size: "sm",
				onClick: declineCallWithTwin,
				children: "Twin decline"
			})]
		})]
	});
}
function DeviceStage({ framed }) {
	const threads = useTwin((s) => s.threads);
	const bubble = useTwin((s) => s.bubble);
	const setBubble = useTwin((s) => s.setBubble);
	const openThread = useTwin((s) => s.openThread);
	const overlayOpen = useTwin((s) => s.overlayOpen);
	const activeId = useTwin((s) => s.activeId);
	const unread = threads.some((t) => t.unread);
	const [clock, setClock] = (0, import_react.useState)("9:41");
	const [date, setDate] = (0, import_react.useState)("Tuesday, 6 October");
	(0, import_react.useEffect)(() => {
		const tick = () => {
			const d = /* @__PURE__ */ new Date();
			setClock(clockLabel(d));
			setDate(dateLabel(d));
		};
		tick();
		const id = window.setInterval(tick, 3e4);
		return () => window.clearInterval(id);
	}, []);
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative overflow-hidden bg-inset", framed ? "h-stage rounded-[1.75rem]" : "h-full rounded-none"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/wallpaper.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover outline outline-1 -outline-offset-1 outline-fg/10"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/35" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grain pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex items-center justify-between px-5 pt-3 text-2xs text-fg/80",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular-nums font-medium",
					children: clock
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signal, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wifi, { className: "size-3" })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 px-6 pt-14 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-6xl leading-none tracking-tighter text-fg",
						children: clock
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-fg/70",
						children: date
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 font-display text-4xl italic text-fg/25",
						children: "Twin"
					})
				]
			}),
			!overlayOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-4 top-1/2 z-10 space-y-2",
				children: threads.filter((t) => t.unread).slice(0, 3).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => openThread(t.id),
					className: "flex w-full items-center gap-3 rounded-lg bg-surface/90 px-3 py-2 text-left shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("flex size-9 items-center justify-center rounded-full text-sm text-fg", t.avatar === "ava-1" && "bg-ava-1", t.avatar === "ava-2" && "bg-ava-2", t.avatar === "ava-3" && "bg-ava-3", t.avatar === "ava-4" && "bg-ava-4"),
						children: t.initial
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate text-sm font-medium text-fg",
							children: t.contact
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate text-xs text-muted",
							children: t.messages[t.messages.length - 1]?.text
						})]
					})]
				}, t.id))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverlayCard, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bubble, {
				x: bubble.x,
				y: bubble.y,
				unread,
				onOpen: () => openThread(activeId ?? threads[0]?.id ?? "rafi"),
				onMove: setBubble
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 bottom-0 z-10 flex justify-center pb-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-28 rounded-full bg-fg/25" })
			})
		]
	});
	if (!framed) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-full w-full",
		children: inner
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto w-phone rounded-[2.25rem] bg-raised p-2 shadow-[var(--shadow-lift)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-[1.9rem] bg-bg p-1",
			children: inner
		})
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-md bg-inset px-3 text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-subtle", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40", className),
		...props
	});
}
function Slider({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
		className: cn("relative flex h-11 w-full touch-none items-center", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
			className: "relative h-1.5 w-full grow rounded-full bg-inset",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full rounded-full bg-primary" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block size-5 rounded-full bg-primary shadow-[var(--shadow-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50" })]
	});
}
function Switch({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
		className: cn("peer inline-flex h-7 w-11 shrink-0 items-center rounded-full bg-raised shadow-[var(--shadow-border)] transition-colors duration-150 data-[state=checked]:bg-primary", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: "block size-5 translate-x-1 rounded-full bg-fg transition-transform duration-150 data-[state=checked]:translate-x-5 data-[state=checked]:bg-primary-fg" })
	});
}
var RAIL = [
	{
		id: "inbox",
		label: "Inbox",
		icon: Inbox
	},
	{
		id: "voice",
		label: "Voice",
		icon: Fingerprint
	},
	{
		id: "route",
		label: "Route",
		icon: Radio
	},
	{
		id: "vault",
		label: "Vault",
		icon: Shield
	}
];
function InboxPanel() {
	const threads = useTwin((s) => s.threads);
	const activeId = useTwin((s) => s.activeId);
	const openThread = useTwin((s) => s.openThread);
	const addDemoInbound = useTwin((s) => s.addDemoInbound);
	const startCall = useTwin((s) => s.startCall);
	const [demo, setDemo] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl leading-tight tracking-tight text-fg",
					children: "Inbox"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-normal text-muted",
					children: "Waiting on you. Twin drafts stay on this device until you send."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-1",
				children: threads.map((t) => {
					const last = t.messages[t.messages.length - 1];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => openThread(t.id),
						className: cn("flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition-colors duration-150", t.id === activeId ? "bg-raised" : "hover:bg-raised/60"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: cn("relative flex size-11 items-center justify-center rounded-full text-sm text-fg", t.avatar === "ava-1" && "bg-ava-1", t.avatar === "ava-2" && "bg-ava-2", t.avatar === "ava-3" && "bg-ava-3", t.avatar === "ava-4" && "bg-ava-4"),
							children: [t.initial, t.unread ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-primary" }) : null]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate text-sm font-medium text-fg",
									children: t.contact
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums text-2xs text-subtle",
									children: last ? relTime(last.at) : ""
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-0.5 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: channelTone(t.channel),
									children: channelLabel(t.channel)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate text-xs text-muted",
									children: last?.text
								})]
							})]
						})]
					}) }, t.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-auto space-y-2 pt-6",
				onSubmit: (e) => {
					e.preventDefault();
					addDemoInbound(demo);
					setDemo("");
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xs font-medium uppercase tracking-wider text-subtle",
						children: "Simulate inbound"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: demo,
							onChange: (e) => setDemo(e.target.value),
							placeholder: "kire ki obostha",
							"aria-label": "Simulate inbound message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "icon",
							variant: "secondary",
							"aria-label": "Add inbound",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						className: "w-full",
						onClick: startCall,
						children: "Incoming call"
					})
				]
			})
		]
	});
}
function VoiceRow({ label, hint, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-fg",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "tabular-nums text-xs text-muted",
				children: value
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-subtle",
			children: hint
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
			value: [value],
			max: 90,
			min: 5,
			step: 1,
			onValueChange: (v) => onChange(v[0] ?? value)
		})
	] });
}
function VoicePanel() {
	const style = useTwin((s) => s.style);
	const setStyle = useTwin((s) => s.setStyle);
	const samples = useTwin((s) => s.samples);
	const addSample = useTwin((s) => s.addSample);
	const removeSample = useTwin((s) => s.removeSample);
	const tone = useTwin((s) => s.tone);
	const [line, setLine] = (0, import_react.useState)("");
	const preview = draftLocal({
		inbound: "kire kal asbi?",
		relation: "friend",
		tone,
		style,
		samples,
		nonce: 21
	});
	function toggle(key, current) {
		setStyle({ [key]: !current });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl leading-tight tracking-tight text-fg",
					children: "Voice print"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-normal text-muted",
					children: "Learned on-device from chat-shaped samples. Nothing is uploaded."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg bg-raised p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xs font-medium uppercase tracking-wider text-subtle",
						children: "Live rewrite"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted",
						children: "Inbound · kire kal asbi?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-xl leading-snug text-fg",
						children: preview.bubbles.join(" / ")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-xs text-subtle",
						children: [
							"Banglish ",
							style.banglish,
							" · Bangla ",
							style.banglaScript,
							" · English ",
							englishShare(style)
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoiceRow, {
						label: "Banglish",
						hint: "Romanized Bangla mix",
						value: style.banglish,
						onChange: (banglish) => setStyle({
							banglish,
							banglaScript: Math.min(style.banglaScript, 95 - banglish)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoiceRow, {
						label: "Bangla script",
						hint: "Family threads, quieter",
						value: style.banglaScript,
						onChange: (banglaScript) => setStyle({
							banglaScript,
							banglish: Math.min(style.banglish, 95 - banglaScript)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoiceRow, {
						label: "Warmth",
						hint: "bro / vai / soft closers",
						value: style.warmth,
						onChange: (warmth) => setStyle({ warmth })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoiceRow, {
						label: "Brevity",
						hint: "Shorter bubbles",
						value: style.brevity,
						onChange: (brevity) => setStyle({ brevity })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 space-y-3",
				children: [
					[
						"lowercase",
						"Mostly lowercase",
						style.lowercase
					],
					[
						"dropPeriods",
						"Drop end periods",
						style.dropPeriods
					],
					[
						"openerHmm",
						"hmm openers",
						style.openerHmm
					],
					[
						"openerAccha",
						"accha openers",
						style.openerAccha
					],
					[
						"broVai",
						"bro / vai",
						style.broVai
					],
					[
						"doubleOk",
						"ok ok",
						style.doubleOk
					],
					[
						"splitShort",
						"Split short bubbles",
						style.splitShort
					]
				].map(([key, label, on]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-fg",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						checked: on,
						onCheckedChange: () => toggle(key, on),
						"aria-label": label
					})]
				}, key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xs font-medium uppercase tracking-wider text-subtle",
						children: "Style seeds"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 max-h-40 space-y-1 overflow-auto",
						children: samples.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between gap-2 rounded-sm bg-inset px-2 py-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-xs text-fg",
								children: s
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "size-9 text-subtle hover:text-danger",
								onClick: () => removeSample(i),
								"aria-label": `Remove sample ${i + 1}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "mx-auto size-4" })
							})]
						}, `${s}-${i}`))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-2 flex gap-2",
						onSubmit: (e) => {
							e.preventDefault();
							addSample(line);
							setLine("");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: line,
							onChange: (e) => setLine(e.target.value),
							placeholder: "Paste a line you actually send",
							"aria-label": "Add style sample"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "icon",
							variant: "secondary",
							"aria-label": "Save sample",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
						})]
					})
				]
			})
		]
	});
}
function RoutePanel() {
	const routeMode = useTwin((s) => s.routeMode);
	const setRouteMode = useTwin((s) => s.setRouteMode);
	const cloudLog = useTwin((s) => s.cloudLog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl leading-tight tracking-tight text-fg",
				children: "Hybrid route"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm leading-normal text-muted",
				children: "Local Twin first. Cloud only when you ask, and only a compact style card plus the inbound line."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-3 gap-1 rounded-lg bg-inset p-1",
			children: [
				"local",
				"auto",
				"cloud"
			].map((mode) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setRouteMode(mode),
				className: cn("h-11 rounded-md text-sm font-medium capitalize", routeMode === mode ? "bg-primary text-primary-fg" : "text-muted hover:text-fg"),
				children: mode
			}, mode))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
			className: "mt-6 space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-lg bg-raised p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-wider text-accent",
						children: "Primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-xl text-fg",
						children: "On-device Twin"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-normal text-muted",
						children: "Style engine on this phone. Stands in for a local Ollama box when the PC is nearby — zero history leaves the device."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-lg bg-raised p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-wider text-warn",
						children: "Fallback"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-xl text-fg",
						children: "Cloud Twin"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-normal text-muted",
						children: "User-initiated refine. Compact style card only. Intended Gemini downtime path; this runtime uses a private cloud draft."
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-2xs font-medium uppercase tracking-wider text-subtle",
				children: "Cloud receipts"
			}), cloudLog.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "No cloud calls yet. Local drafts leave no receipt."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 space-y-2",
				children: cloudLog.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md bg-inset px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-fg",
						children: [
							r.fields,
							" fields · ",
							r.chars,
							" chars"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-xs text-muted",
						children: r.preview
					})]
				}, r.id))
			})]
		})
	] });
}
function VaultPanel() {
	const wipe = useTwin((s) => s.wipe);
	const threads = useTwin((s) => s.threads);
	const samples = useTwin((s) => s.samples);
	const cloudLog = useTwin((s) => s.cloudLog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl leading-tight tracking-tight text-fg",
				children: "Vault"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm leading-normal text-muted",
				children: "Private by default. Threads, voice print, and receipts live in this browser only."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "grid grid-cols-3 gap-2",
			children: [
				[String(threads.length), "threads"],
				[String(samples.length), "seeds"],
				[String(cloudLog.length), "receipts"]
			].map(([n, k]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg bg-raised px-3 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-xs text-muted",
					children: k
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-1 font-display text-2xl tabular-nums text-fg",
					children: n
				})]
			}, k))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "mt-6 space-y-3 text-sm leading-normal text-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "mt-0.5 size-4 shrink-0 text-accent" }), "Chat history never syncs, exports, or trains a public model."]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "mt-0.5 size-4 shrink-0 text-accent" }), "Overlay replies are formatted for a small floating Android window."]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "mt-0.5 size-4 shrink-0 text-accent" }), "Cloud refine sends a style card plus one inbound line. You can see every receipt."]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "danger",
			className: "mt-8 w-full",
			onClick: wipe,
			children: "Wipe this device"
		})
	] });
}
function Dock() {
	const panel = useTwin((s) => s.panel);
	const setPanel = useTwin((s) => s.setPanel);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "flex h-full min-h-0 flex-col bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "flex gap-1 border-b border-border p-2 md:px-3",
			children: RAIL.map(({ id, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setPanel(id),
				className: cn("flex h-11 flex-1 items-center justify-center gap-2 rounded-md text-sm font-medium", panel === id ? "bg-raised text-fg" : "text-muted hover:text-fg"),
				"aria-current": panel === id ? "page" : void 0,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden sm:inline",
					children: label
				})]
			}, id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-0 flex-1 overflow-y-auto p-5 pb-20 md:p-6 md:pb-20",
			children: [
				panel === "inbox" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InboxPanel, {}) : null,
				panel === "voice" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoicePanel, {}) : null,
				panel === "route" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoutePanel, {}) : null,
				panel === "vault" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VaultPanel, {}) : null
			]
		})]
	});
}
function TooltipProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Provider, {
		delayDuration: 200,
		children
	});
}
function AppShell() {
	const unread = useTwin((s) => s.threads.filter((t) => t.unread).length);
	const [framed, setFramed] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const q = window.matchMedia("(min-width: 960px)");
		const apply = () => setFramed(q.matches);
		apply();
		q.addEventListener("change", apply);
		return () => q.removeEventListener("change", apply);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-dvh overflow-x-hidden bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/wallpaper.jpg",
					alt: "",
					className: "size-full object-cover opacity-40 outline outline-1 -outline-offset-1 outline-fg/10"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grain absolute inset-0 opacity-30 mix-blend-overlay" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto flex min-h-dvh min-w-0 max-w-7xl flex-col lg:flex-row lg:items-stretch",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex min-h-0 min-w-0 flex-1 flex-col px-0 pt-0 lg:justify-center lg:px-8 lg:py-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "hidden text-xs font-medium uppercase tracking-mark text-muted lg:block",
						children: [
							"Private overlay · ",
							unread,
							" waiting"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-1 hidden font-display text-4xl leading-none tracking-tighter text-fg lg:block",
						children: ["Replies like you.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block italic text-fg/55",
							children: "Stays on the phone."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 hidden max-w-md text-sm leading-normal text-muted lg:block",
						children: "Twin drafts WhatsApp, Messenger, and Instagram replies in Simanto’s Banglish — locally first, cloud only on tap."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-mobile-stage min-h-80 lg:mt-5 lg:h-auto lg:min-h-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeviceStage, { framed })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex min-h-0 min-w-0 w-full flex-1 lg:w-96 lg:flex-none lg:py-6 lg:pr-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex min-h-0 w-full flex-1 overflow-hidden rounded-t-xl bg-surface shadow-[var(--shadow-lift)] lg:rounded-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dock, {})
				})
			})]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		theme: "dark",
		position: "bottom-center",
		toastOptions: { className: "bg-raised text-fg border-border" }
	})] });
}
function Home() {
	(0, import_react.useEffect)(() => {
		(async () => {
			await useTwin.persist.rehydrate();
			useTwin.getState().ensureSeed();
			useTwin.getState().markHydrated();
		})();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {});
}
//#endregion
export { Home as component };
