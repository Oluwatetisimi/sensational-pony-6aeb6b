# VELOUR Fashion App — React JS Project

## Student Details
- **Full Name:** Oluwatetisimi Benjamin Longe
- **Matriculation Number:** 25/SCI01/068
- **Department:** Computer Science
- **Project Title:** VELOUR — Nigeria's Premier Fashion Destination
- **Business Category:** Fashion / Clothing Business Application

---

## Project Description
VELOUR is a full-featured React JS e-commerce fashion application for a premium Nigerian fashion brand. The app showcases women's wear, men's fashion, accessories, footwear, and bespoke tailoring services. Users can browse collections, filter by category, search products, add items to a shopping cart, and contact the business via a validated form.

---

## Tech Stack
- **React 18** (functional components, hooks)
- **React Router v6** (client-side routing)
- **Vite** (build tool)
- **Pure CSS** (Flexbox + Grid, media queries, CSS custom properties)
- **Google Fonts** (Inter + Playfair Display)

---

## React Concepts Demonstrated
| Concept | Implementation |
|---|---|
| `useState` | Cart state, wishlist, size selection, search, filter, form inputs, mobile menu, FAQ accordion |
| `useEffect` | Scroll-to-top on route change, localStorage cart sync, hero animation |
| `useContext` | `CartContext` — shared cart state across all components |
| Custom Hook | `useContactForm.js` — form state, validation, submit handling |
| Props | `<ProductCard product={p} />`, `<TestimonialCard testimonial={t} />` |
| `.map()` | Product grid, service cards, testimonials, navigation links |
| `.filter()` | Category filter + search query |
| React Router | 4 pages + 404, `<NavLink>` active state |
| Controlled Forms | Contact form with real-time validation |
| Event Handling | `onClick`, `onChange`, `onSubmit` |
| JSX | All components, `className`, JavaScript expressions |
| Reusable Components | `ProductCard`, `TestimonialCard`, `Navbar`, `Footer`, `FashionIcons` |

---

## Pages
1. **Home** — Hero, marquee, category grid, featured products, service icons, testimonials, CTA
2. **About** — Brand story, Mission/Vision/Objectives with icons, timeline, core values
3. **Collections/Products** — Search, category filter, sort, 12 products with size selector + add-to-cart + wishlist
4. **Contact** — Contact info cards, validated form, FAQ accordion

---

## Features
- 🛒 **Shopping Cart** — Add/remove items, quantity tracking, localStorage persistence, cart panel sidebar
- 💛 **Wishlist** — Favourite toggle on each product card
- 🔍 **Search & Filter** — Live search + category filter + sort
- 📱 **Responsive** — Mobile (320px), tablet (768px), desktop (1280px)
- ✅ **Form Validation** — Required fields, email format, success/error feedback
- 🎨 **OLED Black Icons** — Custom SVG icons in rounded-square badge style

---

## Running the Project
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

## Building for Production
```bash
npm run build
npm run preview
```
