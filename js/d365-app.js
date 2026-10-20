/* ============================================================
   d365-app.js — D365 PRM Prototype Application Engine
   Shell renderer, data-driven table, status helpers, modals
   ============================================================ */

/* ── Shell Renderer ───────────────────────────────────────── */

function renderShell(pageId) {
  var _today = new Date(); _today.setHours(0,0,0,0);
  const overdueCount = PRA_DATA.callQueue.filter(function(c) {
    if (c.status === 'Completed') return false;
    var d = new Date(c.dueDate + 'T00:00:00'); d.setHours(0,0,0,0);
    return d < _today;
  }).length;

  const navSections = [
    { type: 'item', id: 'home', icon: '<i class="ms-Icon ms-Icon--Home"></i>', label: 'Home' },
    { type: 'item', id: 'recent', icon: '<i class="ms-Icon ms-Icon--Recent"></i>', label: 'Recent', chevron: true },
    { type: 'item', id: 'pinned', icon: '<i class="ms-Icon ms-Icon--Pinned"></i>', label: 'Pinned', chevron: true },
    { type: 'header', label: 'Dashboards & Activities', open: true },
    { type: 'child', id: 'dashboards', icon: '<i class="ms-Icon ms-Icon--ViewDashboard"></i>', label: 'Dashboards' },
    { type: 'child', id: 'tracking-link', icon: '<i class="ms-Icon ms-Icon--Link"></i>', label: 'Tracking Tool Link' },
    { type: 'child', id: 'my-phone-calls', icon: '<i class="ms-Icon ms-Icon--Phone"></i>', label: 'My Phone Calls' },
    { type: 'child', id: 'all-activities', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M10,2A2,2,0,0,0,6,2H2V16H14V2ZM7,3V2A1,1,0,0,1,9,2V3h2V4H5V3Zm6,12H3V3H4V5h8V3h1Z"/><path d="M8.73,6.06,4.63,10.2,4,12.95l2.79-.54,4.11-4.14a1.56,1.56,0,0,0,0-2.21A1.65,1.65,0,0,0,8.73,6.06Zm1.5,1.5L6.34,11.49l-1,.19.21-1,3.9-3.93a.63.63,0,0,1,.79,0,.56.56,0,0,1,0,.79Z"/></svg>', label: 'All Activities' },
    { type: 'child', id: 'pra-calls', icon: '<i class="ms-Icon ms-Icon--Phone"></i>', label: 'PRA Calls', href: 'index.html' },
    { type: 'child', id: 'my-providers', icon: '<i class="ms-Icon ms-Icon--People"></i>', label: 'My Providers', href: 'my-providers.html', badge: 'NEW' },
    { type: 'child', id: 'pra-feedback', icon: '<i class="ms-Icon ms-Icon--Feedback"></i>', label: 'PRA Feedback Sur...' },
    { type: 'child', id: 'trackers', icon: '<i class="ms-Icon ms-Icon--TrackersMirrored"></i>', label: 'Q-T-C Activity Trackers' },
    { type: 'child', id: 'tpl-phone-calls', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.77,141.12c-7.1-9.82-17.18-18.65-29.95-26.53-.1-.06-.2-.13-.31-.16C451.22,102.05,420.28,88.3,383.28,77.24,346.18,66.19,303.22,58.03,260.86,58.02c-1.62,0-3.26.01-4.92.04-1.63-.02-3.27-.04-4.91-.04-42.36.02-85.32,8.18-122.42,19.22-36.98,11.06-67.92,24.81-87.21,37.19-.11.06-.17.1-.26.16C28.41,122.47,18.34,131.3,11.23,141.12,4.09,150.96,0,162.02,0,173.32c-.04,12.61,5.23,24.73,14.23,34.72,6.38,9.02,12.66,18.09,18.79,27.22l.04.05c6.53,9.59,17.29,14.69,28.15,14.68,3.91,0,7.86-.68,11.68-2.01l.54-.19c3.19-1.15,6.41-2.09,9.62-3.19l-.58,1.69-27.77,59.25C44.27,327.77,38.88,352.02,38.88,376.57v15.57c.01,34.1,27.64,61.72,61.73,61.73H256h155.67c34.11-.01,61.72-27.64,61.73-61.73v-15.57c0-24.55-5.4-48.8-15.82-71.03l-27.77-59.24-.58-1.71c3.19,1.09,6.42,2.04,9.6,3.19,3.92,1.41,7.97,2.09,11.97,2.09,10.87.02,21.6-5.1,28.13-14.66l.05-.06c6.15-9.15,12.44-18.23,18.84-27.25,8.98-9.99,14.24-22.12,14.19-34.7C512.02,162.02,507.91,150.95,500.77,141.12z"/><circle cx="256" cy="301.47" r="49.69"/></svg>', label: 'TPL Phone Calls' },
    { type: 'header', label: 'Provider Related' },
    { type: 'child', id: 'provider-dashboard', icon: '<i class="ms-Icon ms-Icon--AreaChart"></i>', label: 'Provider Dashboard', href: 'provider-dashboard.html' },
    { type: 'header', label: 'Requests/Tickets' },
    { type: 'header', label: 'Collateral' },
    { type: 'header', label: 'Work' },
    { type: 'header', label: 'Reporting', open: true },
    { type: 'child', id: 'adv-find', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1024 512v128H384V512h640zM384 768h1152v128H384V768zm832 640q66 0 124 25t101 69 69 102 26 124q0 66-25 124t-69 102-102 69-124 25q-66 0-124-25t-102-68-69-102-25-125q0-66 25-124t68-101 102-69 125-26zm0 512q40 0 75-15t61-41 41-61 15-75q0-40-15-75t-41-61-61-41-75-15q-40 0-75 15t-61 41-41 61-15 75q0 40 15 75t41 61 61 41 75 15zm0-896q100 0 200 21t193 64 173 103 139 139 93 173 34 204h-128q0-91-29-169t-81-142-119-113-147-83-162-51-166-18q-82 0-166 17t-162 51-146 83-120 114-80 142-30 169H384q0-109 34-204t93-173 139-139 172-103 193-63 201-22zm-960 896h128v128H128V0h1115l549 549v477q-63-39-128-68V640h-512V128H256v1792zM1280 512h293l-293-293v293z"/></svg>', label: 'Legacy Advanced Find' },
    { type: 'child', id: 'power-bi', icon: '<svg class="icon-power-bi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><defs><linearGradient id="pbi0" x1="46.67" y1="0" x2="88.87" y2="89.45" gradientUnits="userSpaceOnUse"><stop stop-color="#E6AD10"/><stop offset="1" stop-color="#C87E0E"/></linearGradient><linearGradient id="pbi1" x1="32" y1="24" x2="67.49" y2="92.83" gradientUnits="userSpaceOnUse"><stop stop-color="#F6D751"/><stop offset="1" stop-color="#E6AD10"/></linearGradient><linearGradient id="pbi2" x1="12" y1="48" x2="31.61" y2="94.48" gradientUnits="userSpaceOnUse"><stop stop-color="#F9E589"/><stop offset="1" stop-color="#F6D751"/></linearGradient><mask id="pbim"><path d="M52 4C52 1.79 53.79 0 56 0H80C82.21 0 84 1.79 84 4V92C84 94.21 82.21 96 80 96H16C13.79 96 12 94.21 12 92V52C12 49.79 13.79 48 16 48H32V28C32 25.79 33.79 24 36 24H52V4Z" fill="white"/></mask></defs><g mask="url(#pbim)"><path d="M84 0V96H52V0H84Z" fill="url(#pbi0)"/><path d="M64 28V96H32V24H60C62.21 24 64 25.79 64 28Z" fill="url(#pbi1)"/><path d="M12 48V96H44V52C44 49.79 42.21 48 40 48H12Z" fill="url(#pbi2)"/></g></svg>', label: 'Power BI' },
    { type: 'child', id: 'reports', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" transform="scale(1,-1)"><path d="M1536 512H1152V1664H1536V512ZM1280 1536V640H1408V1536H1280ZM1024 512H640V1408H1024V512ZM768 1280V640H896V1280H768ZM128 2048H1920V128H128V512H0V640H128V1408H0V1536H128V2048ZM1792 256V1920H256V1536H384V1408H256V640H384V512H256V256H1792Z"/></svg>', label: 'Reports' }
  ];

  function buildNavItem(item) {
    if (item.type === 'header') {
      const chevronDir = item.open ? ' d365-sitenav__chevron--open' : '';
      return `<li class="d365-sitenav__item d365-sitenav__item--header" onclick="toggleSection(this)">
        <span class="d365-sitenav__text">${item.label}</span>
        <span class="d365-sitenav__chevron${chevronDir}"><span style="font-family:FabricMDL2Icons;font-size:16px;">&#xe70d;</span></span>
      </li>`;
    }
    const selected = item.id === pageId ? ' d365-sitenav__item--selected' : '';
    const childCls = item.type === 'child' ? ' d365-sitenav__item--child' : '';
    const href = item.href ? ` onclick="window.location.href='${item.href}'"` : '';
    const chevron = item.chevron ? '<span class="d365-sitenav__chevron"><span style="font-family:FabricMDL2Icons;font-size:16px;">&#xe70d;</span></span>' : '';
    const badgeCls = item.badge === 'NEW' ? 'd365-nav-badge d365-nav-badge--new' : 'd365-nav-badge';
    const badge = item.badge ? `<span class="${badgeCls}">${item.badge}</span>` : '';
    return `<li class="d365-sitenav__item${childCls}${selected}"${href}>
      <span class="d365-sitenav__icon">${item.icon}</span>
      <span class="d365-sitenav__text">${item.label}</span>
      ${badge}${chevron}
    </li>`;
  }

  const app = document.getElementById('app');
  app.innerHTML = `
  <header class="d365-header">
    <div class="d365-header__logo">
      <button class="d365-header__action-btn" title="App launcher"><i class="ms-Icon ms-Icon--WaffleOffice365"></i></button>
      <img src="assets/logo-lqtchs-white.svg" alt="Leidos QTC Health Services" style="height:32px;width:auto;margin-left:8px;">
    </div>
    <div class="d365-header__divider"></div>
    <div class="d365-header__app-name">UAT LQTC PRM</div>
    <div class="d365-header__search"><input type="text" placeholder="Search"></div>
    <div class="d365-header__sandbox">SANDBOX</div>
    <div class="d365-header__actions">
      <button class="d365-header__action-btn" title="Assistant"><i class="ms-Icon ms-Icon--Lightbulb"></i></button>
      <button class="d365-header__action-btn" title="New"><i class="ms-Icon ms-Icon--Add"></i></button>
      <button class="d365-header__action-btn" title="Advanced Find"><i class="ms-Icon ms-Icon--Filter"></i></button>
      <button class="d365-header__action-btn" title="Notifications"><i class="ms-Icon ms-Icon--Ringer"></i></button>
      <button class="d365-header__action-btn" title="Settings"><i class="ms-Icon ms-Icon--Settings"></i></button>
      <button class="d365-header__action-btn" title="Help"><span style="font-family:FabricMDL2Icons;font-size:16px;">&#xe897;</span></button>
      <button class="d365-header__action-btn" title="User"><i class="ms-Icon ms-Icon--Contact"></i></button>
    </div>
  </header>
  <nav class="d365-sitenav">
    <button class="d365-sitenav__hamburger" title="Site Map" onclick="toggleNav()"><span style="font-family:FabricMDL2Icons;font-size:16px;">&#xe700;</span></button>
    <ul class="d365-sitenav__list">${navSections.map(buildNavItem).join('')}</ul>
    <div class="d365-sitenav__area-switcher">
      <span class="d365-sitenav__area-icon">W</span>
      <span class="d365-sitenav__text">Workplace</span>
      <span class="d365-sitenav__chevron"><span style="font-family:FabricMDL2Icons;font-size:16px;">&#xec8f;</span></span>
    </div>
  </nav>
  <main class="d365-main" id="main-content"></main>`;
}

function toggleNav() {
  document.querySelector('.d365-app').classList.toggle('d365-app--nav-collapsed');
}

function toggleSection(el) {
  var chevron = el.querySelector('.d365-sitenav__chevron');
  if (chevron) chevron.classList.toggle('d365-sitenav__chevron--open');
  var next = el.nextElementSibling;
  while (next && next.classList.contains('d365-sitenav__item--child')) {
    next.style.display = next.style.display === 'none' ? '' : 'none';
    next = next.nextElementSibling;
  }
}

/* ── Data Table Engine ────────────────────────────────────── */

function initTable(tableId, { data, columns, onRowClick, searchInputId, filters = [], rowClass }) {
  const table = document.getElementById(tableId);
  if (!table) return;
  const thead = table.querySelector('thead tr');
  const tbody = table.querySelector('tbody');
  let sortCol = null, sortDir = 'asc';
  let currentData = [...data];

  thead.innerHTML = columns.map((col, i) =>
    `<th${col.sortable !== false ? ' data-sort="' + i + '" style="cursor:pointer"' : ''}>${col.label}${col.sortable !== false ? ' <span class="col-menu"><i class="ms-Icon ms-Icon--ChevronDown" style="font-size:10px"></i></span>' : ''}</th>`
  ).join('');

  function applyFilters() {
    let filtered = [...data];
    var searchEl = searchInputId && document.getElementById(searchInputId);
    var searchVal = searchEl ? searchEl.value.toLowerCase().trim() : '';
    if (searchVal) {
      filtered = filtered.filter(function(row) {
        return columns.some(function(col) {
          return String(row[col.key] || '').toLowerCase().includes(searchVal);
        });
      });
    }
    filters.forEach(function(f) {
      var el = document.getElementById(f.id);
      if (!el) return;
      var val = el.value;
      if (val && val !== 'All') {
        if (f.fn) filtered = filtered.filter(function(row) { return f.fn(row, val); });
        else filtered = filtered.filter(function(row) { return row[f.key] === val; });
      }
    });
    currentData = filtered;
    renderBody();
    updateCount();
  }

  function renderBody() {
    var sorted = currentData.slice();
    if (sortCol !== null) {
      var col = columns[sortCol];
      sorted.sort(function(a, b) {
        var va = a[col.key], vb = b[col.key];
        if (va == null) va = '';
        if (vb == null) vb = '';
        var cmp = typeof va === 'number' && typeof vb === 'number' ? va - vb : String(va).localeCompare(String(vb));
        return sortDir === 'asc' ? cmp : -cmp;
      });
    }
    tbody.innerHTML = sorted.map(function(row) {
      var cls = rowClass ? rowClass(row) : '';
      return '<tr class="' + cls + '"' + (onRowClick ? ' data-href="1"' : '') + '>' +
        columns.map(function(col) {
          return '<td>' + (col.render ? col.render(row) : (row[col.key] != null ? row[col.key] : '—')) + '</td>';
        }).join('') +
      '</tr>';
    }).join('');

    if (onRowClick) {
      tbody.querySelectorAll('tr[data-href]').forEach(function(tr, i) {
        tr.addEventListener('click', function(e) {
          if (e.target.closest('a') || e.target.closest('button')) return;
          onRowClick(sorted[i]);
        });
      });
    }
  }

  function updateCount() {
    var countEl = document.querySelector('.d365-grid__row-count');
    if (countEl) countEl.textContent = 'Rows: ' + currentData.length;
  }

  thead.querySelectorAll('th[data-sort]').forEach(function(th) {
    th.addEventListener('click', function() {
      var colIdx = parseInt(th.dataset.sort);
      if (sortCol === colIdx) sortDir = sortDir === 'asc' ? 'desc' : 'asc';
      else { sortCol = colIdx; sortDir = 'asc'; }
      thead.querySelectorAll('th').forEach(function(h) { h.classList.remove('sort-asc', 'sort-desc'); });
      th.classList.add(sortDir === 'asc' ? 'sort-asc' : 'sort-desc');
      renderBody();
    });
  });

  if (searchInputId) {
    var searchEl = document.getElementById(searchInputId);
    if (searchEl) searchEl.addEventListener('input', applyFilters);
  }
  filters.forEach(function(f) {
    var el = document.getElementById(f.id);
    if (el) el.addEventListener('change', applyFilters);
  });

  applyFilters();
  return {
    refresh: applyFilters,
    setData: function(newData) { data = newData; applyFilters(); }
  };
}

/* ── Status Helpers ───────────────────────────────────────── */

function statusBadge(status) {
  var map = {
    Open: 'd365-badge--blue', Completed: 'd365-badge--green', Overdue: 'd365-badge--red',
    Final: 'd365-badge--green', Draft: 'd365-badge--yellow',
    Active: 'd365-badge--green', Pending: 'd365-badge--yellow', Inactive: 'd365-badge--gray'
  };
  return '<span class="d365-badge ' + (map[status] || '') + '">' + status + '</span>';
}

function priorityIcon(priority) {
  var map = {
    High:   '<span class="d365-priority d365-priority--high"><svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 2L14.5 13H1.5z" fill="currentColor"/></svg> High</span>',
    Medium: '<span class="d365-priority d365-priority--medium"><svg width="16" height="16" viewBox="0 0 16 16"><rect x="2" y="6.5" width="12" height="3" rx=".5" fill="currentColor"/></svg> Medium</span>',
    Low:    '<span class="d365-priority d365-priority--low"><svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 14L1.5 3H14.5z" fill="currentColor"/></svg> Low</span>'
  };
  return map[priority] || priority;
}

function dueCountdown(dueDate) {
  if (!dueDate) return '—';
  var today = new Date(); today.setHours(0,0,0,0);
  var due = new Date(dueDate + 'T00:00:00'); due.setHours(0,0,0,0);
  var diff = Math.round((due - today) / 86400000);
  if (diff < 0) return '<span class="d365-due d365-due--overdue">' + Math.abs(diff) + 'd overdue</span>';
  if (diff === 0) return '<span class="d365-due d365-due--today">Due today</span>';
  if (diff <= 3) return '<span class="d365-due d365-due--soon">' + diff + 'd</span>';
  return '<span class="d365-due d365-due--ok">' + diff + 'd</span>';
}

function trendArrow(val) {
  if (val > 0) return '<span class="d365-trend-up">▲ ' + val + ' pts</span>';
  if (val < 0) return '<span class="d365-trend-down">▼ ' + Math.abs(val) + ' pts</span>';
  return '<span>— 0 pts</span>';
}

function metricStatusBadge(status) {
  var map = { on_target: 'd365-metric--on-target', watch: 'd365-metric--watch', at_risk: 'd365-metric--at-risk',
              meets: 'd365-metric--on-target', monitor: 'd365-metric--watch', needs_review: 'd365-metric--at-risk' };
  var label = { on_target: 'On Target', watch: 'Watch', at_risk: 'At Risk',
                meets: 'Meets', monitor: 'Monitor', needs_review: 'Needs Review' };
  return '<span class="d365-metric-badge ' + (map[status] || '') + '">' + (label[status] || status) + '</span>';
}

/* ── Tab System ───────────────────────────────────────────── */

function initTabs(tabsContainerId) {
  var container = document.getElementById(tabsContainerId);
  if (!container) return;
  container.addEventListener('click', function(e) {
    var tab = e.target.closest('.d365-tabs__tab');
    if (!tab) return;
    container.querySelectorAll('.d365-tabs__tab').forEach(function(t) { t.classList.remove('d365-tabs__tab--active'); });
    tab.classList.add('d365-tabs__tab--active');
    var panels = tab.closest('.d365-main, main, .d365-form, [data-tab-panels]') || document;
    panels.querySelectorAll('.tab-panel').forEach(function(p) { p.style.display = 'none'; });
    var target = document.getElementById('tab-' + tab.dataset.tab);
    if (target) target.style.display = '';
  });
}

/* ── Modal System ─────────────────────────────────────────── */

function showModal(title, bodyHtml, options) {
  options = options || {};
  var overlay = document.createElement('div');
  overlay.className = 'd365-modal-overlay';
  overlay.innerHTML = '<div class="d365-modal">' +
    '<div class="d365-modal__header">' +
      '<span class="d365-modal__title">' + title + '</span>' +
      '<button class="d365-modal__close" title="Close">&times;</button>' +
    '</div>' +
    '<div class="d365-modal__body">' + bodyHtml + '</div>' +
    (options.footer ? '<div class="d365-modal__footer">' + options.footer + '</div>' : '') +
  '</div>';
  document.body.appendChild(overlay);
  overlay.querySelector('.d365-modal__close').addEventListener('click', function() { closeModal(overlay); });
  overlay.addEventListener('click', function(e) { if (e.target === overlay) closeModal(overlay); });
  return overlay;
}

function closeModal(overlay) {
  if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
}

/* ── Toast Notifications ──────────────────────────────────── */

function showToast(message, type) {
  type = type || 'success';
  var toast = document.querySelector('.d365-toast');
  if (!toast) { toast = document.createElement('div'); toast.className = 'd365-toast'; document.body.appendChild(toast); }
  toast.className = 'd365-toast d365-toast--' + type;
  toast.textContent = message;
  requestAnimationFrame(function() { toast.classList.add('d365-toast--show'); });
  setTimeout(function() { toast.classList.remove('d365-toast--show'); }, 3000);
}

/* ── Provider Context Nav ────────────────────────────────── */

function renderProviderNav(providerId, activePage) {
  var provider = getProvider(providerId);
  if (!provider) return '';
  var pages = [
    { id: 'detail', label: 'Call Detail', icon: 'ms-Icon--ContactInfo', href: 'provider-detail.html?id=' + providerId },
    { id: 'dashboard', label: 'Performance', icon: 'ms-Icon--AreaChart', href: 'provider-dashboard.html?id=' + providerId },
    { id: 'report', label: 'Report Card', icon: 'ms-Icon--ReportDocument', href: 'report-card.html?id=' + providerId }
  ];
  return '<div class="d365-provider-nav">' +
    '<span class="d365-provider-nav__name">' + titleCase(provider.name) + ' (' + provider.id + ')</span>' +
    '<div class="d365-provider-nav__links">' +
    pages.map(function(p) {
      var cls = p.id === activePage ? ' d365-provider-nav__link--active' : '';
      return '<a class="d365-provider-nav__link' + cls + '" href="' + p.href + '">' +
        '<i class="ms-Icon ' + p.icon + '" style="font-size:14px;"></i> ' + p.label + '</a>';
    }).join('') +
    '</div></div>';
}

/* ── Alert Banner ────────────────────────────────────────── */

function renderOverdueBanner() {
  var today = new Date(); today.setHours(0,0,0,0);
  var overdueCount = PRA_DATA.callQueue.filter(function(c) {
    if (c.status === 'Completed') return false;
    var due = new Date(c.dueDate + 'T00:00:00'); due.setHours(0,0,0,0);
    return due < today;
  }).length;
  if (!overdueCount) return '';
  return '<div class="d365-alert-banner">' +
    '<i class="ms-Icon ms-Icon--Warning" style="font-size:16px;"></i> ' +
    '<span>' + overdueCount + ' call' + (overdueCount > 1 ? 's are' : ' is') + ' overdue — ' +
    '<a href="pra-call-queue.html">View Queue</a></span>' +
    '<button class="d365-alert-banner__close" onclick="this.parentElement.remove()" title="Dismiss">&times;</button>' +
    '</div>';
}

/* ── Computed Status ──────────────────────────────────────── */

function computedStatus(row) {
  if (row.status === 'Completed') return 'Completed';
  if (row.dueDate) {
    var today = new Date(); today.setHours(0,0,0,0);
    var due = new Date(row.dueDate + 'T00:00:00'); due.setHours(0,0,0,0);
    if (due < today) return 'Overdue';
  }
  return row.status || 'Open';
}

/* ── Command Bar Overflow ────────────────────────────────── */

function toggleOverflow(btn) {
  var menu = btn.nextElementSibling;
  if (!menu) return;
  menu.classList.toggle('d365-command-bar__overflow-menu--open');
}

document.addEventListener('click', function(e) {
  if (!e.target.closest('.d365-command-bar__overflow')) {
    document.querySelectorAll('.d365-command-bar__overflow-menu--open').forEach(function(m) {
      m.classList.remove('d365-command-bar__overflow-menu--open');
    });
  }
});

/* ── Utility Functions ────────────────────────────────────── */

function titleCase(str) {
  if (!str) return '';
  return str.split(' ').map(function(w) { return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase(); }).join(' ');
}
