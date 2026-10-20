# PRM (Provider Relationship Management) — D365 Application Structure

**URL**: `https://prmuat.crm.microsoftdynamics.us`  
**App**: UAT LQTC PRM (Leidos QTC Health Services)  
**Platform**: Microsoft Dynamics 365 — Unified Client Interface (UCI)  
**Environment**: SANDBOX (UAT)

---

## Global Shell

### Top Bar (Header)
- **Logo**: Leidos QTC Health Services (left)
- **App name**: "UAT LQTC PRM" (next to logo)
- **Global search**: Search box (center-left)
- **Environment badge**: "SANDBOX" in large text (center)
- **Global commands** (right): Assistant, New (+), Advanced Find (funnel), Notifications (bell), Settings (gear), Help (?), User info (person)

### Left Navigation (Site Map)
- Collapsible sidebar with tree navigation
- **Sticky items**: Home, Recent (expandable), Pinned (expandable)
- **Section groups** with expandable sub-items (see below)
- **Area switcher** at bottom: "Workplace (change area)" button

### Areas (via area switcher)
1. **Workplace** (default) — main operational area
2. **Supporting Elements** — reference data
3. **Settings** — admin configuration

---

## Navigation Structure (Workplace Area)

### Dashboards & Activities
| Item | Entity | Notes |
|------|--------|-------|
| Dashboards | system dashboard | Multiple: Provider Performance, Specialized Training, Billing Team Leader, CCR-Unassigned Tickets, Feedback Type Trends, Feedback/Concern Ticket, Mileage Ticket, My Active Tickets, My Billing Team Leader, + more |
| Tracking Tool Link | web resource | External link |
| My Phone Calls | phonecall | Filtered to current user |
| All Activities | activitypointer | All activity types |
| PRA Calls | prm_pracall | **Core entity** — 13 system views (see below) |
| PR Tasks | task | Provider-related tasks |
| Q-T-C Activity Trackers | custom | QTC activity tracking |
| TPL Phone Calls | phonecall | Third-party liability calls |

### Provider Related
| Item | Entity | Notes |
|------|--------|-------|
| Providers | contact | **Core entity** — Active Contacts view, 5000+ records |
| BP(s) Standard Fees | custom | Business partner fees |
| Certifications | custom | Provider certifications |
| Contracts | custom | Provider contracts |
| Credentialing Committee File Reviews | custom | Credentialing reviews |
| Education | custom | Provider education records |
| Insurances | custom | Insurance information |
| Labs | custom | Lab associations |
| Licenses (Credentials) | custom | License/credential tracking |
| Performance | custom | **Key for PRA project** — Provider performance data |
| Provider Note | custom | Notes on providers |
| Provider Locations | custom | Location associations |
| All Locations | custom | All location records |
| PAY ID | custom | Payment identifiers |
| Panels | custom | Provider panels |
| Professional Providers | custom | Professional provider records |
| Provider Security | custom | Security/access settings |
| Services | custom | Service offerings |
| Special Certifications | custom | Special cert tracking |
| Specialties | custom | Specialty records |
| Surveys | custom | Survey data |
| Utilization | custom | Utilization metrics |

### Requests/Tickets
| Item | Entity | Notes |
|------|--------|-------|
| Complaints | custom | Provider complaints |
| PRF's | custom | Provider Request Forms |
| Provider Training Form | custom | Training forms |
| Tickets | prm_ticket | **Core entity** — support/incident tickets |
| Ticket Tasks | custom | Tasks linked to tickets |
| Travel Requests | custom | Travel request management |
| VSC Tasks | custom | VSC task tracking |

### Collateral
| Item | Entity | Notes |
|------|--------|-------|
| Fee Approval Requests | custom | Fee approval workflow |
| Line of Businesses (Custom) | custom | LOB configuration |
| Provider Fees | custom | Fee schedules |
| Quality Error Glossaries | custom | QA error definitions |

### Work
| Item | Entity | Notes |
|------|--------|-------|
| Queues | queue | Work queues |
| Queue Items | queueitem | Items in queues |

### Reporting
| Item | Entity | Notes |
|------|--------|-------|
| Legacy Advanced Find | web resource | Classic advanced find |
| Power BI | web resource | Embedded Power BI |
| Reports | report | SSRS reports |

---

## PRA Calls — System Views

1. **My Open PRA Calls** (Default)
2. 01. Unassigned, New PRA Calls
3. 02. Assigned PRA Calls
4. 03. Active Escalations View
5. 04. PRA Calls On Hold
6. 05. PRA Completed Calls
7. 06. My PRA Calls
8. 07. My PRA Completions QTD
9. 08. All PRA Calls
10. 09. Cancelled PRA Calls
11. 10. QAA Assistance View
12. 11. Site Visit Feedback View
13. All PRA Calls

