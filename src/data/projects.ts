import type { Locale } from '@/lib/i18n';

/** Localized string and string-array helpers. */
type L = { en: string; it: string };
type LA = { en: string[]; it: string[] };

interface LocalizedSection {
  title: L;
  body: L;
}

interface RawProject {
  id: number;
  slug: string;
  title: string;
  num: string;
  year: string;
  image: string;
  localImages?: string[];
  hasLocalGallery?: boolean;
  /** Self-hosted muted autoplay loops (Level A) — base paths without extension;
   *  the player appends .webm / .mp4 (sources) and .jpg (poster). */
  loopVideos?: string[];
  /** Self-hosted click-to-play film with audio — base path without extension
   *  (player appends .webm / .mp4 sources and .jpg poster). */
  film?: string;
  tools: string[];
  category: L;
  client: L;
  duration: L;
  tags: LA;
  description: L;
  deliverables: LA;
  sections: LocalizedSection[];
}

/** Resolved project for a single locale — the shape components consume. */
export interface Project {
  id: number;
  slug: string;
  title: string;
  num: string;
  year: string;
  image: string;
  localImages?: string[];
  hasLocalGallery?: boolean;
  /** Self-hosted muted autoplay loops (Level A) — base paths without extension;
   *  the player appends .webm / .mp4 (sources) and .jpg (poster). */
  loopVideos?: string[];
  /** Self-hosted click-to-play film with audio — base path without extension
   *  (player appends .webm / .mp4 sources and .jpg poster). */
  film?: string;
  tools: string[];
  category: string;
  client: string;
  duration: string;
  tags: string[];
  description: string;
  deliverables: string[];
  sections: { title: string; body: string }[];
}

/** Local mockups copied into /public/portfolio. */
const p = (file: string) => `/portfolio/${file}`;

