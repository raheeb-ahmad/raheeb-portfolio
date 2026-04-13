# Raheeb Ahmad — Portfolio

Personal portfolio site built with **Next.js 14** and deployed on **Vercel**.

Cyberpunk neon dark aesthetic. No templates. No UI kits.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Fonts**: Orbitron, Rajdhani, Share Tech Mono (Google Fonts)
- **Hosting**: Vercel

---

## 🚀 Deploy to Vercel in 3 steps

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/YOUR_USERNAME/raheeb-portfolio.git
git push -u origin main
```

### 2. Import on Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Select your GitHub repo
3. Framework preset will auto-detect **Next.js**
4. Click **Deploy** — done ✓

### 3. Add Custom Domain (optional)

In Vercel dashboard → **Domains** → add `raheebahmad.dev` or whatever you own.

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Customization

- **Projects**: Edit `components/projectsData.ts` — add/remove/update any project
- **Links**: Update social links in `components/Contact.tsx`
- **Email**: Replace `mailto:` in `Contact.tsx` with your real email
- **Resume**: Drop your PDF as `public/resume.pdf`
- **Meta**: Update title/description in `app/layout.tsx`
- **Colors**: All CSS variables are in `app/globals.css` under `:root`

---

## Sections

| Section | File |
|---------|------|
| Navigation | `components/Navbar.tsx` |
| Hero | `components/Hero.tsx` |
| About + Stats | `components/About.tsx` |
| Projects Grid | `components/Projects.tsx` |
| Skills + Timeline | `components/Skills.tsx` |
| Contact + Footer | `components/Contact.tsx` |

---

Built by Raheeb Ahmad · Lahore, Pakistan
