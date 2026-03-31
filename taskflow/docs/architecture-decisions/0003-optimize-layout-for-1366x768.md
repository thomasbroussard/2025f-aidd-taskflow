# 3. Optimize Layout for 1366x768 Resolution

Date: 2026-03-31

## Status

Accepted

## Context

Laptops with WXGA resolutions (1366x768) represent a significant percentage of standard workstations. Our "Architectural Flow" design system initially utilized heavy padding (`p-6` inside cards, `p-8` in forms) and large margin gaps (`space-y-6`, `gap-10`) which felt premium but pushed critical workspace content 'below the fold' on screens with only ~768px height. Users noted this specifically required excessive scrolling to reach the task submission and view tasks simultaneously.

## Decision

We have adopted a "high-density premium" responsive variant:
1. **Vertical Condensation:** We reduced vertical properties (e.g., `py-3.5` -> `py-2.5` on inputs, `space-y-5` -> `space-y-4` on the task list, `p-8` -> `p-6` on the form card).
2. **Typography Scaling:** Scaled down extreme desktop typography marginally (`text-[2.75rem]` to `text-[2.25rem]`) and lowered the height of multi-line textareas (`h-24` -> `h-20`).
3. **Grid Allocation:** Tuned grid columns to dynamically adjust on standard laptop screens (`lg:` to `xl:`), providing a slightly narrower Form column (`360px` vs `400px`) before 1280px screen widths.

## Consequences

- Form components and task lists now fit cleanly within a 768px vertical viewport alongside the top navigation.
- Padding adjustments require developers to recognize our standard "premium" margins (`p-6` -> `p-5/4`) have tighter tolerances on web views vs static HTML mockups.
- Better alignment at the top pixel heights creates a sharper, unified dashboard UI without losing the defined depth/shadow rules in `DESIGN.md`.