const RAW_PROJECTS: RawProject[] = [
  // ── 01 BOMMIE SURF ──────────────────────────────────────────────────────────
  {
    id: 1,
    slug: 'bommie-surf',
    title: 'Bommie Surf',
    num: '01',
    year: '2024',
    image: '/portfolio/bommie-surf/hero.jpg',
    tools: ['Figma', 'After Effects', 'Illustrator'],
    hasLocalGallery: true,
    localImages: [
      '/portfolio/bommie-surf/hero.jpg',
      '/portfolio/bommie-surf/2appbommie.png',
      '/portfolio/bommie-surf/sitoweb.png',
      '/portfolio/bommie-surf/tavole2.png',
      '/portfolio/bommie-surf/free-iphone-11-pro-mockup-1.png',
      '/portfolio/bommie-surf/free-iphone-11-pro-mockup-4.png',
      '/portfolio/bommie-surf/sticker-blubommie2.jpg',
      '/portfolio/bommie-surf/totalpin-blubommie.jpg',
    ],
    loopVideos: ['/videos/bommie-surf/loop'],
    category: { en: 'Web & App Design', it: 'Web & App Design' },
    client: { en: 'Bommie Surf', it: 'Bommie Surf' },
    duration: { en: '12 weeks', it: '12 settimane' },
    tags: {
      en: ['UX Design', 'Mobile App', 'E-commerce', 'Branding'],
      it: ['UX Design', 'App Mobile', 'E-commerce', 'Branding'],
    },
    description: {
      en: "A mobile-centric e-commerce platform dedicated to surfers of all levels. The platform offers high-quality surf products alongside a Premium tier featuring a direct SOS system, live webcams, and weather maps — designed to ensure a safe and exciting sports experience.",
      it: "Una piattaforma e-commerce mobile-first dedicata ai surfisti di ogni livello. La piattaforma offre prodotti di alta qualità per il surf affiancati a un livello Premium con sistema SOS diretto, webcam live e mappe meteo — pensata per garantire un’esperienza sportiva sicura ed entusiasmante.",
    },
    deliverables: {
      en: ['Brand identity & logo system', 'Mobile app (iOS & Android)', 'Web e-commerce platform', 'Instagram editorial plan', '3-year growth roadmap'],
      it: ['Identità di brand e sistema logo', 'App mobile (iOS & Android)', 'Piattaforma e-commerce web', 'Piano editoriale Instagram', 'Roadmap di crescita triennale'],
    },
    sections: [
      {
        title: { en: 'Brief', it: 'Brief' },
        body: {
          en: "The goal was to create a mobile-centric e-commerce platform dedicated to surfers of all levels — from beginners to professionals, as well as surf schools and beach facilities utilizing the brand's safety systems. The platform needed to feel as energetic and community-driven as the sport itself.",
          it: "L’obiettivo era creare una piattaforma e-commerce mobile-first dedicata ai surfisti di ogni livello — dai principianti ai professionisti, oltre alle scuole di surf e agli stabilimenti balneari che utilizzano i sistemi di sicurezza del brand. La piattaforma doveva risultare energica e orientata alla community quanto lo sport stesso.",
        },
      },
      {
        title: { en: 'Challenges', it: 'Sfide' },
        body: {
          en: 'The primary challenge was designing an ecosystem capable of addressing a highly diverse audience. It needed to cater equally to individual surfers seeking gear, to professionals looking for performance equipment, and to surf schools managing safety protocols for groups. A single interface had to serve all three without feeling generic to any.',
          it: 'La sfida principale è stata progettare un ecosistema capace di rivolgersi a un pubblico molto eterogeneo. Doveva servire allo stesso modo i surfisti che cercano attrezzatura, i professionisti in cerca di equipaggiamento performante e le scuole di surf che gestiscono protocolli di sicurezza per i gruppi. Una sola interfaccia doveva servire tutti e tre senza risultare generica per nessuno.',
        },
      },
      {
        title: { en: 'Concept & Branding', it: 'Concept e Branding' },
        body: {
          en: "The team chose the name \"Bommie,\" inspired by surfing slang for a large wave that breaks over a submerged reef. The logo incorporates two 'm' letters designed to mimic ocean waves, paired with the Shaka greeting hand gesture woven into the letterforms — all anchored by the bold payoff \"Extremize your surf\" in gold.",
          it: "Il team ha scelto il nome \"Bommie\", ispirato allo slang del surf per indicare una grande onda che si infrange su una barriera sommersa. Il logo integra due lettere 'm' disegnate per richiamare le onde dell’oceano, abbinate al gesto di saluto Shaka intrecciato nelle forme delle lettere — il tutto ancorato dal payoff in oro \"Extremize your surf\".",
        },
      },
      {
        title: { en: 'Research & UX', it: 'Ricerca e UX' },
        body: {
          en: "The structural phase included competitor research and the creation of proto-personas to understand user needs across skill levels. Temporal ecosystem maps and detailed flowcharts were developed to define the app's logical flow and hierarchy. The Premium tier — with its SOS system, surf spot webcams, and real-time weather maps — was validated through user testing with active surfers.",
          it: "La fase strutturale ha incluso l’analisi dei competitor e la creazione di proto-persona per comprendere i bisogni degli utenti ai diversi livelli. Sono state sviluppate mappe temporali dell’ecosistema e flowchart dettagliati per definire il flusso logico e la gerarchia dell’app. Il livello Premium — con sistema SOS, webcam degli spot e mappe meteo in tempo reale — è stato validato tramite user testing con surfisti attivi.",
        },
      },
    ],
  },
  // ── 02 UNSPOKEN ─────────────────────────────────────────────────────────────
  {
    id: 2,
    slug: 'unspoken',
    title: 'Unspoken',
    num: '02',
    year: '2024',
    image: '/portfolio/unspoken/hero.png',
    tools: ['InDesign', 'Procreate'],
    hasLocalGallery: true,
    localImages: [
      '/portfolio/unspoken/hero.png',
      '/portfolio/unspoken/magazine-mockup-1.png',
      '/portfolio/unspoken/magazine-mockup-3.png',
      '/portfolio/unspoken/magazine-mockup-6.png',
      '/portfolio/unspoken/cover2.png',
      '/portfolio/unspoken/cover3.png',
      '/portfolio/unspoken/style.png',
      '/portfolio/unspoken/style2.png',
      '/portfolio/unspoken/style3.png',
    ],
    loopVideos: ['/videos/unspoken/loop'],
    category: { en: 'Editorial Design', it: 'Design Editoriale' },
    client: { en: 'Academic Project', it: 'Progetto accademico' },
    duration: { en: '10 weeks', it: '10 settimane' },
    tags: {
      en: ['Editorial', 'Magazine', 'Layout', 'Illustration'],
      it: ['Editoria', 'Magazine', 'Layout', 'Illustrazione'],
    },
    description: {
      en: 'A monthly magazine designed to dismantle taboos by offering young people a shame-free platform to learn about sex, safety, and related scientific aspects. The editorial identity balances a conversational tone with scientific accuracy — using wordplay, humor, and original illustration to reframe the subject as normal, everyday reality.',
      it: 'Un magazine mensile pensato per smontare i tabù, offrendo ai più giovani uno spazio senza vergogna per informarsi su sesso, sicurezza e relativi aspetti scientifici. L’identità editoriale bilancia un tono colloquiale con il rigore scientifico — usando giochi di parole, ironia e illustrazione originale per restituire il tema come una realtà normale e quotidiana.',
    },
    deliverables: {
      en: ['Issue Zero — complete layout', 'Cover design Issue 1', 'Cover design Issue 2', 'Editorial identity system', 'Illustration direction'],
      it: ['Numero Zero — layout completo', 'Copertina Numero 1', 'Copertina Numero 2', 'Sistema di identità editoriale', 'Direzione delle illustrazioni'],
    },
    sections: [
      {
        title: { en: 'Brief', it: 'Brief' },
        body: {
          en: 'The project required the conceptualization and design of a monthly magazine based on an open theme. The deliverable included the complete layout of Issue Zero alongside the cover designs for Issues 1 and 2. The only constraint: the result had to feel like a real, commercially viable publication.',
          it: 'Il progetto richiedeva l’ideazione e la progettazione di un magazine mensile su tema libero. La consegna comprendeva il layout completo del Numero Zero insieme alle copertine dei Numeri 1 e 2. L’unico vincolo: il risultato doveva sembrare una pubblicazione reale e commercialmente sostenibile.',
        },
      },
      {
        title: { en: 'Concept & Tone', it: 'Concept e Tono' },
        body: {
          en: 'Named Unspoken — quello che non si dice del sesso — the magazine aims to dismantle taboos by offering young people a shame-free space to learn about sex, safety precautions, and their scientific dimensions. The editorial identity deliberately balances a conversational, peer-to-peer approach with factual accuracy: humor and wordplay sit alongside Freud, consent frameworks, and product guides, treating the subject as a normal, everyday reality rather than a source of embarrassment.',
          it: 'Chiamato Unspoken — quello che non si dice del sesso — il magazine punta a smontare i tabù offrendo ai giovani uno spazio senza vergogna per informarsi su sesso, precauzioni di sicurezza e relative dimensioni scientifiche. L’identità editoriale bilancia volutamente un approccio colloquiale e tra pari con l’accuratezza dei contenuti: ironia e giochi di parole convivono con Freud, i modelli del consenso e le guide ai prodotti, trattando il tema come una realtà quotidiana e non come fonte di imbarazzo.',
        },
      },
      {
        title: { en: 'Process & Target', it: 'Processo e Target' },
        body: {
          en: 'The content strategy was driven by extensive research and direct interviews with the target demographic, ensuring the magazine addresses real questions with detailed, relatable information. While primarily aimed at readers aged 14 to 30, the accessible format — bold typography, editorial illustration, clear information hierarchy — is designed to engage a much broader audience. Each article balances editorial playfulness with editorial rigour.',
          it: 'La strategia dei contenuti è nata da un’ampia ricerca e da interviste dirette al target di riferimento, così da rispondere a domande reali con informazioni dettagliate e vicine al lettore. Pur rivolgendosi principalmente a un pubblico tra i 14 e i 30 anni, il formato accessibile — tipografia decisa, illustrazione editoriale, gerarchia chiara delle informazioni — è progettato per coinvolgere un pubblico molto più ampio. Ogni articolo bilancia leggerezza editoriale e rigore.',
        },
      },
      {
        title: { en: 'Issue Zero', it: 'Numero Zero' },
        body: {
          en: 'Issue Zero — titled Tabù — covers consent and healthy relationships, the psychosexual development of desire (Pillole di scienza), sex-themed board games reviewed as consumer products (Giochi da tavolo ispirati al sesso), and a sex toy guide written with the tone of a lifestyle product review. The issue establishes the full editorial grammar: psychedelic display type, clean body columns, original character illustration, and a recurring cast of icons and infographics.',
          it: 'Il Numero Zero — intitolato Tabù — affronta il consenso e le relazioni sane, lo sviluppo psicosessuale del desiderio (Pillole di scienza), i giochi da tavolo a tema recensiti come prodotti di consumo (Giochi da tavolo ispirati al sesso) e una guida ai sex toy scritta con il tono di una recensione lifestyle. Il numero definisce l’intera grammatica editoriale: display type psichedelico, colonne di testo pulite, illustrazione di personaggi originali e un cast ricorrente di icone e infografiche.',
        },
      },
    ],
  },
  // ── 03 KRONO GRAPHIC ────────────────────────────────────────────────────────
  {
    id: 3,
    slug: 'krono-graphic',
    title: 'Krono Graphic',
    num: '03',
    year: '2024',
    image: p('MockUp_PatternCRTE.png'),
    tools: ['Illustrator', 'Photoshop', 'Hand work'],
    hasLocalGallery: true,
    localImages: [
      p('MockUp_PatternCRTE.png'),
      p('Box_Mockups_3.png'),
      p('MockUp_Carte_1.png'),
      p('3.png'),
      p('Free_Notepad_Mockup_5.png'),
      p('GamePage.png'),
      p('Home.png'),
      p('Lega.png'),
    ],
    category: { en: 'Brand & Game Design', it: 'Brand & Game Design' },
    client: { en: 'Thesis Project', it: 'Progetto di tesi' },
    duration: { en: '16 weeks', it: '16 settimane' },
    tags: {
      en: ['Brand Identity', 'Packaging', 'Game Design', 'App Design'],
      it: ['Brand Identity', 'Packaging', 'Game Design', 'App Design'],
    },
    description: {
      en: 'A board game that tells the history of graphic design through graphic design. Combining "Chronos" — the passage of time — with "Graphic," the project delivers a complete visual ecosystem: logo, brand identity, packaging, playing cards, rulebook, scorepad, and a digital companion app.',
      it: 'Un gioco da tavolo che racconta la storia del graphic design attraverso il graphic design. Unendo "Chronos" — lo scorrere del tempo — a "Graphic", il progetto realizza un ecosistema visivo completo: logo, identità di brand, packaging, carte da gioco, regolamento, segnapunti e un’app companion digitale.',
    },
    deliverables: {
      en: ['Brand identity & logo', 'Game box packaging', 'Playing card deck', 'Rulebook design', 'Scorepad', 'Digital companion app (iOS)'],
      it: ['Identità di brand e logo', 'Packaging della scatola', 'Mazzo di carte', 'Design del regolamento', 'Segnapunti', 'App companion digitale (iOS)'],
    },
    sections: [
      {
        title: { en: 'Brief', it: 'Brief' },
        body: {
          en: 'The core objective of this thesis project is to tell the story of graphic design through graphic design itself. A board game was chosen as the medium — a traditional and engaging format for educational divulgation, capable of making visual culture accessible and entertaining for a wide audience.',
          it: 'L’obiettivo centrale di questo progetto di tesi è raccontare la storia del graphic design attraverso il graphic design stesso. Il gioco da tavolo è stato scelto come medium — un formato tradizionale e coinvolgente per la divulgazione, capace di rendere la cultura visiva accessibile e divertente per un pubblico ampio.',
        },
      },
      {
        title: { en: 'Concept & Name', it: 'Concept e Nome' },
        body: {
          en: "The project explores the evolution of visual communication, combining the concept of Chronos — the passage of time — with the word Graphic to create the name Krono. Historical research began from 1875, the era that defined modern poster design and visual advertising, tracing the discipline's development through to the present day.",
          it: 'Il progetto esplora l’evoluzione della comunicazione visiva, combinando il concetto di Chronos — lo scorrere del tempo — con la parola Graphic per creare il nome Krono. La ricerca storica parte dal 1875, l’epoca che ha definito il manifesto moderno e la pubblicità visiva, ripercorrendo lo sviluppo della disciplina fino ai giorni nostri.',
        },
      },
      {
        title: { en: 'The Cards', it: 'Le Carte' },
        body: {
          en: "The core gameplay is built around a historical timeline. Each playing card features a prominent graphic artwork on its face — a Porsche logo, a political manifesto, a film poster, a landmark campaign — while the reverse reveals key data: the year, the designer's name, the artwork title, and the client. Players must place cards correctly on the timeline to score points.",
          it: 'Il cuore del gioco si basa su una linea temporale storica. Ogni carta mostra sul fronte un’opera grafica di rilievo — un logo Porsche, un manifesto politico, una locandina, una campagna iconica — mentre sul retro rivela i dati chiave: anno, nome del designer, titolo dell’opera e cliente. I giocatori devono collocare le carte correttamente sulla timeline per fare punti.',
        },
      },
      {
        title: { en: 'Digital Extension', it: 'Estensione Digitale' },
        body: {
          en: "The physical game is extended by a companion app offering offline solo play, online multiplayer, and a league system with ranked tiers. The app mirrors the board game's visual identity — the wavy red pattern, the bold white logotype — and adds player profiles, card collections, and a global leaderboard. The digital layer transforms a classroom tool into a living, competitive platform for design culture.",
          it: 'Il gioco fisico è esteso da un’app companion che offre partite singole offline, multiplayer online e un sistema di leghe con tier classificati. L’app riprende l’identità visiva del gioco — il pattern rosso ondulato, il logotipo bianco e deciso — e aggiunge profili giocatore, collezioni di carte e una classifica globale. Il livello digitale trasforma uno strumento didattico in una piattaforma viva e competitiva per la cultura del design.',
        },
      },
    ],
  },
  // ── 04 THE MYTHOLOGICAL TRANSCEIVER ─────────────────────────────────────────
  {
    id: 4,
    slug: 'the-mythological-transceiver',
    title: 'The Mythological Transceiver',
    num: '04',
    year: '2026',
    image: '/portfolio/the-mythological-transceiver/img-0296.jpg',
    tools: ['Fusion 360', 'Raspberry Pi', 'Coding', 'Hand work'],
    hasLocalGallery: true,
    localImages: [
      '/portfolio/the-mythological-transceiver/img-0296.jpg',
      '/portfolio/the-mythological-transceiver/sketchprototype.jpg',
      '/portfolio/the-mythological-transceiver/sketch-reality.jpg',
      '/portfolio/the-mythological-transceiver/img-0291.jpg',
      '/portfolio/the-mythological-transceiver/img-0292.jpg',
      '/portfolio/the-mythological-transceiver/img-0307.jpg',
      '/portfolio/the-mythological-transceiver/img-0339.jpg',
      '/portfolio/the-mythological-transceiver/img-0340.jpg',
      '/portfolio/the-mythological-transceiver/img-0345.jpg',
      '/portfolio/the-mythological-transceiver/img-5297.jpg',
    ],
    loopVideos: ['/videos/the-mythological-transceiver/loop'],
    category: { en: 'Prototyping & Interaction', it: 'Prototyping & Interaction' },
    client: { en: 'SUPSI — Academic Project', it: 'SUPSI — Progetto accademico' },
    duration: { en: '8 weeks', it: '8 settimane' },
    tags: {
      en: ['Physical Prototyping', 'Installation', 'Raspberry Pi', 'Concept Art'],
      it: ['Prototipazione Fisica', 'Installazione', 'Raspberry Pi', 'Concept Art'],
    },
    description: {
      en: 'An immersive installation that translates the invisible into tangible visual experience — exploring the intersection of modern 5G technology and archaic Alpine folklore. The device repurposes the camera as a sensory extension capable of detecting signals beyond the visible spectrum, converting digital noise and data glitches into the physical footprints of supernatural manifestations.',
      it: 'Un’installazione immersiva che traduce l’invisibile in esperienza visiva tangibile — esplorando l’incrocio tra la moderna tecnologia 5G e l’arcaico folklore alpino. Il dispositivo reinterpreta la fotocamera come estensione sensoriale capace di rilevare segnali oltre lo spettro visibile, convertendo il rumore digitale e i glitch dei dati nelle impronte fisiche di manifestazioni soprannaturali.',
    },
    deliverables: {
      en: ['Physical device (Fusion 360 + fabrication)', 'Raspberry Pi signal system', 'Oscilloscope & thermal camera integration', 'Exhibition installation', 'Project editorial'],
      it: ['Dispositivo fisico (Fusion 360 + fabbricazione)', 'Sistema di segnale Raspberry Pi', 'Integrazione oscilloscopio e termocamera', 'Installazione espositiva', 'Editoriale di progetto'],
    },
    sections: [
      {
        title: { en: 'Brief', it: 'Brief' },
        body: {
          en: 'The objective is to translate the abstract and the invisible into a tangible visual experience. The work explores the intersection between modern technology and archaic folklore, utilizing the narrative framework of 5G conspiracy theories to spark a deeper reflection on human perception. The challenge: creating an aesthetic bridge between contemporary electromagnetic frequencies and the dormant legends of the Ticinese Alps.',
          it: 'L’obiettivo è tradurre l’astratto e l’invisibile in un’esperienza visiva tangibile. Il lavoro esplora l’incrocio tra tecnologia moderna e folklore arcaico, usando la cornice narrativa delle teorie del complotto sul 5G per innescare una riflessione più profonda sulla percezione umana. La sfida: creare un ponte estetico tra le frequenze elettromagnetiche contemporanee e le leggende sopite delle Alpi ticinesi.',
        },
      },
      {
        title: { en: 'Process', it: 'Processo' },
        body: {
          en: "We approached the camera not as a recording tool, but as a sensory extension device capable of detecting signals beyond the visible spectrum. The design process focused on translating the conceptual 'burning' of ethereal entities by high-frequency waves into a specific visual language. By intentionally manipulating signal interference, we converted digital noise and data glitches into the physical footprints of supernatural manifestations.",
          it: "Abbiamo trattato la fotocamera non come strumento di registrazione, ma come dispositivo di estensione sensoriale capace di rilevare segnali oltre lo spettro visibile. Il processo di design si è concentrato sul tradurre il concettuale 'incenerimento' delle entità eteree da parte delle onde ad alta frequenza in un linguaggio visivo specifico. Manipolando intenzionalmente l’interferenza del segnale, abbiamo convertito il rumore digitale e i glitch dei dati nelle impronte fisiche di manifestazioni soprannaturali.",
        },
      },
      {
        title: { en: 'The Device', it: 'Il Dispositivo' },
        body: {
          en: 'The physical object is a vertical pole mounting three active screens: an oscilloscope display rendering live sine wave data, a thermal imaging camera detecting heat signatures, and a data telemetry readout. Built with Fusion 360 for structural design, hand fabrication for assembly, and a Raspberry Pi as the computational core, the object exists at the exact boundary between scientific instrument and ritual artifact.',
          it: 'L’oggetto fisico è un’asta verticale che monta tre schermi attivi: un display oscilloscopio che mostra dati sinusoidali in tempo reale, una termocamera che rileva le firme termiche e un readout di telemetria dati. Realizzato con Fusion 360 per il design strutturale, fabbricazione manuale per l’assemblaggio e un Raspberry Pi come nucleo di calcolo, l’oggetto vive esattamente al confine tra strumento scientifico e artefatto rituale.',
        },
      },
      {
        title: { en: 'Outcome', it: 'Risultato' },
        body: {
          en: 'The result is an immersive installation that elevates technological paranoia into a contemporary mythology. By visualizing the invisible friction between the digital and the spiritual, the Transceiver offers a unique perspective on how modern signals reshape our perception of the environment — turning electronic distortion into a compelling narrative of forced spiritual awakening.',
          it: 'Il risultato è un’installazione immersiva che eleva la paranoia tecnologica a mitologia contemporanea. Visualizzando l’attrito invisibile tra il digitale e lo spirituale, il Transceiver offre una prospettiva unica su come i segnali moderni rimodellino la nostra percezione dell’ambiente — trasformando la distorsione elettronica in una narrazione avvincente di risveglio spirituale forzato.',
        },
      },
    ],
  },
  // ── 05 SOUL BOX ─────────────────────────────────────────────────────────────
  {
    id: 5,
    slug: 'soul-box',
    title: 'Soul Box',
    num: '05',
    year: '2025',
    image: '/portfolio/soul-box/hero.jpg',
    tools: ['Arduino', 'Fusion 360', 'Laser Cut', '3D Printing'],
    hasLocalGallery: true,
    localImages: [
      '/portfolio/soul-box/hero.jpg',
      '/portfolio/soul-box/orizzontale-1.jpg',
      '/portfolio/soul-box/orizzontale-2.jpg',
      '/portfolio/soul-box/orizzontale-3.jpg',
      '/portfolio/soul-box/orizzontale-5.jpg',
      '/portfolio/soul-box/orizzontale-6.jpg',
      '/portfolio/soul-box/verticale-1.jpg',
      '/portfolio/soul-box/verticale-2.jpg',
      '/portfolio/soul-box/verticale-3.jpg',
      '/portfolio/soul-box/verticale-4.jpg',
      '/portfolio/soul-box/verticale-5.jpg',
      '/portfolio/soul-box/photo-2026-01-24-01-08-53-2.jpg',
      '/portfolio/soul-box/photo-2026-01-24-01-08-55.jpg',
    ],
    loopVideos: ['/videos/soul-box/loop'],
    category: { en: 'Prototyping & Interaction', it: 'Prototyping & Interaction' },
    client: { en: 'Academic Project', it: 'Progetto accademico' },
    duration: { en: '10 weeks', it: '10 settimane' },
    tags: {
      en: ['Arduino', 'Physical Computing', 'Interaction Design', 'Laser Cut'],
      it: ['Arduino', 'Physical Computing', 'Interaction Design', 'Taglio Laser'],
    },
    description: {
      en: 'A mindfulness tool designed to help users disconnect from stress. Enclosed in a 25×25 cm cubic structure, Soul Box mediates between technology and psychological well-being through nine physical pillars representing core life values — each triggering an immersive sequence of ambient lights and sounds when placed inside the cube.',
      it: 'Uno strumento di mindfulness pensato per aiutare le persone a staccare dallo stress. Racchiuso in una struttura cubica di 25×25 cm, Soul Box fa da mediatore tra tecnologia e benessere psicologico attraverso nove pilastri fisici che rappresentano i valori fondamentali della vita — ognuno innesca, una volta inserito nel cubo, una sequenza immersiva di luci e suoni ambientali.',
    },
    deliverables: {
      en: ['Physical cube device (25×25 cm)', '9 laser-engraved wooden pillars', 'Arduino interaction system', 'Ambient light & sound sequences', 'Fusion 360 structural design'],
      it: ['Dispositivo cubico fisico (25×25 cm)', '9 pilastri in legno incisi al laser', 'Sistema di interazione Arduino', 'Sequenze di luci e suoni ambientali', 'Progettazione strutturale in Fusion 360'],
    },
    sections: [
      {
        title: { en: 'Brief', it: 'Brief' },
        body: {
          en: 'Design and development of a tangible interactive device based on Arduino technology. The objective was to create a physical object capable of mediating between technology and psychological well-being, enclosed in a 25×25 cm cubic structure acting as a multi-sensory interface.',
          it: 'Progettazione e sviluppo di un dispositivo interattivo tangibile basato su tecnologia Arduino. L’obiettivo era creare un oggetto fisico capace di mediare tra tecnologia e benessere psicologico, racchiuso in una struttura cubica di 25×25 cm che funge da interfaccia multisensoriale.',
        },
      },
      {
        title: { en: 'Concept', it: 'Concept' },
        body: {
          en: 'Soul Box is a mindfulness tool designed to help users disconnect from stress. The experience revolves around nine physical pillars representing core life values — Love, Family, Health, and six others identified through user research. Placing a pillar inside the cube triggers an immersive sequence of ambient lights and sounds, guiding the user into a meditative state. The physical act of depositing a value into the box symbolizes making space for what truly matters in daily life.',
          it: 'Soul Box è uno strumento di mindfulness pensato per aiutare a staccare dallo stress. L’esperienza ruota attorno a nove pilastri fisici che rappresentano i valori fondamentali della vita — Amore, Famiglia, Salute e altri sei individuati tramite la ricerca con gli utenti. Inserire un pilastro nel cubo innesca una sequenza immersiva di luci e suoni ambientali, accompagnando la persona in uno stato meditativo. L’atto fisico di depositare un valore nella scatola simboleggia il fare spazio a ciò che conta davvero nella vita quotidiana.',
        },
      },
      {
        title: { en: 'Research & Process', it: 'Ricerca e Processo' },
        body: {
          en: 'Research identified the 9 fundamental life values through user interviews and surveys. Prototyping focused on laser-engraved wooden pillars with unique tactile textures corresponding to their specific themes — each pillar is immediately distinguishable by touch alone, without needing to read labels. The interaction is intentionally slow and analog: powered by Arduino, the system resists the impatience of digital interfaces.',
          it: 'La ricerca ha individuato i 9 valori fondamentali tramite interviste e questionari con gli utenti. La prototipazione si è concentrata su pilastri in legno incisi al laser con texture tattili uniche corrispondenti ai loro temi specifici — ogni pilastro è riconoscibile immediatamente al solo tatto, senza bisogno di leggere etichette. L’interazione è volutamente lenta e analogica: alimentato da Arduino, il sistema resiste all’impazienza delle interfacce digitali.',
        },
      },
      {
        title: { en: 'Interaction', it: 'Interazione' },
        body: {
          en: 'The physical act of placing a pillar into the opening of the cube is the entire interaction. There are no buttons, no screens, no menus. The RFID chip embedded in each pillar identifies which value has been deposited, and the Arduino system responds with a unique combination of warm LED lighting and a curated ambient sound sequence. The ritual slowness of the interaction is the design.',
          it: 'L’atto fisico di inserire un pilastro nell’apertura del cubo è l’intera interazione. Niente pulsanti, niente schermi, niente menu. Il chip RFID integrato in ogni pilastro identifica quale valore è stato depositato e il sistema Arduino risponde con una combinazione unica di luce LED calda e una sequenza sonora ambientale curata. La lentezza rituale dell’interazione è il design.',
        },
      },
    ],
  },
  // ── 06 TATA MATILDA ─────────────────────────────────────────────────────────
  {
    id: 6,
    slug: 'tata-matilda',
    title: 'Tata Matilda',
    num: '06',
    year: '2025',
    image: '/portfolio/tata-matilda/moodboard.png',
    tools: ['Procreate', 'After Effects', 'Illustrator', 'Photoshop'],
    localImages: [
      '/portfolio/tata-matilda/moodboard.png',
      '/portfolio/tata-matilda/primeprove.jpg',
      '/portfolio/tata-matilda/storyboar.jpg',
    ],
    film: '/videos/tata-matilda/film',
    category: { en: 'Motion & Video', it: 'Motion & Video' },
    client: { en: 'Academic Project', it: 'Progetto accademico' },
    duration: { en: '6 weeks', it: '6 settimane' },
    tags: {
      en: ['Motion Graphics', 'After Effects', 'Illustration', 'Title Design'],
      it: ['Motion Graphics', 'After Effects', 'Illustrazione', 'Title Design'],
    },
    description: {
      en: 'Animated ending titles for the 2005 film Nanny McPhee (Tata Matilda). The sequence adopts a charming 2D aesthetic with irregular hand-drawn strokes and children\'s-drawing color palettes — conceived as a playful journey that retraces the film\'s plot through elements moving dynamically across the screen.',
      it: 'Titoli di coda animati per il film del 2005 Tata Matilda (Nanny McPhee). La sequenza adotta una graziosa estetica 2D con tratti irregolari disegnati a mano e palette da disegno infantile — concepita come un viaggio giocoso che ripercorre la trama del film attraverso elementi che si muovono dinamicamente sullo schermo.',
    },
    deliverables: {
      en: ['Animated title sequence', 'Frame-by-frame illustration', 'Motion storyboard', 'Sound-synced animation', 'Final export (DCP)'],
      it: ['Sequenza di titoli animata', 'Illustrazione fotogramma per fotogramma', 'Storyboard di animazione', 'Animazione sincronizzata al suono', 'Export finale (DCP)'],
    },
    sections: [
      {
        title: { en: 'Brief', it: 'Brief' },
        body: {
          en: 'The project required the conceptualization and design of animated ending titles for the 2005 film Nanny McPhee (Tata Matilda). The deliverable included the complete animated sequence — from the first credit to the last — designed to feel like a natural, joyful epilogue to the film\'s visual world.',
          it: 'Il progetto richiedeva l’ideazione e la progettazione dei titoli di coda animati per il film del 2005 Tata Matilda (Nanny McPhee). La consegna comprendeva l’intera sequenza animata — dal primo all’ultimo credito — pensata per risultare un epilogo naturale e gioioso del mondo visivo del film.',
        },
      },
      {
        title: { en: 'Visual Style', it: 'Stile Visivo' },
        body: {
          en: "The graphic design adopts a charming 2D aesthetic characterized by irregular, hand-drawn strokes and color palettes reminiscent of children's drawings. The compositions prominently feature iconic objects, windows, and doors that are central to the movie's setting — recalling the Victorian domestic chaos of the Brown household without quoting it directly.",
          it: 'Il design grafico adotta una graziosa estetica 2D caratterizzata da tratti irregolari disegnati a mano e palette che richiamano i disegni dei bambini. Le composizioni mettono in primo piano oggetti iconici, finestre e porte centrali nell’ambientazione del film — evocando il caos domestico vittoriano della casa Brown senza citarlo direttamente.',
        },
      },
      {
        title: { en: 'Motion & Narrative', it: 'Movimento e Narrazione' },
        body: {
          en: "Conceived as a 'playful journey,' the title sequence retraces the movie's plot through elements moving dynamically across the screen. The visual storytelling relies on these moving elements to create a rhythm that contrasts nostalgic and cheerful moments, often illustrating the children's mischievous disasters. To add depth and break the narrative flow, a characteristic dark moment is intentionally integrated into the sequence.",
          it: "Concepita come un 'viaggio giocoso', la sequenza dei titoli ripercorre la trama del film attraverso elementi che si muovono dinamicamente sullo schermo. La narrazione visiva si affida a questi elementi in movimento per creare un ritmo che alterna momenti nostalgici e allegri, illustrando spesso i dispetti combinati dai bambini. Per dare profondità e spezzare il flusso narrativo, nella sequenza è integrato volutamente un caratteristico momento più cupo.",
        },
      },
      {
        title: { en: 'Process', it: 'Processo' },
        body: {
          en: "The sequence was illustrated frame by frame in Procreate, establishing the hand-drawn quality before moving into After Effects for animation and compositing. Illustrator and Photoshop were used for asset refinement and color work. The final pacing was calibrated against the film's closing musical theme, ensuring that key visual beats land on rhythmic accents in the score.",
          it: 'La sequenza è stata illustrata fotogramma per fotogramma in Procreate, definendo la qualità del disegno a mano prima di passare ad After Effects per animazione e compositing. Illustrator e Photoshop sono stati usati per la rifinitura degli asset e il lavoro sul colore. Il ritmo finale è stato calibrato sul tema musicale di chiusura del film, facendo coincidere i momenti visivi chiave con gli accenti ritmici della colonna sonora.',
        },
      },
    ],
  },
  // ── 07 SOSPESE ──────────────────────────────────────────────────────────────
  {
    id: 7,
    slug: 'sospese',
    title: 'Sospese',
    num: '07',
    year: '2025',
    image: '/portfolio/sospese/hero.png',
    tools: ['Cinema 4D', 'Illustrator'],
    localImages: [
      '/portfolio/sospese/hero.png',
      '/portfolio/sospese/coppia1.jpg',
      '/portfolio/sospese/coppia2.jpg',
      '/portfolio/sospese/adv.png',
      '/portfolio/sospese/comunicazione-urbana.png',
      '/portfolio/sospese/website.png',
    ],
    loopVideos: ['/videos/sospese/loop'],
    category: { en: 'Exhibition Design', it: 'Exhibition Design' },
    client: { en: 'Academic Project', it: 'Progetto accademico' },
    duration: { en: '8 weeks', it: '8 settimane' },
    tags: {
      en: ['Exhibition Design', 'Spatial Design', 'Cinema 4D', 'Lighting'],
      it: ['Exhibition Design', 'Spatial Design', 'Cinema 4D', 'Illuminazione'],
    },
    description: {
      en: 'Exhibition design for a showcase dedicated to the evolution of the female image across 10 statues, tracing a chronological journey from prehistory to the contemporary era. The spatial narrative immerses visitors in a space-time limbo — darkness interrupted by crisp beams of light from large conical structures, each defining an isolated island for a single artwork.',
      it: 'Progetto espositivo per una mostra dedicata all’evoluzione dell’immagine femminile attraverso 10 statue, ripercorrendo un viaggio cronologico dalla preistoria all’epoca contemporanea. La narrazione spaziale immerge i visitatori in un limbo spazio-temporale — buio interrotto da nitidi fasci di luce emessi da grandi strutture coniche, ciascuna a definire un’isola isolata per una singola opera.',
    },
    deliverables: {
      en: ['Spatial layout & floor plan', '10 lighting cone structures', 'Per-era video content', 'Soundscape design', 'Cinema 4D visualizations'],
      it: ['Layout spaziale e planimetria', '10 strutture coniche di illuminazione', 'Contenuti video per ogni epoca', 'Progettazione del paesaggio sonoro', 'Visualizzazioni in Cinema 4D'],
    },
    sections: [
      {
        title: { en: 'Brief', it: 'Brief' },
        body: {
          en: 'Exhibition design for a showcase dedicated to the evolution of the female image. The spatial narrative explores this transformation through 10 statues, tracing a chronological journey from prehistory to the contemporary era — each piece a document of how women were seen, idealized, and objectified across time and culture.',
          it: 'Progetto espositivo per una mostra dedicata all’evoluzione dell’immagine femminile. La narrazione spaziale esplora questa trasformazione attraverso 10 statue, ripercorrendo un viaggio cronologico dalla preistoria all’epoca contemporanea — ogni opera è un documento di come le donne siano state viste, idealizzate e oggettificate nel tempo e nelle culture.',
        },
      },
      {
        title: { en: 'Concept', it: 'Concept' },
        body: {
          en: "In an era where women's roles, rights, and safety remain critical and debated issues, Sospese — Suspended — invites profound reflection. The title refers both to the statues physically suspended in space and to the unresolved question they pose: how were these women treated in the past, and what is their condition today? Through art, the exhibition aims to trigger an unconscious dialogue within the viewer, allowing history to speak without commentary.",
          it: 'In un’epoca in cui ruoli, diritti e sicurezza delle donne restano temi critici e dibattuti, Sospese invita a una riflessione profonda. Il titolo si riferisce sia alle statue fisicamente sospese nello spazio sia alla domanda irrisolta che pongono: come venivano trattate queste donne in passato e qual è la loro condizione oggi? Attraverso l’arte, la mostra punta a innescare un dialogo inconscio nel visitatore, lasciando parlare la storia senza commenti.',
        },
      },
      {
        title: { en: 'Spatial Experience', it: 'Esperienza Spaziale' },
        body: {
          en: 'The layout projects the visitor into a space-time limbo: an environment immersed in near-total darkness, in sharp contrast with the crisp beams of light emitted by large conical structures. These shapes define dedicated islands for the individual artworks. The cone becomes a threshold — outside, isolation and silence; inside, a complete sensory world.',
          it: 'Il layout proietta il visitatore in un limbo spazio-temporale: un ambiente immerso in un buio quasi totale, in netto contrasto con i nitidi fasci di luce emessi dalle grandi strutture coniche. Queste forme definiscono isole dedicate alle singole opere. Il cono diventa una soglia — fuori, isolamento e silenzio; dentro, un mondo sensoriale completo.',
        },
      },
      {
        title: { en: 'Sensory Design', it: 'Design Sensoriale' },
        body: {
          en: 'Upon entering each illuminated island, the isolation breaks to make way for an immersive narrative: video displays and evocative soundscapes — specifically designed for the era and geographical area of each statue — envelop the viewer in a multisensory and emotional experience. A Minoan fertility figure receives a different sonic world than a Baroque allegory or a 1970s feminist sculpture. The sound and image never explain; they contextualize.',
          it: 'Entrando in ogni isola illuminata, l’isolamento si spezza per lasciare spazio a una narrazione immersiva: schermi video e paesaggi sonori evocativi — progettati specificamente per l’epoca e l’area geografica di ciascuna statua — avvolgono il visitatore in un’esperienza multisensoriale ed emotiva. Una figura di fertilità minoica riceve un mondo sonoro diverso da un’allegoria barocca o da una scultura femminista degli anni Settanta. Suono e immagine non spiegano mai; contestualizzano.',
        },
      },
    ],
  },
  // ── 08 MIX&MATCH ────────────────────────────────────────────────────────────
  {
    id: 8,
    slug: 'mix-match',
    title: 'Mix & Match',
    num: '08',
    year: '2025',
    image: '/portfolio/mix-match/saccoccio.png',
    tools: ['Illustrator', 'Cinema 4D', 'Photoshop'],
    localImages: [
      '/portfolio/mix-match/saccoccio.png',
      '/portfolio/mix-match/spezie.png',
      '/portfolio/mix-match/sacchetti.png',
      '/portfolio/mix-match/adv.png',
      '/portfolio/mix-match/social1.png',
      '/portfolio/mix-match/social2.png',
      '/portfolio/mix-match/stand1.png',
      '/portfolio/mix-match/stand2.png',
      '/portfolio/mix-match/website.png',
    ],
    category: { en: 'Brand & Packaging', it: 'Brand & Packaging' },
    client: { en: 'Illy × Francesco Apreda', it: 'Illy × Francesco Apreda' },
    duration: { en: '8 weeks', it: '8 settimane' },
    tags: {
      en: ['Brand Identity', 'Packaging', 'Advertising', 'Social Media'],
      it: ['Brand Identity', 'Packaging', 'Pubblicità', 'Social Media'],
    },
    description: {
      en: 'A new product line for Illy reimagining coffee as a culinary spice. Developed in collaboration with chef and Illy ambassador Francesco Apreda, the line introduces two food products — a ready-to-use seasoning pouch and a versatile spice mix — alongside a complete brand identity, packaging system, and cross-promotional marketing strategy.',
      it: 'Una nuova linea di prodotti per Illy che reinventa il caffè come spezia culinaria. Sviluppata in collaborazione con lo chef e ambassador Illy Francesco Apreda, la linea introduce due prodotti alimentari — una bustina di condimento pronto all’uso e un mix di spezie versatile — insieme a un’identità di brand completa, un sistema di packaging e una strategia di marketing cross-promozionale.',
    },
    deliverables: {
      en: ['Logo & brand identity', 'Packaging (2 SKUs)', 'Advertising materials', 'Exhibition stand design', 'Social media presence'],
      it: ['Logo e identità di brand', 'Packaging (2 referenze)', 'Materiali pubblicitari', 'Design dello stand espositivo', 'Presenza sui social media'],
    },
    sections: [
      {
        title: { en: 'Brief', it: 'Brief' },
        body: {
          en: "The assignment required conceptualizing and designing a new product line for the Illy brand, with a primary focus on brand image and packaging design. The challenge was to extend Illy's premium positioning into an entirely new product category without diluting the brand's identity or confusing its existing coffee audience.",
          it: 'La consegna richiedeva di ideare e progettare una nuova linea di prodotti per il brand Illy, con focus primario su immagine di marca e packaging design. La sfida era estendere il posizionamento premium di Illy a una categoria di prodotto del tutto nuova senza diluire l’identità del brand né confondere il suo pubblico già affezionato al caffè.',
        },
      },
      {
        title: { en: 'Concept', it: 'Concept' },
        body: {
          en: 'The project is built around an innovative premise: stepping away from tradition to reimagine coffee as a culinary spice. Developed in collaboration with chef and Illy ambassador Francesco Apreda, the strategy introduces two new food products. The first is a ready-to-use seasoning pouch blending coffee, whole salt, and pink pepper; the second is a versatile spice mix designed to enhance everyday meals — from pasta to grilled proteins.',
          it: 'Il progetto si fonda su una premessa innovativa: allontanarsi dalla tradizione per reinventare il caffè come spezia culinaria. Sviluppata in collaborazione con lo chef e ambassador Illy Francesco Apreda, la strategia introduce due nuovi prodotti alimentari. Il primo è una bustina di condimento pronta all’uso che mescola caffè, sale integrale e pepe rosa; il secondo è un mix di spezie versatile pensato per esaltare i piatti di tutti i giorni — dalla pasta alle proteine alla griglia.',
        },
      },
      {
        title: { en: 'Brand Identity', it: 'Brand Identity' },
        body: {
          en: "The Mix & Match name captures both the product logic (combining coffee with other flavors) and the brand's collaborative spirit (Illy matched with Apreda). The visual identity borrows Illy's disciplined red and white language, then opens it up with warmer, culinary textures — grain, salt crystals, pepper — rendered in a clean contemporary system. The packaging uses die-cut windows to reveal the product's texture as part of the design.",
          it: 'Il nome Mix & Match cattura sia la logica del prodotto (combinare il caffè con altri sapori) sia lo spirito collaborativo del brand (Illy abbinata ad Apreda). L’identità visiva riprende il linguaggio rigoroso bianco e rosso di Illy, per poi aprirlo a texture più calde e culinarie — grana, cristalli di sale, pepe — rese in un sistema contemporaneo e pulito. Il packaging usa finestre fustellate per rivelare la texture del prodotto come parte del design.',
        },
      },
      {
        title: { en: 'Strategy & Outcome', it: 'Strategia e Risultato' },
        body: {
          en: "Beyond the physical packaging, the project integrates a cross-promotional marketing strategy offering reciprocal discounts between Illy products and Chef Apreda's restaurant. The final deliverable encompasses the complete Mix & Match brand identity — logo, advertising materials, exhibition stands, and a dedicated social media presence — designed to fully support the product launch across retail, hospitality, and digital channels.",
          it: 'Oltre al packaging fisico, il progetto integra una strategia di marketing cross-promozionale con sconti reciproci tra i prodotti Illy e il ristorante dello Chef Apreda. La consegna finale comprende l’intera identità di brand Mix & Match — logo, materiali pubblicitari, stand espositivi e una presenza social dedicata — progettata per supportare pienamente il lancio del prodotto su canali retail, hospitality e digitali.',
        },
      },
    ],
  },
  // ── 09 ZOETROPE ─────────────────────────────────────────────────────────────
  {
    id: 9,
    slug: 'zoetrope',
    title: 'Zoetrope',
    num: '09',
    year: '2025',
    image: '/portfolio/zoetrope/hero.jpg',
    tools: ['Laser Cut', 'Fusion 360', '3D Printing', 'Arduino'],
    localImages: [
      '/portfolio/zoetrope/hero.jpg',
      '/portfolio/zoetrope/1.jpg',
      '/portfolio/zoetrope/2.jpg',
      '/portfolio/zoetrope/3.jpg',
      '/portfolio/zoetrope/4.jpg',
      '/portfolio/zoetrope/10.jpg',
      '/portfolio/zoetrope/2-2.png',
      '/portfolio/zoetrope/722-convertito.png',
      '/portfolio/zoetrope/test.jpg',
      '/portfolio/zoetrope/test2.jpg',
    ],
    loopVideos: ['/videos/zoetrope/loop'],
    category: { en: 'Prototyping & Interaction', it: 'Prototyping & Interaction' },
    client: { en: 'Academic Project', it: 'Progetto accademico' },
    duration: { en: '10 weeks', it: '10 settimane' },
    tags: {
      en: ['Laser Cut', '3D Printing', 'Raspberry Pi Pico', 'Fusion 360'],
      it: ['Taglio Laser', 'Stampa 3D', 'Raspberry Pi Pico', 'Fusion 360'],
    },
    description: {
      en: 'A functional reinvention of the historical zoetrope optical toy — transformed into an interactive device that blends analog mechanics, digital fabrication, and modern electronics. The final object offers dual-mode interaction: a mechanical side wheel for manual rotation control and a front button panel managing volume, track playback, and multimedia functions synchronized to the optical illusion.',
      it: 'Una reinvenzione funzionale dello storico giocattolo ottico zootropio — trasformato in un dispositivo interattivo che fonde meccanica analogica, fabbricazione digitale ed elettronica moderna. L’oggetto finale offre un’interazione a doppia modalità: una ruota meccanica laterale per il controllo manuale della rotazione e un pannello di pulsanti frontale per gestire volume, riproduzione delle tracce e funzioni multimediali sincronizzate all’illusione ottica.',
    },
    deliverables: {
      en: ['Laser-cut outer cylinder', '3D-printed base & mechanics', 'Raspberry Pi Pico integration', 'Potentiometer & speaker system', 'Front button control panel'],
      it: ['Cilindro esterno tagliato al laser', 'Base e meccanica stampate in 3D', 'Integrazione Raspberry Pi Pico', 'Sistema potenziometro e altoparlante', 'Pannello di controllo frontale a pulsanti'],
    },
    sections: [
      {
        title: { en: 'Brief & Challenge', it: 'Brief e Sfida' },
        body: {
          en: 'The project required designing and building a functional object using laser cutting, 3D printing, and microcontroller integration. The core challenge was to reinvent a historical optical toy — the zoetrope — transforming it into an interactive device that seamlessly blends analog mechanics, digital fabrication, and modern electronics.',
          it: 'Il progetto richiedeva di progettare e costruire un oggetto funzionale usando taglio laser, stampa 3D e integrazione di microcontrollori. La sfida centrale era reinventare uno storico giocattolo ottico — lo zootropio — trasformandolo in un dispositivo interattivo che fonde con naturalezza meccanica analogica, fabbricazione digitale ed elettronica moderna.',
        },
      },
      {
        title: { en: 'Process', it: 'Processo' },
        body: {
          en: "The process began with rough cardboard prototyping to study the mechanical connections before committing to final materials. Extensive laser-cutting tests followed to perfect the outer cylinder's proportions and slit spacing. The entire system was modeled in Fusion 360, building outward from the rotating cylinder and inner mechanisms to the final outer casing. Through iterative testing, hardware was optimized: initially 3D-printed bearings were replaced with purchased hardware to guarantee a perfectly stable rotation.",
          it: 'Il processo è iniziato con prototipi grezzi in cartone per studiare i collegamenti meccanici prima di scegliere i materiali definitivi. Sono seguiti numerosi test di taglio laser per perfezionare le proporzioni del cilindro esterno e la spaziatura delle fessure. L’intero sistema è stato modellato in Fusion 360, costruendo dal cilindro rotante e dai meccanismi interni fino all’involucro esterno finale. Con test iterativi l’hardware è stato ottimizzato: i cuscinetti inizialmente stampati in 3D sono stati sostituiti con componenti acquistati per garantire una rotazione perfettamente stabile.',
        },
      },
      {
        title: { en: 'Construction', it: 'Costruzione' },
        body: {
          en: "The base, internal mechanics, and side control wheel were 3D printed for structural precision and repeatability. The outer cylinder was laser-cut, its slits calibrated to the animation's frame count and the motor's RPM range. A full-black finish was chosen across all surfaces to maximize visual contrast — ensuring the internal animation strip reads cleanly during rotation without light bleed or surface reflection competing with the illusion.",
          it: 'La base, la meccanica interna e la ruota di controllo laterale sono state stampate in 3D per precisione strutturale e ripetibilità. Il cilindro esterno è stato tagliato al laser, con le fessure calibrate sul numero di fotogrammi dell’animazione e sul range di giri del motore. È stata scelta una finitura completamente nera su tutte le superfici per massimizzare il contrasto visivo — assicurando che la striscia d’animazione interna si legga nitidamente durante la rotazione, senza dispersioni di luce o riflessi superficiali a competere con l’illusione.',
        },
      },
      {
        title: { en: 'Outcome', it: 'Risultato' },
        body: {
          en: 'The final device is powered by a Raspberry Pi Pico connected to a potentiometer and speakers, synchronizing the optical illusion with an audio component — animation and sound locked together. Users engage via a mechanical side wheel for manual rotation speed control and a front button panel to manage multimedia functions: volume, track selection, and playback. The object exists simultaneously as a precision-engineered mechanism and a kinetic sculpture.',
          it: 'Il dispositivo finale è alimentato da un Raspberry Pi Pico collegato a un potenziometro e ad altoparlanti, sincronizzando l’illusione ottica con una componente audio — animazione e suono agganciati insieme. L’utente interagisce tramite una ruota meccanica laterale per controllare manualmente la velocità di rotazione e un pannello di pulsanti frontale per gestire le funzioni multimediali: volume, selezione delle tracce e riproduzione. L’oggetto esiste al tempo stesso come meccanismo di precisione e scultura cinetica.',
        },
      },
    ],
  },
  // ── 10 DOCARE ───────────────────────────────────────────────────────────────
  {
    id: 10,
    slug: 'docare',
    title: 'DoCare',
    num: '10',
    year: '2024',
    image: '/portfolio/docare/dsc-6030.jpg',
    tools: ['Figma', 'Arduino / ESP32', 'Rhino / Fusion 360', 'After Effects'],
    hasLocalGallery: true,
    localImages: [
      '/portfolio/docare/dsc-6030.jpg',
      '/portfolio/docare/dsc-6142.jpg',
      '/portfolio/docare/dsc-6145.jpg',
      '/portfolio/docare/iphone-15.png',
      '/portfolio/docare/iphone-16.png',
      '/portfolio/docare/iphone-15-pro.png',
      '/portfolio/docare/dsc-6131.jpg',
      '/portfolio/docare/dsc-6167.jpg',
      '/portfolio/docare/dsc-6194.jpg',
      '/portfolio/docare/dsc-6205.jpg',
      '/portfolio/docare/dsc-6208.jpg',
    ],
    loopVideos: ['/videos/docare/film', '/videos/docare/app'],
    category: { en: 'Product & Interaction Design', it: 'Product & Interaction Design' },
    client: { en: 'Thesis / Research Project', it: 'Tesi di Laurea / Progetto di Ricerca' },
    duration: { en: '16 weeks', it: '16 settimane' },
    tags: {
      en: ['Product Design', 'IoT', 'Interaction Design', 'Mobile App'],
      it: ['Product Design', 'IoT', 'Interaction Design', 'App Mobile'],
    },
    description: {
      en: 'A connected ecosystem of devices that blends into the home to support thyroid patients through their complex morning routine — guiding medication intake and the strict fasting window afterwards through light and voice, without screens.',
      it: 'Un ecosistema di dispositivi connessi che si integra nell’arredamento domestico per supportare i pazienti con problemi alla tiroide nella complessa routine mattutina — guidando l’assunzione del farmaco e il rigido digiuno successivo tramite luce e voce, senza schermi.',
    },
    deliverables: {
      en: ['Domestic IoT ecosystem (Bedside & Kitchen Nodes)', 'Companion mobile app (iOS)', 'Voice & light interaction design', 'Local AI & privacy framework'],
      it: ['Ecosistema IoT domestico (Bedside & Kitchen Nodes)', 'Companion Mobile App (iOS)', 'Design dell’interazione vocale e luminosa', 'Local AI & Privacy Framework'],
    },
    sections: [
      {
        title: { en: 'Brief', it: 'Brief' },
        body: {
          en: 'The goal was to support patients with thyroid conditions through their complex morning routine. The real obstacle for these patients isn’t remembering to take the pill, but respecting the strict 45–60 minute fast that follows. A coffee taken too early cancels the drug’s effect. The brief asked for a system able to turn this invisible, frustrating wait into a guided domestic experience, making sure the treatment actually works.',
          it: 'L’obiettivo del progetto è supportare i pazienti con problemi alla tiroide nella loro complessa routine mattutina. Il vero ostacolo per questi pazienti non è ricordarsi di prendere la pillola, ma rispettare il rigido digiuno di 45–60 minuti successivi all’assunzione. Un semplice caffè bevuto troppo presto annulla l’effetto del farmaco. Il brief richiedeva di progettare un sistema in grado di trasformare questa attesa invisibile e frustrante in un’esperienza domestica guidata, assicurando che la cura avvenga correttamente.',
        },
      },
      {
        title: { en: 'Research & Challenges', it: 'Ricerca e Sfide' },
        body: {
          en: 'Research showed that reminder apps fail because patients hate interacting with screens right after waking. Often, in a hurry, they ruin the drug’s absorption by having breakfast too soon; when they later complain of chronic tiredness, they feel dismissed by doctors who tend to minimise the problem. The real design challenge became abandoning the smartphone screen: the interface had to move directly into the physical space of the home, guiding the user from bed to kitchen naturally and, finally, providing objective evidence of how their treatment is going.',
          it: 'La ricerca ha dimostrato che le app di promemoria falliscono perché i pazienti odiano interagire con gli schermi appena svegli. Spesso, per la fretta, rovinano l’assorbimento del farmaco facendo colazione troppo presto; quando poi lamentano stanchezza cronica, si sentono incompresi dai medici che tendono a minimizzare il problema. La vera sfida progettuale è diventata quindi abbandonare lo schermo dello smartphone: bisognava spostare l’interfaccia direttamente nell’ambiente fisico della casa, guidando l’utente dal letto alla cucina in modo naturale e fornendo, infine, prove oggettive sull’andamento della sua cura.',
        },
      },
      {
        title: { en: 'Concept & Solution', it: 'Concept e Soluzione' },
        body: {
          en: 'DoCare is an ecosystem of connected devices that blends into the furniture, accompanying the user without screens. The Bedside Tracker silently and automatically detects when the pill is taken, instantly starting the fasting countdown. The Kitchen Companion visually shows how much time is left before the wait ends: if the user tries to open the fridge or make a coffee too early, it steps in with a gentle voice guide to stop them. The Mobile App, detached from the morning routine, is used in free time: it turns the data collected at home into objective reports, giving the patient a clear document to show their doctor and prove the real effectiveness of the treatment.',
          it: 'DoCare è un ecosistema di dispositivi connessi che si integra nell’arredamento, accompagnando l’utente senza l’uso di schermi. Il Bedside Tracker, un dispositivo da comodino, rileva in modo silenzioso e automatico quando la pillola viene prelevata, avviando istantaneamente il calcolo del tempo di digiuno. Il Kitchen Companion, posizionato in cucina, mostra visivamente quanto tempo manca alla fine dell’attesa: se l’utente tenta di aprire il frigo o farsi un caffè prima del tempo, il dispositivo interviene con una guida vocale gentile per fermarlo. La Mobile App, slegata dalla routine mattutina, viene usata nel tempo libero: trasforma i dati raccolti in casa in report oggettivi, offrendo al paziente un documento chiaro da mostrare al medico per dimostrare la reale efficacia della cura.',
        },
      },
      {
        title: { en: 'Personality Design & Local AI', it: 'Personality Design e Local AI' },
        body: {
          en: 'The system’s voice and light are designed to feel gentle and reassuring, never alarming: DoCare accompanies, it doesn’t scold. To protect sensitive health data, the intelligence that governs reminders and interventions lives locally on the home devices, without sending personal information to the cloud — a Local AI & privacy framework that keeps care within the walls of the home.',
          it: 'La voce e la luce del sistema sono progettate per essere gentili e rassicuranti, mai allarmistiche: DoCare accompagna, non sgrida. Per proteggere dati sanitari sensibili, l’intelligenza che regola promemoria e interventi vive localmente sui dispositivi di casa, senza inviare informazioni personali nel cloud — un framework di Local AI e privacy che tiene la cura dentro le mura domestiche.',
        },
      },
    ],
  },
  // ── 11 MOVY ─────────────────────────────────────────────────────────────────
  {
    id: 11,
    slug: 'movy',
    title: 'Movy',
    num: '11',
    year: '2026',
    image: '/portfolio/movy/2-1.jpg',
    tools: ['Figma'],
    hasLocalGallery: true,
    localImages: [
      '/portfolio/movy/2-1.jpg',
      '/portfolio/movy/1-1.png',
      '/portfolio/movy/4.png',
      '/portfolio/movy/screen-home.png',
      '/portfolio/movy/screen-patient-profile.png',
      '/portfolio/movy/screen-program-configuration.png',
      '/portfolio/movy/screen-summary.png',
      '/portfolio/movy/1.png',
      '/portfolio/movy/2.png',
      '/portfolio/movy/3.png',
      '/portfolio/movy/3-1.png',
    ],
    loopVideos: ['/videos/movy/loop'],
    film: '/videos/movy/film',
    category: { en: 'Health & Interaction Design', it: 'Health & Interaction Design' },
    client: { en: 'Academic Project (SUPSI)', it: 'Progetto accademico (SUPSI)' },
    duration: { en: '16 weeks', it: '16 settimane' },
    tags: {
      en: ['UX Design', 'Interaction Design', 'AI', 'Healthcare'],
      it: ['UX Design', 'Interaction Design', 'AI', 'Healthcare'],
    },
    description: {
      en: 'Movy is an intelligent support system that connects patient and physiotherapist, extending rehabilitation beyond the walls of the clinic. Through an AI companion, it guides patients through their at-home exercises and synthesises structured insights for the professional — improving adherence and continuity of care, without ever replacing the therapeutic relationship.',
      it: 'Movy è un sistema di supporto intelligente che connette paziente e fisioterapista, estendendo la riabilitazione oltre i confini della clinica. Attraverso un compagno AI, il progetto accompagna i pazienti durante gli esercizi a casa e sintetizza insight strutturati per il professionista, migliorando l’aderenza al piano e la continuità di cura, senza mai sostituire la relazione terapeutica.',
    },
    deliverables: {
      en: ['Patient mobile app', 'Physiotherapist web dashboard', 'Conversational onboarding', 'AI-assisted programme generation', 'Adaptive scheduling'],
      it: ['App mobile per il paziente', 'Dashboard web per il fisioterapista', 'Onboarding conversazionale', 'Generazione dei programmi assistita da AI', 'Scheduling adattivo'],
    },
    sections: [
      {
        title: { en: 'Brief', it: 'Brief' },
        body: {
          en: 'Physiotherapy rehabilitation doesn’t end during the clinic session. Most of the recovery happens in the time between appointments, when the patient has to exercise on their own. The project was born to close this structural gap, caused by the lack of visibility on progress, difficulties, and adherence to the treatment plan once outside the studio.',
          it: 'La riabilitazione fisioterapica non si esaurisce durante la seduta in clinica. La maggior parte del recupero avviene nel tempo tra gli appuntamenti, quando il paziente deve esercitarsi in autonomia. Il progetto nasce per colmare questo gap strutturale, causato dalla mancanza di visibilità sui progressi, sulle difficoltà e sull’aderenza al piano terapeutico una volta fuori dallo studio.',
        },
      },
      {
        title: { en: 'Challenges', it: 'Sfide' },
        body: {
          en: 'The main challenge was designing an ecosystem able to address distinct needs. The system had to support the patient in staying consistent without adding cognitive load, and at the same time give the physiotherapist a clear view of progress, without turning rehabilitation into a job of continuous monitoring.',
          it: 'La sfida principale è stata progettare un ecosistema capace di affrontare bisogni distinti. Il sistema doveva supportare il paziente nel mantenere la costanza senza aumentare il carico cognitivo, e fornire al contempo al fisioterapista una visione chiara dei progressi, senza trasformare la riabilitazione in un lavoro di monitoraggio continuo.',
        },
      },
      {
        title: { en: 'Concept & Features', it: 'Concept e Funzionalità' },
        body: {
          en: 'Movy acts as an agentic companion that extends rehabilitation beyond the clinic, turning care into an experience of accompaniment. Conversational Onboarding starts the journey with a natural interaction that gathers the clinical context, personal goals, and the patient’s routine. AI-Assisted Programme Generation turns clinical prescriptions into standardised yet personalised exercise programmes, keeping clinical control in the physiotherapist’s hands. Adaptive Scheduling automatically monitors completion patterns to adapt the programme in real time, without requiring manual reprogramming.',
          it: 'Movy agisce come un compagno agentico che estende la riabilitazione oltre la clinica, trasformando la cura in un’esperienza di accompagnamento. L’Onboarding conversazionale avvia il percorso con un’interazione naturale che raccoglie il contesto clinico, gli obiettivi personali e la routine del paziente. La generazione dei programmi assistita da AI trasforma le prescrizioni cliniche in programmi di esercizi standardizzati ma personalizzati, mantenendo il controllo clinico nelle mani del fisioterapista. Lo scheduling adattivo monitora automaticamente i pattern di completamento per adattare il programma in tempo reale, senza richiedere una riprogrammazione manuale.',
        },
      },
    ],
  },
];