### All PRA Calls — List Columns
- Subject (text, link to record)
- Phone... (phone number)
- From (lookup — user)
- To (lookup — contact)
- National Ac... (national account)
- Interaction... (interaction type)
- Date Created (datetime)

**Row count**: 5000+

---

## PRA Call — Detail Form

### Header
- **Title**: "#108659 Tiffany Townsend NP, NY" (H1)
- **Save status**: "- Saved" (status text)
- **Entity type**: "PRA Call" (subtitle)
- **Header fields** (right side, horizontal):
  - Completed By: [user name]
  - Activity Status: Completed
  - Owner: [user link]
- **More Header Fields** expand chevron

### Command Bar
Back, Record Set Nav, Open in New Window, Refresh, Check Access, Add to Queue, Flow (dropdown), Run Report (dropdown), Share

### Tabs

#### Tab 1: Call Information Section
**Section: Call Info**
- Subject (text)
- To (lookup — contact, with icon)
- From (lookup — user, with icon)
- PRA Interaction Categories (optionset/text)

**Section: Provider Info**
- Provider Name (lookup, required *)
- Linked Provider Request Form (lookup)

#### Tab 2: PRA Actions
**Section: PRA Actions and Dispositions**
- PRA Assigned (lookup)
- Date PRA Assigned (date)
- Attempt 1 (date) | Attempt 1 Method (optionset, "---" placeholder)
- Attempt 2 (date) | Attempt 2 Method (optionset)

#### Tab 3: Sub-Grids
**Sub-grid: Provider Contracts**
- Columns: Provider ID, Associated..., Date of..., 6 mo...(↑), Appts Sche..., Appts Sche..., Appt Co..., Appt Co..., T..., DO...
- Has own toolbar: Refresh, link icon, Flow, more (⋮)

#### Tab 4: Notes & Attachments
**Timeline component**
- Search Timeline (search box)
- "Enter a note..." (rich text input)
- Attachment icon (paperclip)
- Toolbar: Add (+), Filter, Sort, Refresh, More (⋮)

#### Tab 5: Administration
**Section: ADMINISTRATION**
- Miscellaneous Tracking (text)
- Linked Ticket (lookup)
- Provider Help Ticket (lookup)
- Provider Payment Ticket (lookup)

#### Tab 6: Related (dropdown)
- Expandable menu to navigate to related entities

---

## Providers (Contacts) — List View

### View: Active Contacts
**Toolbar**: Back, Show As (dropdown), Show Chart, Refresh, Visualize this view, Email a Link, Flow (dropdown), More (⋮), Share

**Columns**:
- Full Name (text, link)
- Provider Type
- Corporate Name
- City
- State (↑ sorted)
- Provider ID
- Exam Specialty
- Email
- Business Phone
- Provider Universal Status
- MD License #
- Travel PVD Pay Type

**Features**:
- Alphabet filter bar (All, #, A-Z) at bottom
- Pagination: "1 - 50 of 5000+" with page navigation
- Edit columns, Edit filters, Filter by keyword

---

## Tickets — List View

### View: 00. My Active Tickets (All)
**Toolbar**: Back, Focused view, Show Chart, + New, Refresh, Visualize this view, Email a Link, Flow (dropdown), More (⋮), Share

**Columns**:
- Ticket Number
- Follow-up... (date)
- Follow-up... (date)
- Created... (date)
- Date of Incident
- Incident... (↑ sorted)
- Exam Status
- Escalation Status
- Case Type

---

## Dashboard: 01. Provider Performance Dashboard

**Toolbar**: Back, Set As Default, Refresh All, Share
**Dashboard selector** dropdown (same pattern as view selector)

**Components**:
- Sub-grid: "01. Active Provider Performances" with view selector
  - Columns: Provider ID, Provider Name, Exam Specialty, Provider Universal..., Max SA..., Max Ori..., Initial C..., Onsite...
  - Own toolbar: Refresh, See all records, More (⋮)
  - Filter by keyword search

**Other available dashboards**:
1. 01. Provider Performance Dashboard
2. 02. Specialized Training Dashboard
3. Billing Team Leader Dashboard
4. CCR- Unassigned Tickets
5. Feedback Type Trends Dashboard
6. Feedback/Concern Ticket Dashboard
7. Mileage Ticket Dashboard
8. My Active Tickets Dashboard
9. My Billing Team Leader Dashboard
10. (more...)
