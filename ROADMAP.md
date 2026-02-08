# Actor Dashboard Roadmap

This roadmap outlines the implementation plan for transforming the current static dashboard into a fully functional management console for AI actors. The focus is on integrating "Real Runs", an "API Console", and "Task Management" while strictly adhering to the **Glassmorphism** design language and **Next.js** architecture.

## Phase 1: Data Architecture & Foundation
**Goal:** Expand the data model to support complex interactions (tasks, logs, API definitions) and set up the backend plumbing using Next.js API Routes.

### Steps
1.  **Define Enhanced Data Models**
    *   **Action:** Update `types/index.ts` to include interfaces for `Task`, `RunLog`, `ApiEndpoint`, and `ActorConfig`.
    *   **Success Criteria:** TypeScript compiles without errors; new interfaces accurately represent the data needed for all features.
2.  **Create Mock Database Layer**
    *   **Action:** Create a simple file-based "database" handler (e.g., `lib/db.ts`) that reads/writes to `data/actors.json` (and potentially new files like `data/tasks.json` or `data/runs.json`) to simulate persistence.
    *   **Success Criteria:** Functions `getActors()`, `updateActor()`, `getTasks(actorId)`, and `saveTask()` operate correctly in a test script.
3.  **Setup Next.js API Routes**
    *   **Action:** Create API endpoints at `app/api/actors/route.ts` and `app/api/tasks/route.ts`.
    *   **Success Criteria:** Sending a `GET` request to `/api/actors` returns the JSON data; `POST` requests can simulate updates.

## Phase 2: Task Management (Kanban/Todo)
**Goal:** Implement a per-actor task tracking system to manage development progress and bugs.

### Steps
1.  **Design `TaskBoard` Component**
    *   **Action:** Create a `TaskBoard` component using the `GlassCard` base. It should display columns (e.g., "To Do", "In Progress", "Done").
    *   **Success Criteria:** The board renders with the correct Glassmorphism styles (blur, transparency) matching `actor-dashboard/styles/globals.css`.
2.  **Create `TaskItem` Component**
    *   **Action:** Build a smaller glass card for individual tasks, featuring status indicators and edit/delete actions.
    *   **Success Criteria:** Task items look distinct from the background; hover effects work smoothly.
3.  **Implement Add/Edit Logic**
    *   **Action:** Build a modal (using a `GlassModal` wrapper) to add new tasks. Connect this to the Phase 1 API routes.
    *   **Success Criteria:** User can click "Add Task", type a description, save, and see the new task appear instantly on the board.
4.  **Integrate with Actor Detail View**
    *   **Action:** Embed the `TaskBoard` into a new detailed view for each actor (e.g., `app/actors/[id]/page.tsx`).
    *   **Success Criteria:** Navigating to an actor's detail page shows their specific tasks.

## Phase 3: Real Runs (Execution Engine)
**Goal:** Enable users to trigger actor executions and view live/simulated logs.

### Steps
1.  **Build `RunConfiguration` Modal**
    *   **Action:** Create a form with glass-styled inputs for parameters (JSON input, flags).
    *   **Success Criteria:** User can open a modal, enter valid JSON configuration, and submit.
2.  **Develop `ConsoleOutput` Component**
    *   **Action:** Create a terminal-like log viewer.
    *   **Style:** Dark semi-transparent background (`rgba(0, 0, 0, 0.6)`), monospaced font, auto-scroll.
    *   **Success Criteria:** Text streams into the component and remains readable against the glass background.
3.  **Implement Mock Execution API**
    *   **Action:** Create `app/api/run/route.ts`. Initially, this will simulate a run by returning a stream of log messages over time.
    *   **Success Criteria:** Clicking "Run" initiates a request; the UI receives and displays distinct log lines (Info, Warn, Error) sequentially.
4.  **Connect "Run" Button**
    *   **Action:** Wire the "Run" button on the `ActorCard` and Detail page to the `RunConfiguration` modal.
    *   **Success Criteria:** The entire flow (Click Run -> Configure -> Execute -> View Logs) works without page reloads.

## Phase 4: API Console
**Goal:** Provide an in-browser tool to test the actor's API endpoints (similar to Postman/Swagger).

### Steps
1.  **Create `ApiPlayground` Component**
    *   **Action:** Build a two-pane interface: Left side for request building (Method, URL, Body), Right side for response viewing.
    *   **Success Criteria:** Layout is responsive; inputs use the project's glass input styles.
2.  **Implement `ResponseViewer`**
    *   **Action:** Component to display JSON responses with syntax highlighting.
    *   **Success Criteria:** Large JSON objects are formatted and readable; errors are highlighted in red.
3.  **Endpoint Definition Integration**
    *   **Action:** Update the actor data model to include a list of available API endpoints (e.g., `GET /status`, `POST /scrape`). Populate the Playground dropdowns with these options.
    *   **Success Criteria:** Selecting an endpoint from a dropdown automatically populates the Method and URL fields.
4.  **Execute Real Requests**
    *   **Action:** Implement the fetch logic to call the actual actor endpoints (or proxy them through Next.js if CORS is an issue).
    *   **Success Criteria:** User can hit "Send", waiting state appears, and the real (or mocked) JSON response is rendered in the `ResponseViewer`.

## Phase 5: Polish & Refinement
**Goal:** Ensure the high-end aesthetic is consistent and the UX is premium.

### Steps
1.  **Glassmorphism Audit**
    *   **Action:** Review all new components. Ensure consistent use of `backdrop-filter: blur`, `border: 1px solid rgba(...)`, and box shadows.
    *   **Success Criteria:** No "flat" colors; depth is perceivable on all layers.
2.  **Animations & Transitions**
    *   **Action:** Add CSS transitions for hover states, modal entries, and list updates.
    *   **Success Criteria:** Modals fade in/scale up; list items slide into place; buttons have tactile feedback.
3.  **Responsiveness Check**
    *   **Action:** Test layouts on mobile and tablet breakpoints.
    *   **Success Criteria:** Dashboard grid collapses to list; modals are full-screen on mobile; log viewer remains usable.
