// Global constants for the application

// Site Information — single source for all page metadata (lib/metadata.ts)
export const SITE_NAME = "Arrival Computer"
export const SITE_TAGLINE = "High performance local compute"
export const SITE_DESCRIPTION =
  // "Arrival Computer makes high-performance local computing hardware." // TODO: final copy
  "Arrival Computer builds high-performance hardware and software you own, because we believe everyone should have access to capable, private compute."




  // Canonical origin: the one address search engines should list. Every page's
// canonical URL and share image is built from it, on every deployment (so
// previews point search engines back here). Every other host (arrival.computer
// without www, www.arrival.works, arrival.works) should redirect here: set
// that in Vercel → Domains.
export const SITE_URL = "https://www.arrival.computer"
export const SITE_LOCALE = "en_US"

// Share image (Slack, iMessage, LinkedIn, X): not data, a file —
// app/opengraph-image.png. Next writes the tags. For a page-specific image,
// put another opengraph-image.png in that route's folder.

// Only the production deployment may be indexed. Vercel previews and local
// dev get noindex, so *.vercel.app copies never compete with the real domain.
export const IS_INDEXABLE = process.env.VERCEL_ENV === "production"

// Per-page metadata. `path` is also the canonical URL. No `title` = use the
// site default (home). `index: false` keeps a page out of search results.
export type PageMeta = {
  path: string
  title?: string
  description: string
  index?: boolean
}

export const PAGES = {
  home: { path: "/", description: SITE_DESCRIPTION },
  physicsx: {
    path: "/physicsx",
    title: "PhysicsX",
    description: "Visual language refresh for PhysicsX.", // TODO: final copy
  },
  imprint: {
    path: "/imprint",
    title: "Imprint",
    description: "Legal information for Arrival Computer.",
    index: false, // currently a type specimen
  },
} satisfies Record<string, PageMeta>

// Contact Information
export const CONTACT_EMAIL = "mail@arrival.computer"
// export const CONTACT_PHONE = "+1 (555) 123-4567";

// Social Media Links
export const SOCIAL_LINKS = {
  //   twitter: "https://twitter.com/arrivalworks",
  linkedin: "https://linkedin.com/company/arrivalworks",
  instagram: "https://instagram.com/arrival.works",
  tiktok: "https://tiktok.com/@arrival.works",
  youtube: "https://youtube.com/@arrivalworks",
  //   github: "https://github.com/arrivalworks",
} as const

// API Configuration
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"

// App Configuration
export const APP_CONFIG = {
  maxFileSize: 10 * 1024 * 1024, // 10MB
  supportedImageTypes: ["image/jpeg", "image/png", "image/webp"],
  itemsPerPage: 12,
} as const

// Navigation
export const NAVIGATION = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  footer: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
} as const

// Environment
export const IS_PRODUCTION = process.env.NODE_ENV === "production"
export const IS_DEVELOPMENT = process.env.NODE_ENV === "development"
