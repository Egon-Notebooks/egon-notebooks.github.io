# egon-notebooks.github.io

The Egon Notebooks website: Next.js 16 static export with Tailwind 4, deployed to
GitHub Pages. Workspace-wide rules (privacy, docs sync, American English, git
conventions) are in `../CLAUDE.md`; product docs are in `../docs/`.

## Commands

```bash
nvm use            # Node 24 (see .nvmrc; CI uses the same)
npm install
npm run dev        # http://localhost:3000
npm run lint       # CI
npm run build      # CI; static export to out/
npx serve out      # preview the production build
```

## Things to know

- **Personal-data hook:** enable once per clone with `git config core.hooksPath .githooks`.
  It blocks `.env` files, reports, journal entries, real Apple Health exports and the
  paths set in `.env`. `bash .githooks/pre-commit --all` checks every tracked file.
- **Pushing to `main` deploys the live site** (`.github/workflows/deploy.yml`).
  Work on a branch; CI (lint + build) runs on other branches and on PRs.
- Pages are in `app/`, shared UI in `components/`, design tokens in
  `app/globals.css` (paper/ink/oxblood palette, Cormorant Garamond + DM Sans). The
  egon-journal report theme mirrors these tokens; keep them aligned.
- `content/nodes/` and `content/packs/` are copied from egon-content output.
- JSX text: escape quotes and apostrophes (`&quot;`, `&apos;`) or lint fails
  (`react/no-unescaped-entities`).
- The `/journal` page documents egon-journal's journaling commands; the `/reports` page
  documents the reports and embeds a demo report from `public/demo/`. Update them when
  the CLI or reports change, and regenerate the demo report when the report design changes.
- Never put real user data on the site. Demo reports must come from synthetic
  persona data.
