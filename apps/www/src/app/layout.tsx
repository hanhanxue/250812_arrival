import localFont from "next/font/local"

import "@/styles/main.scss"
import { siteMetadata } from "@/lib/metadata"
import Script from "next/script"
import PlausibleProvider from "next-plausible"

import Footer from "@/components/Footer"
import MediaProvider from "@/providers/MediaProvider"
import HeaderA from "@/components/HeaderA"

// Self-hosted and preloaded by Next. Exposed as --font-monument; styles use
// --font-family-primary (base/_tokens.scss), which points at it.
const monument = localFont({
  src: "../../public/fonts/ABC-Monument-Grotesk-Variable-2.001.woff2",
  weight: "300 500",
  style: "normal",
  display: "swap",
  variable: "--font-monument",
  // Monument is a sans-serif: size-match the sans-serif fallback to limit layout shift
  adjustFontFallback: "Arial",
})

// Exposed as --font-neue-montreal; not used by any style yet (see the
// commented-out --font-family-primary in base/_tokens.scss). Static cuts: Book (400) and Medium (500).
const neueMontreal = localFont({
  src: [
    { path: "../../public/fonts/PPNeueMontreal-Book.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/PPNeueMontreal-Medium.woff2", weight: "500", style: "normal" },
  ],
  display: "swap",
  variable: "--font-neue-montreal",
  adjustFontFallback: "Arial",
})

// All metadata data lives in lib/constants.ts; lib/metadata.ts builds it.
export const metadata = siteMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${monument.variable} ${neueMontreal.variable}`}>
      <head>

        {/* This script sets the plausible_ignore flag for Vercel deployments */}
        <Script id="disable-plausible" strategy="beforeInteractive">
          {`
            if (window.location.hostname.endsWith("vercel.app")) {
              localStorage.plausible_ignore = true;
            }
          `}
        </Script>
        {/* End of disable-plausible */}
        <PlausibleProvider />
      </head>










      <body data-theme="dark">

<MediaProvider>
  <HeaderA />
        {children}
      <Footer />
</MediaProvider>

      </body>

    </html>
  )
}
