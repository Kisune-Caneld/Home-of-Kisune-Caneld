# Kisune-Caneld HomePage --- Blue Nostalgia / Cozy Furry Direction

> Design research and implementation guide for a personal
> Notion-inspired homepage with a blue nostalgic atmosphere and subtle
> furry identity.

## 1. Design brief

The target is **not** a generic "aesthetic dashboard".

The page should feel like:

> opening an old personal homepage on a rainy afternoon, around the
> Windows XP / early-web era, but rebuilt with modern Notion-like
> organization and modern web quality.

Core keywords:

-   Blue nostalgia
-   Personal homepage
-   Notion dashboard
-   Early web / Y2K
-   Windows XP / Luna-blue influence
-   Cozy
-   Rainy / quiet
-   Furry identity
-   Personal archive
-   Developer workspace
-   Handmade rather than corporate

The most important design rule:

**Use nostalgia as the atmosphere, not as an excuse to destroy
usability.**

Recent Notion dashboard guidance strongly favors a useful hierarchy:
navigation and orientation first, then tasks/projects/important
information. Notion's own dashboard documentation also distinguishes
stable dashboard views from more freeform inline database layouts. This
project should follow the same principle.

------------------------------------------------------------------------

## 2. Research findings

### 2.1 What works in Notion homepages

A strong personal Notion homepage commonly acts as a **home base**, not
as a complete database.

Typical functions:

1.  Quick navigation
2.  Current date / time
3.  Weather or ambient information
4.  Today's tasks
5.  Current projects
6.  Notes / inbox
7.  Important links
8.  Personal references
9.  Optional music / quote / mood elements

Thomas Frank's Personal Dashboard is a useful reference because it
explicitly treats the homepage as a home base and surfaces quick links,
tasks, notes, and reference material.

Notion's current dashboard guidance also emphasizes stable, app-like
dashboard layouts when a consistent surface is desired.

### 2.2 Aesthetic blue Notion dashboards

Blue is already a common Notion aesthetic direction. Marketplace
examples include:

-   Aesthetic Blue Dashboard
-   Pastel Blue Student Dashboard
-   Sky Blue Dashboard
-   Sky Blue Aesthetic Personal Dashboard
-   Clean white-and-blue homepages

The useful lesson is not to copy any particular template. The repeated
pattern is:

**light base + controlled blue accents + simple sections + enough
whitespace.**

The blue should establish identity without making every block blue.

### 2.3 Nostalgia / early-web research

Modern Y2K and early-web design commonly reuse:

-   icy/electric blues
-   gradients
-   glossy or translucent surfaces
-   chunky UI elements
-   pixel or system-like typography
-   stickers and small decorative graphics
-   old browser / operating-system metaphors
-   low-fi visual artifacts
-   playful personal-web composition

Windows XP is especially useful as a reference because its Luna
interface gives a recognizable blue language without requiring a full
retro-computer recreation.

Important distinction:

**Do not build a Windows XP simulator.**

Instead:

> Notion structure + modern UX + subtle XP/early-web visual memory.

This keeps the result recognizable as a personal workspace.

### 2.4 Furry influence

The furry component should work as **identity and illustration**, not as
the entire UI language.

Recommended direction:

-   one recurring character/avatar
-   small paw/animal motifs
-   character stickers
-   tiny decorative animals around otherwise normal UI
-   forest / bedroom / rainy-window imagery
-   soft blue fur tones
-   occasional handwritten captions
-   personal art/commission/archive links

Avoid making every section a furry-themed card. The page should still
read as a sophisticated Notion-inspired homepage at first glance.

A useful mental model:

**80% personal dashboard / 20% furry identity.**

### 2.5 Blue nostalgia is broader than Y2K

Do not limit the visual reference to neon Y2K.

There are at least three useful blue nostalgia layers:

#### Layer A --- Windows XP / Luna

-   medium blue title-bar gradients
-   pale blue backgrounds
-   cream/white surfaces
-   small bevels
-   familiar system icons
-   soft shadows

#### Layer B --- early personal web

-   tiny badges
-   link collections
-   stickers
-   small GIF-like decorations
-   simple separators
-   playful typography
-   personal "about me" blocks

#### Layer C --- 2000s digital nostalgia

-   translucent plastic
-   MP3-player references
-   blue glass
-   soft glow
-   pixel icons
-   old desktop metaphors
-   blue skies / clouds / rain

The final design should combine these instead of committing completely
to one.

------------------------------------------------------------------------

# 3. Recommended art direction

## Working name

**Kisune's Blue Room**

Alternative names:

