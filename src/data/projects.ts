export interface ProjectSection {
  title: string;
  body: string;
}

export interface Project {
  id: number;
  slug: string;
  num: string;
  title: string;
  category: string;
  year: string;
  image: string;
  client: string;
  duration: string;
  tags: string[];
  description: string;
  deliverables: string[];
  tools: string[];
  sections: ProjectSection[];
  /** Ordered gallery images. [0] hero, [1]/[2] paired feature, [3..] carousel/strip. */
  localImages?: string[];
  /** True when localImages are real project mockups (vs. remote placeholders). */
  hasLocalGallery?: boolean;
}

/** Local mockups copied into /public/portfolio. */
const p = (file: string) => `/portfolio/${file}`;

// Remote placeholder photography — swapped for real shots per project later.
const PH = {
  surf1: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=900&h=700&fit=crop&auto=format',
  surf2: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=900&h=700&fit=crop&auto=format',
  surf3: 'https://images.unsplash.com/photo-1530870110042-98b2cb110834?w=900&h=700&fit=crop&auto=format',
  wood1: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&h=700&fit=crop&auto=format',
  calm1: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&h=700&fit=crop&auto=format',
  calm2: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&h=700&fit=crop&auto=format',
};

export const PROJECTS: Project[] = [
  // ── 01 BOMMIE SURF ──────────────────────────────────────────────────────────
  {
    id: 1,
    slug: 'bommie-surf',
    num: '01',
    title: 'Bommie Surf',
    category: 'Web & App Design',
    year: '2024',
    image: p('iPhone_16_Pro.jpg'),
    client: 'Bommie Surf',
    duration: '12 weeks',
    tags: ['UX Design', 'Mobile App', 'E-commerce', 'Branding'],
    description:
      "A mobile-centric e-commerce platform dedicated to surfers of all levels. The platform offers high-quality surf products alongside a Premium tier featuring a direct SOS system, live webcams, and weather maps — designed to ensure a safe and exciting sports experience.",
    deliverables: [
      'Brand identity & logo system',
      'Mobile app (iOS & Android)',
      'Web e-commerce platform',
      'Instagram editorial plan',
      '3-year growth roadmap',
    ],
    tools: ['Figma', 'After Effects', 'Illustrator'],
    hasLocalGallery: true,
    localImages: [
      p('iPhone_16_Pro.jpg'),
      p('Risorsa_1_1.jpg'),
      p('AppBommie.png'),
      p('SitoWeb.png'),
      p('Free_iPhone_11_Pro_Mockup_1.png'),
      PH.surf1,
      PH.surf2,
      PH.surf3,
    ],
    sections: [
      { title: 'Brief', body: "The goal was to create a mobile-centric e-commerce platform dedicated to surfers of all levels — from beginners to professionals, as well as surf schools and beach facilities utilizing the brand's safety systems. The platform needed to feel as energetic and community-driven as the sport itself." },
      { title: 'Challenges', body: 'The primary challenge was designing an ecosystem capable of addressing a highly diverse audience. It needed to cater equally to individual surfers seeking gear, to professionals looking for performance equipment, and to surf schools managing safety protocols for groups. A single interface had to serve all three without feeling generic to any.' },
      { title: 'Concept & Branding', body: "The team chose the name \"Bommie,\" inspired by surfing slang for a large wave that breaks over a submerged reef. The logo incorporates two 'm' letters designed to mimic ocean waves, paired with the Shaka greeting hand gesture woven into the letterforms — all anchored by the bold payoff \"Extremize your surf\" in gold." },
      { title: 'Research & UX', body: "The structural phase included competitor research and the creation of proto-personas to understand user needs across skill levels. Temporal ecosystem maps and detailed flowcharts were developed to define the app's logical flow and hierarchy. The Premium tier — with its SOS system, surf spot webcams, and real-time weather maps — was validated through user testing with active surfers." },
    ],
  },
  // ── 02 UNSPOKEN ─────────────────────────────────────────────────────────────
  {
    id: 2,
    slug: 'unspoken',
    num: '02',
    title: 'Unspoken',
    category: 'Editorial Design',
    year: '2024',
    image: p('Magazine_Mockup_1.png'),
    client: 'Academic Project',
    duration: '10 weeks',
    tags: ['Editorial', 'Magazine', 'Layout', 'Illustration'],
    description:
      'A monthly magazine designed to dismantle taboos by offering young people a shame-free platform to learn about sex, safety, and related scientific aspects. The editorial identity balances a conversational tone with scientific accuracy — using wordplay, humor, and original illustration to reframe the subject as normal, everyday reality.',
    deliverables: [
      'Issue Zero — complete layout',
      'Cover design Issue 1',
      'Cover design Issue 2',
      'Editorial identity system',
      'Illustration direction',
    ],
    tools: ['InDesign', 'Procreate'],
    hasLocalGallery: true,
    localImages: [
      p('Magazine_Mockup_1.png'),
      p('ArtaleBaldiniVerdicaro_Tabu_.png'),
      p('Magazine_Mockup_3.png'),
      p('ArtaleBaldiniVerdicaro_Tabu_2.png'),
      p('Magazine_Mockup_6.png'),
      p('ArtaleBaldiniVerdicaro_Tabu_3.png'),
      p('Magazine_Mockup_7.png'),
      p('ArtaleBaldiniVerdicaro_Tabu_4.png'),
    ],
    sections: [
      { title: 'Brief', body: 'The project required the conceptualization and design of a monthly magazine based on an open theme. The deliverable included the complete layout of Issue Zero alongside the cover designs for Issues 1 and 2. The only constraint: the result had to feel like a real, commercially viable publication.' },
      { title: 'Concept & Tone', body: 'Named Unspoken — quello che non si dice del sesso — the magazine aims to dismantle taboos by offering young people a shame-free space to learn about sex, safety precautions, and their scientific dimensions. The editorial identity deliberately balances a conversational, peer-to-peer approach with factual accuracy: humor and wordplay sit alongside Freud, consent frameworks, and product guides, treating the subject as a normal, everyday reality rather than a source of embarrassment.' },
      { title: 'Process & Target', body: 'The content strategy was driven by extensive research and direct interviews with the target demographic, ensuring the magazine addresses real questions with detailed, relatable information. While primarily aimed at readers aged 14 to 30, the accessible format — bold typography, editorial illustration, clear information hierarchy — is designed to engage a much broader audience. Each article balances editorial playfulness with editorial rigour.' },
      { title: 'Issue Zero', body: 'Issue Zero — titled Tabù — covers consent and healthy relationships, the psychosexual development of desire (Pillole di scienza), sex-themed board games reviewed as consumer products (Giochi da tavolo ispirati al sesso), and a sex toy guide written with the tone of a lifestyle product review. The issue establishes the full editorial grammar: psychedelic display type, clean body columns, original character illustration, and a recurring cast of icons and infographics.' },
    ],
  },
  // ── 03 KRONO GRAPHIC ────────────────────────────────────────────────────────
  {
    id: 3,
    slug: 'krono-graphic',
    num: '03',
    title: 'Krono Graphic',
    category: 'Brand & Game Design',
    year: '2024',
    image: p('MockUp_PatternCRTE.png'),
    client: 'Thesis Project',
    duration: '16 weeks',
    tags: ['Brand Identity', 'Packaging', 'Game Design', 'App Design'],
    description:
      'A board game that tells the history of graphic design through graphic design. Combining "Chronos" — the passage of time — with "Graphic," the project delivers a complete visual ecosystem: logo, brand identity, packaging, playing cards, rulebook, scorepad, and a digital companion app.',
    deliverables: [
      'Brand identity & logo',
      'Game box packaging',
      'Playing card deck',
      'Rulebook design',
      'Scorepad',
      'Digital companion app (iOS)',
    ],
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
    sections: [
      { title: 'Brief', body: 'The core objective of this thesis project is to tell the story of graphic design through graphic design itself. A board game was chosen as the medium — a traditional and engaging format for educational divulgation, capable of making visual culture accessible and entertaining for a wide audience.' },
      { title: 'Concept & Name', body: 'The project explores the evolution of visual communication, combining the concept of Chronos — the passage of time — with the word Graphic to create the name Krono. Historical research began from 1875, the era that defined modern poster design and visual advertising, tracing the discipline\'s development through to the present day.' },
      { title: 'The Cards', body: 'The core gameplay is built around a historical timeline. Each playing card features a prominent graphic artwork on its face — a Porsche logo, a political manifesto, a film poster, a landmark campaign — while the reverse reveals key data: the year, the designer\'s name, the artwork title, and the client. Players must place cards correctly on the timeline to score points.' },
      { title: 'Digital Extension', body: "The physical game is extended by a companion app offering offline solo play, online multiplayer, and a league system with ranked tiers. The app mirrors the board game's visual identity — the wavy red pattern, the bold white logotype — and adds player profiles, card collections, and a global leaderboard. The digital layer transforms a classroom tool into a living, competitive platform for design culture." },
    ],
  },
  // ── 04 THE MYTHOLOGICAL TRANSCEIVER ─────────────────────────────────────────
  {
    id: 4,
    slug: 'the-mythological-transceiver',
    num: '04',
    title: 'The Mythological Transceiver',
    category: 'Prototyping & Interaction',
    year: '2026',
    image: p('Gemini_Generated_Image_8209lu8209lu8209.png'),
    client: 'SUPSI — Academic Project',
    duration: '8 weeks',
    tags: ['Physical Prototyping', 'Installation', 'Raspberry Pi', 'Concept Art'],
    description:
      'An immersive installation that translates the invisible into tangible visual experience — exploring the intersection of modern 5G technology and archaic Alpine folklore. The device repurposes the camera as a sensory extension capable of detecting signals beyond the visible spectrum, converting digital noise and data glitches into the physical footprints of supernatural manifestations.',
    deliverables: [
      'Physical device (Fusion 360 + fabrication)',
      'Raspberry Pi signal system',
      'Oscilloscope & thermal camera integration',
      'Exhibition installation',
      'Project editorial',
    ],
    tools: ['Fusion 360', 'Raspberry Pi', 'Coding', 'Hand work'],
    hasLocalGallery: true,
    localImages: [
      p('Gemini_Generated_Image_8209lu8209lu8209.png'),
      p('Screenshot_2026-06-21_alle_12.56.59.png'),
      p('IMG_0291.jpg'),
      p('IMG_0292.jpg'),
      p('IMG_0329.jpg'),
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&h=700&fit=crop&auto=format',
    ],
    sections: [
      { title: 'Brief', body: 'The objective is to translate the abstract and the invisible into a tangible visual experience. The work explores the intersection between modern technology and archaic folklore, utilizing the narrative framework of 5G conspiracy theories to spark a deeper reflection on human perception. The challenge: creating an aesthetic bridge between contemporary electromagnetic frequencies and the dormant legends of the Ticinese Alps.' },
      { title: 'Process', body: "We approached the camera not as a recording tool, but as a sensory extension device capable of detecting signals beyond the visible spectrum. The design process focused on translating the conceptual 'burning' of ethereal entities by high-frequency waves into a specific visual language. By intentionally manipulating signal interference, we converted digital noise and data glitches into the physical footprints of supernatural manifestations." },
      { title: 'The Device', body: 'The physical object is a vertical pole mounting three active screens: an oscilloscope display rendering live sine wave data, a thermal imaging camera detecting heat signatures, and a data telemetry readout. Built with Fusion 360 for structural design, hand fabrication for assembly, and a Raspberry Pi as the computational core, the object exists at the exact boundary between scientific instrument and ritual artifact.' },
      { title: 'Outcome', body: 'The result is an immersive installation that elevates technological paranoia into a contemporary mythology. By visualizing the invisible friction between the digital and the spiritual, the Transceiver offers a unique perspective on how modern signals reshape our perception of the environment — turning electronic distortion into a compelling narrative of forced spiritual awakening.' },
    ],
  },
  // ── 05 SOUL BOX ─────────────────────────────────────────────────────────────
  {
    id: 5,
    slug: 'soul-box',
    num: '05',
    title: 'Soul Box',
    category: 'Prototyping & Interaction',
    year: '2025',
    image: p('Orizzontale-1.jpg'),
    client: 'Academic Project',
    duration: '10 weeks',
    tags: ['Arduino', 'Physical Computing', 'Interaction Design', 'Laser Cut'],
    description:
      'A mindfulness tool designed to help users disconnect from stress. Enclosed in a 25×25 cm cubic structure, Soul Box mediates between technology and psychological well-being through nine physical pillars representing core life values — each triggering an immersive sequence of ambient lights and sounds when placed inside the cube.',
    deliverables: [
      'Physical cube device (25×25 cm)',
      '9 laser-engraved wooden pillars',
      'Arduino interaction system',
      'Ambient light & sound sequences',
      'Fusion 360 structural design',
    ],
    tools: ['Arduino', 'Fusion 360', 'Laser Cut', '3D Printing'],
    hasLocalGallery: true,
    localImages: [
      p('Orizzontale-1.jpg'),
      p('Orizzontale-4.jpg'),
      p('Orizzontale-2.jpg'),
      p('Orizzontale-3.jpg'),
      p('Verticale-5.jpg'),
      PH.calm1,
      PH.wood1,
      PH.calm2,
    ],
    sections: [
      { title: 'Brief', body: 'Design and development of a tangible interactive device based on Arduino technology. The objective was to create a physical object capable of mediating between technology and psychological well-being, enclosed in a 25×25 cm cubic structure acting as a multi-sensory interface.' },
      { title: 'Concept', body: 'Soul Box is a mindfulness tool designed to help users disconnect from stress. The experience revolves around nine physical pillars representing core life values — Love, Family, Health, and six others identified through user research. Placing a pillar inside the cube triggers an immersive sequence of ambient lights and sounds, guiding the user into a meditative state. The physical act of depositing a value into the box symbolizes making space for what truly matters in daily life.' },
      { title: 'Research & Process', body: 'Research identified the 9 fundamental life values through user interviews and surveys. Prototyping focused on laser-engraved wooden pillars with unique tactile textures corresponding to their specific themes — each pillar is immediately distinguishable by touch alone, without needing to read labels. The interaction is intentionally slow and analog: powered by Arduino, the system resists the impatience of digital interfaces.' },
      { title: 'Interaction', body: 'The physical act of placing a pillar into the opening of the cube is the entire interaction. There are no buttons, no screens, no menus. The RFID chip embedded in each pillar identifies which value has been deposited, and the Arduino system responds with a unique combination of warm LED lighting and a curated ambient sound sequence. The ritual slowness of the interaction is the design.' },
    ],
  },
  // ── 06 TATA MATILDA ─────────────────────────────────────────────────────────
  {
    id: 6,
    slug: 'tata-matilda',
    num: '06',
    title: 'Tata Matilda',
    category: 'Motion & Video',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=900&h=700&fit=crop&auto=format',
    client: 'Academic Project',
    duration: '6 weeks',
    tags: ['Motion Graphics', 'After Effects', 'Illustration', 'Title Design'],
    description:
      'Animated ending titles for the 2005 film Nanny McPhee (Tata Matilda). The sequence adopts a charming 2D aesthetic with irregular hand-drawn strokes and children\'s-drawing color palettes — conceived as a playful journey that retraces the film\'s plot through elements moving dynamically across the screen.',
    deliverables: [
      'Animated title sequence',
      'Frame-by-frame illustration',
      'Motion storyboard',
      'Sound-synced animation',
      'Final export (DCP)',
    ],
    tools: ['Procreate', 'After Effects', 'Illustrator', 'Photoshop'],
    localImages: [
      'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1615387879035-c38e73f99a9d?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1464275830024-d8a7c22de9c5?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1502014822147-9f0e4a4f1b8f?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=900&h=700&fit=crop&auto=format',
    ],
    sections: [
      { title: 'Brief', body: 'The project required the conceptualization and design of animated ending titles for the 2005 film Nanny McPhee (Tata Matilda). The deliverable included the complete animated sequence — from the first credit to the last — designed to feel like a natural, joyful epilogue to the film\'s visual world.' },
      { title: 'Visual Style', body: "The graphic design adopts a charming 2D aesthetic characterized by irregular, hand-drawn strokes and color palettes reminiscent of children's drawings. The compositions prominently feature iconic objects, windows, and doors that are central to the movie's setting — recalling the Victorian domestic chaos of the Brown household without quoting it directly." },
      { title: 'Motion & Narrative', body: "Conceived as a 'playful journey,' the title sequence retraces the movie's plot through elements moving dynamically across the screen. The visual storytelling relies on these moving elements to create a rhythm that contrasts nostalgic and cheerful moments, often illustrating the children's mischievous disasters. To add depth and break the narrative flow, a characteristic dark moment is intentionally integrated into the sequence." },
      { title: 'Process', body: "The sequence was illustrated frame by frame in Procreate, establishing the hand-drawn quality before moving into After Effects for animation and compositing. Illustrator and Photoshop were used for asset refinement and color work. The final pacing was calibrated against the film's closing musical theme, ensuring that key visual beats land on rhythmic accents in the score." },
    ],
  },
  // ── 07 SOSPESE ──────────────────────────────────────────────────────────────
  {
    id: 7,
    slug: 'sospese',
    num: '07',
    title: 'Sospese',
    category: 'Exhibition Design',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=900&h=700&fit=crop&auto=format',
    client: 'Academic Project',
    duration: '8 weeks',
    tags: ['Exhibition Design', 'Spatial Design', 'Cinema 4D', 'Lighting'],
    description:
      'Exhibition design for a showcase dedicated to the evolution of the female image across 10 statues, tracing a chronological journey from prehistory to the contemporary era. The spatial narrative immerses visitors in a space-time limbo — darkness interrupted by crisp beams of light from large conical structures, each defining an isolated island for a single artwork.',
    deliverables: [
      'Spatial layout & floor plan',
      '10 lighting cone structures',
      'Per-era video content',
      'Soundscape design',
      'Cinema 4D visualizations',
    ],
    tools: ['Cinema 4D', 'Illustrator'],
    localImages: [
      'https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1580136607897-b66bf3eff5b5?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1549887534-1541e9326642?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1561485132-59468537c95d?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1565438978212-89f3f7e2ab03?w=900&h=700&fit=crop&auto=format',
    ],
    sections: [
      { title: 'Brief', body: 'Exhibition design for a showcase dedicated to the evolution of the female image. The spatial narrative explores this transformation through 10 statues, tracing a chronological journey from prehistory to the contemporary era — each piece a document of how women were seen, idealized, and objectified across time and culture.' },
      { title: 'Concept', body: 'In an era where women\'s roles, rights, and safety remain critical and debated issues, Sospese — Suspended — invites profound reflection. The title refers both to the statues physically suspended in space and to the unresolved question they pose: how were these women treated in the past, and what is their condition today? Through art, the exhibition aims to trigger an unconscious dialogue within the viewer, allowing history to speak without commentary.' },
      { title: 'Spatial Experience', body: 'The layout projects the visitor into a space-time limbo: an environment immersed in near-total darkness, in sharp contrast with the crisp beams of light emitted by large conical structures. These shapes define dedicated islands for the individual artworks. The cone becomes a threshold — outside, isolation and silence; inside, a complete sensory world.' },
      { title: 'Sensory Design', body: 'Upon entering each illuminated island, the isolation breaks to make way for an immersive narrative: video displays and evocative soundscapes — specifically designed for the era and geographical area of each statue — envelop the viewer in a multisensory and emotional experience. A Minoan fertility figure receives a different sonic world than a Baroque allegory or a 1970s feminist sculpture. The sound and image never explain; they contextualize.' },
    ],
  },
  // ── 08 MIX&MATCH ────────────────────────────────────────────────────────────
  {
    id: 8,
    slug: 'mix-match',
    num: '08',
    title: 'Mix & Match',
    category: 'Brand & Packaging',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=900&h=700&fit=crop&auto=format',
    client: 'Illy × Francesco Apreda',
    duration: '8 weeks',
    tags: ['Brand Identity', 'Packaging', 'Advertising', 'Social Media'],
    description:
      'A new product line for Illy reimagining coffee as a culinary spice. Developed in collaboration with chef and Illy ambassador Francesco Apreda, the line introduces two food products — a ready-to-use seasoning pouch and a versatile spice mix — alongside a complete brand identity, packaging system, and cross-promotional marketing strategy.',
    deliverables: [
      'Logo & brand identity',
      'Packaging (2 SKUs)',
      'Advertising materials',
      'Exhibition stand design',
      'Social media presence',
    ],
    tools: ['Illustrator', 'Cinema 4D', 'Photoshop'],
    localImages: [
      'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1543353071-087092ec393a?w=900&h=700&fit=crop&auto=format',
    ],
    sections: [
      { title: 'Brief', body: "The assignment required conceptualizing and designing a new product line for the Illy brand, with a primary focus on brand image and packaging design. The challenge was to extend Illy's premium positioning into an entirely new product category without diluting the brand's identity or confusing its existing coffee audience." },
      { title: 'Concept', body: 'The project is built around an innovative premise: stepping away from tradition to reimagine coffee as a culinary spice. Developed in collaboration with chef and Illy ambassador Francesco Apreda, the strategy introduces two new food products. The first is a ready-to-use seasoning pouch blending coffee, whole salt, and pink pepper; the second is a versatile spice mix designed to enhance everyday meals — from pasta to grilled proteins.' },
      { title: 'Brand Identity', body: "The Mix & Match name captures both the product logic (combining coffee with other flavors) and the brand's collaborative spirit (Illy matched with Apreda). The visual identity borrows Illy's disciplined red and white language, then opens it up with warmer, culinary textures — grain, salt crystals, pepper — rendered in a clean contemporary system. The packaging uses die-cut windows to reveal the product's texture as part of the design." },
      { title: 'Strategy & Outcome', body: "Beyond the physical packaging, the project integrates a cross-promotional marketing strategy offering reciprocal discounts between Illy products and Chef Apreda's restaurant. The final deliverable encompasses the complete Mix & Match brand identity — logo, advertising materials, exhibition stands, and a dedicated social media presence — designed to fully support the product launch across retail, hospitality, and digital channels." },
    ],
  },
  // ── 09 ZOETROPE ─────────────────────────────────────────────────────────────
  {
    id: 9,
    slug: 'zoetrope',
    num: '09',
    title: 'Zoetrope',
    category: 'Prototyping & Interaction',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=900&h=700&fit=crop&auto=format',
    client: 'Academic Project',
    duration: '10 weeks',
    tags: ['Laser Cut', '3D Printing', 'Raspberry Pi Pico', 'Fusion 360'],
    description:
      'A functional reinvention of the historical zoetrope optical toy — transformed into an interactive device that blends analog mechanics, digital fabrication, and modern electronics. The final object offers dual-mode interaction: a mechanical side wheel for manual rotation control and a front button panel managing volume, track playback, and multimedia functions synchronized to the optical illusion.',
    deliverables: [
      'Laser-cut outer cylinder',
      '3D-printed base & mechanics',
      'Raspberry Pi Pico integration',
      'Potentiometer & speaker system',
      'Front button control panel',
    ],
    tools: ['Laser Cut', 'Fusion 360', '3D Printing', 'Arduino'],
    localImages: [
      'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1565515267236-c06a0e9f837f?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=900&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=900&h=700&fit=crop&auto=format',
    ],
    sections: [
      { title: 'Brief & Challenge', body: 'The project required designing and building a functional object using laser cutting, 3D printing, and microcontroller integration. The core challenge was to reinvent a historical optical toy — the zoetrope — transforming it into an interactive device that seamlessly blends analog mechanics, digital fabrication, and modern electronics.' },
      { title: 'Process', body: "The process began with rough cardboard prototyping to study the mechanical connections before committing to final materials. Extensive laser-cutting tests followed to perfect the outer cylinder's proportions and slit spacing. The entire system was modeled in Fusion 360, building outward from the rotating cylinder and inner mechanisms to the final outer casing. Through iterative testing, hardware was optimized: initially 3D-printed bearings were replaced with purchased hardware to guarantee a perfectly stable rotation." },
      { title: 'Construction', body: "The base, internal mechanics, and side control wheel were 3D printed for structural precision and repeatability. The outer cylinder was laser-cut, its slits calibrated to the animation's frame count and the motor's RPM range. A full-black finish was chosen across all surfaces to maximize visual contrast — ensuring the internal animation strip reads cleanly during rotation without light bleed or surface reflection competing with the illusion." },
      { title: 'Outcome', body: 'The final device is powered by a Raspberry Pi Pico connected to a potentiometer and speakers, synchronizing the optical illusion with an audio component — animation and sound locked together. Users engage via a mechanical side wheel for manual rotation speed control and a front button panel to manage multimedia functions: volume, track selection, and playback. The object exists simultaneously as a precision-engineered mechanism and a kinetic sculpture.' },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((proj) => proj.slug === slug);
}
