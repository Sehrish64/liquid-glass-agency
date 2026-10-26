# Build notes — liquid-glass-agency

Built exactly to the pasted spec: React + Vite + TypeScript + Tailwind CSS v3, two
full-screen sections (Hero, Capabilities), liquid-glass CSS, FadingVideo + BlurText
components, Instrument Serif + Barlow via Google Fonts links, custom SVG icons,
Vite base `/liquid-glass-agency/`.

## Deviations

One, deliberate and minimal — a layout-breakage fix, desktop rendering unchanged:

- The two hero stat cards (`w-[220px]` each, spec-exact) overflowed a 390px phone
  viewport by ~33px on each side (measured: left −33 / right 423 at 390×844) and were
  clipped by the section's `overflow-hidden`. Added `max-w-[44vw]` to both cards so
  they cap at small widths; at desktop widths the spec's 220px applies untouched
  (verified by measurement: desktop card geometry identical before/after).

Everything else — classes, copy, tags, video URLs, timings (500ms/550ms fades,
0.55s remaining threshold, 0.7s word blur with 100ms stagger, motion delays
0.4/0.8/1.1/1.3/1.4) — is as specified. Small honest notes:

- The page `<title>` ("Atelier — Crafted Digital Experiences") was not specified;
  a neutral one was chosen.
- Tailwind v3's `font-heading`/`font-body` utilities come from the config extend
  exactly as the spec's snippet prescribes.

## Verification evidence

- `npm run build` passes (tsc + vite build, 436 modules).
- Both CloudFront video URLs return HTTP 200 `video/mp4` via curl, and the files
  download as valid MP4 (hero 3828×2164 H.264, capabilities 1920×1080 H.264).
- Screenshots (Puppeteer + cached Chrome, real-time waits so animations settle):
  - `screenshots/desktop-hero.png` — glass nav pill + white CTA, "New" badge pill,
    italic serif headline over the glass-orb video, CTAs, both stat cards, trust
    pill, Aeon/Vela/Apex/Orbit/Zeno logo row.
  - `screenshots/desktop-capabilities.png` — "// Capabilities", "Studio craft, end
    to end", three glass cards (Design/Engineering/Growth) with icon chips, tag
    pills and spec copy, over the moss-rock video.
  - `screenshots/mobile-hero.png` / `screenshots/mobile-capabilities.png` — nav
    links hidden, everything inside the frame after the card fix; cards stack.
  - Video state in-browser during QA: both videos `readyState 4`, opacity faded
    to 1, playing (currentTime advancing).
- QA method note: this sandbox's headless Chrome cannot reach external URLs
  (its egress proxy rejects Chrome's CONNECT), so screenshots were taken against a
  throwaway local copy of `dist/` in which only the two video URLs and the font
  stylesheet pointed at byte-identical local downloads of the same files. The
  shipped `dist/` is untouched and references the spec's CloudFront URLs and
  Google Fonts exactly. QA harness kept as `qa-shots.cjs` / `qa-measure.cjs`.

## Deploy status — BLOCKED on GitHub auth

- Local git repo initialized; source committed on `main` (2 commits).
- `gh` is NOT authenticated in this environment (`gh auth status`: "You are not
  logged into any GitHub hosts"), and there is no GH_TOKEN/GITHUB_TOKEN env var or
  git credential helper. Repo creation/push/Pages were therefore NOT attempted and
  NOT faked.
- Fallback delivered: `dist.zip` (built site, ready to drop into any static host
  or a gh-pages branch). To finish deployment: authenticate gh (`gh auth login`)
  or run the GitHub connector flow, create public repo
  `sehrish64/liquid-glass-agency`, push `main`, push `dist/` contents to a
  `gh-pages` branch, enable Pages from `gh-pages` — expected live URL:
  https://sehrish64.github.io/liquid-glass-agency/