-   Kisune's Home
-   Caneld's Corner
-   Blue Room
-   Rainy Blue Room
-   Kisune's Workshop
-   The Little Blue Den
-   Home of Kisune
-   Kisune's Desktop

Recommended:

> **Kisune's Blue Room**

It feels personal without sounding like a productivity product.

------------------------------------------------------------------------

# 4. Visual concept

Imagine this:

``` text
                rainy blue afternoon

        ┌─────────────────────────────────┐
        │  [soft sky / rainy window art]  │
        │                                 │
        │       KISUNE'S BLUE ROOM        │
        │     welcome back, Caneld        │
        │                                 │
        └─────────────────────────────────┘

       ┌──────────────┐  ┌────────────────────────┐
       │ NAVIGATION   │  │ TODAY                  │
       │              │  │                        │
       │ 🏠 Home      │  │ date / weather         │
       │ 💻 Projects  │  │ current tasks           │
       │ 📚 Notes     │  │ quick actions           │
       │ 🎨 Art       │  │                        │
       │ 🌲 Archive   │  └────────────────────────┘
       └──────────────┘

       ┌─────────────────────────┐
       │ CURRENTLY BUILDING      │
       │                         │
       │ project cards           │
       │ repository links        │
       │ progress / status       │
       └─────────────────────────┘

       ┌──────────────┐ ┌────────────────────────┐
       │ LITTLE DEN   │ │ RECENT / QUICK ACCESS  │
       │              │ │                        │
       │ music        │ │ notes                  │
       │ reading      │ │ bookmarks              │
       │ mood         │ │ references             │
       └──────────────┘ └────────────────────────┘
```

The page should feel like **a room with organized furniture**, not like
a SaaS admin dashboard.

------------------------------------------------------------------------

# 5. Layout architecture

## Recommended hierarchy

### Zone 1 --- Hero

Purpose: identity and atmosphere.

Contents:

-   cover illustration
-   avatar
-   title
-   short status
-   optional current mood
-   optional small weather indicator

Example:

``` text
KISUNE'S BLUE ROOM
a quiet place to build things.

🌧 Rainy afternoon · working on Home-of-Kisune-Caneld
```

Do not put ten widgets here.

The hero should answer:

> Where am I?

------------------------------------------------------------------------

## Zone 2 --- Navigation

Purpose: immediate access.

Use 5--8 links maximum.

Recommended:

-   Home
-   Projects
-   Code
-   Notes
-   Art
-   Journal
-   Resources
-   Archive

Navigation should behave like a small personal "Start menu".

------------------------------------------------------------------------

## Zone 3 --- Today

Purpose: immediate usefulness.

Recommended:

-   date
-   weather
-   today's tasks
-   next event
-   one priority

Avoid showing the entire task database.

The homepage should show a **filtered view**.

------------------------------------------------------------------------

## Zone 4 --- Current Projects

This is the most important functional area for a developer.

Show 3--5 active projects.

Each project should expose:

-   name
-   one-line description
-   status
-   repository
-   last activity
-   optional progress

Do not show every repository.

Homepage = current work.

Archive = everything else.

------------------------------------------------------------------------

## Zone 5 --- Personal corner

This is where furry / personal identity can become stronger.

Possible blocks:

``` text
MY DEN

🎵 music
📖 reading
🎨 artwork
🐾 character
🌲 current mood
📷 memories
```

This section can contain more decoration than the productivity areas.

------------------------------------------------------------------------

## Zone 6 --- Archive

A small entry point only.

Examples:

-   old projects
-   old notes
-   bookmarks
-   memories
-   finished work
-   old designs

This supports the nostalgia concept naturally.

------------------------------------------------------------------------

# 6. Grid recommendation

Use a restrained grid.

Desktop:

``` text
┌──────────────┬─────────────────────────────┐
│              │                             │
│ NAV          │ TODAY                       │
│ 25%          │ 75%                         │
│              │                             │
├──────────────┴─────────────────────────────┤
│                                             │
│ CURRENT PROJECTS                            │
│                                             │
├─────────────────────┬───────────────────────┤
│ PERSONAL / DEN       │ QUICK ACCESS          │
│                     │                       │
└─────────────────────┴───────────────────────┘
```

Do not create a 4--6 column dashboard just because Notion allows it.

The visual density should stay low.

------------------------------------------------------------------------

# 7. Color system

The main palette should be **blue nostalgia**, not generic pastel blue.

## Primary palette

``` text
Deep Blue       #24558A
Classic Blue    #3F73B8
Sky Blue        #8DBBE3
Pale Blue       #DCECF8
Cloud           #F4F7FA
Warm White      #FFFDF8
Ink             #18324A
Muted Blue      #66829D
```

