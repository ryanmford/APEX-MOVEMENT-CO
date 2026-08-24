# APEX HQ - AI Assistant Guidelines

This file (`AGENTS.md`) is automatically read by the AI assistant at the start of every chat. It serves as our permanent memory for project guidelines, naming conventions, and design rules.

## Core Directive
* **Guide, Don't Override:** Use these guidelines to inform new development and copy decisions. Do not aggressively refactor or override the existing architecture or UI patterns unless explicitly instructed.

## Brand Voice & Copywriting
* **Brand Name:** Always spell it as **APEX HQ**, Apex HQ, or APEX.
* **Tone & Perspective:** Direct. Declarative. Minimalist. Treat the user as smart. Use "you" heavily. Avoid "I" or "we" when possible. Speak directly to the user's goals. 
* **Structure & Punctuation:** Write in short sentences and paragraphs (1-3 sentences max). Use line breaks instead of commas. Land punchlines on strong, short nouns.
* **Rhetorical Patterns:** Use clear contrasts (e.g., theory vs. practice, amateur vs. professional) and parallel structures. State uncomfortable truths about training and mastery directly.
* **Banned Language:** NO jargon, NO cliches, and NO "cheesy" or "hustle-culture" marketing language. 
* **Tactical Diplomacy:** When discussing our methods versus others, maintain "Professional Excellence." We operate quietly and effectively. Avoid rebellious or overly aggressive tropes; we are the standard-bearers, not the underdogs.

## Key Project Concepts
* **The APEX Method:** Our core philosophy and curriculum for movement education. It is systematic, rigorous, and proven.
* **Two Communities:** We serve both dedicated practitioners (learning, training, library) and high-level professionals (coaching, certification, hiring for projects/stunt work).
* **Mastery over Metric:** While data matters, our primary focus is on deep movement mastery, safety, and longevity in the sport.
* **The Ecosystem:** APEX HQ encompasses education (Learn, Library), professional development (Certification, Coaches), and industry execution (Hire, Projects).

## App Development & Feature Mechanics (The "Low-Lift" Doctrine)
* **The "Low-Lift" Engineering Rule:** Whenever possible, do not over-engineer. Unless absolutely necessary, avoid complex algorithms, heavy backend dependencies, or convoluted state management. As much as possible, rely on static data structures (`src/data/index.tsx`), manual booleans, and direct external links for complex flows (like scheduling or payments) until custom builds are strictly required. Do not fix what isn't broken.
* **Clear Conversion Paths:** Every page (Apply, Hire, Learn, Certification) must have a singular, frictionless call to action.
* **Micro-Narratives & Attribution:** Elevate our coaches and athletes. Whenever possible, display names, credentials, and portfolios for coaches, staff, and featured athletes.

## Metadata & Content Conventions
* **Educational Taxonomy:** Group stats, library resources, and curriculum logically by discipline, difficulty level, and progression stage.
* **Structural Integrity:** Ensure that FAQs, Testimonials, and Project showcases are strictly categorized and easy to filter. 

## Design & UI Guidelines
* **Input Focus Zoom Prevention:** Never use font sizes smaller than 16px (e.g., `text-sm`, `text-[12px]`) on `<input>`, `<textarea>`, or `<select>` elements. iOS Safari automatically zooms out/in on any form element with a font size under 16px, which severely breaks layouts. Always force inputs to be at least `text-[16px]` or `text-base`.
* **Aesthetic:** Minimalist, high-fidelity design. Professional, authoritative, and clean. Complexity happens by default; simplicity happens by design.
* **Visual Integration:** Visuals break up text and reinforce the core points. They do not exist just to decorate. 
* **Media Proof:** Place a heavy, uncompromising emphasis on high-quality imagery and videos of actual world-class performers and coaches.
* **Typography & Theming:** Maintain refined contrast. Use purposeful outlines, accessible colors, and clear hierarchical highlights. 
* **States & Loading:** Never flash blank screens or raw, unstyled data. Always default to loading states (Skeletons) during data fetch cycles and use polished empty states for null results so the UI never feels broken.
* **UI Complexity Control:** Keep buttons, toggles, and atomic UI components simple. Avoid heavy nesting, excessive absolute layers, or heavy blurring (`backdrop-blur`) inside repeated UI elements, which can cause freezing, lagging, and glitching on mobile rendering engines.

## Technical & Architecture Principles
* **Mobile-First Reality:** Always design layouts starting from mobile touch screens. Desktop serves as a widescreen expansion of this, not the baseline.
* **Component Taxonomy:** Respect the rigid folder structure:
  * `/src/pages`: Root route components.
  * `/src/components/sections`: Large, modular page blocks (e.g., `NewHeroSection`, `LibrarySection`).
  * `/src/components`: Reusable, atomic UI elements.
  * `/src/contexts`: React context providers.
  * `/src/data`: Static mock or localized app data.
* **Data Flow & State:** Rely aggressively on simple React principles. Use `AppContext` for global UI state and keep local state scoped to its component. Avoid creating temporary local state for anything that affects the global interface.
