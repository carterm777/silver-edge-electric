/* Content, verbatim from PROMPT.txt. Labels the brief leaves unwritten are
   composed in its stated voice: understated, contractor-grade, no folksy
   flourishes, no exclamation points, no "family-owned" framing. */

export const PHONE_DISPLAY = '(403) 614-7067'
export const PHONE_TEL = 'tel:+14036147067'
export const PHONE_SMS = 'sms:+14036147067'
export const EMAIL = 'contact@silveredgeelectric.com'
export const REGION = 'Southern Alberta, Canada'

export const SERVICE_LINKS = [
  'Commercial Electrical Contracting',
  'Industrial Electrical Systems',
  'Residential Electrical',
  'Tenant Improvements',
  'Panel Upgrades & Service Changes',
  'Electrical Troubleshooting & Repairs',
  'Lighting Installation & Design',
  'Electrical Safety Inspections',
  'New Construction Wiring',
  'Renovation Wiring',
  'Generator & Backup Power Systems',
  'Surge Protection',
  'Small Business Electrical',
  'Electrical Maintenance Contracts',
]

export const AREA_LINKS = [
  'Lethbridge', 'Brooks', 'Taber', 'Vulcan',
  'Claresholm', 'Pincher Creek', 'Fort Macleod', 'Coaldale',
]

export const NAV = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services', menu: 'services' },
  { label: 'Service Areas', href: '#service-areas', menu: 'areas' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Blog', href: '#footer' },
  { label: 'Contact', href: '#contact' },
]

export const HERO_BADGES = [
  { label: 'Free Project Estimates', icon: 'ClipboardList' },
  { label: 'Licensed & Insured', icon: 'ShieldCheck' },
  { label: 'Satisfaction Guaranteed', icon: 'ThumbsUp' },
  { label: 'Locally Owned & Operated', icon: 'MapPin' },
]

export const REVIEWS = [
  {
    name: 'Marcus T.',
    role: 'Property Manager',
    quote:
      'Rewired the electrical room in our commercial building without disrupting tenants during business hours.',
  },
  {
    name: 'Erin V.',
    role: null,
    quote:
      "Handled our home's panel upgrade in a single day and left the workspace cleaner than they found it.",
  },
  {
    name: 'Dale H.',
    role: 'Site Supervisor',
    quote:
      'Kept our industrial project on schedule even after a change order added two extra circuits.',
  },
  {
    name: 'Sandra K.',
    role: null,
    quote:
      'Gave us a written estimate that matched the final invoice on our basement renovation.',
  },
  {
    name: 'Brent O.',
    role: null,
    quote:
      'Answered every question about code requirements before we signed off on the design.',
  },
]

export const TRUST_BADGES = [
  { label: 'Fully Licensed & Insured', icon: 'ShieldCheck', note: 'Certificates available on request' },
  { label: '10+ Years In Business', icon: 'Award', note: 'Contracting across Southern Alberta' },
  { label: 'Locally Owned & Operated', icon: 'MapPin', note: 'Crews based in the region' },
  { label: 'Satisfaction Guaranteed', icon: 'CheckCircle2', note: 'We stay until the scope is closed' },
]

export const WHY_US = [
  {
    title: 'Commercial & Industrial Project Experience',
    icon: 'Building2',
    body:
      "We've wired everything from tenant improvements to industrial electrical rooms, so a project of any scale gets handled by a crew that has done it before.",
  },
  {
    title: 'Licensed, Code-Compliant Work',
    icon: 'ShieldCheck',
    body:
      'Every project meets the electrical code an inspector checks, from a single-family home to a multi-unit commercial build.',
  },
  {
    title: 'On-Time Project Delivery',
    icon: 'CalendarCheck',
    body:
      'We plan around your timeline and communicate early if anything changes, so a project schedule never becomes a surprise.',
  },
  {
    title: 'Straightforward, Written Estimates',
    icon: 'FileCheck',
    body:
      "You get a clear, written estimate before work starts, and that's the number that shows up on the final invoice.",
  },
]

