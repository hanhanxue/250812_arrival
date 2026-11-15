// Breakpoints: the single source of truth for both Sass and JavaScript.
// Edit values here and nowhere else. Values are px.
//
// How each side gets them:
//   Sass — next.config.ts prepends `breakpointsSass` (below) to every entry
//          stylesheet, which configures tools/_breakpoint.scss. Restart the dev
//          server after editing, since Sass reads them through the config.
//   JS   — import { breakpoints } from "@/styles/tools/breakpoints".
//
// One direction only: every breakpoint is `below_*` = "this width and
// narrower" (max-width, inclusive). Desktop is the default; below_* overrides
// it. There is deliberately no "above": checking from both sides is what makes
// CSS and JS disagree at the boundary pixel. In JS, write the same query the
// CSS uses — `(max-width: ${breakpoints.below_md}px)` — and negate the result
// (`!isBelow_md`) when you need the desktop case.
export const breakpoints = {
  below_xs: 480,
  below_sm: 768,
  below_md: 1024,
  below_lg: 1440,
  below_xl: 1768,

  // previous scale, for reference:
  // 3xl: 1920  DESKTOPS
  // 2xl: 1440  DESKTOPS SMALL / LAPTOPS
  // xl:  1280  LAPTOPS SMALL / TABLETS LARGE
  // lg:  1024  TABLETS
  // md:   768  TABLETS SMALL / PHONES LARGE
  // sm:   640  PHONES
  // xs:   480  PHONES SMALL
} as const;

export type Breakpoint = keyof typeof breakpoints;

// Prepended to every entry stylesheet. Configuring the module with `with (…)`
// sets $breakpoints once per compilation, so partials that @use it see it too.
export const breakpointsSass = `@use "@/styles/tools/breakpoint" with ($breakpoints: (${Object.entries(
  breakpoints,
)
  .map(([name, px]) => `${name}: ${px}px`)
  .join(", ")}));`;
