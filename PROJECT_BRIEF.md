# Actor Dashboard - Project Brief

**Notion Page:** [Actor Dashboard](https://www.notion.so/Dashboard-3015d34069d8803786c8e954b0b8dc6a)

## 1. Project Overview
**Goal:** Create a centralized, interactive dashboard to monitor, manage, and document a fleet of AI "actors" (agents/bots).
**Current Status:** Basic UI exists (mockup). The dashboard currently lacks functional depth and real integration.

## 2. Design Philosophy
-   **Style:** Minimalist & Professional.
-   **Key Visual Element:** **Glassmorphism**. High use of translucency, background blur, and subtle borders to create depth and a modern, premium feel.
-   **Atmosphere:** Clean, organized, and focused on data visibility.

## 3. Technology Stack
-   **Framework:** **Next.js** (React) for performance, routing, and scalability.
-   **Language:** JavaScript/TypeScript (preferred).
-   **Styling:** **Vanilla CSS / CSS Modules** (to strictly follow design control) to achieve custom glassmorphism effects.

## 4. Functional Requirements (Updated)
### A. Dashboard Interface
-   **Layout:** Responsive grid or list view displaying all available actors.
-   **Visuals:** Glassmorphic cards floating over a subtle, abstract background.
-   **Functionality:** The dashboard must be fully functional, moving beyond a static UI.

### B. Actor Card Component
-   **Status Indicator:** Visual cue for "Online", "Offline", "Error", "Maintenance".
-   **Identity:** Actor Name, Avatar/Icon, Short Description.
-   **Actions:**
    -   **Run:** Launch a real execution of the actor with custom input parameters.
    -   **Manage:** Controls to start/stop/configure.
    -   **Details:** View detailed information about the actor.
    -   **API Console:** Direct link to the API console for the actor.
    -   **Documentation:** Direct link to the specific **Notion** page for context and history.

### C. Task Management (New)
-   **Per-Actor Todo List:** Implement a Trello-style board or list for each actor to track development progress, bugs, and future features.
-   **Tracking:** Add development steps for actors currently in development.

### D. Data Structure
-   **Scalability:** The system must allow easy addition of new actors (e.g., via a config array or JSON file initially, moving to an API later).
-   **Real Integration:** Move away from mock data to real API calls where possible.

## 5. Development Guidelines for Sub-Agents
-   **Component Modularity:** Build reusable components (e.g., `ActorCard`, `StatusBadge`, `GlassContainer`).
-   **User Experience:** Ensure smooth transitions and hover effects to enhance the interactive feel.
-   **Maintainability:** Keep the actor configuration separate from the UI code to facilitate easy updates.
