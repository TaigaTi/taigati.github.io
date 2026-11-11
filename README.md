# Tarika Birch — Portfolio

Personal portfolio for Tarika Birch, software engineer. Live at **[tarikabirch.com](https://tarikabirch.com)**.

It covers experience, projects, design work, and awards & certificates.

## Tech

- React (Create React App) with React Router (`HashRouter`)
- Tailwind CSS plus component stylesheets in `src/styles/`
- Material UI for the mobile menu drawer and certificate viewer
- AOS for scroll animations
- Hosted on GitHub Pages from the `gh-pages` branch

## Project structure

```
public/
  assets/            images, logos, certificates, resume PDF
  CNAME              custom domain (kept here so every deploy includes it)
src/
  components/        pages (Home, Projects, Designs, Awards, Contact) and cards
  data/              content: experience, projects, designs, awards
  styles/            per-component CSS
```

Most content changes only touch `src/data/`:

| File | What it holds |
|---|---|
| `experience.js` | Roles, dates, logos and the expandable highlights |
| `projects.js` | Project cards and links |
| `designs.js` | Design case studies and their images |
| `awards.js` | Awards and certificates. Optional `image` opens a viewer; optional `url` adds a Verify link |

Issuer logos for awards and certificates are mapped by issuer name in `src/components/AwardCard.js`; issuers without a logo fall back to the generic icon.

## Scripts

```bash
npm start        # dev server at http://localhost:3000
npm test         # run tests
npm run build    # production build into build/
npm run deploy   # build and publish to the gh-pages branch
```
