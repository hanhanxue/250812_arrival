import type { Metadata } from "next"

import localFont from "next/font/local"

import "@/styles/main.scss"
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants"
import Script from "next/script"
import PlausibleProvider from "next-plausible"

import Footer from "@/components/Footer"
import MediaProvider from "@/providers/MediaProvider"

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

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={monument.variable}>
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










      <body data-theme="light">

<MediaProvider>
        {children}
      <Footer />
</MediaProvider>

      </body>

    </html>
  )
}
