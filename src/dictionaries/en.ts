// English dictionary — source of truth for the Dictionary type.
// Plain (non-const) object so field types widen to string, letting it.ts match.
export const en = {
  nav: {
    work: 'Work',
    contact: 'Contact',
    switchLanguage: 'Switch language',
  },
  footer: {
    contact: 'Contact',
  },
  home: {
    hero: {
      eyebrow: 'Graphic & Interaction Designer',
      intro:
        'Dynamic and energetic designer I thrive on connecting with new people and believe in active listening as a catalyst for continuous growth. Currently exploring prototyping and interaction design at SUPSI.',
      cta: 'Selected Work',
    },
    projects: {
      label: 'Selected Projects',
      viewAll: 'View all projects →',
    },
    about: {
      label: 'About',
      heading: 'I am Chiara Baldini.',
      p1: 'A dynamic and energetic designer with a passion for connecting ideas, people, and form. I firmly believe in active listening as a catalyst for continuous growth, every project starts with genuinely understanding the person I’m designing for.',
      p2: 'My journey began at the Boccioni Multimedia Art High School and was solidified with a Bachelor’s in Graphic Design from IED Milano. I am currently evolving toward prototyping and Interaction Design at SUPSI. While my skill set spans visual communication in its many forms, my true passion lies in Web Design.',
      experienceLabel: 'Experience',
      portraitAlt: 'Chiara Baldini, Graphic & Interaction Designer',
      education: [
        { year: '2017–2022', label: 'Liceo Artistico Boccioni', detail: 'Multimedia Art' },
        { year: '2022–2025', label: 'IED Milano', detail: 'BA Graphic Design' },
        { year: '2025–now', label: 'SUPSI', detail: 'Prototyping & Interaction Design' },
      ],
      softSkills: [
        { label: 'Teamwork', note: 'Playing soccer has taught me accountability and the importance of being a team player.' },
        { label: 'Focus', note: 'Playing guitar helps me maintain concentration and balance during intense work phases.' },
        { label: 'Determination', note: 'I approach every project with the drive to step outside my comfort zone.' },
      ],
      experience: [
        {
          role: 'Graphic Designer Intern',
          company: 'Strategy Design — Political Communication Agency',
          duration: '6 months',
          note: 'First full immersion in graphic design applied to real-world clients inside a young, fast-paced agency.',
        },
        {
          role: 'Motion & Video Design Intern',
          company: 'Communication Agency',
          duration: '3 months',
          note: 'Video content creation within a specialized agency — exploring new visual languages and expanding my technical toolkit.',
        },
      ],
    },
  },
  work: {
    eyebrow: 'Selected Work — 2021–2026',
    title: 'Work',
    filterAll: 'All',
  },
  project: {
    back: 'Back to Work',
    client: 'Client',
    year: 'Year',
    duration: 'Duration',
    deliverables: 'Deliverables',
    tools: 'Tools',
    next: 'Next',
    gallery: 'Gallery',
    openImage: 'Open image in full screen',
    galleryImageWord: 'gallery image',
  },
  contact: {
    eyebrow: 'Get in Touch',
    title: 'Let’s talk.',
    intro:
      'Available for graphic design, web design, prototyping, and interaction design projects. I’m always happy to connect — response within 24 hours.',
    labels: { email: 'Email', linkedin: 'LinkedIn', location: 'Location', availability: 'Availability' },
    location: 'Milan / Lugano',
    availability: 'Open to opportunities',
    newTab: '(opens in a new tab)',
  },
  notFound: {
    eyebrow: '404 — Page not found',
    title: 'This page took a different wave.',
    body: 'The page you’re looking for doesn’t exist or may have moved. Let’s get you back on track.',
    home: 'Back to home',
    work: 'View work →',
  },
  meta: {
    home: {
      title: 'Chiara Baldini — Graphic & Interaction Designer',
      description:
        'Portfolio of Chiara Baldini, a graphic and interaction designer exploring prototyping and interaction design at SUPSI. Selected work across branding, editorial, packaging, motion, and physical computing.',
    },
    work: {
      title: 'Work',
      description:
        'Selected work by Chiara Baldini — branding, editorial, packaging, motion, exhibition, and physical computing projects.',
    },
    contact: {
      title: 'Contact',
      description:
        'Get in touch with Chiara Baldini for graphic design, web design, prototyping, and interaction design projects.',
    },
  },
};

export type Dictionary = typeof en;
