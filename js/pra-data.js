const PRA_DATA = {
  currentUser: { name: "Jordan Tanaka", id: "PRA-1001", role: "Provider Relationship Advocate" },

  providers: [
    { id: "214577", name: "DANA MARIE OVERSTREET", specialty: "General Medicine",
      facility: "Meadowbrook Health Grp", city: "Millbrook", state: "PA",
      email: "doverstreet@meadowbrookhealthgrp.com", corporate: "MEADOWBROOK HEALTH GRP",
      status: "Active", lastContact: "2026-10-08", nextFollowUp: "2026-12-09",
      tier: 2, tierLabel: "Strong Performer", overallScore: 88, scoreTrend: 2.1 },
    { id: "214590", name: "RENE BERGSTROM", specialty: "Orthopedics",
      facility: "Millbrook Specialty Care", city: "Brookhaven", state: "GA",
      email: "rbergstrom@millbrookspec.com", corporate: "MILLBROOK SPECIALTY CARE",
      status: "Active", lastContact: "2026-10-08", nextFollowUp: "2026-12-09",
      tier: 3, tierLabel: "Solid Performer", overallScore: 79, scoreTrend: -0.5 },
    { id: "214602", name: "MICAH SORENSEN", specialty: "Orthopedics",
      facility: "Harborview Health Partners", city: "Oak Bluff", state: "CO",
      email: "msorensen@harborviewhp.com", corporate: "HARBORVIEW HEALTH PARTNERS",
      status: "Active", lastContact: "2026-01-01", nextFollowUp: "2026-09-23",
      tier: 1, tierLabel: "Top Performer", overallScore: 94, scoreTrend: 1.2 },
    { id: "214615", name: "SYDNEY NOVAK", specialty: "Family Medicine",
      facility: "Cedar Falls Clinic", city: "Elm City", state: "WV",
      email: "snovak@cedarfallsclinic.com", corporate: "CEDAR FALLS CLINIC",
      status: "Active", lastContact: "2025-02-02", nextFollowUp: "2026-03-14",
      tier: 2, tierLabel: "Strong Performer", overallScore: 85, scoreTrend: 3.0 },
    { id: "214628", name: "SYDNEY SORENSEN", specialty: "OB/GYN",
      facility: "Maple Grove Family Practice", city: "Oak Bluff", state: "AZ",
      email: "ssorensen@maplegrovefp.com", corporate: "MAPLE GROVE FAMILY PRACTICE",
      status: "Active", lastContact: "2026-02-26", nextFollowUp: "2026-08-06",
      tier: 3, tierLabel: "Solid Performer", overallScore: 76, scoreTrend: -1.0 },
    { id: "214641", name: "MORGAN DUARTE", specialty: "Physical Therapy",
      facility: "Maple Grove Family Practice", city: "Harborview", state: "IL",
      email: "mduarte@maplegrovefp.com", corporate: "MAPLE GROVE FAMILY PRACTICE",
      status: "Active", lastContact: "2026-05-23", nextFollowUp: "2026-04-04",
      tier: 2, tierLabel: "Strong Performer", overallScore: 82, scoreTrend: 0.5 },
    { id: "214654", name: "JORDAN DELACROIX", specialty: "Cardiology",
      facility: "Brookhaven Health Network", city: "Elm City", state: "OK",
      email: "jdelacroix@brookhavenhn.com", corporate: "BROOKHAVEN HEALTH NETWORK",
      status: "Inactive", lastContact: "2025-04-04", nextFollowUp: null,
      tier: 4, tierLabel: "Needs Improvement", overallScore: 62, scoreTrend: -2.5 },
    { id: "214667", name: "MORGAN KOWALSKI", specialty: "Orthopedics",
      facility: "Fairview Community Health", city: "Pine Ridge", state: "WA",
      email: "mkowalski@fairviewch.com", corporate: "FAIRVIEW COMMUNITY HEALTH",
      status: "Pending", lastContact: "2026-01-24", nextFollowUp: "2026-02-21",
      tier: 3, tierLabel: "Solid Performer", overallScore: 74, scoreTrend: 1.5 },
    { id: "214680", name: "AVERY FENWICK", specialty: "Endocrinology",
      facility: "Fairview Community Health", city: "Brookhaven", state: "MD",
      email: "afenwick@fairviewch.com", corporate: "FAIRVIEW COMMUNITY HEALTH",
      status: "Inactive", lastContact: "2026-09-18", nextFollowUp: null,
      tier: 4, tierLabel: "Needs Improvement", overallScore: 58, scoreTrend: -3.0 },
    { id: "214693", name: "QUINN DELACROIX", specialty: "Orthopedics",
      facility: "Brookhaven Health Network", city: "Westfield", state: "MD",
      email: "qdelacroix@brookhavenhn.com", corporate: "BROOKHAVEN HEALTH NETWORK",
      status: "Inactive", lastContact: "2026-11-20", nextFollowUp: null,
      tier: 3, tierLabel: "Solid Performer", overallScore: 71, scoreTrend: -0.8 },
    { id: "214706", name: "QUINN LINDQVIST", specialty: "Family Medicine",
      facility: "Maple Grove Family Practice", city: "Lakeside", state: "GA",
      email: "qlindqvist@maplegrovefp.com", corporate: "MAPLE GROVE FAMILY PRACTICE",
      status: "Pending", lastContact: "2026-12-17", nextFollowUp: "2026-09-01",
      tier: 2, tierLabel: "Strong Performer", overallScore: 83, scoreTrend: 2.0 },
    { id: "214719", name: "CASEY LINDQVIST", specialty: "Physical Therapy",
      facility: "Cedar Falls Clinic", city: "Maple Grove", state: "TX",
      email: "clindqvist@cedarfallsclinic.com", corporate: "CEDAR FALLS CLINIC",
      status: "Active", lastContact: "2025-06-13", nextFollowUp: "2026-08-22",
      tier: 1, tierLabel: "Top Performer", overallScore: 95, scoreTrend: 0.3 }
  ],

  calls: [
    { id: "CALL-001", providerId: "214577", to: "DANA MARIE OVERSTREET", from: "Jordan Tanaka", owner: "Jordan Tanaka",
      dateCreated: "2026-09-18", actualEnd: "2026-09-18", status: "Completed",
      category: "QTC Quarterly Feedback", subject: "DANA MARIE OVERSTREET, 214577 - Millbrook, PA - Q3 FEEDBACK" },
    { id: "CALL-002", providerId: "214590", to: "RENE BERGSTROM", from: "Jordan Tanaka", owner: "Jordan Tanaka",
      dateCreated: "2026-10-08", actualEnd: null, status: "Open",
      category: "QTC Quarterly Feedback", subject: "RENE BERGSTROM, 214590 - Brookhaven, GA - Q3 FEEDBACK" },
    { id: "CALL-003", providerId: "214602", to: "MICAH SORENSEN", from: "Jordan Tanaka", owner: "Jordan Tanaka",
      dateCreated: "2026-09-23", actualEnd: "2026-09-23", status: "Completed",
      category: "QTC Quarterly Feedback", subject: "MICAH SORENSEN, 214602 - Oak Bluff, CO - Q3 FEEDBACK" },
    { id: "CALL-004", providerId: "214615", to: "SYDNEY NOVAK", from: "Casey Lin", owner: "Casey Lin",
      dateCreated: "2026-08-15", actualEnd: "2026-08-15", status: "Completed",
      category: "QTC Quarterly Feedback", subject: "SYDNEY NOVAK, 214615 - Elm City, WV - SITE VISIT" },
    { id: "CALL-005", providerId: "214628", to: "SYDNEY SORENSEN", from: "Jordan Tanaka", owner: "Jordan Tanaka",
      dateCreated: "2026-10-01", actualEnd: null, status: "Open",
      category: "QTC Quarterly Feedback", subject: "SYDNEY SORENSEN, 214628 - Oak Bluff, AZ - Q3 FEEDBACK" },
    { id: "CALL-006", providerId: "214641", to: "MORGAN DUARTE", from: "Morgan Ellis", owner: "Morgan Ellis",
      dateCreated: "2026-07-22", actualEnd: "2026-09-06", status: "Completed",
      category: "QTC Quarterly Feedback", subject: "MORGAN DUARTE, 214641 - Harborview, IL - Q2 FEEDBACK" },
    { id: "CALL-007", providerId: "214654", to: "JORDAN DELACROIX", from: "Casey Lin", owner: "Casey Lin",
      dateCreated: "2026-03-02", actualEnd: "2026-12-08", status: "Completed",
      category: "QTC Quarterly Feedback", subject: "JORDAN DELACROIX, 214654 - Elm City, OK - Q1 FEEDBACK" },
    { id: "CALL-008", providerId: "214667", to: "MORGAN KOWALSKI", from: "Priya Shah", owner: "Priya Shah",
      dateCreated: "2026-02-26", actualEnd: "2026-10-16", status: "Completed",
      category: "QTC Quarterly Feedback", subject: "MORGAN KOWALSKI, 214667 - Pine Ridge, WA - AUDIT REVIEW" },
    { id: "CALL-009", providerId: "214680", to: "AVERY FENWICK", from: "Dana Ortiz", owner: "Dana Ortiz",
      dateCreated: "2025-12-13", actualEnd: "2026-06-20", status: "Completed",
      category: "QTC Quarterly Feedback", subject: "AVERY FENWICK, 214680 - Brookhaven, MD - Q4 FEEDBACK" },
    { id: "CALL-010", providerId: "214693", to: "QUINN DELACROIX", from: "Taylor Brooks", owner: "Taylor Brooks",
      dateCreated: "2025-08-16", actualEnd: "2025-04-04", status: "Completed",
      category: "QTC Quarterly Feedback", subject: "QUINN DELACROIX, 214693 - Westfield, MD - SITE VISIT" },
    { id: "CALL-011", providerId: "214706", to: "QUINN LINDQVIST", from: "Taylor Brooks", owner: "Taylor Brooks",
      dateCreated: "2025-11-24", actualEnd: "2025-12-19", status: "Completed",
      category: "QTC Quarterly Feedback", subject: "QUINN LINDQVIST, 214706 - Lakeside, GA - Q4 FEEDBACK" },
    { id: "CALL-012", providerId: "214719", to: "CASEY LINDQVIST", from: "Riley Chen", owner: "Riley Chen",
      dateCreated: "2025-07-10", actualEnd: "2026-03-01", status: "Completed",
      category: "QTC Quarterly Feedback", subject: "CASEY LINDQVIST, 214719 - Maple Grove, TX - SITE VISIT" },
    { id: "CALL-013", providerId: "214577", to: "DANA MARIE OVERSTREET", from: "Jordan Tanaka", owner: "Jordan Tanaka",
      dateCreated: "2026-10-12", actualEnd: null, status: "Open",
      category: "Site Visit Follow-Up", subject: "DANA MARIE OVERSTREET, 214577 - Millbrook, PA - SITE VISIT FOLLOW-UP" },
    { id: "CALL-014", providerId: "214641", to: "MORGAN DUARTE", from: "Jordan Tanaka", owner: "Jordan Tanaka",
      dateCreated: "2026-10-05", actualEnd: null, status: "Open",
      category: "Compliance Review", subject: "MORGAN DUARTE, 214641 - Harborview, IL - COMPLIANCE REVIEW" },
    { id: "CALL-015", providerId: "214667", to: "MORGAN KOWALSKI", from: "Jordan Tanaka", owner: "Jordan Tanaka",
      dateCreated: "2026-09-28", actualEnd: null, status: "Open",
      category: "QTC Quarterly Feedback", subject: "MORGAN KOWALSKI, 214667 - Pine Ridge, WA - Q3 FEEDBACK" }
  ],

  callQueue: [
    { id: "CALL-002", providerId: "214590", providerName: "RENE BERGSTROM", type: "QTC Quarterly Feedback",
      dueDate: "2026-10-15", priority: "High", status: "Open" },
    { id: "CALL-013", providerId: "214577", providerName: "DANA MARIE OVERSTREET", type: "Site Visit Follow-Up",
      dueDate: "2026-10-18", priority: "High", status: "Open" },
    { id: "CALL-005", providerId: "214628", providerName: "SYDNEY SORENSEN", type: "QTC Quarterly Feedback",
      dueDate: "2026-10-20", priority: "Medium", status: "Open" },
    { id: "CALL-014", providerId: "214641", providerName: "MORGAN DUARTE", type: "Compliance Review",
      dueDate: "2026-10-22", priority: "Medium", status: "Open" },
    { id: "CALL-015", providerId: "214667", providerName: "MORGAN KOWALSKI", type: "QTC Quarterly Feedback",
      dueDate: "2026-10-25", priority: "Low", status: "Open" },
    { id: "CALL-016", providerId: "214706", providerName: "QUINN LINDQVIST", type: "QTC Quarterly Feedback",
      dueDate: "2026-10-08", priority: "High", status: "Open" },
    { id: "CALL-017", providerId: "214628", providerName: "SYDNEY SORENSEN", type: "Site Visit Follow-Up",
      dueDate: "2026-10-05", priority: "High", status: "Open" },
    { id: "CALL-018", providerId: "214680", providerName: "AVERY FENWICK", type: "Compliance Review",
      dueDate: "2026-10-30", priority: "Low", status: "Open" }
  ],

  reports: {
    "214577": [
      { id: "RPT-001", name: "Q3 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Jul 2026 - Sep 2026", dateGenerated: "2026-10-02", generatedBy: "Jordan Tanaka", status: "Final" },
      { id: "RPT-002", name: "Q2 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Apr 2026 - Jun 2026", dateGenerated: "2026-07-05", generatedBy: "Jordan Tanaka", status: "Final" },
      { id: "RPT-003", name: "Provider Compliance Snapshot", type: "Compliance Review",
        period: "FY 2026", dateGenerated: "2026-06-14", generatedBy: "Priya Shah", status: "Final" },
      { id: "RPT-004", name: "Q1 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Jan 2026 - Mar 2026", dateGenerated: "2026-04-08", generatedBy: "Jordan Tanaka", status: "Final" },
      { id: "RPT-005", name: "Site Visit Follow-Up Report", type: "Site Visit",
        period: "Mar 2026", dateGenerated: "2026-03-22", generatedBy: "Casey Lin", status: "Draft" },
      { id: "RPT-006", name: "Q4 2025 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Oct 2025 - Dec 2025", dateGenerated: "2026-01-09", generatedBy: "Jordan Tanaka", status: "Final" }
    ],
    "214590": [
      { id: "RPT-007", name: "Q3 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Jul 2026 - Sep 2026", dateGenerated: "2026-10-04", generatedBy: "Jordan Tanaka", status: "Draft" },
      { id: "RPT-008", name: "Q2 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Apr 2026 - Jun 2026", dateGenerated: "2026-07-11", generatedBy: "Jordan Tanaka", status: "Final" },
      { id: "RPT-009", name: "Provider Compliance Snapshot", type: "Compliance Review",
        period: "FY 2026", dateGenerated: "2026-05-20", generatedBy: "Priya Shah", status: "Final" },
      { id: "RPT-010", name: "Q1 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Jan 2026 - Mar 2026", dateGenerated: "2026-04-12", generatedBy: "Jordan Tanaka", status: "Final" }
    ],
    "214602": [
      { id: "RPT-011", name: "Q3 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Jul 2026 - Sep 2026", dateGenerated: "2026-09-28", generatedBy: "Jordan Tanaka", status: "Final" },
      { id: "RPT-012", name: "Q2 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Apr 2026 - Jun 2026", dateGenerated: "2026-07-03", generatedBy: "Jordan Tanaka", status: "Final" },
      { id: "RPT-013", name: "Annual Provider Excellence Review", type: "Compliance Review",
        period: "FY 2026", dateGenerated: "2026-06-01", generatedBy: "Priya Shah", status: "Final" },
      { id: "RPT-014", name: "Site Visit Assessment", type: "Site Visit",
        period: "May 2026", dateGenerated: "2026-05-18", generatedBy: "Casey Lin", status: "Final" },
      { id: "RPT-015", name: "Q1 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Jan 2026 - Mar 2026", dateGenerated: "2026-04-05", generatedBy: "Jordan Tanaka", status: "Final" },
      { id: "RPT-016", name: "Q4 2025 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Oct 2025 - Dec 2025", dateGenerated: "2026-01-07", generatedBy: "Jordan Tanaka", status: "Final" }
    ],
    "214615": [
      { id: "RPT-017", name: "Q3 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Jul 2026 - Sep 2026", dateGenerated: "2026-10-01", generatedBy: "Casey Lin", status: "Final" },
      { id: "RPT-018", name: "Q2 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Apr 2026 - Jun 2026", dateGenerated: "2026-07-08", generatedBy: "Casey Lin", status: "Final" },
      { id: "RPT-019", name: "Site Visit Follow-Up Report", type: "Site Visit",
        period: "Aug 2026", dateGenerated: "2026-08-20", generatedBy: "Casey Lin", status: "Final" },
      { id: "RPT-020", name: "Provider Compliance Snapshot", type: "Compliance Review",
        period: "FY 2026", dateGenerated: "2026-05-30", generatedBy: "Priya Shah", status: "Final" },
      { id: "RPT-021", name: "Q1 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Jan 2026 - Mar 2026", dateGenerated: "2026-04-10", generatedBy: "Casey Lin", status: "Final" }
    ],
    "214628": [
      { id: "RPT-022", name: "Q3 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Jul 2026 - Sep 2026", dateGenerated: "2026-10-03", generatedBy: "Jordan Tanaka", status: "Draft" },
      { id: "RPT-023", name: "Q2 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Apr 2026 - Jun 2026", dateGenerated: "2026-07-14", generatedBy: "Jordan Tanaka", status: "Final" },
      { id: "RPT-024", name: "Provider Compliance Snapshot", type: "Compliance Review",
        period: "FY 2026", dateGenerated: "2026-06-22", generatedBy: "Priya Shah", status: "Final" },
      { id: "RPT-025", name: "Q1 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Jan 2026 - Mar 2026", dateGenerated: "2026-04-15", generatedBy: "Jordan Tanaka", status: "Final" }
    ],
    "214641": [
      { id: "RPT-026", name: "Q2 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Apr 2026 - Jun 2026", dateGenerated: "2026-07-09", generatedBy: "Morgan Ellis", status: "Final" },
      { id: "RPT-027", name: "Provider Compliance Snapshot", type: "Compliance Review",
        period: "FY 2026", dateGenerated: "2026-06-18", generatedBy: "Priya Shah", status: "Final" },
      { id: "RPT-028", name: "Q3 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Jul 2026 - Sep 2026", dateGenerated: "2026-10-05", generatedBy: "Jordan Tanaka", status: "Draft" },
      { id: "RPT-029", name: "Q1 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Jan 2026 - Mar 2026", dateGenerated: "2026-04-07", generatedBy: "Morgan Ellis", status: "Final" },
      { id: "RPT-030", name: "Site Visit Assessment", type: "Site Visit",
        period: "Feb 2026", dateGenerated: "2026-02-28", generatedBy: "Casey Lin", status: "Final" }
    ],
    "214654": [
      { id: "RPT-031", name: "Q1 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Jan 2026 - Mar 2026", dateGenerated: "2026-04-18", generatedBy: "Casey Lin", status: "Final" },
      { id: "RPT-032", name: "Provider Compliance Review", type: "Compliance Review",
        period: "FY 2026", dateGenerated: "2026-05-10", generatedBy: "Priya Shah", status: "Final" },
      { id: "RPT-033", name: "Performance Improvement Plan", type: "Compliance Review",
        period: "Q2 2026", dateGenerated: "2026-07-22", generatedBy: "Casey Lin", status: "Final" },
      { id: "RPT-034", name: "Q4 2025 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Oct 2025 - Dec 2025", dateGenerated: "2026-01-15", generatedBy: "Casey Lin", status: "Final" }
    ],
    "214667": [
      { id: "RPT-035", name: "Q3 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Jul 2026 - Sep 2026", dateGenerated: "2026-10-06", generatedBy: "Jordan Tanaka", status: "Draft" },
      { id: "RPT-036", name: "Audit Review Summary", type: "Compliance Review",
        period: "FY 2026", dateGenerated: "2026-06-05", generatedBy: "Priya Shah", status: "Final" },
      { id: "RPT-037", name: "Q2 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Apr 2026 - Jun 2026", dateGenerated: "2026-07-12", generatedBy: "Priya Shah", status: "Final" },
      { id: "RPT-038", name: "Q1 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Jan 2026 - Mar 2026", dateGenerated: "2026-04-09", generatedBy: "Priya Shah", status: "Final" },
      { id: "RPT-039", name: "Site Visit Assessment", type: "Site Visit",
        period: "Jan 2026", dateGenerated: "2026-01-30", generatedBy: "Casey Lin", status: "Final" }
    ],
    "214680": [
      { id: "RPT-040", name: "Q4 2025 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Oct 2025 - Dec 2025", dateGenerated: "2026-01-12", generatedBy: "Dana Ortiz", status: "Final" },
      { id: "RPT-041", name: "Provider Compliance Review", type: "Compliance Review",
        period: "FY 2025", dateGenerated: "2025-12-20", generatedBy: "Priya Shah", status: "Final" },
      { id: "RPT-042", name: "Performance Improvement Plan", type: "Compliance Review",
        period: "Q1 2026", dateGenerated: "2026-04-25", generatedBy: "Dana Ortiz", status: "Final" },
      { id: "RPT-043", name: "Q1 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Jan 2026 - Mar 2026", dateGenerated: "2026-04-20", generatedBy: "Dana Ortiz", status: "Final" },
      { id: "RPT-044", name: "Site Visit Follow-Up Report", type: "Site Visit",
        period: "Jun 2026", dateGenerated: "2026-06-28", generatedBy: "Casey Lin", status: "Draft" }
    ],
    "214693": [
      { id: "RPT-045", name: "Site Visit Assessment", type: "Site Visit",
        period: "Aug 2025", dateGenerated: "2025-08-22", generatedBy: "Taylor Brooks", status: "Final" },
      { id: "RPT-046", name: "Q4 2025 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Oct 2025 - Dec 2025", dateGenerated: "2026-01-11", generatedBy: "Taylor Brooks", status: "Final" },
      { id: "RPT-047", name: "Provider Compliance Snapshot", type: "Compliance Review",
        period: "FY 2026", dateGenerated: "2026-06-08", generatedBy: "Priya Shah", status: "Final" },
      { id: "RPT-048", name: "Q1 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Jan 2026 - Mar 2026", dateGenerated: "2026-04-14", generatedBy: "Taylor Brooks", status: "Final" }
    ],
    "214706": [
      { id: "RPT-049", name: "Q4 2025 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Oct 2025 - Dec 2025", dateGenerated: "2026-01-08", generatedBy: "Taylor Brooks", status: "Final" },
      { id: "RPT-050", name: "Q1 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Jan 2026 - Mar 2026", dateGenerated: "2026-04-11", generatedBy: "Taylor Brooks", status: "Final" },
      { id: "RPT-051", name: "Provider Compliance Snapshot", type: "Compliance Review",
        period: "FY 2026", dateGenerated: "2026-06-12", generatedBy: "Priya Shah", status: "Final" },
      { id: "RPT-052", name: "Q2 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Apr 2026 - Jun 2026", dateGenerated: "2026-07-06", generatedBy: "Taylor Brooks", status: "Final" },
      { id: "RPT-053", name: "Q3 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Jul 2026 - Sep 2026", dateGenerated: "2026-10-01", generatedBy: "Taylor Brooks", status: "Draft" }
    ],
    "214719": [
      { id: "RPT-054", name: "Q3 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Jul 2026 - Sep 2026", dateGenerated: "2026-09-30", generatedBy: "Riley Chen", status: "Final" },
      { id: "RPT-055", name: "Q2 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Apr 2026 - Jun 2026", dateGenerated: "2026-07-02", generatedBy: "Riley Chen", status: "Final" },
      { id: "RPT-056", name: "Annual Provider Excellence Review", type: "Compliance Review",
        period: "FY 2026", dateGenerated: "2026-06-03", generatedBy: "Priya Shah", status: "Final" },
      { id: "RPT-057", name: "Site Visit Assessment", type: "Site Visit",
        period: "Jun 2025", dateGenerated: "2025-07-01", generatedBy: "Casey Lin", status: "Final" },
      { id: "RPT-058", name: "Q1 2026 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Jan 2026 - Mar 2026", dateGenerated: "2026-04-04", generatedBy: "Riley Chen", status: "Final" },
      { id: "RPT-059", name: "Q4 2025 QTC Feedback Summary", type: "Quarterly Feedback",
        period: "Oct 2025 - Dec 2025", dateGenerated: "2026-01-06", generatedBy: "Riley Chen", status: "Final" }
    ]
  },

  metrics: {
    "214577": {
      asOf: "September 22, 2026", dataRefresh: "Data refreshed nightly",
      volume: { current: 186, label: "calls MTD", weekCompleted: 42, weekTrend: 8 },
      openItems: { count: 7, dueWithin5: 3 },
      lastContact: { date: "9/18/2026", label: "Q3 Quarterly Feedback call" },
      programs: {
        RHRP: { score: 90, trend: 1.0, status: "on_target", history: [86,87,88,89,89,90] },
        MD: { score: 86, trend: 1.0, status: "on_target", history: [82,83,84,84,85,86] }
      },
      performance: {
        timeliness: { score: 88, trend: 2.0, status: "on_target", history: [82,83,85,86,87,88] },
        quality: { score: 94, trend: 1.0, status: "on_target", history: [90,91,92,93,93,94] },
        customerService: { score: 86, trend: 2.0, status: "on_target", history: [80,81,83,84,85,86] }
      },
      criteria: {
        caseClosureRate: { label: "Case Closure Rate", score: 91, trend: 2.0, status: "on_target", history: [85,86,88,89,90,91] },
        docAccuracy: { label: "Documentation Accuracy", score: 93, trend: 1.0, status: "on_target", history: [89,90,91,91,92,93] },
        referralSLA: { label: "Referral SLA Adherence", score: 84, trend: 2.0, status: "watch", history: [78,79,80,81,83,84] },
        complianceScore: { label: "Compliance Score", score: 97, trend: 1.0, status: "on_target", history: [94,95,95,96,96,97] },
        commResponsiveness: { label: "Communication Responsiveness", score: 87, trend: 1.0, status: "on_target", history: [83,84,85,85,86,87] },
        patientSatisfaction: { label: "Patient / Claimant Satisfaction", score: 92, trend: 2.0, status: "on_target", history: [86,87,89,90,91,92] }
      }
    },
    "214590": {
      asOf: "September 22, 2026", dataRefresh: "Data refreshed nightly",
      volume: { current: 134, label: "calls MTD", weekCompleted: 29, weekTrend: -3 },
      openItems: { count: 12, dueWithin5: 5 },
      lastContact: { date: "10/8/2026", label: "Q3 Quarterly Feedback call" },
      programs: {
        RHRP: { score: 78, trend: -0.5, status: "watch", history: [80,80,79,79,78,78] },
        MD: { score: 80, trend: 0.5, status: "on_target", history: [77,78,78,79,80,80] }
      },
      performance: {
        timeliness: { score: 76, trend: -1.0, status: "watch", history: [80,79,78,78,77,76] },
        quality: { score: 82, trend: 0.5, status: "on_target", history: [79,80,80,81,81,82] },
        customerService: { score: 79, trend: 0.0, status: "watch", history: [78,78,79,79,79,79] }
      },
      criteria: {
        caseClosureRate: { label: "Case Closure Rate", score: 77, trend: -1.0, status: "watch", history: [81,80,79,78,78,77] },
        docAccuracy: { label: "Documentation Accuracy", score: 83, trend: 1.0, status: "on_target", history: [79,80,81,81,82,83] },
        referralSLA: { label: "Referral SLA Adherence", score: 74, trend: -0.5, status: "watch", history: [76,76,75,75,74,74] },
        complianceScore: { label: "Compliance Score", score: 85, trend: 0.5, status: "on_target", history: [83,83,84,84,84,85] },
        commResponsiveness: { label: "Communication Responsiveness", score: 76, trend: 0.0, status: "watch", history: [76,76,76,76,76,76] },
        patientSatisfaction: { label: "Patient / Claimant Satisfaction", score: 80, trend: 1.0, status: "on_target", history: [76,77,78,78,79,80] }
      }
    },
    "214602": {
      asOf: "September 22, 2026", dataRefresh: "Data refreshed nightly",
      volume: { current: 248, label: "calls MTD", weekCompleted: 58, weekTrend: 12 },
      openItems: { count: 3, dueWithin5: 1 },
      lastContact: { date: "9/23/2026", label: "Q3 Quarterly Feedback call" },
      programs: {
        RHRP: { score: 95, trend: 1.0, status: "on_target", history: [91,92,93,94,94,95] },
        MD: { score: 93, trend: 0.5, status: "on_target", history: [90,91,91,92,92,93] }
      },
      performance: {
        timeliness: { score: 94, trend: 1.0, status: "on_target", history: [90,91,92,93,93,94] },
        quality: { score: 96, trend: 0.5, status: "on_target", history: [93,94,94,95,95,96] },
        customerService: { score: 93, trend: 1.0, status: "on_target", history: [89,90,91,91,92,93] }
      },
      criteria: {
        caseClosureRate: { label: "Case Closure Rate", score: 96, trend: 1.0, status: "on_target", history: [92,93,94,94,95,96] },
        docAccuracy: { label: "Documentation Accuracy", score: 97, trend: 0.5, status: "on_target", history: [95,95,96,96,96,97] },
        referralSLA: { label: "Referral SLA Adherence", score: 92, trend: 1.0, status: "on_target", history: [88,89,90,90,91,92] },
        complianceScore: { label: "Compliance Score", score: 98, trend: 0.5, status: "on_target", history: [96,96,97,97,97,98] },
        commResponsiveness: { label: "Communication Responsiveness", score: 91, trend: 1.0, status: "on_target", history: [87,88,89,89,90,91] },
        patientSatisfaction: { label: "Patient / Claimant Satisfaction", score: 95, trend: 1.0, status: "on_target", history: [91,92,93,93,94,95] }
      }
    },
    "214615": {
      asOf: "September 22, 2026", dataRefresh: "Data refreshed nightly",
      volume: { current: 172, label: "calls MTD", weekCompleted: 38, weekTrend: 6 },
      openItems: { count: 5, dueWithin5: 2 },
      lastContact: { date: "8/15/2026", label: "Site Visit follow-up" },
      programs: {
        RHRP: { score: 86, trend: 2.0, status: "on_target", history: [78,80,82,83,84,86] },
        MD: { score: 84, trend: 3.0, status: "on_target", history: [75,77,79,81,82,84] }
      },
      performance: {
        timeliness: { score: 84, trend: 3.0, status: "on_target", history: [75,77,79,81,82,84] },
        quality: { score: 88, trend: 2.0, status: "on_target", history: [80,82,84,85,87,88] },
        customerService: { score: 83, trend: 2.0, status: "on_target", history: [76,78,79,80,82,83] }
      },
      criteria: {
        caseClosureRate: { label: "Case Closure Rate", score: 86, trend: 3.0, status: "on_target", history: [77,79,81,83,84,86] },
        docAccuracy: { label: "Documentation Accuracy", score: 89, trend: 2.0, status: "on_target", history: [82,84,85,87,88,89] },
        referralSLA: { label: "Referral SLA Adherence", score: 80, trend: 2.0, status: "on_target", history: [73,75,76,78,79,80] },
        complianceScore: { label: "Compliance Score", score: 92, trend: 1.0, status: "on_target", history: [88,89,90,90,91,92] },
        commResponsiveness: { label: "Communication Responsiveness", score: 82, trend: 3.0, status: "on_target", history: [72,74,76,78,80,82] },
        patientSatisfaction: { label: "Patient / Claimant Satisfaction", score: 85, trend: 2.0, status: "on_target", history: [78,80,81,83,84,85] }
      }
    },
    "214628": {
      asOf: "September 22, 2026", dataRefresh: "Data refreshed nightly",
      volume: { current: 118, label: "calls MTD", weekCompleted: 24, weekTrend: -5 },
      openItems: { count: 14, dueWithin5: 6 },
      lastContact: { date: "10/1/2026", label: "Q3 Quarterly Feedback call" },
      programs: {
        RHRP: { score: 75, trend: -1.0, status: "watch", history: [79,78,77,77,76,75] },
        MD: { score: 77, trend: -0.5, status: "watch", history: [79,79,78,78,77,77] }
      },
      performance: {
        timeliness: { score: 73, trend: -1.5, status: "watch", history: [79,78,76,75,74,73] },
        quality: { score: 79, trend: 0.0, status: "watch", history: [79,79,79,79,79,79] },
        customerService: { score: 76, trend: -0.5, status: "watch", history: [78,78,77,77,76,76] }
      },
      criteria: {
        caseClosureRate: { label: "Case Closure Rate", score: 74, trend: -1.0, status: "watch", history: [78,77,76,76,75,74] },
        docAccuracy: { label: "Documentation Accuracy", score: 80, trend: 0.5, status: "on_target", history: [77,78,78,79,79,80] },
        referralSLA: { label: "Referral SLA Adherence", score: 71, trend: -1.5, status: "at_risk", history: [77,76,75,74,72,71] },
        complianceScore: { label: "Compliance Score", score: 82, trend: 0.0, status: "on_target", history: [82,82,82,82,82,82] },
        commResponsiveness: { label: "Communication Responsiveness", score: 73, trend: -1.0, status: "watch", history: [77,76,75,75,74,73] },
        patientSatisfaction: { label: "Patient / Claimant Satisfaction", score: 76, trend: -0.5, status: "watch", history: [78,78,77,77,76,76] }
      }
    },
    "214641": {
      asOf: "September 22, 2026", dataRefresh: "Data refreshed nightly",
      volume: { current: 155, label: "calls MTD", weekCompleted: 34, weekTrend: 4 },
      openItems: { count: 8, dueWithin5: 3 },
      lastContact: { date: "9/6/2026", label: "Q2 Quarterly Feedback call" },
      programs: {
        RHRP: { score: 83, trend: 0.5, status: "on_target", history: [80,81,81,82,82,83] },
        MD: { score: 81, trend: 0.5, status: "on_target", history: [78,79,79,80,80,81] }
      },
      performance: {
        timeliness: { score: 80, trend: 0.5, status: "on_target", history: [77,78,78,79,79,80] },
        quality: { score: 85, trend: 1.0, status: "on_target", history: [81,82,83,83,84,85] },
        customerService: { score: 82, trend: 0.5, status: "on_target", history: [79,80,80,81,81,82] }
      },
      criteria: {
        caseClosureRate: { label: "Case Closure Rate", score: 83, trend: 1.0, status: "on_target", history: [79,80,80,81,82,83] },
        docAccuracy: { label: "Documentation Accuracy", score: 86, trend: 0.5, status: "on_target", history: [83,84,84,85,85,86] },
        referralSLA: { label: "Referral SLA Adherence", score: 78, trend: 0.5, status: "watch", history: [75,76,76,77,77,78] },
        complianceScore: { label: "Compliance Score", score: 89, trend: 0.5, status: "on_target", history: [86,87,87,88,88,89] },
        commResponsiveness: { label: "Communication Responsiveness", score: 80, trend: 0.5, status: "on_target", history: [77,78,78,79,79,80] },
        patientSatisfaction: { label: "Patient / Claimant Satisfaction", score: 84, trend: 1.0, status: "on_target", history: [80,81,82,82,83,84] }
      }
    },
    "214654": {
      asOf: "September 22, 2026", dataRefresh: "Data refreshed nightly",
      volume: { current: 68, label: "calls MTD", weekCompleted: 12, weekTrend: -8 },
      openItems: { count: 22, dueWithin5: 11 },
      lastContact: { date: "3/2/2026", label: "Q1 Quarterly Feedback call" },
      programs: {
        RHRP: { score: 60, trend: -2.0, status: "at_risk", history: [68,66,64,63,62,60] },
        MD: { score: 64, trend: -1.5, status: "at_risk", history: [70,68,67,66,65,64] }
      },
      performance: {
        timeliness: { score: 58, trend: -3.0, status: "at_risk", history: [68,66,64,62,60,58] },
        quality: { score: 66, trend: -1.5, status: "at_risk", history: [72,70,69,68,67,66] },
        customerService: { score: 62, trend: -2.0, status: "at_risk", history: [70,68,66,65,64,62] }
      },
      criteria: {
        caseClosureRate: { label: "Case Closure Rate", score: 57, trend: -3.0, status: "at_risk", history: [67,65,63,61,59,57] },
        docAccuracy: { label: "Documentation Accuracy", score: 65, trend: -1.5, status: "at_risk", history: [71,70,68,67,66,65] },
        referralSLA: { label: "Referral SLA Adherence", score: 55, trend: -2.5, status: "at_risk", history: [64,62,60,58,57,55] },
        complianceScore: { label: "Compliance Score", score: 72, trend: -1.0, status: "watch", history: [76,75,74,74,73,72] },
        commResponsiveness: { label: "Communication Responsiveness", score: 60, trend: -2.0, status: "at_risk", history: [68,66,64,63,62,60] },
        patientSatisfaction: { label: "Patient / Claimant Satisfaction", score: 63, trend: -2.0, status: "at_risk", history: [71,69,67,66,64,63] }
      }
    },
    "214667": {
      asOf: "September 22, 2026", dataRefresh: "Data refreshed nightly",
      volume: { current: 121, label: "calls MTD", weekCompleted: 26, weekTrend: 2 },
      openItems: { count: 10, dueWithin5: 4 },
      lastContact: { date: "10/16/2026", label: "Audit Review call" },
      programs: {
        RHRP: { score: 73, trend: 1.0, status: "watch", history: [68,69,70,71,72,73] },
        MD: { score: 75, trend: 1.5, status: "watch", history: [69,70,71,72,74,75] }
      },
      performance: {
        timeliness: { score: 72, trend: 1.0, status: "watch", history: [67,68,69,70,71,72] },
        quality: { score: 77, trend: 1.5, status: "watch", history: [71,72,73,74,76,77] },
        customerService: { score: 74, trend: 1.0, status: "watch", history: [69,70,71,72,73,74] }
      },
      criteria: {
        caseClosureRate: { label: "Case Closure Rate", score: 73, trend: 1.0, status: "watch", history: [68,69,70,71,72,73] },
        docAccuracy: { label: "Documentation Accuracy", score: 78, trend: 1.5, status: "watch", history: [72,73,74,75,76,78] },
        referralSLA: { label: "Referral SLA Adherence", score: 70, trend: 1.0, status: "watch", history: [65,66,67,68,69,70] },
        complianceScore: { label: "Compliance Score", score: 80, trend: 1.0, status: "on_target", history: [75,76,77,78,79,80] },
        commResponsiveness: { label: "Communication Responsiveness", score: 71, trend: 1.5, status: "watch", history: [65,66,67,68,70,71] },
        patientSatisfaction: { label: "Patient / Claimant Satisfaction", score: 75, trend: 1.0, status: "watch", history: [70,71,72,73,74,75] }
      }
    },
    "214680": {
      asOf: "September 22, 2026", dataRefresh: "Data refreshed nightly",
      volume: { current: 52, label: "calls MTD", weekCompleted: 8, weekTrend: -10 },
      openItems: { count: 28, dueWithin5: 14 },
      lastContact: { date: "6/20/2026", label: "Q4 2025 Feedback call" },
      programs: {
        RHRP: { score: 56, trend: -3.0, status: "at_risk", history: [67,64,62,60,58,56] },
        MD: { score: 60, trend: -2.5, status: "at_risk", history: [69,67,65,63,62,60] }
      },
      performance: {
        timeliness: { score: 55, trend: -3.5, status: "at_risk", history: [67,65,62,60,57,55] },
        quality: { score: 62, trend: -2.0, status: "at_risk", history: [70,68,66,65,63,62] },
        customerService: { score: 57, trend: -3.0, status: "at_risk", history: [68,66,63,61,59,57] }
      },
      criteria: {
        caseClosureRate: { label: "Case Closure Rate", score: 53, trend: -3.5, status: "at_risk", history: [65,63,60,58,55,53] },
        docAccuracy: { label: "Documentation Accuracy", score: 60, trend: -2.0, status: "at_risk", history: [68,66,64,63,61,60] },
        referralSLA: { label: "Referral SLA Adherence", score: 50, trend: -4.0, status: "at_risk", history: [64,61,58,56,53,50] },
        complianceScore: { label: "Compliance Score", score: 66, trend: -1.5, status: "at_risk", history: [72,71,70,69,68,66] },
        commResponsiveness: { label: "Communication Responsiveness", score: 55, trend: -3.0, status: "at_risk", history: [66,64,61,59,57,55] },
        patientSatisfaction: { label: "Patient / Claimant Satisfaction", score: 58, trend: -2.5, status: "at_risk", history: [67,65,63,61,59,58] }
      }
    },
    "214693": {
      asOf: "September 22, 2026", dataRefresh: "Data refreshed nightly",
      volume: { current: 108, label: "calls MTD", weekCompleted: 22, weekTrend: -2 },
      openItems: { count: 11, dueWithin5: 5 },
      lastContact: { date: "4/4/2025", label: "Site Visit follow-up" },
      programs: {
        RHRP: { score: 70, trend: -0.5, status: "watch", history: [73,72,72,71,71,70] },
        MD: { score: 72, trend: -1.0, status: "watch", history: [76,75,74,74,73,72] }
      },
      performance: {
        timeliness: { score: 69, trend: -1.0, status: "watch", history: [73,73,72,71,70,69] },
        quality: { score: 74, trend: 0.0, status: "watch", history: [74,74,74,74,74,74] },
        customerService: { score: 70, trend: -0.5, status: "watch", history: [72,72,71,71,70,70] }
      },
      criteria: {
        caseClosureRate: { label: "Case Closure Rate", score: 70, trend: -0.5, status: "watch", history: [73,72,72,71,71,70] },
        docAccuracy: { label: "Documentation Accuracy", score: 75, trend: 0.0, status: "watch", history: [75,75,75,75,75,75] },
        referralSLA: { label: "Referral SLA Adherence", score: 66, trend: -1.0, status: "at_risk", history: [70,70,69,68,67,66] },
        complianceScore: { label: "Compliance Score", score: 78, trend: -0.5, status: "watch", history: [80,80,79,79,78,78] },
        commResponsiveness: { label: "Communication Responsiveness", score: 68, trend: -1.0, status: "watch", history: [72,71,70,70,69,68] },
        patientSatisfaction: { label: "Patient / Claimant Satisfaction", score: 71, trend: 0.0, status: "watch", history: [71,71,71,71,71,71] }
      }
    },
    "214706": {
      asOf: "September 22, 2026", dataRefresh: "Data refreshed nightly",
      volume: { current: 162, label: "calls MTD", weekCompleted: 36, weekTrend: 5 },
      openItems: { count: 6, dueWithin5: 2 },
      lastContact: { date: "12/19/2025", label: "Q4 2025 Feedback call" },
      programs: {
        RHRP: { score: 84, trend: 2.0, status: "on_target", history: [76,78,80,81,82,84] },
        MD: { score: 82, trend: 1.5, status: "on_target", history: [75,77,78,80,81,82] }
      },
      performance: {
        timeliness: { score: 82, trend: 2.0, status: "on_target", history: [74,76,78,79,80,82] },
        quality: { score: 86, trend: 1.5, status: "on_target", history: [79,81,82,84,85,86] },
        customerService: { score: 81, trend: 1.5, status: "on_target", history: [74,76,77,79,80,81] }
      },
      criteria: {
        caseClosureRate: { label: "Case Closure Rate", score: 84, trend: 2.0, status: "on_target", history: [76,78,80,81,82,84] },
        docAccuracy: { label: "Documentation Accuracy", score: 87, trend: 1.5, status: "on_target", history: [80,82,83,85,86,87] },
        referralSLA: { label: "Referral SLA Adherence", score: 79, trend: 1.5, status: "watch", history: [72,74,75,77,78,79] },
        complianceScore: { label: "Compliance Score", score: 90, trend: 1.0, status: "on_target", history: [86,87,88,88,89,90] },
        commResponsiveness: { label: "Communication Responsiveness", score: 81, trend: 2.0, status: "on_target", history: [73,75,77,78,80,81] },
        patientSatisfaction: { label: "Patient / Claimant Satisfaction", score: 83, trend: 1.5, status: "on_target", history: [76,78,79,81,82,83] }
      }
    },
    "214719": {
      asOf: "September 22, 2026", dataRefresh: "Data refreshed nightly",
      volume: { current: 262, label: "calls MTD", weekCompleted: 62, weekTrend: 10 },
      openItems: { count: 2, dueWithin5: 0 },
      lastContact: { date: "3/1/2026", label: "Site Visit follow-up" },
      programs: {
        RHRP: { score: 96, trend: 0.5, status: "on_target", history: [93,94,94,95,95,96] },
        MD: { score: 94, trend: 0.5, status: "on_target", history: [91,92,92,93,93,94] }
      },
      performance: {
        timeliness: { score: 95, trend: 0.5, status: "on_target", history: [93,93,94,94,95,95] },
        quality: { score: 97, trend: 0.5, status: "on_target", history: [95,95,96,96,96,97] },
        customerService: { score: 94, trend: 0.5, status: "on_target", history: [91,92,92,93,93,94] }
      },
      criteria: {
        caseClosureRate: { label: "Case Closure Rate", score: 96, trend: 0.5, status: "on_target", history: [93,94,94,95,95,96] },
        docAccuracy: { label: "Documentation Accuracy", score: 97, trend: 0.5, status: "on_target", history: [95,95,96,96,97,97] },
        referralSLA: { label: "Referral SLA Adherence", score: 93, trend: 0.5, status: "on_target", history: [90,91,91,92,92,93] },
        complianceScore: { label: "Compliance Score", score: 98, trend: 0.0, status: "on_target", history: [97,97,98,98,98,98] },
        commResponsiveness: { label: "Communication Responsiveness", score: 94, trend: 0.5, status: "on_target", history: [91,92,92,93,93,94] },
        patientSatisfaction: { label: "Patient / Claimant Satisfaction", score: 96, trend: 0.5, status: "on_target", history: [93,94,94,95,95,96] }
      }
    }
  },

  reportCards: {
    "214577": {
      company: "Leidos QTC Health Service | VA - RHRP",
      dataReflected: "Q2 2026 (One Quarter in Arrears)",
      reportDate: "09/22/2026",
      lob: "VA",
      snapshot: {
        quality: { status: "monitor", label: "Monitor" },
        timeliness: { status: "needs_review", label: "Needs Review" },
        addendums: { status: "needs_review", label: "Needs Review" },
        customerService: { status: "meets", label: "Meets" }
      },
      metricsByProgram: [
        { program: "MDE", timeliness: { score: 85, status: "meets" }, quality: { score: 91, status: "meets" }, customerService: { score: 88, status: "meets" } },
        { program: "RHRP", timeliness: { score: 72, status: "needs_review" }, quality: { score: 80, status: "monitor" }, customerService: { score: 86, status: "meets" } }
      ],
      exceptions: [
        { impact: "High addendum rate due to QA clarifications and delayed responses", affectedMetrics: "Addendum Rate, Timeliness" }
      ],
      compliance: { lateReports: "None", pendingAddendums: "High", clarifications: "High", qaResponseTrend: "Increasing" },
      customerServiceSummary: {
        tickets: "No data available.",
        positiveFeedback: "Provider expressed satisfaction with returning to the network and contributing to process improvement.",
        negativeFeedback: "None reported."
      },
      commentary: {
        roomForImprovement: "Marcus has demonstrated commitment to clinical excellence but faces challenges with Timeliness and Addendum metrics. The average turnaround time for report submissions (8.9 days) and addendum responses (57.8%) exceed contractual guidelines. These delays are primarily due to QA clarifications and delayed responses. Focused training on workflow optimization and leveraging technology is recommended.",
        jobWellDone: "Marcus has returned to providing services after a brief leave of absence and has expressed valuable feedback for process improvement. His willingness to collaborate and share insights is commendable and reflects his dedication to fostering a successful partnership.",
        targetedReminders: "1. Collaborate with QA teams to clarify expectations and reduce unnecessary addendum requests.\n2. Monitor progress on timeliness metrics and provide feedback regularly.\n3. Explore opportunities to streamline workflows and reduce manual effort."
      },
      providerAck: {
        comments: "Provider has expressed interest in reconnecting and contributing to process improvement.",
        acknowledged: false,
        followUpRequested: false
      }
    },
    "214590": {
      company: "Leidos QTC Health Service | VA - RHRP",
      dataReflected: "Q2 2026 (One Quarter in Arrears)",
      reportDate: "09/22/2026",
      lob: "VA",
      snapshot: {
        quality: { status: "meets", label: "Meets" },
        timeliness: { status: "monitor", label: "Monitor" },
        addendums: { status: "monitor", label: "Monitor" },
        customerService: { status: "meets", label: "Meets" }
      },
      metricsByProgram: [
        { program: "MDE", timeliness: { score: 78, status: "monitor" }, quality: { score: 82, status: "meets" }, customerService: { score: 80, status: "meets" } },
        { program: "RHRP", timeliness: { score: 74, status: "monitor" }, quality: { score: 79, status: "monitor" }, customerService: { score: 78, status: "monitor" } }
      ],
      exceptions: [
        { impact: "Inconsistent turnaround on referrals during peak caseload periods", affectedMetrics: "Timeliness, Referral SLA" }
      ],
      compliance: { lateReports: "Occasional", pendingAddendums: "Moderate", clarifications: "Moderate", qaResponseTrend: "Stable" },
      customerServiceSummary: {
        tickets: "Two tickets opened regarding scheduling delays; both resolved within SLA.",
        positiveFeedback: "Provider maintains professional communication with claimants and staff.",
        negativeFeedback: "Occasional delays in returning calls to the scheduling team."
      },
      commentary: {
        roomForImprovement: "Rene shows steady clinical performance but timeliness metrics have plateaued. Report turnaround averages 7.2 days, which is within tolerance but not improving quarter-over-quarter. Referral SLA adherence dipped during the summer surge. Structured time-management coaching is recommended to break through the plateau.",
        jobWellDone: "Rene consistently produces quality documentation and has received positive feedback from claimants regarding bedside manner. The Q2 quality score of 82 reflects solid exam thoroughness.",
        targetedReminders: "1. Review scheduling workflow to reduce bottlenecks during high-volume weeks.\n2. Set a personal target of 6-day turnaround for report submissions.\n3. Respond to QA addendum requests within 48 hours to prevent escalation."
      },
      providerAck: {
        comments: "Provider acknowledged the feedback and agreed to prioritize turnaround improvements.",
        acknowledged: true,
        followUpRequested: false
      }
    },
    "214602": {
      company: "Leidos QTC Health Service | VA - RHRP",
      dataReflected: "Q2 2026 (One Quarter in Arrears)",
      reportDate: "09/22/2026",
      lob: "VA",
      snapshot: {
        quality: { status: "meets", label: "Meets" },
        timeliness: { status: "meets", label: "Meets" },
        addendums: { status: "meets", label: "Meets" },
        customerService: { status: "meets", label: "Meets" }
      },
      metricsByProgram: [
        { program: "MDE", timeliness: { score: 95, status: "meets" }, quality: { score: 96, status: "meets" }, customerService: { score: 94, status: "meets" } },
        { program: "RHRP", timeliness: { score: 93, status: "meets" }, quality: { score: 95, status: "meets" }, customerService: { score: 92, status: "meets" } }
      ],
      exceptions: [],
      compliance: { lateReports: "None", pendingAddendums: "None", clarifications: "Low", qaResponseTrend: "Stable" },
      customerServiceSummary: {
        tickets: "No tickets this quarter.",
        positiveFeedback: "Multiple claimants praised thoroughness and empathetic communication. Scheduling team noted exemplary responsiveness.",
        negativeFeedback: "None reported."
      },
      commentary: {
        roomForImprovement: "Micah is performing at an exceptional level across all categories. The only area with potential for growth is referral SLA adherence (92), which, while strong, could reach the same elite tier as other metrics. Minor workflow adjustments during multi-appointment days may help close this small gap.",
        jobWellDone: "Micah exemplifies top-tier provider performance. A 96 quality score and 95 timeliness score place this provider among the best in the network. Consistent improvement over six quarters demonstrates sustained commitment to excellence, not just a one-time spike.",
        targetedReminders: "1. Continue current best practices; consider mentoring newer providers.\n2. Share workflow strategies with the broader provider community at upcoming QTC roundtable.\n3. Maintain focus on referral SLA to close the gap to 95+."
      },
      providerAck: {
        comments: "Provider appreciates recognition and is willing to participate in peer mentoring.",
        acknowledged: true,
        followUpRequested: false
      }
    },
    "214615": {
      company: "Leidos QTC Health Service | VA - RHRP",
      dataReflected: "Q2 2026 (One Quarter in Arrears)",
      reportDate: "09/22/2026",
      lob: "VA",
      snapshot: {
        quality: { status: "meets", label: "Meets" },
        timeliness: { status: "meets", label: "Meets" },
        addendums: { status: "monitor", label: "Monitor" },
        customerService: { status: "meets", label: "Meets" }
      },
      metricsByProgram: [
        { program: "MDE", timeliness: { score: 86, status: "meets" }, quality: { score: 89, status: "meets" }, customerService: { score: 84, status: "meets" } },
        { program: "RHRP", timeliness: { score: 82, status: "meets" }, quality: { score: 87, status: "meets" }, customerService: { score: 82, status: "meets" } }
      ],
      exceptions: [
        { impact: "Addendum rate slightly above benchmark due to transitioning to new documentation templates", affectedMetrics: "Addendum Rate" }
      ],
      compliance: { lateReports: "None", pendingAddendums: "Low", clarifications: "Low", qaResponseTrend: "Decreasing" },
      customerServiceSummary: {
        tickets: "One ticket regarding exam room wait time; resolved with process adjustment.",
        positiveFeedback: "Site visit revealed well-organized clinic operations and engaged staff. Provider is proactive in addressing feedback.",
        negativeFeedback: "Minor scheduling overlap issues noted during the site visit but corrected immediately."
      },
      commentary: {
        roomForImprovement: "Sydney has shown impressive upward trajectory over the past three quarters, with scores climbing 8-10 points across most categories. The transition to new documentation templates created a temporary addendum bump, but the trend is clearly improving. Continued focus on template mastery should resolve the remaining gap.",
        jobWellDone: "Sydney's improvement arc is the strongest in the region this year. Moving from mid-70s to mid-80s across the board reflects genuine investment in professional development. The site visit confirmed that these gains are backed by real operational changes, not just statistical variance.",
        targetedReminders: "1. Complete the updated documentation template training by end of Q3.\n2. Target sub-5% addendum rate by next quarter.\n3. Continue momentum by tracking weekly personal metrics against quarterly goals."
      },
      providerAck: {
        comments: "",
        acknowledged: false,
        followUpRequested: true
      }
    },
    "214628": {
      company: "Leidos QTC Health Service | VA - RHRP",
      dataReflected: "Q2 2026 (One Quarter in Arrears)",
      reportDate: "09/22/2026",
      lob: "VA",
      snapshot: {
        quality: { status: "monitor", label: "Monitor" },
        timeliness: { status: "needs_review", label: "Needs Review" },
        addendums: { status: "monitor", label: "Monitor" },
        customerService: { status: "monitor", label: "Monitor" }
      },
      metricsByProgram: [
        { program: "MDE", timeliness: { score: 75, status: "monitor" }, quality: { score: 80, status: "meets" }, customerService: { score: 78, status: "monitor" } },
        { program: "RHRP", timeliness: { score: 71, status: "needs_review" }, quality: { score: 77, status: "monitor" }, customerService: { score: 74, status: "monitor" } }
      ],
      exceptions: [
        { impact: "Declining referral SLA adherence linked to staffing changes at facility", affectedMetrics: "Timeliness, Referral SLA" }
      ],
      compliance: { lateReports: "Occasional", pendingAddendums: "Moderate", clarifications: "High", qaResponseTrend: "Increasing" },
      customerServiceSummary: {
        tickets: "Three tickets: two regarding appointment cancellations, one for late report delivery to claimant.",
        positiveFeedback: "Provider is receptive to feedback and expressed willingness to address gaps.",
        negativeFeedback: "Claimant reported difficulty reaching the office for rescheduling after a cancellation."
      },
      commentary: {
        roomForImprovement: "Sydney's metrics have experienced a slow but consistent decline over the past three quarters, particularly in timeliness (down from 79 to 73) and referral SLA (77 to 71). Staffing changes at the facility appear to be the primary driver, creating scheduling gaps and delayed report submissions. A structured recovery plan with weekly check-ins is recommended.",
        jobWellDone: "Despite operational challenges, Sydney maintains acceptable documentation quality (80 MDE) and has been transparent about the root causes affecting performance. This openness to collaboration is valuable for developing an effective improvement plan.",
        targetedReminders: "1. Work with facility management to stabilize staffing and reduce scheduling disruptions.\n2. Prioritize clearing the backlog of pending addendums within the next 30 days.\n3. Implement a daily task checklist to ensure referral SLAs are met even during short-staffed periods."
      },
      providerAck: {
        comments: "Provider requested additional support resources to manage workload during staffing transition.",
        acknowledged: true,
        followUpRequested: true
      }
    },
    "214641": {
      company: "Leidos QTC Health Service | VA - RHRP",
      dataReflected: "Q2 2026 (One Quarter in Arrears)",
      reportDate: "09/22/2026",
      lob: "VA",
      snapshot: {
        quality: { status: "meets", label: "Meets" },
        timeliness: { status: "meets", label: "Meets" },
        addendums: { status: "meets", label: "Meets" },
        customerService: { status: "meets", label: "Meets" }
      },
      metricsByProgram: [
        { program: "MDE", timeliness: { score: 82, status: "meets" }, quality: { score: 86, status: "meets" }, customerService: { score: 83, status: "meets" } },
        { program: "RHRP", timeliness: { score: 78, status: "monitor" }, quality: { score: 84, status: "meets" }, customerService: { score: 81, status: "meets" } }
      ],
      exceptions: [],
      compliance: { lateReports: "None", pendingAddendums: "Low", clarifications: "Low", qaResponseTrend: "Stable" },
      customerServiceSummary: {
        tickets: "One informational ticket about exam documentation format; no escalation needed.",
        positiveFeedback: "Physical therapy patients consistently rate Morgan highly for clear explanations and treatment planning.",
        negativeFeedback: "None reported."
      },
      commentary: {
        roomForImprovement: "Morgan performs reliably across all categories with gradual upward trends. The RHRP timeliness score of 78 is the one area sitting below the meets threshold. A focused effort on reducing report turnaround for RHRP cases specifically could push this provider solidly into Tier 2 across all programs.",
        jobWellDone: "Morgan demonstrates consistent, dependable performance quarter after quarter. Quality scores are particularly strong at 86 for MDE, and patient satisfaction feedback is among the best in the physical therapy cohort. The site visit confirmed a well-run operation.",
        targetedReminders: "1. Focus on RHRP report turnaround to close the gap between MDE and RHRP timeliness scores.\n2. Continue the strong patient communication practices that drive high satisfaction.\n3. Consider adopting the streamlined documentation workflow discussed during the compliance review."
      },
      providerAck: {
        comments: "Provider agreed with assessment and plans to focus on RHRP turnaround.",
        acknowledged: true,
        followUpRequested: false
      }
    },
    "214654": {
      company: "Leidos QTC Health Service | VA - RHRP",
      dataReflected: "Q2 2026 (One Quarter in Arrears)",
      reportDate: "09/22/2026",
      lob: "VA",
      snapshot: {
        quality: { status: "needs_review", label: "Needs Review" },
        timeliness: { status: "needs_review", label: "Needs Review" },
        addendums: { status: "needs_review", label: "Needs Review" },
        customerService: { status: "needs_review", label: "Needs Review" }
      },
      metricsByProgram: [
        { program: "MDE", timeliness: { score: 60, status: "needs_review" }, quality: { score: 68, status: "needs_review" }, customerService: { score: 64, status: "needs_review" } },
        { program: "RHRP", timeliness: { score: 56, status: "needs_review" }, quality: { score: 63, status: "needs_review" }, customerService: { score: 60, status: "needs_review" } }
      ],
      exceptions: [
        { impact: "Provider inactivity since Q1 has resulted in declining metrics across all programs", affectedMetrics: "All Metrics" },
        { impact: "Outstanding addendum backlog exceeding 45-day threshold", affectedMetrics: "Addendum Rate, Compliance" }
      ],
      compliance: { lateReports: "Frequent", pendingAddendums: "Critical", clarifications: "Critical", qaResponseTrend: "Sharply Increasing" },
      customerServiceSummary: {
        tickets: "Five tickets: three for missed appointments, one for incomplete documentation sent to claimant, one for unresponsive office line.",
        positiveFeedback: "When available, the provider delivers thorough clinical assessments.",
        negativeFeedback: "Multiple claimants reported difficulty scheduling appointments and long wait times for reports."
      },
      commentary: {
        roomForImprovement: "Jordan's performance has deteriorated significantly since transitioning to inactive status. Timeliness scores have dropped from 68 to 58 over six quarters, and the case closure rate at 57 is well below acceptable thresholds. The addendum backlog is at critical levels. A formal performance improvement plan (PIP) has been initiated, and weekly monitoring is required.",
        jobWellDone: "Jordan has demonstrated clinical competence in cardiology assessments when fully engaged. Previous quarters showed the provider is capable of meeting quality standards, which gives confidence that improvement is achievable with the right support structure.",
        targetedReminders: "1. Clear all outstanding addendums within 14 days per the PIP timeline.\n2. Attend mandatory workflow efficiency training scheduled for October.\n3. Bi-weekly check-in calls with PRA to track progress against PIP milestones.\n4. Re-establish consistent appointment scheduling to rebuild case closure metrics."
      },
      providerAck: {
        comments: "",
        acknowledged: false,
        followUpRequested: false
      }
    },
    "214667": {
      company: "Leidos QTC Health Service | VA - RHRP",
      dataReflected: "Q2 2026 (One Quarter in Arrears)",
      reportDate: "09/22/2026",
      lob: "VA",
      snapshot: {
        quality: { status: "monitor", label: "Monitor" },
        timeliness: { status: "monitor", label: "Monitor" },
        addendums: { status: "meets", label: "Meets" },
        customerService: { status: "monitor", label: "Monitor" }
      },
      metricsByProgram: [
        { program: "MDE", timeliness: { score: 74, status: "monitor" }, quality: { score: 78, status: "monitor" }, customerService: { score: 76, status: "monitor" } },
        { program: "RHRP", timeliness: { score: 70, status: "monitor" }, quality: { score: 76, status: "monitor" }, customerService: { score: 72, status: "monitor" } }
      ],
      exceptions: [
        { impact: "Provider is in pending status; onboarding completion may affect metric stability", affectedMetrics: "Timeliness, Customer Service" }
      ],
      compliance: { lateReports: "Occasional", pendingAddendums: "Low", clarifications: "Moderate", qaResponseTrend: "Decreasing" },
      customerServiceSummary: {
        tickets: "One ticket regarding unclear communication about follow-up procedures; resolved via provider education.",
        positiveFeedback: "Audit review noted improving documentation practices and willingness to adopt new protocols.",
        negativeFeedback: "Some claimants noted inconsistent communication about next steps after exams."
      },
      commentary: {
        roomForImprovement: "Morgan is trending in the right direction with steady gains of 1-1.5 points per quarter across most metrics. However, timeliness at 72 and communication responsiveness at 71 remain below target thresholds. The pending status adds uncertainty, but the improvement trajectory is encouraging. Completing the onboarding process fully should unlock further gains.",
        jobWellDone: "Morgan has shown consistent improvement every quarter since joining the network. The QA clarification trend is decreasing, which means documentation quality is genuinely improving rather than being propped up by corrections. The audit review confirmed strong fundamentals in clinical practice.",
        targetedReminders: "1. Complete all remaining onboarding items to transition from pending to active status.\n2. Focus on reducing report turnaround time by 1-2 days per submission.\n3. Implement a standard claimant communication template to improve consistency in post-exam follow-up."
      },
      providerAck: {
        comments: "Provider is actively working on onboarding requirements and expects to complete by end of month.",
        acknowledged: true,
        followUpRequested: false
      }
    },
    "214680": {
      company: "Leidos QTC Health Service | VA - RHRP",
      dataReflected: "Q2 2026 (One Quarter in Arrears)",
      reportDate: "09/22/2026",
      lob: "VA",
      snapshot: {
        quality: { status: "needs_review", label: "Needs Review" },
        timeliness: { status: "needs_review", label: "Needs Review" },
        addendums: { status: "needs_review", label: "Needs Review" },
        customerService: { status: "needs_review", label: "Needs Review" }
      },
      metricsByProgram: [
        { program: "MDE", timeliness: { score: 57, status: "needs_review" }, quality: { score: 64, status: "needs_review" }, customerService: { score: 59, status: "needs_review" } },
        { program: "RHRP", timeliness: { score: 53, status: "needs_review" }, quality: { score: 60, status: "needs_review" }, customerService: { score: 55, status: "needs_review" } }
      ],
      exceptions: [
        { impact: "Severe decline in all performance categories over six consecutive quarters", affectedMetrics: "All Metrics" },
        { impact: "Case closure rate at 53% is lowest in the assigned portfolio", affectedMetrics: "Case Closure Rate, Volume" }
      ],
      compliance: { lateReports: "Frequent", pendingAddendums: "Critical", clarifications: "Critical", qaResponseTrend: "Sharply Increasing" },
      customerServiceSummary: {
        tickets: "Seven tickets: four for missed or rescheduled appointments, two for delayed reports, one escalation for unresponsiveness.",
        positiveFeedback: "When present and engaged, claimants note the provider is knowledgeable in endocrinology.",
        negativeFeedback: "Claimants consistently report difficulty reaching the office and receiving timely follow-up documentation."
      },
      commentary: {
        roomForImprovement: "Avery's performance has declined sharply and consistently across all six quarters of tracked data. Every metric shows a downward trajectory, with referral SLA adherence dropping from 64 to 50 and case closure rate from 65 to 53. The current inactive status and unresolved compliance backlog require immediate intervention. A formal PIP with escalation protocols is in effect.",
        jobWellDone: "Avery brings specialized endocrinology expertise that is valuable to the network. Earlier performance data suggests the provider is capable of meeting standards when operational barriers are addressed. Identifying and resolving the root causes of disengagement should be the priority.",
        targetedReminders: "1. Mandatory PIP compliance: clear all critical addendum and clarification backlogs within 21 days.\n2. Weekly status calls with PRA and compliance team until metrics stabilize.\n3. Evaluate whether operational or personal factors are driving disengagement and connect provider with appropriate support resources.\n4. Reactivation review scheduled for November contingent on meeting PIP milestones."
      },
      providerAck: {
        comments: "",
        acknowledged: false,
        followUpRequested: false
      }
    },
    "214693": {
      company: "Leidos QTC Health Service | VA - RHRP",
      dataReflected: "Q2 2026 (One Quarter in Arrears)",
      reportDate: "09/22/2026",
      lob: "VA",
      snapshot: {
        quality: { status: "monitor", label: "Monitor" },
        timeliness: { status: "needs_review", label: "Needs Review" },
        addendums: { status: "monitor", label: "Monitor" },
        customerService: { status: "monitor", label: "Monitor" }
      },
      metricsByProgram: [
        { program: "MDE", timeliness: { score: 71, status: "monitor" }, quality: { score: 75, status: "monitor" }, customerService: { score: 72, status: "monitor" } },
        { program: "RHRP", timeliness: { score: 67, status: "needs_review" }, quality: { score: 73, status: "monitor" }, customerService: { score: 68, status: "needs_review" } }
      ],
      exceptions: [
        { impact: "Inactive status with no recent contact since August 2025 site visit", affectedMetrics: "Timeliness, Communication Responsiveness" }
      ],
      compliance: { lateReports: "Occasional", pendingAddendums: "Moderate", clarifications: "Moderate", qaResponseTrend: "Stable" },
      customerServiceSummary: {
        tickets: "Two tickets: one for delayed report, one for claimant confusion about documentation requirements.",
        positiveFeedback: "Provider has strong orthopedic clinical skills noted during the 2025 site visit.",
        negativeFeedback: "Limited responsiveness to outreach from the PRA team and scheduling coordination."
      },
      commentary: {
        roomForImprovement: "Quinn's metrics have been slowly drifting downward, with most categories showing flat or negative trends. The referral SLA at 66 is approaching the at-risk threshold, and communication responsiveness at 68 suggests engagement may be waning. The extended gap since the last substantive contact (August 2025 site visit) is concerning and re-engagement should be prioritized.",
        jobWellDone: "Quinn's quality and documentation accuracy scores remain within the acceptable range, which indicates that clinical competence is not the issue. The stability of the compliance score at 78 shows baseline adherence to program requirements is being maintained.",
        targetedReminders: "1. Initiate re-engagement outreach to assess current availability and commitment.\n2. Review whether inactive status is temporary or if a formal status change discussion is needed.\n3. Address referral SLA adherence before it crosses into the at-risk zone.\n4. Schedule a catch-up call to discuss the Q2 report card findings."
      },
      providerAck: {
        comments: "",
        acknowledged: false,
        followUpRequested: false
      }
    },
    "214706": {
      company: "Leidos QTC Health Service | VA - RHRP",
      dataReflected: "Q2 2026 (One Quarter in Arrears)",
      reportDate: "09/22/2026",
      lob: "VA",
      snapshot: {
        quality: { status: "meets", label: "Meets" },
        timeliness: { status: "meets", label: "Meets" },
        addendums: { status: "meets", label: "Meets" },
        customerService: { status: "meets", label: "Meets" }
      },
      metricsByProgram: [
        { program: "MDE", timeliness: { score: 84, status: "meets" }, quality: { score: 87, status: "meets" }, customerService: { score: 83, status: "meets" } },
        { program: "RHRP", timeliness: { score: 80, status: "meets" }, quality: { score: 85, status: "meets" }, customerService: { score: 80, status: "meets" } }
      ],
      exceptions: [],
      compliance: { lateReports: "None", pendingAddendums: "Low", clarifications: "Low", qaResponseTrend: "Decreasing" },
      customerServiceSummary: {
        tickets: "No tickets this quarter.",
        positiveFeedback: "Quinn has received consistent praise from both claimants and the QA team for thorough family medicine assessments.",
        negativeFeedback: "None reported."
      },
      commentary: {
        roomForImprovement: "Quinn shows a strong and consistent upward trajectory, climbing approximately 2 points per quarter across key metrics. The referral SLA at 79 is the primary area to target for Tier 1 consideration. With the current rate of improvement, crossing the 85+ threshold within two quarters is realistic if momentum is maintained.",
        jobWellDone: "Quinn has been one of the most improved providers in the portfolio over the past year, rising from mid-70s to solid 80s across the board. The compliance score at 90 and zero customer service tickets reflect a well-managed practice. The QA team has noted a marked decrease in clarification requests, indicating documentation quality is improving organically.",
        targetedReminders: "1. Continue the current improvement trajectory; Tier 1 recognition is within reach.\n2. Focus specifically on referral SLA to close the gap from 79 to 85+.\n3. Attend the upcoming Q3 feedback session to discuss the path to Top Performer status."
      },
      providerAck: {
        comments: "Provider expressed enthusiasm about improvement trajectory and Tier 1 pathway.",
        acknowledged: true,
        followUpRequested: false
      }
    },
    "214719": {
      company: "Leidos QTC Health Service | VA - RHRP",
      dataReflected: "Q2 2026 (One Quarter in Arrears)",
      reportDate: "09/22/2026",
      lob: "VA",
      snapshot: {
        quality: { status: "meets", label: "Meets" },
        timeliness: { status: "meets", label: "Meets" },
        addendums: { status: "meets", label: "Meets" },
        customerService: { status: "meets", label: "Meets" }
      },
      metricsByProgram: [
        { program: "MDE", timeliness: { score: 96, status: "meets" }, quality: { score: 97, status: "meets" }, customerService: { score: 95, status: "meets" } },
        { program: "RHRP", timeliness: { score: 94, status: "meets" }, quality: { score: 96, status: "meets" }, customerService: { score: 93, status: "meets" } }
      ],
      exceptions: [],
      compliance: { lateReports: "None", pendingAddendums: "None", clarifications: "None", qaResponseTrend: "Stable" },
      customerServiceSummary: {
        tickets: "No tickets in over 12 months.",
        positiveFeedback: "Consistently the highest-rated provider in claimant satisfaction surveys. Scheduling team reports seamless coordination.",
        negativeFeedback: "None reported."
      },
      commentary: {
        roomForImprovement: "Casey is the top-performing provider in the portfolio. There are no significant areas requiring improvement. The only minor observation is that the score trend has flattened at +0.3, which is expected when operating near ceiling levels. Maintaining this performance level long-term is the primary goal.",
        jobWellDone: "Casey sets the standard for provider excellence in the network. A 97 quality score, 96 case closure rate, and 98 compliance score represent best-in-class performance. Zero customer service tickets in over a year and consistently glowing claimant feedback confirm that this is not just a numbers story but a genuine reflection of outstanding care and operational discipline.",
        targetedReminders: "1. No corrective actions needed. Continue current practices.\n2. Consider leading a peer mentoring session for providers in Tiers 3 and 4.\n3. Share best practices at the annual provider symposium in November.\n4. Annual excellence recognition nomination has been submitted."
      },
      providerAck: {
        comments: "Provider is honored by the recognition and happy to mentor other providers in the network.",
        acknowledged: true,
        followUpRequested: false
      }
    }
  }
};