function pick<T extends string | string[]>(value: { en: T; it: T }, locale: Locale): T {
  return value[locale];
}

function resolve(raw: RawProject, locale: Locale): Project {
  return {
    id: raw.id,
    slug: raw.slug,
    title: raw.title,
    num: raw.num,
    year: raw.year,
    image: raw.image,
    localImages: raw.localImages,
    hasLocalGallery: raw.hasLocalGallery,
    loopVideos: raw.loopVideos,
    film: raw.film,
    tools: raw.tools,
    category: pick(raw.category, locale),
    client: pick(raw.client, locale),
    duration: pick(raw.duration, locale),
    tags: pick(raw.tags, locale),
    description: pick(raw.description, locale),
    deliverables: pick(raw.deliverables, locale),
    sections: raw.sections.map((s) => ({ title: pick(s.title, locale), body: pick(s.body, locale) })),
  };
}

export function getProjects(locale: Locale): Project[] {
  return RAW_PROJECTS.map((raw) => resolve(raw, locale));
}

export function getProject(slug: string, locale: Locale): Project | undefined {
  const raw = RAW_PROJECTS.find((proj) => proj.slug === slug);
  return raw ? resolve(raw, locale) : undefined;
}

/** All slugs, locale-independent — for generateStaticParams. */
export const PROJECT_SLUGS = RAW_PROJECTS.map((p) => p.slug);
