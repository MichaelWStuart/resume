# Resume

**Live:** https://michaelwstuart.github.io/resume/

A vibe-coded resume built with React, TypeScript, and Tailwind CSS. The entire project was developed through conversational AI collaboration — no manual scaffolding, just iterative prompting.

## Features

- **Single source of truth** — All content lives in `src/content/resume.ts`. Update your experience, tweak a bullet point, redeploy. No hunting through components.
- **Print-ready PDF** — Click the button, save as PDF. Consistent letter-size output whether you're on desktop or mobile.
- **Mobile responsive** — Looks good on a phone, prints correctly from anywhere.
- **Fast iteration** — `npm run deploy` builds and pushes to GitHub Pages in seconds.
- **Clean, minimal design** — Inter font, monochrome palette, tight spacing. Content-focused.

## Stack

- Vite + React + TypeScript
- Tailwind CSS
- GitHub Pages (via `gh-pages`)

## Development

```bash
npm install
npm run dev      # local dev server
npm run deploy   # build + deploy to GitHub Pages
```

## Why vibe-coded?

Traditional resume builders are either too rigid or too fiddly. This approach lets you describe what you want in natural language, iterate quickly, and maintain full control over the output. The resume is just a React app — if you want to change something, you can.
