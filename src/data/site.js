export const githubUrl = 'https://github.com/Robert-Ulloa';
export const linkedinUrl = 'https://www.linkedin.com/in/roberto-antonio-ulloa-cruz-30135b317/';
export const cvUrl = '/Roberto-Ulloa-CV.pdf';

export const navItems = [
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
];

export const proofPoints = [
  { value: 35, prefix: '+', suffix: '%', label: 'Orders after the Nimble app launched' },
  { text: 'iOS + Android', label: 'Live app shipped to both stores' },
  { text: 'Square POS', label: 'Catalog, inventory & payments' },
  { text: 'QA-first', label: 'API, accessibility & regression tested' },
];

export const marquee = [
  'React', 'React Native', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Square API',
  'Expo EAS', 'REST APIs', 'SQL', 'Playwright', 'Accessibility', 'Data validation', 'CI/CD',
];

export const featuredProject = {
  title: 'Nimble Chicago',
  eyebrow: 'Featured case study · Live product',
  summary:
    'A mobile ordering platform for a Chicago café, taken from first commit to the App Store and Google Play. I built the customer app, the API and the admin tools, and tested every release.',
  metric: { value: 35, label: 'increase in orders after launch' },
  highlights: [
    'React Native (Expo) app for iOS and Android, with a Next.js API and admin dashboard behind it',
    'Square as the single source of truth for menu, inventory and payments, kept in sync with verified webhooks',
    'Over-the-air updates so JavaScript fixes reach customers without waiting on app-store review',
    'Admin tooling for scheduled push notifications, plus investigation of live Square data mismatches',
  ],
  tags: ['React Native', 'Next.js', 'PostgreSQL', 'Square API', 'Expo EAS'],
  links: [{ label: 'Visit nimblechicago.com', href: 'https://nimblechicago.com/' }],
};

export const projects = [
  {
    title: 'Coda Square',
    eyebrow: 'Marketing website · Design + build',
    summary:
      'A product-focused marketing site for a studio building custom apps and websites for coffee shops, on a reusable TypeScript and Tailwind foundation.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    links: [
      { label: 'Visit site', href: 'https://codasquare-website.vercel.app' },
      { label: 'View code', href: 'https://github.com/Robert-Ulloa/codasquare-website' },
    ],
    visual: 'coda',
  },
  {
    title: 'Salt & Yeast',
    eyebrow: 'Side project · Web + mobile MVP',
    summary:
      'A small exploration of a bakery ordering flow: a web storefront with an admin view, and a React Native client sharing a Next.js and Prisma backend.',
    tags: ['Next.js', 'React Native', 'Prisma'],
    links: [
      { label: 'Web code', href: 'https://github.com/Robert-Ulloa/salt-and-yeast-web' },
      { label: 'Mobile code', href: 'https://github.com/Robert-Ulloa/salt-and-yeast-mobile' },
    ],
    visual: 'salt',
  },
];

export const services = [
  {
    number: '01',
    title: 'Square integration & operations',
    description:
      'Connect ordering and inventory workflows to Square POS APIs, then trace discrepancies across API responses, application logic and database records.',
    details: ['Square POS APIs', 'Catalog & inventory', 'Webhooks'],
  },
  {
    number: '02',
    title: 'Mobile app development',
    description:
      'Build React Native products end to end, from core user flows and backend connections to release on iOS and Android.',
    details: ['React Native', 'Expo EAS', 'App-store release'],
  },
  {
    number: '03',
    title: 'Web, APIs & backends',
    description:
      'Deliver practical web products and the services behind them with Next.js, Node.js, REST APIs, PostgreSQL and clear admin interfaces.',
    details: ['Next.js & Node.js', 'REST APIs', 'PostgreSQL'],
  },
  {
    number: '04',
    title: 'QA & release confidence',
    description:
      'Test the journeys that matter with API, functional, accessibility and regression testing, so releases hold up before real users find the edge cases.',
    details: ['API testing', 'Accessibility', 'Regression'],
  },
  {
    number: '05',
    title: 'Data analysis & quality',
    description:
      'Validate and reconcile records across documents, spreadsheets and databases. Find what is missing, duplicated or wrong, and explain why with a clear audit trail.',
    details: ['SQL', 'Data validation', 'Reconciliation'],
  },
];

export const skillGroups = [
  { name: 'Build', skills: ['JavaScript', 'TypeScript', 'React', 'React Native', 'Next.js', 'Vue', 'Node.js'] },
  { name: 'Test', skills: ['API testing', 'Postman', 'Regression', 'Accessibility', 'Playwright', 'AI output testing'] },
  { name: 'Data', skills: ['SQL', 'PostgreSQL', 'Data validation', 'Reconciliation', 'Spreadsheets', 'Python (basic)'] },
  { name: 'Ship', skills: ['Git & GitHub', 'CI/CD', 'Expo EAS', 'Vercel', 'Netlify', 'Jira'] },
];

export const experience = [
  {
    period: 'Jul – Nov 2026',
    role: 'Procurement contract analyst',
    organisation: 'Rail Delivery Group',
    detail:
      'Data-quality work across 4,000+ procurement and contract documents: validated each against Contract Register records, found missing, duplicate and incorrect entries, and kept an auditable decision trail using spreadsheet analysis and targeted searches.',
  },
  {
    period: 'Aug 2025 – Jun 2026',
    role: 'Full-stack developer & QA',
    organisation: 'Nimble Chicago',
    detail:
      'Designed, built and launched a full-stack mobile ordering app, integrated Square POS for orders and inventory, tested API and release edge cases, and managed submission to both app stores.',
  },
  {
    period: 'Jan – Sep 2025',
    role: 'QA engineer & junior developer',
    organisation: 'Focus State · Blue Chip Worldwide',
    detail:
      'Tested React and Vue applications across browser, device, API, accessibility and regression workflows, working with developers to investigate and verify fixes.',
  },
];
