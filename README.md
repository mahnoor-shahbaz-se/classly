<div align="center">

<img src="logo.png" alt="Classly logo" height="70">

# Classly

**A smarter way to learn, together.**

A clean, modern redesign of the online classroom experience, built with pure HTML, CSS and JavaScript.

[Live Demo](https://YOUR-USERNAME.github.io/classly/) · [Report a Bug](../../issues) · [Request a Feature](../../issues)

</div>

---

## About

Classly is a UI/UX redesign concept inspired by Google Classroom. It brings classes, assignments, resources, deadlines and progress into one simple learning space, so students always know what to learn and what comes next.

The project turns the Figma mockups into a fully working front-end website with 18 pages, real interactions and no frameworks or build tools.

## Features

- **Dashboard** with class progress, due-soon assignments and quick learning tools
- **Classes** with Stream, Classwork and People tabs, plus posting announcements
- **Assignments** with detail pages and a Turn in / Unsubmit flow
- **Calendar** with monthly navigation and deadlines shown on the grid
- **To-Do list** to add, complete and delete tasks (saved in the browser)
- **Grades & Progress** overview across all classes
- **Sign Up and Log in** with form validation, role selection (Student / Teacher) and avatar preview
- **Loading screen**, Help Center (FAQ), Privacy Policy, Terms of Use and a custom 404 page
- **Responsive layout** for desktop, tablet and mobile
- **Persistent data** using `localStorage`

## Pages

| Area | Pages |
|---|---|
| Public | Landing, About, Sign Up, Log in, Loading, Privacy Policy, Terms of Use, 404 |
| App | Dashboard, My Classes, Class Details, Assignments, Assignment Details, Calendar, To-Do, Announcements, Resources, Grades, Profile, Settings, Help Center |

## Tech Stack

- HTML5
- CSS3 (custom properties, Grid, Flexbox)
- Vanilla JavaScript (hash-based routing, no dependencies)
- [Inter](https://fonts.google.com/specimen/Inter) font via Google Fonts

## Brand Colors

| Color | Name | Hex | Used for |
|---|---|---|---|
| ![](https://placehold.co/20x20/0560BD/0560BD.png) | Classly Blue | `#0560BD` | Primary buttons, links, progress bars, banners |
| ![](https://placehold.co/20x20/E8F0FA/E8F0FA.png) | Light Blue | `#E8F0FA` | Active menu item, avatars, selected states |
| ![](https://placehold.co/20x20/F8F9FB/F8F9FB.png) | Background | `#F8F9FB` | Page background |
| ![](https://placehold.co/20x20/FFFFFF/FFFFFF.png) | White | `#FFFFFF` | Cards, sidebar, navigation |
| ![](https://placehold.co/20x20/1F2937/1F2937.png) | Dark Slate | `#1F2937` | Headings and main text |
| ![](https://placehold.co/20x20/6B7280/6B7280.png) | Muted Gray | `#6B7280` | Secondary text and descriptions |
| ![](https://placehold.co/20x20/E5E7EB/E5E7EB.png) | Border Gray | `#E5E7EB` | Card borders and dividers |
| ![](https://placehold.co/20x20/E8830C/E8830C.png) | Warning Orange | `#E8830C` | "Due tomorrow" deadline alerts |
| ![](https://placehold.co/20x20/16A34A/16A34A.png) | Success Green | `#16A34A` | "Turned in" status |

**Typography:** Inter (400, 500, 600, 700)

## Project Structure

```
classly/
├── index.html   # Page shell
├── style.css    # All styles and design tokens
├── app.js       # Routing, page templates, interactions, sample data
└── logo.png     # Classly logo
```

## Getting Started

No installation needed.

1. Clone or download the repository
   ```bash
   git clone https://github.com/YOUR-USERNAME/classly.git
   ```
2. Open `index.html` in your browser

Or use the **Live Server** extension in VS Code for automatic reloads while editing.

## Deployment

The site is static, so it works on GitHub Pages out of the box:

1. Go to **Settings → Pages**
2. Choose branch `main` and folder `/ (root)`
3. Save, and your site will be live at `https://YOUR-USERNAME.github.io/classly/`

## Customizing

- **Colors and spacing:** edit the CSS variables at the top of `style.css`
- **Classes, assignments and grades:** edit the sample data arrays (`C`, `A`, `R`) at the top of `app.js`

## Roadmap

- [ ] Real authentication and backend (Node.js or Firebase)
- [ ] Teacher tools: create classes, post assignments, grade submissions
- [ ] File uploads and cloud storage
- [ ] Dark mode
- [ ] Notifications and email reminders

## Notes

This is a front-end design project. Sign Up and Log in are not connected to a real backend, and all data is sample data or stored locally in your browser. Do not enter real passwords.

## Author

**Mahnoor Shahbaz**
Software engineering student · UI/UX and web development

## License

Released under the [MIT License](LICENSE).
