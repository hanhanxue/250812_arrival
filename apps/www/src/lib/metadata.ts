// Builds Next.js Metadata from the data in lib/constants.ts. No copy lives here.
import type { Metadata } from "next"
import {
  SITE_NAME,
  SITE_TAGLINE,
  SITE_DESCRIPTION,
  SITE_URL,
  SITE_LOCALE,
  IS_INDEXABLE,
  type PageMeta,
} from "./constants"

const DEFAULT_TITLE = `${SITE_NAME} | ${SITE_TAGLINE}`

const robots = (index = true): Metadata["robots"] =>
  IS_INDEXABLE && index
    ? { index: true, follow: true }
    : { index: false, follow: false }

// Root layout: defaults every page inherits.
export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL), // makes the share image and canonicals absolute
  title: { default: DEFAULT_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  robots: robots(),
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
    // image: app/opengraph-image.png (file convention, added by Next)
  },
  twitter: { card: "summary_large_image" }, // X reads the og: tags for the rest
}

// Per page. A page's openGraph *replaces* the layout's (no deep merge), so it
// is rebuilt in full here — otherwise siteName/locale would vanish. The image
// is unaffected: file-based opengraph-image always applies.
export function pageMetadata(page: PageMeta): Metadata {
  const title = page.title ? `${page.title} | ${SITE_NAME}` : DEFAULT_TITLE
  return {
    ...(page.title && { title: page.title }), // template adds "| Arrival Computer"
    description: page.description,
    alternates: { canonical: page.path },
    robots: robots(page.index),
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      url: page.path,
      title,
      description: page.description,
    },
  }
}
