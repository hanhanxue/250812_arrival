"use client"

import { useEffect, useRef } from "react"

// Sets `data-at-top` on its subtree while the page is scrolled to the very top.
// It makes no styling decisions itself; CSS keys off the attribute:
//   - base/_color.scss switches the subtree to dark tokens (above below_sm)
//   - components add overrides via `:global([data-at-top]) .yourClass { … }`,
//     wrapped in `respond-not(below_sm)` to match (see Header.module.scss)
// Rendered with the attribute on, so first paint is right before JS runs.
// Renders no box (display: contents), so layout is untouched.
export default function AtTop({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current!
    const update = () => el.toggleAttribute("data-at-top", window.scrollY <= 480)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  return (
    <div ref={ref} data-at-top="" style={{ display: "contents" }}>
      {children}
    </div>
  )
}
