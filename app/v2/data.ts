export interface ProjectEntry {
  number: string
  client: string
  meta?: string
  role: string
  description?: string
}

export interface ServiceEntry {
  number: string
  title: string
  items: string[]
}

export interface JourneyEntry {
  stage: string
  description: string
}

export interface ApproachEntry {
  number: string
  pillar: string
  prompt: string
}

export const brandingProjects: ProjectEntry[] = [
  {
    number: '01',
    client: 'DIMSUM QOQOM',
    meta: 'F&B · MEDAN',
    role: 'Branding Consultant · Creative Director',
    description: 'Brand direction, brand communication, creative concept, and company profile direction.',
  },
  {
    number: '02',
    client: 'SUSI CATERING',
    meta: 'F&B · MEDAN',
    role: 'Branding Consultant · Creative Director',
    description: 'Brand direction, campaign concept, and creative communication.',
  },
  {
    number: '03',
    client: 'A3 GOLF GALLERY',
    meta: 'LIFESTYLE · JAKARTA',
    role: 'Branding Consultant · Creative Director',
    description: 'Brand positioning direction, creative concept, and brand communication.',
  },
  {
    number: '04',
    client: 'HIRU KOFFEE',
    meta: 'COFFEE · MEDAN',
    role: 'Branding Consultant · Creative Director',
    description: 'Brand direction, creative concept, and visual communication.',
  },
  {
    number: '05',
    client: 'BARAKA COFFEE',
    meta: 'COFFEE · MEDAN',
    role: 'Branding Consultant · Creative Director',
    description: 'Brand direction, creative concept, and communication development.',
  },
  {
    number: '06',
    client: 'MATAIR AUTO CARE',
    meta: 'AUTOMOTIVE · MEDAN',
    role: 'Branding Consultant · Creative Director',
    description: 'Brand direction, creative concept, and brand communication.',
  },
  {
    number: '07',
    client: 'BALBOA PARFUM OFFICIAL',
    meta: 'FRAGRANCE · MEDAN',
    role: 'Branding Consultant · Creative Director',
    description: 'Brand direction, creative concept, and visual communication.',
  },
  {
    number: '08',
    client: 'HABISHIN',
    meta: 'MEDAN',
    role: 'Branding Consultant · Creative Director',
    description: 'Brand direction, creative concept, and communication development.',
  },
]

export const services: ServiceEntry[] = [
  {
    number: '01',
    title: 'Brand',
    items: ['Strategy', 'Positioning', 'Identity'],
  },
  {
    number: '02',
    title: 'Create',
    items: ['Campaign', 'Creative Direction', 'Art Direction'],
  },
  {
    number: '03',
    title: 'Produce',
    items: ['TVC', 'Video', 'Photography', 'Content'],
  },
  {
    number: '04',
    title: 'Consult',
    items: ['Brand Development', 'Communication', 'Creative Solution'],
  },
]

export const filmProjects: ProjectEntry[] = [
  {
    number: '01',
    client: 'GOVERNOR OF NORTH SUMATRA',
    role: 'Producer · Creative Director',
    description: 'Video production and creative direction.',
  },
  {
    number: '02',
    client: 'RUMAH MAKAN GARUDA',
    role: 'TVC Producer',
    description: 'Ramadan television commercial production.',
  },
  {
    number: '03',
    client: 'PLN — UPDL TUNTUNGAN',
    role: 'Director · Creative Director',
    description: 'Company profile film direction and creative development.',
  },
  {
    number: '04',
    client: 'RUMAH SAKIT UUM HAJI',
    role: 'Director · Creative Director',
    description: 'Company profile film direction and creative development.',
  },
  {
    number: '05',
    client: 'RKP LOGISTIC',
    role: 'Director · Creative Director',
    description: 'Company profile film direction and creative development.',
  },
  {
    number: '06',
    client: 'SUSI CATERING — RISEBOWL ITU KEREN',
    role: 'TVC Director · Creative Director',
    description: 'Campaign concept, creative direction, and TV commercial direction.',
  },
  {
    number: '07',
    client: 'DIMSUM QOQOM',
    role: 'Director · Creative Director',
    description: 'Company profile film direction and brand storytelling.',
  },
]

export const photographyProjects: ProjectEntry[] = [
  {
    number: '01',
    client: 'VICE AUSTRALIA',
    role: 'Freelance Photographer',
  },
  {
    number: '02',
    client: 'NEW NARRATIVE',
    meta: 'SINGAPORE',
    role: 'Freelance Photographer · Singapore',
  },
  {
    number: '03',
    client: 'SOUTH EAST GLOBAL POST',
    role: 'Freelance Photographer',
  },
  {
    number: '04',
    client: 'TRAVEL WIRE ASIA',
    role: 'Freelance Photographer',
  },
  {
    number: '05',
    client: 'INDONESIA',
    role: 'Freelance Photography',
  },
]

export const earlyCareerProjects: ProjectEntry[] = [
  {
    number: '01',
    client: 'PT FORTUNE INDONESIA',
    role: 'Junior Graphic Designer',
    description: 'Graphic design and visual communication.',
  },
  {
    number: '02',
    client: 'PT MUDA MULIA MANDIRI',
    role: 'Graphic Designer',
    description: 'Graphic design and visual development.',
  },
  {
    number: '03',
    client: 'FREELANCE',
    meta: 'JAKARTA',
    role: 'Creative Director · Jakarta',
    description: 'Creative concept development and direction.',
  },
]

export const journeySteps: JourneyEntry[] = [
  { stage: 'DESIGN', description: 'Visual Communication' },
  { stage: 'PHOTO', description: 'Real Stories' },
  { stage: 'BRANDS', description: 'Lasting Impact' },
]

export const approachPillars: ApproachEntry[] = [
  {
    number: '01',
    pillar: 'IDEA',
    prompt: 'What should people understand?',
  },
  {
    number: '02',
    pillar: 'DIRECTION',
    prompt: 'How should the brand communicate?',
  },
  {
    number: '03',
    pillar: 'IMPACT',
    prompt: 'What should people remember?',
  },
]
