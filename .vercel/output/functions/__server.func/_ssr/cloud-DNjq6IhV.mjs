import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cloud-DNjq6IhV.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var refineOnCloud_createServerFn_handler = createServerRpc({
	id: "87e5a29217066418fb7d54c81194630bab0c7e0c6a6523b45372a596f9031816",
	name: "refineOnCloud",
	filename: "src/lib/twin/cloud.ts"
}, (opts) => refineOnCloud.__executeServer(opts));
var refineOnCloud = createServerFn({ method: "POST" }).validator((input) => ({
	inbound: String(input.inbound ?? "").slice(0, 500),
	styleCard: String(input.styleCard ?? "").slice(0, 400),
	relation: String(input.relation ?? "friend").slice(0, 24),
	channel: String(input.channel ?? "whatsapp").slice(0, 24),
	tone: String(input.tone ?? "chill").slice(0, 16)
})).handler(refineOnCloud_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "Cloud Twin is unavailable here"
	};
	const system = [
		"You are Simanto's private messaging twin.",
		"Draft a reply that sounds like Simanto texting, not an assistant.",
		"Voice: Banglish (Romanized Bangla mixed with English), sometimes Bengali script with family.",
		"Casual, short, slightly delayed energy. Friends get vai/bro. Work is short BD-office English.",
		"No quotes, no labels, no emoji unless the inbound used one.",
		"Mostly lowercase. Rarely use periods. Never lecture. Never mention being an AI.",
		"If two short bubbles are more natural, separate them with a newline.",
		`Style card: ${data.styleCard}`,
		`Relation: ${data.relation}. Channel: ${data.channel}. Tone: ${data.tone}.`
	].join(" ");
	const res = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-4.5",
			temperature: .7,
			max_tokens: 160,
			messages: [{
				role: "system",
				content: system
			}, {
				role: "user",
				content: data.inbound
			}]
		})
	});
	if (!res.ok) return {
		ok: false,
		error: `Cloud Twin error ${res.status}`
	};
	const text = (await res.json()).choices?.[0]?.message?.content?.trim() ?? "";
	if (!text) return {
		ok: false,
		error: "Empty cloud draft"
	};
	const bubbles = text.split(/\n+/).map((line) => line.replace(/^[-•]\s*/, "").trim()).filter(Boolean).slice(0, 3);
	return {
		ok: true,
		bubbles: bubbles.length ? bubbles : [text],
		note: "Cloud · compact style card only · no history"
	};
});
//#endregion
export { refineOnCloud_createServerFn_handler };
