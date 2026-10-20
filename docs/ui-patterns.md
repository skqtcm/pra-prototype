# D365 UCI — UI Patterns & Component Inventory

Reference for building PRA prototype with authentic D365 look and feel.

---

## Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│ TOP BAR (header)                                        │
│ [Logo] [App Name] [Search...] SANDBOX [icons...]        │
├────────┬────────────────────────────────────────────────┤
│ SIDE   │ COMMAND BAR (context-sensitive toolbar)         │
│ NAV    ├────────────────────────────────────────────────┤
│        │ VIEW HEADER (title + view selector)             │
│ Tree   ├────────────────────────────────────────────────┤
│ items  │ CONTENT AREA                                    │
│        │  - List view (data grid)                        │
│        │  - Detail form (tabs + sections)                │
│        │  - Dashboard (embedded grids/charts)            │
│ [Area] │                                                 │
│ switch │                                                 │
└────────┴────────────────────────────────────────────────┘
```

---

## Component Catalog

### 1. Top Bar (Global Header)
- **Height**: ~48px
- **Background**: #002050 (dark navy blue)
- **Font color**: white
- **Logo**: Left-aligned, ~120px wide
- **App title**: White text, regular weight
- **Search**: Rounded input, light background
- **SANDBOX label**: Large semi-transparent text overlay
- **Global command icons**: White, ~32px touch targets
- **Sign-in banner** (warning): Yellow/amber background, full width below header

### 2. Left Navigation (Site Map)
- **Width**: ~210px expanded, ~48px collapsed
- **Background**: White (#fff)
- **Border-right**: 1px solid light gray
- **Tree items**:
  - Icon (20px) + Label text
  - Hover: light blue background
  - Selected: bold text + left border accent (blue, 3px)
  - Section headers: Bold, uppercase-ish, with expand/collapse chevron
  - Nested items: indented ~20px
- **Area switcher**: Bottom-fixed, button with icon + text + chevron

### 3. Command Bar (Toolbar)
- **Height**: ~44px
- **Background**: White
- **Border-bottom**: 1px solid #e1e1e1
- **Items**: Icon + text label, separated by vertical dividers (|)
- **Variants by context**:
  - **List view**: Back, Show As, Show Chart, +New, Refresh, Visualize, Email a Link, Flow▾, More(⋮), Share
  - **Detail form**: Back, Record Set Nav, Open New Window, Refresh, Check Access, Add to Queue, Flow▾, Run Report▾, Share
  - **Dashboard**: Back, Set As Default, Refresh All, Share
- **Overflow**: Items beyond viewport go into ⋮ menu

### 4. View Header
- **Title**: Large text with dropdown chevron (view selector)
- **View selector**: Flyout panel with "System Views" heading, list of views, "Default" badge
- **Right side**: Edit columns, Edit filters, Filter by keyword (search input)
- **Filter bar** (optional): "Due: [All ▾]" dropdown below title

### 5. Data Grid (Treegrid)
- **Header row**: Column name + sort indicator (↑↓) + column menu (▾)
- **Data rows**: Alternating white, hover highlight
- **Row height**: ~42px
- **Selection**: Checkbox column (circle/check)
- **Link cells**: Blue text (#0078D4), underline on hover
- **Empty state**: Gray grid icon + "We didn't find anything to show here"
- **Row count**: "Rows: 0" or "1 - 50 of 5000+"
- **Pagination**: First, Previous, "Page 1", Next, Last
- **Alphabet filter**: A-Z bar at bottom (for contact-type entities)
- **Horizontal scroll**: Native scrollbar when columns exceed width

### 6. Detail Form
- **Header section**:
  - Title (H1): Entity name, large bold text
  - Save status: "- Saved" / "- Unsaved changes"
  - Entity type label: Smaller text below title
  - Header fields: Right-aligned, horizontal layout
    - Field value (bold) over field label (small gray)
    - Separated by vertical dividers
- **Tab bar**: Horizontal tabs with underline indicator (blue, 3px)
  - Active tab: Bold text + blue underline
  - Inactive: Regular weight, no underline
- **Form sections**:
  - Section heading: Bold text, left-aligned, with horizontal rule
  - Two-column layout for fields
  - Label: Left side, gray text
  - Value: Right side, input field or read-only text
- **Read-only banner**: Gray background with lock icon, "Read-only: You don't have access..."

### 7. Form Fields
- **Text input**: Full-width, light gray background (#f3f2f1), no visible border, bottom-border on focus (blue)
- **Lookup field**: Text with entity icon prefix, blue link text
- **Option set**: Dropdown with "---" placeholder
- **Required indicator**: Red asterisk (*)
- **Read-only**: Slightly darker background, no interaction

### 8. Timeline (Notes & Attachments)
- **Search**: "Search Timeline" input at top
- **Note input**: "Enter a note..." with rich text, paperclip attachment icon
- **Toolbar**: Add (+), Filter (funnel), Sort (arrows), Refresh, More (⋮)
- **Empty state**: Folder icon

### 9. Sub-Grid (Embedded Grid)
- **Header**: Grid title + own toolbar (Refresh, link, Flow, ⋮)
- **View selector**: Dropdown within sub-grid header
- Same column/row patterns as main data grid
- Contained within form tab panel

### 10. Dashboard
- **Dashboard selector**: Same dropdown pattern as view selector
- **Components**: Embedded sub-grids with own toolbars
- **Layout**: Single or multi-column grid of components

### 11. Flyout / Dropdown Panels
- **View selector flyout**: White panel, shadow, "System Views" header
- **Area switcher flyout**: Bottom-anchored, "Change area" header, checkmark on active
- **Command dropdowns**: Flow, Run Report — icon + text items

---

## Observed Color Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Header bg | #002050 | Top bar background |
| Header text | #FFFFFF | Top bar text/icons |
| Primary accent | #0078D4 | Links, active tab underline, selected nav border |
| Body bg | #F5F5F5 | Page/content background |
| Card/form bg | #FFFFFF | Form areas, grids, panels |
| Input bg | #F3F2F1 | Text inputs, read-only fields |
| Input bg focus | #FFFFFF | Focused input |
| Border light | #E1E1E1 | Dividers, grid lines, separators |
| Text primary | #323130 | Body text |
| Text secondary | #605E5C | Labels, secondary text |
| Text link | #0078D4 | Hyperlinks in grids |
| Warning banner | #FFF4CE | Sign-in warning background |
| Warning text | #323130 | Warning banner text |
| Error/required | #A4262C | Required field asterisk |
| Selected nav bg | #EBF3FC | Hovered/selected nav item |
| Read-only banner | #F3F2F1 | Read-only notification bar |

## Observed Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| App title | Segoe UI | 14px | 600 |
| SANDBOX badge | Segoe UI | ~36px | 600, semi-transparent |
| Nav section header | Segoe UI | 13px | 600 |
| Nav item | Segoe UI | 13px | 400 (600 when selected) |
| View title | Segoe UI | 20px | 600 |
| Form H1 | Segoe UI | 20px | 600 |
| Form section heading | Segoe UI | 16px | 600 |
| Tab label | Segoe UI | 14px | 400 (600 active) |
| Grid header | Segoe UI | 12px | 600 |
| Grid cell | Segoe UI | 13px | 400 |
| Field label | Segoe UI | 12px | 400, color #605E5C |
| Field value | Segoe UI | 14px | 400 |
| Command bar item | Segoe UI | 13px | 400 |
| Status badge | Segoe UI | 12px | 400 |
| Row count | Segoe UI | 12px | 400, color #0078D4 |

## Spacing & Sizing

| Element | Value |
|---------|-------|
| Top bar height | 48px |
| Command bar height | 44px |
| Side nav width (expanded) | 210px |
| Side nav width (collapsed) | 48px |
| Tab bar height | 44px |
| Grid row height | 42px |
| Grid header height | 36px |
| Form field row height | ~58px (label + input) |
| Section padding | 16px horizontal |
| Card/panel padding | 16px |
| Border radius | 2px (minimal, D365 is very square) |
| Icon size (nav) | 20px |
| Icon size (command) | 16px |
| Icon size (global) | 20px |