## Optional nostalgic accents

``` text
XP Green        #72B34A
Soft Yellow     #F4D878
Lavender        #B8B7DD
Rain Gray       #8999A8
```

Use these sparingly.

### Ratio

Recommended:

``` text
60% warm white / cloud
25% pale blue
10% medium blue
5% accent colors
```

Avoid:

``` text
100% blue
```

That will make the page look like a corporate dashboard rather than a
nostalgic personal room.

------------------------------------------------------------------------

# 8. Surface treatment

Use three surface levels.

### Level 1 --- Background

Very light blue/gray or warm white.

### Level 2 --- Main cards

Warm white / pale blue.

### Level 3 --- Special cards

Medium blue or blue gradient.

Use borders and shadows lightly.

A good rule:

> If every card has a shadow, none of the cards feel special.

------------------------------------------------------------------------

# 9. Nostalgia effects

Use nostalgia in small doses.

Recommended:

-   subtle blue gradients
-   tiny pixel icons
-   small badges
-   old-school separators
-   soft bevels
-   translucent blue panels
-   tiny "online" / "last updated" labels
-   small decorative clouds
-   tiny paw-print cursor trail only if it does not hurt usability
-   1--2 animated elements

Avoid:

-   constant CRT distortion
-   heavy scanlines
-   aggressive VHS effects
-   flashing GIFs
-   unreadable pixel fonts
-   fake Windows error dialogs
-   excessive gradients
-   autoplay audio

The goal is:

**nostalgic, not annoying.**

------------------------------------------------------------------------

# 10. Typography

Keep primary text modern.

Recommended:

``` text
Primary:
Inter / Geist / system sans

Nostalgia accent:
Tahoma / Verdana / Arial / pixel font

Handwritten accent:
one handwriting font only
```

Do not use pixel fonts for body text.

A good hierarchy:

``` text
KISUNE'S BLUE ROOM
↓
modern large heading

welcome back, Caneld.
↓
soft secondary text

ONLINE · 13:42 · RAIN
↓
small nostalgic system label
```

------------------------------------------------------------------------

# 11. Furry integration

## Character strategy

Create one "mascot" that appears throughout the system.

For example:

``` text
        /\_/\
       ( o.o )
        > ^ <
```

But use actual artwork rather than ASCII in the final design.

Possible roles:

-   hero avatar
-   tiny corner sticker
-   loading animation
-   empty-state illustration
-   project-status mascot
-   archive guardian
-   weather companion

## Character behavior

The character should occasionally communicate state:

``` text
Working      → typing / focused
Idle         → sitting by window
Rain         → looking outside
Build pass   → happy
Error        → confused
Archive      → sleeping
```

This creates personality without making the UI childish.

------------------------------------------------------------------------

# 12. Rain / atmosphere

Rain is particularly compatible with blue nostalgia.

Recommended composition:

``` text
outside window:
    blue-gray sky
    rain
    distant trees

inside room:
    warm desk lamp
    monitor
    books
    plush / furry character
```

This creates a useful visual contrast:

``` text
COLD BLUE OUTSIDE
        ↓
     WINDOW
        ↓
WARM PERSONAL SPACE
```

That contrast is more interesting than making the entire page blue.

------------------------------------------------------------------------

# 13. Notion-specific implementation rules

## Keep the homepage shallow

The home page should not contain entire databases.

Instead:

``` text
Home
 ├── linked Projects view
 ├── linked Tasks view
 ├── quick links
 └── small widgets
```

The actual data lives elsewhere.

Example:

``` text
Projects DB
Tasks DB
Notes DB
Bookmarks DB
Art DB
Journal DB
```

Home only surfaces relevant views.

## Use filtered views

For example:

``` text
Projects:
status = active
```

``` text
Tasks:
due <= today
AND
completed = false
```

``` text
Notes:
updated within last 7 days
```

This keeps the homepage useful.

------------------------------------------------------------------------

# 14. Suggested Notion information architecture

``` text
🏠 HOME
│
├── 💻 Projects
│   ├── Active
│   ├── Backlog
│   └── Archive
│
├── 🧠 Knowledge
│   ├── Notes
│   ├── References
│   └── Learning
│
├── 🎨 Creative
│   ├── Art
│   ├── Characters
│   └── Inspiration
│
├── 📓 Journal
│
├── 🔖 Bookmarks
│
└── 🗄 Archive
```

This gives the homepage a clear mental model.

------------------------------------------------------------------------

# 15. Homepage content recommendation

Top:

