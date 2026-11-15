"use client"

import { useEffect, useRef } from "react"

// Applies `theme` to its children only while the page is scrolled to the very
// top; once scrolled, the attribute is removed and children inherit the
// surrounding theme. Renders no box (display: contents), so layout is untouched.
// Also sets `data-at-top` while at the top, so stylesheets can add overrides
// via `:global([data-at-top]) .yourClass { … }`.
export default function ThemeAtTop({
  theme,
  children,
}: {
  theme: "light" | "dark"
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current!
    const update = () => {
      const atTop = window.scrollY <= 5
      el.toggleAttribute("data-at-top", atTop)
      if (atTop) el.dataset.theme = theme
      else delete el.dataset.theme
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [theme])

  return (
    <div ref={ref} data-theme={theme} data-at-top="" style={{ display: "contents" }}>
      {children}
    </div>
  )
}
