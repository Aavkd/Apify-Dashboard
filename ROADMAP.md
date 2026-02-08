# Actor Dashboard - Development Roadmap

This roadmap outlines the phased execution plan to build the Actor Dashboard using Next.js with a minimalist Glassmorphism design.

## Phase 1: Project Initialization & Setup
**Goal:** Establish the foundational codebase and development environment.
- [x] **Initialize Next.js Project:**
    - Create a new Next.js app (`npx create-next-app`).
    - Configure TypeScript (strict mode).
    - Clean up default boilerplate code.
- [x] **Directory Structure:**
    - Set up `components/`, `styles/`, `data/`, `types/`, `hooks/`.
- [x] **Global Styling Setup:**
    - Create `styles/globals.css` with CSS variables for colors, spacing, and glassmorphism tokens.
    - Import Google Fonts (e.g., Inter, Roboto, or a monospaced font for a tech feel).

## Phase 2: Design System & Core UI
**Goal:** Implement the visual language (Glassmorphism) and basic layout.
- [x] **Design Tokens:** Define CSS variables for:
    - Glass background (blur, translucency).
    - Borders (subtle white/grey).
    - Shadows (soft, ambient).
    - Colors (primary, success/error for status).
- [x] **Base Components:**
    - `Layout`: Main wrapper with the abstract background.
    - `GlassCard`: A reusable container component with the glass effect.
    - `Button`: Styled buttons with hover states.
- [x] **Responsive Grid:** Create the main dashboard layout to hold actor cards.

## Phase 3: Core Functionality & Data Integration
**Goal:** Display the actors and their statuses dynamically.
- [ ] **Data Model:**
    - Define the `Actor` type interface (id, name, status, notionLink, description, etc.).
    - Create `data/actors.json` or a config file with mock data for the 2 existing actors.
- [ ] **Actor Component:**
    - Build `ActorCard` to display specific actor info.
    - Implement status indicators (Green dot for Online, Red for Error, etc.).
- [ ] **Dashboard View:**
    - Render the list of actors from the data source into the grid.

## Phase 4: Interactions & Integration
**Goal:** Make the dashboard functional and interactive.
- [ ] **Management Actions:**
    - Add "Manage" buttons/links to the cards.
    - Implement mock handlers for start/stop actions (console log or toast notification).
- [ ] **External Links:**
    - Integrate the Notion links properly (open in new tab with security attributes).
- [ ] **Micro-Interactions:**
    - Add hover effects to cards (lift up, glow).
    - Add smooth transitions for status changes or list filtering.

## Phase 5: Polish & Finalization
**Goal:** Ensure a premium, bug-free experience.
- [ ] **Review & Refine:**
    - Check contrast and readability on the glass background.
    - Ensure responsiveness on mobile/tablet.
- [ ] **Performance:**
    - Optimize images and assets.
- [ ] **Final Build:**
    - Run `npm run build` to verify production readiness.
- [ ] **Documentation:**
    - Update `README.md` with setup instructions.