``` text
KISUNE'S BLUE ROOM
welcome back.

🌧 Rainy
💻 Building something
🎵 Listening to ...
```

Then:

``` text
QUICK LINKS

Projects · Notes · Art · Journal · Archive
```

Then:

``` text
TODAY

Priority
Tasks
Calendar
Weather
```

Then:

``` text
CURRENTLY BUILDING

Project A
Project B
Project C
```

Then:

``` text
THE DEN

Music
Art
Reading
Character
Personal notes
```

Bottom:

``` text
ARCHIVE

old things worth keeping.
```

------------------------------------------------------------------------

# 16. What NOT to do

Avoid turning it into:

### Generic SaaS dashboard

``` text
Analytics
Revenue
Performance
KPI
Progress
Statistics
```

This is a personal homepage, not Linear.

### Pure Y2K website

``` text
glitter everywhere
pixel font everywhere
neon blue everywhere
fake Windows dialogs everywhere
```

This loses the Notion identity.

### Pure furry profile

``` text
character
character
character
character
```

It stops being a workspace.

### Pure Notion clone

``` text
white background
gray text
database
database
database
```

It loses the personality.

------------------------------------------------------------------------

# 17. Target balance

Use this as the design constraint:

``` text
                 IDENTITY
                    ▲
                    │
        Furry      │      Nostalgia
                    │
                    │
                    ●
             BLUE ROOM
                    │
                    │
       Notion       │      Utility
                    │
                    ▼
```

Or numerically:

``` text
Notion / productivity      45%
Blue nostalgia             25%
Personal / cozy            15%
Furry identity             10%
Y2K decoration              5%
```

This is the recommended starting point.

------------------------------------------------------------------------

# 18. Reference board

## Notion references

### Thomas Frank --- Personal Dashboard

Useful for:

-   homepage information architecture
-   quick links
-   task surfacing
-   notes
-   reference sections

Source:
https://thomasfrank.notion.site/Personal-Dashboard-eec502f0292949ad98cad2f1fe150e78

### Notion Dashboard documentation

Useful for:

-   dashboard views
-   stable layouts
-   database view patterns
-   information hierarchy

Source: https://www.notion.com/help/dashboards

### Notion Personal Work Dashboard

Useful for:

-   task views
-   table/calendar/board combinations
-   surfacing useful database information

Source: https://www.notion.com/en-gb/help/guides/personal-work-dashboard

### Notion blue dashboard examples

Search/reference:

-   Aesthetic Blue Dashboard
-   Pastel Blue Student Dashboard
-   Sky Blue Dashboard
-   Sky Blue Aesthetic Personal Dashboard

Marketplace: https://www.notion.com/templates

------------------------------------------------------------------------

## Nostalgia references

### Webflow --- Y2K web design

Useful for:

-   Y2K color
-   gradients
-   glossy UI
-   early-web visual language
-   modernizing nostalgia without sacrificing usability

Source: https://webflow.com/blog/y2k-aesthetic

### Wix --- Y2K design

Useful for:

-   icy blues
-   translucent materials
-   sticker graphics
-   gradients
-   early-2000s visual vocabulary

Source: https://www.wix.com/studio/blog/y2k-design

### Windows XP visual reference

Useful for:

-   Luna blue
-   title-bar gradients
-   system UI
-   nostalgic blue/cream relationship

Source:
https://www.retrospace.net/download/WebApplications/WindowsXPDesignGuidelines/folders.htm

------------------------------------------------------------------------

# 19. Moodboard search terms

When collecting visual references, search these rather than just "Notion
aesthetic":

``` text
blue nostalgia aesthetic
blue nostalgic website
Windows XP blue aesthetic
Windows XP Luna UI
early 2000s personal homepage
2000s personal website
old web blue aesthetic
rainy blue room aesthetic
cozy blue bedroom rain
blue furry art aesthetic
furry rainy room
furry blue character illustration
cozy furry bedroom
furry personal website
early web furry homepage
Y2K blue personal website
Webcore blue aesthetic
```

The goal is to collect **visual ingredients**, not copy a single
artist/template.

------------------------------------------------------------------------

# 20. Design tokens

If this later becomes a real website rather than only Notion, define
tokens from the start.

``` css
:root {
  --blue-950: #18324A;
  --blue-800: #24558A;
  --blue-600: #3F73B8;
  --blue-300: #8DBBE3;
  --blue-100: #DCECF8;

  --surface: #FFFDF8;
  --surface-blue: #F4F7FA;

  --text: #18324A;
  --text-muted: #66829D;

  --accent-green: #72B34A;
  --accent-yellow: #F4D878;

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
}
```