export const SERVICES = [
  {
    title: 'Commercial Electrical Contracting',
    short: 'Commercial',
    body:
      'Wiring, panel work, and lighting for retail, office, and mixed-use buildings, planned around your operating hours.',
    icon: 'Building2',
    img: '/images/commercial-hero.webp',
    alt: 'Empty commercial tenant space with linear LED ceiling lighting and a scissor lift parked on the floor',
  },
  {
    title: 'Industrial Electrical Systems',
    short: 'Industrial',
    body:
      'Power distribution, equipment hookups, and electrical room work built to keep a facility running on schedule.',
    icon: 'Factory',
    img: '/images/commercial-panels.webp',
    alt: 'Bank of tall grey switchgear cabinets lining an industrial plant room',
  },
  {
    title: 'Residential Electrical',
    short: 'Residential',
    body: 'Panel upgrades, rewiring, and lighting for homes across Southern Alberta.',
    icon: 'Home',
    img: '/images/panel-tech.webp',
    alt: 'Electrician in navy workwear checking an open breaker panel with a clipboard in hand',
  },
  {
    title: 'Tenant Improvements & Renovations',
    short: 'Tenant Improvements',
    body:
      'Electrical scope for a build-out or renovation, coordinated with your other trades and your timeline.',
    icon: 'Ruler',
    img: '/images/office-ti.webp',
    alt: 'Finished modern office interior with glass partitions and recessed linear lighting',
  },
  {
    title: 'Panel Upgrades & Service Changes',
    short: 'Panel Upgrades',
    body: 'Replacing an aging or undersized service with one built for current and future load.',
    icon: 'Gauge',
    img: '/images/panel-new.webp',
    alt: 'Newly installed breaker panel in a grey enclosure with every circuit labelled',
  },
  {
    title: 'Electrical Troubleshooting & Repairs',
    short: 'Troubleshooting',
    body: 'Diagnosing the real cause of a fault, not just patching the symptom.',
    icon: 'Search',
    img: '/images/troubleshooting-hero.webp',
    alt: 'Electrician kneeling at a baseboard outlet testing it with a multimeter beside a flashlight',
  },
]

/* Hand-placed on a 100x74 viewBox that traces the shape of Southern Alberta.
   Coordinates are drawn, not projected — this is a schematic, not a map tile. */
export const COVERAGE = [
  { name: 'Vulcan', x: 43, y: 14, side: 'above' },
  { name: 'Brooks', x: 80, y: 23, side: 'above' },
  { name: 'Claresholm', x: 29, y: 29, side: 'above' },
  { name: 'Fort Macleod', x: 28, y: 48, side: 'above' },
  { name: 'Coaldale', x: 60, y: 44, side: 'above' },
  { name: 'Taber', x: 79, y: 52, side: 'above' },
  { name: 'Lethbridge', x: 45, y: 57, side: 'below' },
  { name: 'Pincher Creek', x: 18, y: 60, side: 'above' },
]

export const STORY = [
  {
    marker: 'Range Of Work',
    body:
      "Ten years in, the range of work hasn't gotten smaller — if anything, it's grown. A given month might include a tenant improvement in a strip mall, a panel upgrade in a 1980s bungalow, and a section of an industrial electrical room that can't go down for more than a scheduled window. Working across all three keeps a crew sharp in ways specializing in just one never would.",
  },
  {
    marker: 'Standard Of Work',
    body:
      'The standard doesn’t change based on the size of the client. A homeowner gets the same written estimate, the same code-compliant work, and the same crew showing up when they said they would as a property manager overseeing a multi-unit build. That consistency is the real foundation the business was built on, not a slogan added after the fact.',
  },
  {
    marker: 'Schedules',
    body:
      "Southern Alberta's commercial and industrial sector runs on tight schedules, and a project that stalls because of an electrical delay costs real money for everyone involved. We plan for that by communicating early when something changes, rather than letting a client find out the timeline slipped when the crew doesn't show up.",
  },
]

export const FAQ_GROUPS = [
  {
    category: 'Scope & Experience',
    items: [
      {
        q: 'Do you work on commercial and industrial projects, or just homes?',
        a: 'All three. We take on tenant improvements, industrial electrical systems, and residential projects, often in the same week.',
      },
      {
        q: 'How long have you been in business?',
        a: "We've been a full-service electrical contractor in Southern Alberta for more than 10 years, working across commercial, industrial, and residential projects.",
      },
      {
        q: 'What areas of Southern Alberta do you serve?',
        a: 'We take on commercial, industrial, and residential projects across Southern Alberta, from in-town builds to larger regional projects.',
      },
    ],
  },
  {
    category: 'Estimates & Scheduling',
    items: [
      {
        q: 'Can you work around an active business or job site?',
        a: 'Yes. We plan commercial and industrial work around your operating hours and communicate ahead of time if a schedule needs to shift.',
      },
      {
        q: 'Do you provide written estimates?',
        a: 'Every project starts with a written estimate, so you know the scope and cost before any work begins.',
      },
    ],
  },
]

export const FOOTER_SERVICES = [
  'Commercial Electrical Contracting',
  'Industrial Electrical Systems',
  'Residential Electrical',
  'Tenant Improvements & Renovations',
  'Panel Upgrades & Service Changes',
]

export const FOOTER_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Service Areas', href: '#service-areas' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

/* Echo a visitor-typed number back in the same shape the site prints its own. */
export function formatPhone(value) {
  const digits = String(value ?? '').replace(/[^0-9]/g, '').slice(0, 10)
  if (digits.length < 10) return String(value ?? '').trim()
  return '(' + digits.slice(0, 3) + ') ' + digits.slice(3, 6) + '-' + digits.slice(6)
}

export const MISSION =
  "We're a full-service electrical contractor serving commercial, industrial, and residential clients across Southern Alberta, with more than 10 years of project experience behind every job."
