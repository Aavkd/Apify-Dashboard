# Actor Dashboard - Project Brief

## 1. Project Overview
**Goal:** Create a centralized, interactive dashboard to monitor, manage, and document a fleet of AI "actors" (agents/bots).
**Current Status:** Integration of 2 existing published actors, designed to scale for future additions.

## 2. Design Philosophy
-   **Style:** Minimalist & Professional.
-   **Key Visual Element:** **Glassmorphism**. High use of translucency, background blur, and subtle borders to create depth and a modern, premium feel.
-   **Atmosphere:** Clean, organized, and focused on data visibility.

## 3. Technology Stack
-   **Framework:** **Next.js** (React) for performance, routing, and scalability.
-   **Language:** JavaScript/TypeScript (preferred).
-   **Styling:** **Vanilla CSS / CSS Modules** (to strictly follow design control) to achieve custom glassmorphism effects.

## 4. Functional Requirements
### A. Dashboard Interface
-   **Layout:** Responsive grid or list view displaying all available actors.
-   **Visuals:** Glassmorphic cards floating over a subtle, abstract background.

### B. Actor Card Component
-   **Status Indicator:** Visual cue for "Online", "Offline", "Error", "Maintenance".
-   **Identity:** Actor Name, Avatar/Icon, Short Description.
-   **Actions:**
    -   **Manage:** Controls to start/stop/configure (or deep links to management interfaces).
    -   **Documentation:** Direct link to the specific **Notion** page for context and history.

### C. Data Structure
-   **Scalability:** The system must allow easy addition of new actors (e.g., via a config array or JSON file initially, moving to an API later).
-   **Initial Data:** Mock data for the 2 existing actors.

## 5. Development Guidelines for Sub-Agents
-   **Component Modularity:** Build reusable components (e.g., `ActorCard`, `StatusBadge`, `GlassContainer`).
-   **User Experience:** Ensure smooth transitions and hover effects to enhance the interactive feel.
-   **Maintainability:** Keep the actor configuration separate from the UI code to facilitate easy updates.
