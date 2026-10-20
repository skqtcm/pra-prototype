# PRA Prototype — D365 PRM UI

Interactive HTML prototype of the Provider Relationship Management (PRM) module in Dynamics 365.

## Pages

- **PRA Calls** (`index.html`) — Call list with views, filters, and priority indicators
- **My Providers** (`my-providers.html`) — Provider roster with status and follow-up dates
- **Provider Detail** (`provider-detail.html?id=214577`) — PRA Call form with tabs (Call Info, PRA Actions, Reports Section, Sub-Grids, Notes, Administration)
- **Provider Dashboard** (`provider-dashboard.html?id=214577`) — Performance metrics, program scores, sparklines, and trend charts
- **Report Card** (`report-card.html?id=214577`) — Quarterly Provider Performance Report Card (read-only, AI-generated)
- **Call Queue** (`pra-call-queue.html`) — Prioritized queue with overdue tracking

## Running locally

No build step required. Open any HTML file directly in a browser:

```
# Clone the repo
git clone https://github.com/skqtcm/pra-prototype.git
cd pra-prototype

# Open in browser
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

All pages are self-contained static HTML with vanilla JS. The only external dependency is Microsoft's Office UI Fabric Icons CDN (loaded via `<link>` tag).

## Structure

```
pra-prototype/
  d365-ui-kit.css          # Shared D365 UCI design tokens and components
  index.html               # PRA Calls list
  my-providers.html        # My Providers list
  provider-detail.html     # PRA Call detail form
  provider-dashboard.html  # Provider performance dashboard
  report-card.html         # Quarterly report card
  pra-call-queue.html      # Call queue
  js/
    d365-app.js            # Shell renderer, table engine, modals, toasts
    pra-data.js            # Sample data
    pra-charts.js          # SVG chart renderers (sparklines, line charts)
  assets/                  # Logo and icons
  screenshots/             # Reference screenshots from live D365
```