/* Rebase all dates so the data feels current regardless of when it's opened.
   Dates were authored relative to 2026-10-16. */
(function rebaseDates() {
  var anchor = new Date('2026-10-16T00:00:00');
  var today = new Date(); today.setHours(0,0,0,0);
  var offsetMs = today.getTime() - anchor.getTime();
  if (Math.abs(offsetMs) < 86400000) return;

  function shift(dateStr) {
    if (!dateStr) return dateStr;
    var d = new Date(dateStr + 'T00:00:00');
    d = new Date(d.getTime() + offsetMs);
    var y = d.getFullYear(), m = ('0'+(d.getMonth()+1)).slice(-2), day = ('0'+d.getDate()).slice(-2);
    return y + '-' + m + '-' + day;
  }

  PRA_DATA.providers.forEach(function(p) {
    p.lastContact = shift(p.lastContact);
    p.nextFollowUp = shift(p.nextFollowUp);
  });
  PRA_DATA.calls.forEach(function(c) {
    c.dateCreated = shift(c.dateCreated);
    c.actualEnd = shift(c.actualEnd);
  });
  PRA_DATA.callQueue.forEach(function(q) {
    q.dueDate = shift(q.dueDate);
  });
  Object.keys(PRA_DATA.reports).forEach(function(pid) {
    PRA_DATA.reports[pid].forEach(function(r) {
      r.dateGenerated = shift(r.dateGenerated);
    });
  });
})();

function getProvider(id) { return PRA_DATA.providers.find(p => p.id === id); }
function getParam(name) { return new URLSearchParams(window.location.search).get(name); }
function formatDate(dateStr) {
  if (!dateStr) return "—";
  const d = new Date(dateStr + "T00:00:00");
  return `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`;
}
function daysBetween(dateStr1, dateStr2) {
  const d1 = new Date(dateStr1 + "T00:00:00");
  const d2 = new Date(dateStr2 + "T00:00:00");
  return Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
}
