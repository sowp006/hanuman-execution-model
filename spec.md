# Hanuman Execution Model (HEM)

## Current State
The site is a 7-page React app: Home, About, Journey (interactive map), Framework, Case Study, Alignment, Conclusion. It uses a client-side router with fade-in transitions, saffron/gold design tokens, and a sticky top nav.

## Requested Changes (Diff)

### Add
- **Story Page** (`/story`): A beginner-friendly explainer — Who is Hanuman? What was his mission? Written for people with zero Ramayana knowledge. Use simple cards/sections.
- **Why It Matters Page** (`/why`): Explains why engineers need ethical frameworks, why planning and ethics matter, using icon cards.

### Modify
- **Router**: Replace `about` page id with `story`, replace `alignment` with `why`.
- **Nav links**: Change "About" → "Story", "Alignment" → "Why It Matters".
- **App.tsx page map**: Wire StoryPage and WhyItMattersPage in place of AboutPage and AlignmentPage.
- **Home Page**: Update the "Learn More" button to navigate to `story` instead of `about`. Update the highlight cards to reference Story instead of a generic about.
- **Framework Page**: Update step 4 label from "Intelligent Adaptability" to "Adaptability" and step 5 from "Transparent Communication" to "Communication" to match the new spec. Keep all detail content.
- **Journey Map**: Add a 4th location — "Start Point" (Ayodhya/Rama's camp) before Kishkindha — to match the user's requested "Start point → Ocean → Lanka" structure. Or keep existing 3 points if it fits the description well. Actually user says Start/Ocean/Lanka — keep 3 points as Kishkindha=Start, Ocean, Lanka. Current map already matches this.

### Remove
- **AboutPage.tsx** — replaced by StoryPage.tsx
- **AlignmentPage.tsx** — replaced by WhyItMattersPage.tsx

## Implementation Plan
1. Create `src/frontend/src/pages/StoryPage.tsx` — beginner-friendly Hanuman story with simple prose cards: section 1 "Who is Hanuman?", section 2 "What was his mission?", section 3 "Why does this matter?"
2. Create `src/frontend/src/pages/WhyItMattersPage.tsx` — icon cards for: "Why engineers need this", "Why ethics matter", "Why planning matters", plus a short closing quote.
3. Update `src/frontend/src/router.tsx` — change PageId type from `about`→`story` and `alignment`→`why`.
4. Update `src/frontend/App.tsx` — update NAV_LINKS, PageContent map, imports.
5. Update `src/frontend/src/pages/HomePage.tsx` — update Learn More button target to `story`, update highlight cards.
6. Update `src/frontend/src/pages/FrameworkPage.tsx` — rename step labels.
7. Delete or leave unused AboutPage/AlignmentPage (they won't be imported).
