/**
 * Single source of truth for your business info. Almost every page reads
 * from here. Edit this file to update the site name, contact info, etc.
 */

export interface Hours {
  day: string;
  hours: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export const SITE = {
  /** The business name as it appears in the masthead, titles, footer. */
  name: "Beaver Hills Press",

  /**
   * While true, the site shows a "coming soon" placeholder instead of the
   * homepage. Launched with the first real homepage.
   */
  comingSoon: false as boolean,

  /** One-line description used in <meta description> and OpenGraph. */
  tagline: 'Historical fiction rooted in the Canadian West.',
  description:
    'Beaver Hills Press publishes historical fiction rooted in the Canadian West.',

  /** Contact info — surfaced in the footer and contact page. */
  email: 'hello@beaverhillspress.com',
  pressEmail: 'press@beaverhillspress.com',
  tradeEmail: 'trade@beaverhillspress.com',
  phone: '',
  address: '',
  city: '',

  /** Imprint / colophon lines shown in the footer. */
  imprint: 'Beaver Hills Press / Éditions Beaver Hills',
  isbnPrefix: 'ISBN prefix 978-1-0678429',
  copyright: '© 2026 Christopher C. Laure. All rights reserved.',

  /** Hours of operation. Leave empty for "by appointment" or virtual. */
  hours: [] as Hours[],

  /** Optional: social links shown in the footer. Leave empty array to omit. */
  social: [] as SocialLink[],
} as const;
