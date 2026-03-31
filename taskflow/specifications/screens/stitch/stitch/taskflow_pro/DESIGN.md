# Design System Strategy: The Focused Editorial

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Architectural Flow."** 

Standard productivity apps often suffer from "Grid Fatigue"—a rigid, boxed-in feeling that mimics the very stress users are trying to manage. This design system breaks that mold by treating the interface like a premium editorial layout. We prioritize **negative space as a functional element** and use **tonal layering** instead of structural lines. The goal is to move the user’s eye through their tasks with the grace of a high-end magazine, making productivity feel less like a chore and more like a curated experience. 

By leveraging intentional asymmetry and sophisticated depth, we create an environment that feels both authoritative and breathable.

---

## 2. Colors & Surface Philosophy
The palette is rooted in a deep indigo (`primary: #2b3c8c`) to establish a foundation of professional trust. However, the "premium" feel comes from how we treat the background and surface interaction.

### The "No-Line" Rule
**Borders are prohibited for sectioning.** We do not use 1px solid lines to separate the sidebar from the main view or the header from the content. Boundaries are defined exclusively through background color shifts. 
- *Application:* A sidebar using `surface-container-low` sits directly against a main content area of `surface`. The change in hex value is the boundary.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, physical layers.
- **Base Layer:** `surface` (#faf8ff) – The canvas.
- **Mid Layer:** `surface-container-low` (#f2f3ff) – Large secondary regions (sidebars, secondary panels).
- **Interactive Layer:** `surface-container-lowest` (#ffffff) – This is for cards and primary actionable containers. Because it is the brightest white, it naturally "pops" off the cooler background without needing a shadow.

### The "Glass & Gradient" Rule
To avoid a flat, "Material-default" look:
- **Floating Elements:** Use `surface` at 80% opacity with a `backdrop-blur` of 20px for modals and dropdowns.
- **Signature Textures:** For primary CTAs and High-Priority indicators, use a subtle linear gradient from `primary` (#2b3c8c) to `primary-container` (#4454a5) at a 135-degree angle. This adds "soul" and dimension.

---

### 3. Typography: Editorial Authority
We utilize a dual-typeface system to balance character with legibility.

*   **Display & Headlines (Manrope):** Chosen for its geometric precision and modern "tech-editorial" feel. Use `display-md` (2.75rem) for dashboard greetings to create a bold, welcoming entry point.
*   **Body & Labels (Inter):** The workhorse. `body-md` (0.875rem) is the standard for task descriptions. 

**The Hierarchy Rule:** Use `headline-sm` (1.5rem) for project titles but drop the weight to Medium. Use `label-sm` (0.6875rem) in ALL CAPS with 0.05em letter-spacing for metadata (e.g., "DUE DATE") to create a sophisticated, "tagged" look.

---

## 4. Elevation & Depth
We reject the "drop shadow" defaults of the early 2020s. Depth in this design system is atmospheric.

*   **The Layering Principle:** A task card (`surface-container-lowest`) should be placed on a `surface-container-low` background. This creates a soft, natural lift via luminance contrast.
*   **Ambient Shadows:** If a card must float (e.g., during a drag-and-drop action), use an ultra-diffused shadow: 
    *   `box-shadow: 0 20px 40px rgba(19, 27, 46, 0.06);` 
    *   The shadow is tinted with `on-surface` (#131b2e) rather than pure black to keep the light feeling natural.
*   **The "Ghost Border":** For form inputs or accessibility, use a 1px border with `outline-variant` (#c5c5d4) at **20% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons
*   **Primary:** Gradient of `primary` to `primary-container`. `xl` roundedness (0.75rem). No border.
*   **Secondary:** `surface-container-high` background with `on-primary-fixed-variant` text.
*   **Tertiary:** Ghost style. No background/border. Text uses `primary` with a subtle `3.5` spacing (0.75rem) underline on hover.

### Task Cards
*   **Style:** No borders. `surface-container-lowest` background. 
*   **Layout:** Use `20` (4.5rem) left-padding to create an asymmetrical "gutter" where the priority indicator sits.
*   **Separation:** Instead of dividers, use a `5` (1.1rem) margin between cards to let the background "bleed" through.

### Form Inputs
*   **State:** Default state uses `surface-container-low` with no border. 
*   **Focus State:** Shifts to `surface-container-lowest` with a 1px "Ghost Border" of `primary` at 40% opacity. 
*   **Typography:** Labels use `label-md` and sit 0.3rem above the input.

### Priority Indicators (Chips)
*   **High:** `tertiary-container` (#a82b31) background with `on-tertiary-container` (#ffc4c1) text.
*   **Medium:** Use an Amber/Gold tint (derived from custom secondary tokens).
*   **Low:** `secondary-container` (#d5e3fc) background with `on-secondary-container` (#57657a) text.
*   **Shape:** `full` roundedness (pill shape) for high-contrast visibility.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical spacing. If the left margin of a container is `8` (1.75rem), try making the right margin `12` (2.75rem) to create an editorial flow.
*   **Do** use `surface-dim` for empty states to create a "recessed" feeling.
*   **Do** prioritize typography scale over color to show importance. A larger headline in `on-surface` is more premium than a small headline in a bright color.

### Don't
*   **Don't** use 100% black text. Always use `on-surface` (#131b2e) to maintain the deep indigo tonal consistency.
*   **Don't** use dividers/lines to separate list items. Use the `spacing scale` (e.g., `4` or `5`) to create "white space separators."
*   **Don't** use sharp corners. Stick to `xl` (0.75rem) for large containers and `md` (0.375rem) for smaller elements like checkboxes.