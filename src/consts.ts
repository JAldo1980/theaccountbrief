// Site-wide settings. Edit these, not the templates.
export const SITE = {
  name: 'The Account Brief',
  tagline: 'B2B marketing strategy and client service, from the account side',
  description:
    'Practical writing on B2B marketing strategy, key account management and client service, from 13+ years running B2B accounts agency-side.',
  url: 'https://theaccountbrief.uk',
  locale: 'en_GB',
  lang: 'en-GB',
};

export const AUTHOR = {
  name: 'James Alderman',
  jobTitle: 'Client Services Manager',
  location: 'Birmingham, UK',
  // Add your profile URLs here; they feed the author schema (sameAs) and the footer.
  linkedin: 'https://www.linkedin.com/in/jamespalderman/',
  email: '', // optional contact address
};

export const CATEGORIES = [
  {
    slug: 'b2b-strategy',
    name: 'B2B Strategy',
    description:
      'Practical B2B marketing strategy: frameworks, budgets, KPIs and plans that hold up in front of clients and boards.',
  },
  {
    slug: 'key-account-management',
    name: 'Key Account Management',
    description:
      'How to plan, run and grow key accounts: account plans, QBRs, and what the key account manager role really involves.',
  },
  {
    slug: 'client-services',
    name: 'Client Services',
    description:
      'Client service management for agencies and B2B teams: onboarding, reporting, retention and handling difficult clients.',
  },
  {
    slug: 'b2b-seo',
    name: 'B2B SEO',
    description:
      'SEO for B2B companies: strategy that moves pipeline, and reporting that clients understand and act on.',
  },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];
export const categoryBySlug = (slug: string) => CATEGORIES.find((c) => c.slug === slug)!;
