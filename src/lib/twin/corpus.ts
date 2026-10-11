import type { Thread, Tone } from "./types";

export const SEED_THREADS: Thread[] = [
  {
    id: "rafi",
    contact: "Rafi",
    initial: "R",
    avatar: "ava-1",
    channel: "whatsapp",
    relation: "friend",
    unread: true,
    messages: [
      {
        id: "r1",
        from: "them",
        text: "kire kal cricket asbi?",
        at: Date.now() - 1000 * 60 * 8,
      },
    ],
  },
  {
    id: "nabila",
    contact: "Nabila",
    initial: "N",
    avatar: "ava-2",
    channel: "messenger",
    relation: "friend",
    unread: true,
    messages: [
      {
        id: "n1",
        from: "them",
        text: "bhai tumi ki aso? wait kortesi",
        at: Date.now() - 1000 * 60 * 4,
      },
    ],
  },
  {
    id: "ma",
    contact: "Ma",
    initial: "ম",
    avatar: "ava-3",
    channel: "whatsapp",
    relation: "family",
    unread: true,
    messages: [
      {
        id: "m1",
        from: "them",
        text: "বাসায় খেয়ে যাস, রাতের খাবার রেডি",
        at: Date.now() - 1000 * 60 * 21,
      },
    ],
  },
  {
    id: "farhan",
    contact: "Farhan",
    initial: "F",
    avatar: "ava-4",
    channel: "whatsapp",
    relation: "work",
    unread: true,
    messages: [
      {
        id: "f1",
        from: "them",
        text: "Need the deck before 11. Can you ping it?",
        at: Date.now() - 1000 * 60 * 14,
      },
    ],
  },
  {
    id: "meherin",
    contact: "Meherin",
    initial: "M",
    avatar: "ava-2",
    channel: "instagram",
    relation: "friend",
    unread: true,
    messages: [
      {
        id: "i1",
        from: "them",
        text: "your story kothay chilo ajke",
        at: Date.now() - 1000 * 60 * 42,
      },
    ],
  },
];

export const STYLE_SEEDS: string[] = [
  "hmm dekhte hobe bro",
  "accha wait 5 min",
  "kire ki obostha",
  "ok ok aschi",
  "thik ase, pore call dibo",
  "আসছি মা",
  "yes sending in 2",
  "na re aj busy, kal?",
  "lol just saw msg",
  "kmn asos vai",
];

