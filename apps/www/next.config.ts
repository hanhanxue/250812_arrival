import type { NextConfig } from "next"
import { withPlausibleProxy } from "next-plausible"
import { breakpointsSass } from "./src/styles/tools/breakpoints"

const nextConfig: NextConfig = withPlausibleProxy({
  src: "https://plausible.gitpushoriginmain.com/js/script.js",
})({
  // breakpoints.ts is the source of truth; prepend its Sass map to every stylesheet
  sassOptions: {
    additionalData: breakpointsSass,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.hanhanxue.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
})

export default nextConfig
