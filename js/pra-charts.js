/* ── Shared chart tooltip ─────────────────────────────────── */
function getChartTooltip() {
  var tip = document.getElementById('pra-chart-tooltip');
  if (!tip) {
    tip = document.createElement('div');
    tip.id = 'pra-chart-tooltip';
    tip.className = 'pra-chart-tooltip';
    tip.style.cssText = 'position:fixed;z-index:9999;background:#1a1a2e;color:#fff;padding:4px 8px;border-radius:4px;font-size:12px;font-family:Public Sans,sans-serif;pointer-events:none;opacity:0;transition:opacity .15s;white-space:nowrap;';
    document.body.appendChild(tip);
  }
  return tip;
}

function showChartTooltip(evt, text) {
  var tip = getChartTooltip();
  tip.textContent = text;
  tip.style.opacity = '1';
  var rect = evt.target.getBoundingClientRect();
  tip.style.left = (rect.left + rect.width / 2 - tip.offsetWidth / 2) + 'px';
  tip.style.top  = (rect.top - tip.offsetHeight - 8) + 'px';
}

function hideChartTooltip() {
  var tip = getChartTooltip();
  tip.style.opacity = '0';
}

/* ── Sparkline ───────────────────────────────────────────── */
function renderSparkline(containerId, data, options) {
  options = options || {};
  var el = document.getElementById(containerId);
  if (!el || !data.length) return;
  var width = options.width || 120, height = options.height || 40;
  var color = options.color || '#235899', fill = options.fill !== false;
  var min = Math.min.apply(null, data) - 2, max = Math.max.apply(null, data) + 2;
  var range = max - min || 1;
  var step = width / (data.length - 1);
  var coords = data.map(function(v, i) { return { x: i * step, y: height - ((v - min) / range) * height }; });
  var points = coords.map(function(c) { return c.x + ',' + c.y; }).join(' ');
  var fillPoly = fill ? '<polygon points="0,' + height + ' ' + points + ' ' + width + ',' + height + '" fill="' + color + '" opacity="0.08"/>' : '';
  var hitCircles = coords.map(function(c, i) {
    return '<circle cx="' + c.x + '" cy="' + c.y + '" r="12" fill="transparent" pointer-events="all" data-val="' + data[i] + '"/>';
  }).join('');
  el.innerHTML = '<svg width="' + width + '" height="' + height + '" viewBox="0 0 ' + width + ' ' + height + '" preserveAspectRatio="none" style="overflow:visible;">' +
    fillPoly +
    '<polyline points="' + points + '" fill="none" stroke="' + color + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
    hitCircles +
    '</svg>';
  el.querySelectorAll('circle').forEach(function(c) {
    c.addEventListener('mouseenter', function(e) { showChartTooltip(e, c.getAttribute('data-val') + '%'); });
    c.addEventListener('mouseleave', hideChartTooltip);
  });
}

