---
name: Aloys Portafaix
description: A research annual review for medical imaging methods and clinical prototypes.
colors:
  paper: "#f9f9f6"
  surface: "#eeefea"
  ink: "#232721"
  muted: "#575e54"
  accent: "#bc3524"
  rule: "#d1d5cb"
  white: "#fff"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(3.3rem,7.4vw,6rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-.025em"
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(2.5rem,4.4vw,4rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-.02em"
  title:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "clamp(1.25rem,2vw,1.65rem)"
    fontWeight: 600
    lineHeight: 1.28
    letterSpacing: "-.025em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "17px"
    lineHeight: 1.65
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: ".85rem"
    lineHeight: 1.5
rounded:
  square: "0"
spacing:
  gutter: "clamp(20px,4.5vw,72px)"
  section: "clamp(64px,8vw,112px)"
---

# Design System: Aloys Portafaix

## Overview

**Creative North Star: "Research Annual Review"**

A research annual review built from bright paper, graphite text, vermilion section headings, and large research figures. Condensed display typography gives names and sections a strong editorial voice; reading text and citation metadata remain measured and direct.

Published methods and working clinical prototypes share the same ruled, squared visual grammar. This document records implemented source in assets/css/editorial.css, assets/js/editorial.js, and the editorial layouts/includes; browser rendering and runtime screenshots were unavailable, so it does not certify rendered appearance.

**Key Characteristics:**

- Self-hosted condensed display type paired with clear sans-serif reading text.
- Flat paper surfaces, thin rules, and squared figure fields.
- Responsive spreads and citation rows with visible keyboard focus.
- Progressive publication filtering and a dedicated print presentation.

## Colors

The palette combines warm pale paper and green-leaning graphite neutrals with a single vermilion accent. The frontmatter preserves the source CSS color values.

### Primary

- **Vermilion — accent:** Section headings, publication years, the wordmark dot, hover text, keyboard focus, and text selection.

### Neutral

- **Bright paper — paper:** The page canvas and selected filter text.
- **Quiet field — surface:** Research and prototype media backgrounds.
- **Graphite — ink:** Main reading text, structural rules, and selected filter fills.
- **Secondary graphite — muted:** Metadata, dates, captions, and supporting copy.
- **Pale rule — rule:** Citation separators, project dividers, and idle filter borders.
- **Figure white — white:** The lead research figure field and selected text foreground.

**The Accent Has a Job Rule.** Use vermilion for editorial hierarchy and interaction feedback, following the existing headings, years, links, and focus treatment.

## Typography

**Display Font:** Barlow Condensed, falling back to sans-serif. The semibold face is self-hosted at `assets/fonts/barlow-condensed-semibold.woff2` (600).

**Body Font:** DM Sans, falling back to sans-serif. Its variable face is self-hosted at `assets/fonts/dm-sans-variable.woff2` (100–1000). Both faces use swap rendering and are preloaded by the editorial layout.

Display headings are compact and balanced; the name masthead is uppercase and stays on one line. Body typography carries prose, titles of individual papers, labels, and navigation. There is no separate mono family.

- **Display and headline:** Use the frontmatter hierarchy for general page headings and sections. The masthead has its own responsive size overrides; detail titles use a smaller fluid scale (2.5rem–4.5rem) with a slightly looser line height (1.1).
- **Title:** General third-level headings use the body family; publication titles use a smaller reading-oriented treatment (1.2rem, 1.4 line height) and a maximum width (62ch).
- **Body:** Base reading text uses the frontmatter body role; paragraphs generally stop at (70ch). Long-form content sits in a narrower prose container (850px). At the narrow breakpoint the body size becomes (16px).
- **Label:** Metadata uses the label role. Navigation is slightly larger (.875rem), while supporting figure captions and portrait notes are smaller (.8rem). Publication years use display type and tabular numbers; news dates also use tabular numbers.

**The Evidence Stays Readable Rule.** Keep paper titles, authors, venues, captions, and links in the reading family; reserve condensed type for identity, editorial headings, and publication years.

## Layout

The centered shell is capped at (1440px), with the fluid gutter and section spacing from the frontmatter. Thin horizontal rules divide content instead of enclosing every item. Main sections use a generous vertical rhythm; citation rows and news entries are more compact.

On wide screens, the masthead is an asymmetric two-column grid (1.8fr / 1fr). Lead figure captions split into copy and links (1.6fr / 1fr). The biography uses three tracks (1fr / 1.8fr / .85fr), project spreads pair media and text (1.5fr / 1fr), and research directions form two equal columns. Publication rows have a year track (92px), flexible citation, and link track (120px), separated by (24px). The footer contact block uses two columns (1.2fr / 1fr).

At (1050px) and below, the masthead becomes one column; the biography becomes two columns with a portrait below its heading. At (700px) and below, project spreads, research directions, figure captions, text-only project entries, and the contact block stack. The biography retains a small portrait beside the heading (110px), with copy spanning below. Publication rows retain a year column (54px) beside the citation; paper/code links move below the citation in a horizontal row. Navigation wraps in place, with no drawer or hamburger.

The shared lead-figure rule uses a wide contained frame (4702 / 1575). The homepage methodology figure overrides that frame: its simplified overview uses native proportions (1774 / 887), full width, automatic height and aspect ratio, containment, and a maximum height (460px). The image opens at full resolution, and the caption links to the original paper figure. A keyboard-focusable horizontal-scroll region preserves the labels on narrow screens. Project media use a contained frame (13 / 7); portraits are square and cropped with cover. Where used on detail pages, wide-image scroll regions retain keyboard focus and a minimum image width (720px; 640px at the narrow breakpoint).

Printing removes site navigation, footer, filter controls, CV print actions, skip links, and arrow icons. The shell loses its gutters and width cap, body copy becomes (11pt), page titles become (36pt), and prose section headings become (20pt). Publication rows avoid internal page breaks; prose headings avoid breaks immediately after them. The CV reveals the researcher's identity/contact block and full publication list. Printing a filtered bibliography reveals every publication row and suppresses the result count.

## Elevation & Depth

The implemented system has no box shadows. Depth comes from paper, quiet media fields, white figure grounds, whitespace, and thin ink or pale rules. The only entrance animation clips the bottom edge of the lead feature into view over (.7s), on screens at least (850px) wide. Link and filter feedback uses short transitions (.18s) with the source easing curve. Reduced-motion preference removes animations and transitions and switches smooth scrolling off.

**The Flat Surface Rule.** Separate sections with spacing and horizontal rules; do not add floating card shadows.

## Shapes

Figure fields, portrait crops, and controls are squared. Filter buttons explicitly use the square radius token. Idle filters use a pale border (1px), while major page boundaries use thin ink rules. Link arrows are small inline northeast SVG strokes (17px); they are decorative and hidden from assistive technology. There is no rounded chip or elevated card system.

## Components

### Navigation

The header pairs a condensed initials wordmark with wrapping text links. The active route has an accent underline (2px); hover changes link text to accent. Navigation remains visible and wraps more tightly on small screens. The skip link appears at the top edge on focus. Interactive elements receive an accent outline (2px) offset from the element (5px); scrollable image regions use a closer offset (2px).

### Text links

Research, code, and contact actions are underlined text with generous underline offset (5px). Shared action links have a minimum height (40px); paper/code links in citation rows use (36px). The northeast arrow supplies a consistent visual cue without replacing meaningful link text. Hover uses accent text; keyboard focus uses the shared outline.

### Publication filters

Squared text buttons use transparent backgrounds, pale borders, compact type, internal spacing (10px 20px), and a minimum height (44px). Hover darkens the border; the selected state fills with ink, reverses the text to paper, and sets `aria-pressed="true"`. Focus retains the shared visible outline.

Filters are hidden until JavaScript initializes; all publication rows remain readable without it. Initialization selects all publications. Selecting a category hides nonmatching rows, updates each button's pressed state, and announces the result count in a polite atomic status region. An empty category adds “— try another category.” to the count. Print styles restore all rows regardless of the active category.

### Publication rows

Each ruled row combines a vermilion year, paper title, muted author list, semibold venue, optional author note, and paper/code links. The title is a text link without a default underline. Rows keep their citation structure at narrow widths while moving actions beneath the citation. Print rules prevent splitting rows internally.

### Figure and project spreads

Research figures are evidence fields, not decorative cards: use contained media, a squared white or quiet background, and captions with context plus direct action links. Lead figures use a white inset (18px, reduced to 10px on narrow screens). Project media captions use compact muted text with inset spacing (12px 16px). Project spreads end with a thin pale rule.

### Citation disclosure

Detail pages place optional citation text in a native disclosure below the prose. A thin top rule and semibold summary identify the control; the summary has vertical spacing (8px) and a pointer cursor. Keyboard focus uses the shared outline; expanded content follows with a top gap (16px).

### CV print action

A squared, unfilled ink-border button invokes the browser print dialog. It uses internal spacing (10px 20px) and a minimum height (44px), is revealed only when JavaScript initializes, and disappears in print. The print-only identity and full bibliography supply the information needed after the site header is removed.

## Do's and Don'ts

### Do:

- Do use the same ruled editorial grammar for research and clinical prototypes.
- Do preserve figure proportions, legible captions, and links to evidence.
- Do keep publication selection visible through aria-pressed and announce the result count.
- Do retain reduced-motion behavior, keyboard focus outlines, and complete print bibliographies.

### Don't:

- Don't introduce elevated cards, rounded pills, or decorative gradients into this flat system.
- Don't substitute remote font loading for the self-hosted font files.
- Don't rely on color alone to indicate the current navigation item or selected filter.
- Don't hide publication records when JavaScript is unavailable or when printing a filtered list.