export const INTENT_HINTS = {
  greet: /\b(hi|hello|salam|assalam|kemon|kmn asos|ki obostha|kire)\b/i,
  plan: /\b(kal|ashbi|asbi|khela|cricket|hangout|movie|coffee|jabi|ber)\b/i,
  where: /\b(kothay|where|kothai)\b/i,
  when: /\b(kokhon|kobe|when|khon)\b/i,
  work: /\b(file|deck|meeting|ping|deadline|send|need the)\b/i,
  thanks: /\b(thanks|thx|dhonnobad|thank)\b/i,
  food: /\b(khabi|khawa|lunch|dinner|খাবার|খেয়ে|kheye)\b/i,
  delay: /\b(wait|late|delay|ekhon)\b/i,
  decline: /\b(parbo na|can't|cant|busy|na re|hobe na)\b/i,
  call: /\b(call|phone|pickup|missed)\b/i,
};

export type Intent =
  | "greet"
  | "plan"
  | "where"
  | "when"
  | "work"
  | "thanks"
  | "food"
  | "delay"
  | "decline"
  | "call"
  | "generic";

export const BANKS: Record<
  Intent,
  Record<"friend" | "family" | "work", Partial<Record<Tone, string[]>>>
> = {
  greet: {
    friend: {
      chill: ["kire ki obostha", "hmm kmn asos vai", "ha bol"],
      busy: ["ha bol, ekhon ektu busy", "hmm ki hoise"],
      soft: ["kmn asos re", "accha hey, ki khobor"],
    },
    family: {
      chill: ["হ্যাঁ বলো", "জি, কী হয়েছে"],
      busy: ["একটু ব্যস্ত, বলো", "হ্যাঁ মা"],
      soft: ["হ্যাঁ মা, বলো", "আছি, কী খবর"],
    },
    work: {
      chill: ["hey, tell me", "yes?"],
      busy: ["yes, in a bit", "on a call, text me"],
      soft: ["hey, what's up"],
    },
  },
  plan: {
    friend: {
      chill: ["hmm dekhte hobe bro", "kal try korbo", "ha ashar try korbo"],
      busy: ["aj tight, kal?", "maybe, office theke late hote pare"],
      soft: ["ha cholo, time fix kori", "thik ase, kal dekhi"],
    },
    family: {
      chill: ["দেখি মা, সময় হলে যাব", "কাল চেষ্টা করব"],
      busy: ["আজ ব্যস্ত, কাল বলি", "দেখি, অফিস থেকে দেরি হতে পারে"],
      soft: ["ইনশাআল্লাহ যাব", "চেষ্টা করব মা"],
    },
    work: {
      chill: ["can do, ping me the time", "ok let's lock it"],
      busy: ["today's packed, tomorrow?"],
      soft: ["sure, I'll make time"],
    },
  },
  where: {
    friend: {
      chill: ["bari te", "underway, 10 min", "uttara e ekhon"],
      busy: ["office e, pore boltechi", "bair e, wait"],
      soft: ["bari te re, aso", "ekhanei, tumi kothay"],
    },
    family: {
      chill: ["অফিসে মা", "আসছি, রাস্তায়"],
      busy: ["মিটিং এ, পরে ফোন দিব"],
      soft: ["বাসায় যাচ্ছি মা", "কাছেই, চিন্তা কইরো না"],
    },
    work: {
      chill: ["at the desk", "on the way, 10"],
      busy: ["in a meeting, text you after"],
      soft: ["here, come by"],
    },
  },
  when: {
    friend: {
      chill: ["9 tar dike", "wait wait, pore boltechi", "8-9 er majhe"],
      busy: ["not sure yet, ping korbo"],
      soft: ["sham theke free, tokhon?"],
    },
    family: {
      chill: ["৯টার দিকে", "একটু পরে বলছি"],
      busy: ["এখন বলা যাচ্ছে না, পরে বলি"],
      soft: ["রাত ৯টার আগে আসছি"],
    },
    work: {
      chill: ["before 11", "give me 20"],
      busy: ["after this meeting"],
      soft: ["I'll send a time in a bit"],
    },
  },
  work: {
    friend: {
      chill: ["ok sending", "wait 2 min"],
      busy: ["on it, 10 min"],
      soft: ["yes yes, ping kortesi"],
    },
    family: {
      chill: ["অফিসের কাজ, একটু পরে", "হ্যাঁ করছি"],
      busy: ["এখন পারব না, পরে"],
      soft: ["করছি মা, চিন্তা কইরো না"],
    },
    work: {
      chill: ["yes sending in 2", "on it"],
      busy: ["need 15, then pinging"],
      soft: ["got it, sending before 11"],
    },
  },
  thanks: {
    friend: {
      chill: ["np np", "thik ase"],
      busy: ["ok"],
      soft: ["areh nothing", "anytime vai"],
    },
    family: {
      chill: ["কিছু না", "ঠিক আছে"],
      busy: ["হুম"],
      soft: ["আচ্ছা মা"],
    },
    work: {
      chill: ["np", "anytime"],
      busy: ["ok"],
      soft: ["glad it helped"],
    },
  },
  food: {
    friend: {
      chill: ["ha khabo, kothay", "wait, ber hocchi"],
      busy: ["aj skip, kal?"],
      soft: ["cholo, starving"],
    },
    family: {
      chill: ["খেয়ে আসছি মা", "রাখো, আসছি"],
      busy: ["দেরি হবে, রেখে দিও"],
      soft: ["আসছি, গরম রেখো"],
    },
    work: {
      chill: ["grabbing food, back in 20"],
      busy: ["skipping lunch, ping me"],
      soft: ["want me to pick something?"],
    },
  },
  delay: {
    friend: {
      chill: ["wait wait", "5 min de", "aschi, traffic e"],
      busy: ["late hocchi, start without me"],
      soft: ["sorry bro just saw", "ektu wait koro"],
    },
    family: {
      chill: ["আসছি, একটু লেট", "৫ মিনিট"],
      busy: ["দেরি হচ্ছে মা"],
      soft: ["দুঃখিত, এখন দেখলাম"],
    },
    work: {
      chill: ["running 10 late"],
      busy: ["stuck, start without me"],
      soft: ["sorry, just saw this"],
    },
  },
  decline: {
    friend: {
      chill: ["na re aj busy, kal?", "parbo na ajke"],
      busy: ["aj impossible, tomorrow"],
      soft: ["aj parbo na vai, miss korbo"],
    },
    family: {
      chill: ["আজ পারব না মা", "কাল যাব"],
      busy: ["আজ অসম্ভব"],
      soft: ["দুঃখিত মা, আজ হবে না"],
    },
    work: {
      chill: ["can't today, tomorrow works"],
      busy: ["blocked today"],
      soft: ["won't make this one, sorry"],
    },
  },
  call: {
    friend: {
      chill: ["busy e ekhon, pore call dibo", "missed, text koro"],
      busy: ["can't pick up, ping me"],
      soft: ["sorry miss korlam, ekhon free"],
    },
    family: {
      chill: ["এখন পারব না, পরে দিব", "মিসড কল, পরে ফোন করব"],
      busy: ["মিটিং এ মা"],
      soft: ["পরে ফোন দিব মা"],
    },
    work: {
      chill: ["can't pick up, I'll call back"],
      busy: ["in a meeting, text me"],
      soft: ["missed you, calling in 10"],
    },
  },
  generic: {
    friend: {
      chill: ["hmm dekhtechi", "accha", "ok ok"],
      busy: ["ok wait", "later boltechi"],
      soft: ["thik ase re", "ha ha thik"],
    },
    family: {
      chill: ["আচ্ছা", "ঠিক আছে", "হুম"],
      busy: ["পরে বলছি"],
      soft: ["ঠিক আছে মা"],
    },
    work: {
      chill: ["ok noted", "got it"],
      busy: ["on it"],
      soft: ["thanks, will do"],
    },
  },
};

export const CALL_DECLINE = {
  friend: "busy e ekhon, pore call dibo",
  family: "এখন নিতে পারছি না, পরে ফোন দিব",
  work: "can't pick up — I'll call back",
};