Do not blindly copy these values. They are the starting palette.

------------------------------------------------------------------------

# 21. Responsive behavior

Desktop:

``` text
navigation + content
```

Tablet:

``` text
navigation becomes compact
content becomes two columns
```

Mobile:

``` text
hero
↓
quick links
↓
today
↓
projects
↓
den
↓
archive
```

Do not attempt to preserve a desktop 3-column layout on mobile.

------------------------------------------------------------------------

# 22. Animation principles

Animation should communicate atmosphere or state.

Good:

-   rain movement
-   subtle cloud movement
-   character blinking
-   soft hover
-   page transition
-   small status indicator

Bad:

-   constant bouncing
-   flashing
-   large parallax
-   auto-playing music
-   distracting cursor effects

Recommended motion:

``` text
ambient = slow
UI = fast
character = occasional
```

------------------------------------------------------------------------

# 23. Asset strategy

Prioritize:

1.  Original personal artwork
2.  Licensed furry artwork
3.  Self-created illustrations
4.  Public-domain / appropriately licensed assets
5.  Small UI icons

Do not build the visual identity around artwork scraped from artists.

For furry inspiration, use artists as **moodboard references**, then
create an original visual language.

------------------------------------------------------------------------

# 24. Suggested first prototype

Do NOT build the entire system immediately.

Prototype only:

``` text
[ HERO ]

KISUNE'S BLUE ROOM
welcome back.

[ NAV ]       [ TODAY ]
              date
              weather
              priority

[ CURRENT PROJECTS ]

[ PERSONAL DEN ]   [ QUICK ACCESS ]
```

If this already feels right, continue.

If it does not feel right, adding more widgets will not fix it.

------------------------------------------------------------------------

# 25. Final design target

The final result should feel like:

> **A personal Notion workspace that accidentally became a cozy little
> corner of the early internet.**

Not:

> "A productivity dashboard with a furry wallpaper."

The strongest combination is:

``` text
Notion structure
        +
Windows XP / early-web blue
        +
rainy afternoon atmosphere
        +
subtle furry character identity
        +
modern typography
        +
restrained decoration
```

The visual metaphor is:

``` text
                 RAIN
                  ↓
        ┌──────────────────┐
        │      WINDOW      │
        │                  │
        │  blue outside    │
        └────────┬─────────┘
                 │
          warm personal room
                 │
      ┌──────────┴──────────┐
      │                     │
   WORKSPACE              DEN
      │                     │
   projects              art
   code                  music
   notes                 character
      │                     │
      └──────────┬──────────┘
                 │
               ARCHIVE
```

That is the core concept worth designing around.

------------------------------------------------------------------------

# 26. Recommended build order

### Phase 1 --- Structure

-   [ ] Create Home page
-   [ ] Create navigation
-   [ ] Create hero
-   [ ] Create Today section
-   [ ] Create Projects section
-   [ ] Create Personal/DEN section
-   [ ] Create Archive entry

### Phase 2 --- Visual identity

-   [ ] Choose hero artwork
-   [ ] Define blue palette
-   [ ] Choose typography
-   [ ] Define icons
-   [ ] Define recurring furry mascot
-   [ ] Define decorative motifs

### Phase 3 --- Atmosphere

-   [ ] Add rain/window visual
-   [ ] Add weather
-   [ ] Add subtle animation
-   [ ] Add music if genuinely useful
-   [ ] Add nostalgic micro-details

### Phase 4 --- Data

-   [ ] Connect Projects database
-   [ ] Connect Tasks database
-   [ ] Connect Notes database
-   [ ] Connect Bookmarks
-   [ ] Connect Art/Creative database

### Phase 5 --- Cleanup

-   [ ] Remove redundant widgets
-   [ ] Remove unnecessary decoration
-   [ ] Check mobile layout
-   [ ] Check contrast
-   [ ] Check loading performance
-   [ ] Check navigation
-   [ ] Ensure the page is still useful without the aesthetic assets

------------------------------------------------------------------------

# 27. One-sentence design rule

> **Make it feel like a warm personal room from the blue era of the
> internet, while keeping the information architecture disciplined
> enough that it still works as a Notion homepage every day.**

## Research note

This guide synthesizes current Notion dashboard patterns, blue aesthetic
templates, early-web/Y2K design references, and Windows XP-inspired
visual language. It is intentionally a design direction rather than a
clone of any particular template or artist.

As of August 2026, the most useful references for the implementation are
the Notion dashboard documentation and current Notion Marketplace blue
dashboard examples, while Y2K/early-web references are best treated as
visual vocabulary rather than literal UI specifications.
