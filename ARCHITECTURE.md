# Actor Dashboard Architecture

## 1. Overview
The Actor Dashboard is a modern, responsive web application designed to monitor and manage web scraping actors (e.g., "Smart Maps Scraper", "TikTok Shop Spy"). It provides a visual interface for tracking status, viewing details, and accessing related documentation (Notion links).

## 2. Technology Stack

*   **Framework**: [Next.js 16.1.6](https://nextjs.org/) (App Router)
*   **Language**: TypeScript (v5)
*   **UI Library**: React 19.2.3
*   **Styling**: Vanilla CSS + CSS Modules
*   **Linting**: ESLint 9

## 3. Directory Structure

The project follows a standard Next.js App Router structure with feature-based directories at the root.

```
actor-dashboard/
├── app/                  # Next.js App Router pages and layouts
│   ├── layout.tsx        # Root layout (wraps all pages)
│   ├── page.tsx          # Main dashboard view
│   └── favicon.ico       # Site icon
├── components/           # Reusable UI components
│   ├── ActorCard.tsx     # Displays individual actor details
│   ├── GlassCard.tsx     # Base container with glassmorphism effect
│   ├── Layout.tsx        # Main page container wrapper
│   ├── StatusBadge.tsx   # Visual status indicator (online/error)
│   └── *.module.css      # Component-scoped styles
├── data/                 # Mock data storage
│   └── actors.json       # JSON array of actor objects
├── styles/               # Global styles
│   └── globals.css       # CSS variables, reset, and base glassmorphism tokens
├── types/                # TypeScript type definitions
│   └── index.ts          # Shared types (Actor, Status, etc.)
└── public/               # Static assets
```

## 4. Design & Styling

### Core Philosophy: Glassmorphism
The design heavily relies on the **Glassmorphism** aesthetic, characterized by:
*   **Translucency**: Semi-transparent backgrounds using `rgba()` alpha channels.
*   **Blur**: `backdrop-filter: blur(16px)` to create the frosted glass effect.
*   **Borders**: Subtle, semi-transparent white borders (`1px solid rgba(255, 255, 255, 0.1)`) to define edges against the background.
*   **Shadows**: Soft drop shadows to create depth and separation from the background.

### Implementation
1.  **Global Variables (`styles/globals.css`)**:
    *   Defines CSS variables for theming (`--bg-color-dark`, `--primary-color`).
    *   Defines Glassmorphism tokens (`--glass-bg`, `--glass-blur`, `--glass-border`).
    *   Sets a complex radial gradient background to enhance the glass effect visibility.

2.  **CSS Modules**:
    *   Components use `[Name].module.css` files to scope styles locally.
    *   The `GlassCard` component is the fundamental building block, encapsulating the glass styles.

## 5. Data Flow

### Current State (Mock Data)
*   **Source**: Data is currently static and stored in `data/actors.json`.
*   **Fetching**:
    *   The `app/page.tsx` (Server Component) imports the JSON file directly.
    *   Data is typed using the `Actor` interface and passed down to client/server components as props.

### Mock Data Structure
The `actors.json` file contains an array of actor objects:

```json
[
  {
    "id": "1",
    "name": "Smart Maps Scraper",
    "status": "online", // "online" | "offline" | "error" | "maintenance"
    "description": "...",
    "notionLink": "...",
    "icon": "🗺️"
  }
]
```

## 6. Key Components

*   **`GlassCard`**: A wrapper component that applies the glass effect. It accepts `className` and `style` props for customization.
*   **`ActorCard`**: Composes `GlassCard` to display specific actor information. It handles conditional rendering based on the actor's status.
*   **`StatusBadge`**: A pure presentational component that maps status strings (e.g., "online", "error") to specific colors (Green, Red).

## 7. Next Steps & Scalability
*   **API Integration**: Replace `import data` with `fetch('/api/actors')` or a database query in the Server Component.
*   **State Management**: If interactivity increases (e.g., real-time status updates), introduce a context or query library (e.g., TanStack Query).
