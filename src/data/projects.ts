import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    slug: "bommie-surf",
    title: "Bommie Surf",
    category: "Web Design",
    year: "2023",
    role: "UI/UX Designer",
    tools: ["Figma", "Illustrator", "After Effects"],
    tags: ["React", "WebGL", "D3.js"],
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=1000",
    desc: "A e-commerce mobile app to made the security for surfer more available.",
    content: `<div class="space-y-16">
      <div>
        <h3>Brief</h3>
        <p>Creare un e-commerce dedicato ai surfisti, con una piattaforma principale basata su un'app mobile che trasmetta un senso di maggiore sicurezza durante la pratica del surf.</p>
        <img src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=800" class="inline-img w-full h-96 object-cover mt-8" alt="Surf" />
      </div>
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h3>The Challenge</h3>
          <p>One of the main challenges was to integrate real-time data tracking without overwhelming the user. Surfers need quick information, not complex dashboards. We simplified the data visualization into easy-to-read, circular metrics that mimic the shape of waves.</p>
        </div>
        <img src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&q=80&w=600" class="inline-img w-full h-full object-cover" alt="Challenge" />
      </div>
      <div>
        <h3>Processo</h3>
        <p>Il progetto è stato sviluppato in diverse fasi. Inizialmente, abbiamo scelto il nome <b>"Bommie"</b>, ispirato al termine <i>"Bombora"</i>, che rappresenta una grande onda nel gergo surfistico.<br/><br/>Successivamente, abbiamo realizzato l'<b>ecosystem map</b> e la <b>flow chart</b>, per poi passare alla ricerca dei competitor e delle comparables. Abbiamo definito le <b>proto-personas</b> e identificato i take-out principali da includere nel progetto.<br/><br/>L'applicazione finale include una funzionalità premium che consente l'accesso a un <b>sistema SOS</b> con chiamate d'emergenza e videocamere installate nelle spiagge per monitorare la sicurezza. Abbiamo inoltre creato una pagina Instagram, il merchandising e sviluppato una parte del sito web.</p>
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" class="inline-img w-full h-80 object-cover mt-8" alt="Process" />
      </div>
      <div>
        <h3>Target</h3>
        <p>Il target principale sono i surfisti, ma il progetto si rivolge anche a scuole di surf e spiagge che potranno installare e sfruttare i sistemi di sicurezza offerti da Bommie.</p>
      </div>
    </div>`
  },
  {
    id: 2,
    slug: "box-soul",
    title: "Box Soul",
    category: "Tangible Interfaces",
    year: "2026",
    role: "Product Interaction Designer",
    tools: ["Arduino", "C++", "Fusion 360", "Stampa 3D", "Laser Cut"],
    tags: ["CSS3", "Figma", "Design System"],
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=1000",
    desc: "An object to helps Gen Z manage stress and emotions through tactile interaction.",
    content: `<div class="space-y-16">
      <div>
        <h3>The Brief</h3>
        <p>Design a physical product that helps young people manage their emotional wellbeing through tangible interaction.</p>
      </div>
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <img src="https://images.unsplash.com/photo-1583209814683-c023dd293cc6?auto=format&fit=crop&q=80&w=600" class="inline-img w-full h-full object-cover" alt="Box Soul" />
        <div>
          <h3>The Challenge</h3>
          <p>The main challenge was creating an intuitive physical interface that doesn't require screens or complex interactions, making emotional regulation accessible during moments of stress.</p>
        </div>
      </div>
      <div>
        <h3>The Concept</h3>
        <p>Box Soul is a companion device that responds to touch and pressure, providing calming feedback through light, vibration, and sound. It learns from user patterns to provide personalized comfort.</p>
        <img src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&q=80&w=1000" class="inline-img w-full h-80 object-cover mt-8" alt="Concept" />
      </div>
    </div>`
  },
  {
    id: 3,
    slug: "tata-matilda",
    title: "Tata Matilda",
    category: "Video Design",
    year: "2023",
    role: "Motion Designer",
    tools: ["After Effects", "Illustrator", "Premiere", "Procreate"],
    tags: ["Swift", "ARKit", "Firebase"],
    image: "https://images.unsplash.com/photo-1502082553048-f009c371b9b5?auto=format&fit=crop&q=80&w=1000",
    desc: "Ending titles for the movie Nanny McPhee. Designed to be playful and reminiscent of children's drawings.",
    content: `<div class="space-y-16">
      <div>
        <h3>The Brief</h3>
        <p>The project involves the creation of the ending credits for the movie <i>Nanny McPhee</i> (2005 version).</p>
      </div>
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <img src="https://images.unsplash.com/photo-1635324234782-3233b8a40237?auto=format&fit=crop&q=80&w=600" class="inline-img w-full h-full object-cover" alt="Tata Matilda" />
        <div>
          <h3>Video Dynamics</h3>
          <p>From a graphic design perspective, the video features <b>2D style elements</b> with uncertain strokes and color palettes reminiscent of <b>children's drawings</b>.<br/><br/>Furthermore, the subjects used include: windows, doors, and <b>iconic objects</b> highlighted within the film. In this case, the credit sequences should be viewed as a playful journey retracing the film's plot.</p>
        </div>
      </div>
      <div>
        <h3>Sequence Concept</h3>
        <p>The path is defined by elements moving from one zone of the scene to another. It is precisely these elements that recount the events unfolding within <i>Nanny McPhee</i>.<br/><br/>Various elements evoke nostalgic moments in contrast to the cheerful ones recalling the <b>disasters caused by the children</b>. To provide a break in the narration, a characteristic <b>dark moment</b> is also inserted.</p>
        <img src="https://images.unsplash.com/photo-1531685218760-8fddbc2427a7?auto=format&fit=crop&q=80&w=1000" class="inline-img w-full h-80 object-cover mt-8" alt="Sequence" />
      </div>
    </div>`
  },
  {
    id: 4,
    slug: "krono-graphic",
    title: "Krono Graphic",
    category: "Board Game",
    year: "2024",
    role: "Graphic Designer",
    tools: ["Illustrator", "InDesign", "Photoshop"],
    tags: ["Vue", "GSAP", "Three.js"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
    desc: "A board game by a designer for designers! Test your kerning skills.",
    content: `<div class="space-y-16">
      <div>
        <h3>Brief</h3>
        <p>The goal of the project is to tell the story of graphic design through graphic design itself.</p>
      </div>
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <img src="https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?auto=format&fit=crop&q=80&w=600" class="inline-img w-full h-full object-cover" alt="Krono" />
        <div>
          <h3>Theme</h3>
          <p>I tried to build my thesis project by exploring time and its changes, hence the name <i>Krono</i>, inspired by <i>Chronos</i>, "the passing of time," combined with the word <i>Graphic</i>. As a medium, I chose the board game, one of the oldest methods for learning notions while having fun.<br/><br/>Starting from this concept, I decided to transmit and disseminate the history of graphic design through this communicative medium.</p>
        </div>
      </div>
      <div>
        <h3>Game Design</h3>
        <p>To create the game, I designed the <b>logo</b>, the <b>corporate identity</b>, the <b>packaging</b>, the <b>rulebook</b>, the <b>scorepad</b>, and the <b>cards</b>. The cards feature an image of a graphic work on one side and the date on the other, representing the focal point of this game based on the timeline of graphic works. Each card also includes three key pieces of information: the <b>name of the designer</b>, the <b>work</b>, and the <b>client</b>.<br/><br/>To develop the game, I first conducted research to determine which historical periods to consider, starting from <b>1875</b>, the year poster art and visual advertising began to define themselves as graphic design.</p>
        <img src="https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?auto=format&fit=crop&q=80&w=1000" class="inline-img w-full h-80 object-cover mt-8" alt="Game Design" />
      </div>
      <div>
        <h3>Target</h3>
        <p>The target audience is specific, as it is a game designed for graphic designers. However, the idea is that it can also be distributed during open days at graphic design schools and adapted to different fields, such as photography, interior design, and other sectors related to the creative world.</p>
      </div>
    </div>`
  },
  {
    id: 5,
    slug: "unspoken",
    title: "Unspoken",
    category: "Editorial Design",
    year: "2024",
    role: "Editorial Designer",
    tools: ["InDesign", "Procreate", "Illustrator"],
    tags: ["InDesign", "Typography", "Print"],
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000",
    desc: "Un progetto editoriale che dà voce al silenzio.",
    content: `<div class="space-y-16">
      <div>
        <h3>Brief</h3>
        <p>Creation of a monthly magazine with a free theme, including the design of covers for issue 1 and issue 2.</p>
      </div>
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600" class="inline-img w-full h-auto object-cover" alt="Unspoken" />
        <div>
          <h3>Theme</h3>
          <p>The goal of this magazine is to allow young people to inform themselves without shame about sex, its precautions, and the scientific aspects related to it. Issue zero, the one fully realized, is dedicated precisely to "taboos," and we decided to divide it into different sections to tell the story in the best way possible.<br/><br/>The name of the magazine, <i>Unspoken</i>, aims precisely to highlight what we instead want to tell openly.</p>
        </div>
      </div>
      <div>
        <h3>Approach</h3>
        <p>We chose a <b>colloquial tone of voice</b>, but with scientific traits. In some pages, in fact, there are puns and jokes, as in the case of the names attributed to sex toys. Everything is accompanied by illustrations that make a topic usually considered embarrassing something normal and everyday.<br/><br/>To realize this project, we conducted various researches and involved several people to interview, to allow young people to compare notes and obtain more detailed information on the topics covered.</p>
        <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1000" class="inline-img w-full h-80 object-cover mt-8" alt="Approach" />
      </div>
      <div>
        <h3>Target</h3>
        <p>The target audience for this magazine ranges from 14 to 25/30 years old, although it is not so restricted and can include a wider audience.</p>
      </div>
    </div>`
  },
  {
    id: 6,
    slug: "sospese",
    title: "Sospese",
    category: "Exhibition Design",
    year: "2023",
    role: "Spatial Designer",
    tools: ["Cinema 4D", "Illustrator", "Photoshop"],
    tags: ["Rhino", "Keyshot", "Spatial"],
    image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=1000",
    desc: "Allestimento immersivo che sfida la gravità.",
    content: `<div class="space-y-16">
      <div>
        <h3>Brief</h3>
        <p>The hypothesis is to set up an exhibition themed around the female image, told through 10 statues in a millennial chronology ranging from prehistory, in ten stages, up to contemporary times.</p>
      </div>
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <img src="https://images.unsplash.com/photo-1497211419994-1423958a9668?auto=format&fit=crop&q=80&w=600" class="inline-img w-full h-full object-cover" alt="Sospese" />
        <div>
          <h3>Exhibition Concept</h3>
          <p>In a historical period where the theme of women is at the center of discussions, where they are not yet considered equal to men and, finally, in an era where they must be afraid to leave the house due to the lack of respect shown towards them, the exhibition <i>"Sospese, La storia dell'arte in 10 donne"</i> (Suspended, Art History in 10 Women) aims to trigger a reaction, an unconscious reasoning in the viewer.<br/><br/>Through the use of large conical structures and a dark environment that contrasts with the beams of light exiting the structures, people experiencing the exhibition will be projected into a space-time limbo that is broken the moment they enter the individual islands.</p>
        </div>
      </div>
      <div>
        <h3>Experience</h3>
        <p>The works of art will be narrated through videos, and spectators will be immersed in the context through speakers playing evocative sounds typical of the era and geographical area to which the statues belong.<br/><br/>The goal is to recount, through art, the historical and social context in which women, direct or indirect subjects of the works, lived. The mental path we want to trigger is: the women in question were treated in that way, what about today? What role and what rights do they have?</p>
        <img src="https://images.unsplash.com/photo-1507643179173-617d65455131?auto=format&fit=crop&q=80&w=1000" class="inline-img w-full h-80 object-cover mt-8" alt="Experience" />
      </div>
    </div>`
  },
  {
    id: 7,
    slug: "alien-save-the-queen",
    title: "Alien Save The Queen",
    category: "Data Visualization",
    year: "2025",
    role: "Interaction Designer",
    tools: ["Gemini", "Spread Sheet", "Illustrator", "Figma"],
    tags: ["Vibe Coding", "P5.js", "Data Art"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
    desc: "Un'esplorazione dati trasformata in arte visiva interattiva.",
    content: `<div class="space-y-16">
      <div>
        <h3>The Brief</h3>
        <p>Visualize a complex dataset about alien sightings in an engaging and artistic way that tells a compelling story.</p>
      </div>
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h3>The Challenge</h3>
          <p>Handling massive datasets while maintaining visual clarity and artistic expression. The goal was to find patterns in chaos and present them beautifully.</p>
        </div>
        <img src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80&w=600" class="inline-img w-full h-full object-cover" alt="Data Viz" />
      </div>
      <div>
        <h3>Data as Art</h3>
        <p>Using Vibe Coding algorithms and P5.js, we transformed raw data into flowing, organic visualizations that invite exploration and discovery.</p>
        <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=1000" class="inline-img w-full h-80 object-cover mt-8" alt="Data Art" />
      </div>
    </div>`
  },
  {
    id: 8,
    slug: "lumina",
    title: "Lumina",
    category: "Brand Identity",
    year: "2024",
    role: "Brand Designer",
    tools: ["Illustrator", "After Effects", "Photoshop"],
    tags: ["After Effects", "Illustrator", "Branding"],
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000",
    desc: "Identità dinamica per un brand tech emergente.",
    content: `<div class="space-y-16">
      <div>
        <h3>The Brief</h3>
        <p>Create a dynamic brand identity for an emerging tech company that conveys innovation, trust, and forward-thinking design.</p>
      </div>
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <img src="https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=600" class="inline-img w-full h-full object-cover" alt="Lumina Brand" />
        <div>
          <h3>The Challenge</h3>
          <p>Developing a visual system that works across digital and physical touchpoints while maintaining consistency and memorability.</p>
        </div>
      </div>
      <div>
        <h3>Dynamic Branding</h3>
        <p>Lumina is a brand that never stays still. The identity system uses generative algorithms to create infinite variations while maintaining brand recognition.</p>
        <img src="https://images.unsplash.com/photo-1555449377-5463130a50c0?auto=format&fit=crop&q=80&w=1000" class="inline-img w-full h-80 object-cover mt-8" alt="Dynamic Brand" />
      </div>
    </div>`
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
