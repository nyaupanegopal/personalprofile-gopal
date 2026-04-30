# Gopal Prasad Nyaupane — Portfolio Website

A clean, modern, fully responsive personal portfolio website built with pure HTML, CSS, and JavaScript (no frameworks, no build tools).

---

## 📁 Folder Structure

```
portfolio/
├── index.html       # Main HTML (all sections)
├── style.css        # All styles + light/dark theme
├── main.js          # Theme toggle, scroll reveal, nav
└── README.md        # This file
```

---

## 🚀 Run Locally

No build step required. Just open in a browser:

### Option A — Double-click
Open `index.html` directly in your browser.

### Option B — Live Server (recommended for development)
```bash
# Install VS Code extension "Live Server" by Ritwick Dey
# Right-click index.html → "Open with Live Server"
```

### Option C — Python HTTP server
```bash
cd portfolio/
python3 -m http.server 8080
# Visit: http://localhost:8080
```

---

## 🌐 Deploy for Free

### GitHub Pages (Recommended — Free)
1. Create a new GitHub repository (e.g. `portfolio`)
2. Upload all files (index.html, style.css, main.js)
3. Go to **Settings → Pages**
4. Source: **Deploy from branch → main → / (root)**
5. Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio`

```bash
# Or via Git CLI:
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Netlify (Also Free — Drag & Drop)
1. Visit [netlify.com](https://netlify.com) and sign up
2. Drag your `portfolio/` folder into the Netlify dashboard
3. Done! You get a free `.netlify.app` subdomain instantly.
4. (Optional) Add your own domain for free.

---

## 📧 Enable Contact Form (Free)

The contact form uses [Formspree](https://formspree.io) — free up to 50 submissions/month.

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form → copy your Form ID (looks like `xpwzgkqb`)
3. In `index.html`, find this line:
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Replace `YOUR_FORM_ID` with your actual form ID.

**For AJAX (no page redirect):** In `main.js`, uncomment the AJAX block inside the form submit handler.

---

## 🖼️ Add Your Profile Photo

Replace the avatar placeholder in `index.html`:

```html
<!-- Find this element: -->
<div class="avatar-placeholder">
  <span>GPN</span>
</div>

<!-- Replace with: -->
<img
  src="photo.jpg"
  alt="Gopal Prasad Nyaupane"
  style="width:100%;height:100%;object-fit:cover;border-radius:50%;"
/>
```

Upload your photo as `photo.jpg` in the same folder.

---

## ✏️ Customize Your Data

All content is in `index.html`. Look for these markers to update:

| Section      | What to update                        |
|--------------|---------------------------------------|
| Hero         | Name, title, bio, CTA links           |
| About        | Summary paragraphs, strength cards     |
| Skills       | Add/remove `<span class="tag">` items |
| Experience   | Job titles, companies, descriptions    |
| Projects     | Project names, descriptions, tech tags |
| Education    | Degrees, institutions, years           |
| Contact      | Email, phone, location                 |
| Footer       | Your name, year                        |

---

## 🎨 Customise the Theme

In `style.css`, edit the `:root` CSS variables:

```css
:root {
  --accent:   #5b8df6;   /* Primary blue accent */
  --accent-2: #a78bfa;   /* Purple accent (hero name) */
  --bg:       #0d0f14;   /* Dark background */
}
```

---

## 📦 CV Download

Place your CV PDF as `Gopal_Prasad_Nyaupane_Resume.pdf` in the portfolio folder. The "Download CV" button links to it automatically.

---

## ✅ Checklist Before Launch

- [ ] Replace `YOUR_FORM_ID` in contact form
- [ ] Add your profile photo (optional)
- [ ] Update all placeholder text in `index.html`
- [ ] Add your CV PDF file
- [ ] Add your GitHub / LinkedIn links if desired
- [ ] Test on mobile (Chrome DevTools → responsive mode)
- [ ] Deploy to GitHub Pages or Netlify