/* ── Line Chart ──────────────────────────────────────────── */
function renderLineChart(containerId, data, options) {
  options = options || {};
  var el = document.getElementById(containerId);
  if (!el || !data.length) return;
  var width = options.width || 500, height = options.height || 160;
  var color = options.color || '#235899';
  var labels = options.labels || ['Apr','May','Jun','Jul','Aug','Sep'];
  var dotRadius = options.dotRadius || 4;
  var labelSize = options.labelSize || 11;
  var pad = { top: 10, right: 10, bottom: 32, left: 10 };
  var w = width - pad.left - pad.right, h = height - pad.top - pad.bottom;
  var min = Math.min.apply(null, data) - 3, max = Math.max.apply(null, data) + 3;
  var range = max - min || 1;
  var step = w / (data.length - 1);
  var pts = data.map(function(v, i) { return { x: pad.left + i * step, y: pad.top + h - ((v - min) / range) * h }; });
  var polyline = pts.map(function(p) { return p.x + ',' + p.y; }).join(' ');
  var dots = pts.map(function(p, i) {
    return '<circle class="pra-line-dot" cx="' + p.x + '" cy="' + p.y + '" r="' + dotRadius + '" fill="' + color + '" stroke="#fff" stroke-width="2" style="transition:r .15s;"/>';
  }).join('');
  var hitCircles = pts.map(function(p, i) {
    return '<circle cx="' + p.x + '" cy="' + p.y + '" r="12" fill="transparent" pointer-events="all" data-label="' + (labels[i] || '') + '" data-val="' + data[i] + '" data-idx="' + i + '"/>';
  }).join('');
  var gridLines = [0.25, 0.5, 0.75].map(function(f) {
    var y = pad.top + h * (1 - f);
    return '<line x1="' + pad.left + '" y1="' + y + '" x2="' + (width - pad.right) + '" y2="' + y + '" stroke="#E5E7EB" stroke-width="1"/>';
  }).join('');
  var labelEls = labels.map(function(l, i) {
    var x = pad.left + i * step;
    return '<text x="' + x + '" y="' + (height - 5) + '" text-anchor="middle" font-size="' + labelSize + '" fill="#848086" font-family="Public Sans, sans-serif">' + l + '</text>';
  }).join('');
  var areaPath = 'M' + pts[0].x + ',' + (pad.top + h) + ' ' + pts.map(function(p) { return 'L' + p.x + ',' + p.y; }).join(' ') + ' L' + pts[pts.length-1].x + ',' + (pad.top + h) + ' Z';

  el.innerHTML = '<svg width="100%" height="' + height + '" viewBox="0 0 ' + width + ' ' + height + '" preserveAspectRatio="xMidYMid meet" style="overflow:visible;">' +
    gridLines +
    '<path d="' + areaPath + '" fill="' + color + '" opacity="0.06"/>' +
    '<polyline points="' + polyline + '" fill="none" stroke="' + color + '" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>' +
    dots +
    hitCircles +
    labelEls +
    '</svg>';

  var visibleDots = el.querySelectorAll('.pra-line-dot');
  el.querySelectorAll('circle[data-val]').forEach(function(c) {
    c.addEventListener('mouseenter', function(e) {
      var idx = parseInt(c.getAttribute('data-idx'), 10);
      if (visibleDots[idx]) visibleDots[idx].setAttribute('r', dotRadius + 2);
      showChartTooltip(e, c.getAttribute('data-label') + ': ' + c.getAttribute('data-val') + '%');
    });
    c.addEventListener('mouseleave', function() {
      var idx = parseInt(c.getAttribute('data-idx'), 10);
      if (visibleDots[idx]) visibleDots[idx].setAttribute('r', dotRadius);
      hideChartTooltip();
    });
  });
}

function renderRadialGauge(containerId, value, max, options) {
  options = options || {};
  var el = document.getElementById(containerId);
  if (!el) return;
  var size = options.size || 140, strokeWidth = options.strokeWidth || 12;
  var color = options.color || '#235899', bgColor = options.bgColor || '#E5E7EB';
  var label = options.label || '', sublabel = options.sublabel || '';
  var radius = (size - strokeWidth) / 2;
  var circumference = 2 * Math.PI * radius;
  var progress = (value / max) * circumference;
  var offset = circumference - progress;

  el.innerHTML = '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '">' +
    '<circle cx="' + (size/2) + '" cy="' + (size/2) + '" r="' + radius + '" fill="none" stroke="' + bgColor + '" stroke-width="' + strokeWidth + '"/>' +
    '<circle cx="' + (size/2) + '" cy="' + (size/2) + '" r="' + radius + '" fill="none" stroke="' + color + '" stroke-width="' + strokeWidth + '"' +
    ' stroke-dasharray="' + circumference + '" stroke-dashoffset="' + offset + '"' +
    ' stroke-linecap="round" transform="rotate(-90 ' + (size/2) + ' ' + (size/2) + ')" style="transition: stroke-dashoffset 1s ease;"/>' +
    '<text x="' + (size/2) + '" y="' + (size/2 - 8) + '" text-anchor="middle" font-size="32" font-weight="700" fill="' + color + '" font-family="Public Sans, sans-serif">' + (label || value) + '</text>' +
    (sublabel ? '<text x="' + (size/2) + '" y="' + (size/2 + 16) + '" text-anchor="middle" font-size="12" fill="#848086" font-family="Public Sans, sans-serif">' + sublabel + '</text>' : '') +
    '</svg>';
}

function renderProgressBar(containerId, value, max, options) {
  options = options || {};
  var el = document.getElementById(containerId);
  if (!el) return;
  var height = options.height || 8, color = options.color || '#235899';
  var bgColor = options.bgColor || '#E5E7EB', radius = options.radius || 4;
  var pct = Math.min(100, (value / max) * 100);
  el.innerHTML = '<div style="background:' + bgColor + '; border-radius:' + radius + 'px; height:' + height + 'px; width:100%; overflow:hidden;">' +
    '<div style="background:' + color + '; height:100%; width:' + pct + '%; border-radius:' + radius + 'px; transition:width 1s ease;"></div>' +
    '</div>';
}
