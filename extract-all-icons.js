// Paste this into Chrome DevTools console on the D365 PRM page.
// Extracts ALL icons from the entire page: SVGs, font-icons, background-image icons.
// TIP: Run on different views (list view, detail view, etc.) to capture more icons.
// Result is copied to clipboard as JSON.

(function() {
  const results = { svg: {}, fontIcon: {}, summary: {} };
  let svgCount = 0, fontCount = 0;

  // --- 1. ALL SVG ELEMENTS ---
  document.querySelectorAll('svg').forEach(svg => {
    // Skip huge decorative/layout SVGs
    if (svg.closest('[class*="chart"]') && svg.getBoundingClientRect().width > 200) return;

    const title = svg.querySelector('title')?.textContent?.trim() ||
                  svg.getAttribute('title') ||
                  svg.getAttribute('alt') ||
                  svg.getAttribute('altText') || '';
    const source = svg.getAttribute('source') || '';
    const parent = svg.closest('button, a, li, [role="menuitem"], [role="treeitem"], [role="tab"], [class*="icon"], [class*="Icon"], [class*="btn"], [class*="command"]');
    const context = parent?.getAttribute('aria-label') ||
                    parent?.getAttribute('title') ||
                    parent?.textContent?.trim().split('\n')[0]?.trim().substring(0, 60) || '';
    const region = getRegion(svg);
    const vb = svg.getAttribute('viewBox') || '';
    const w = svg.getAttribute('width') || '';
    const h = svg.getAttribute('height') || '';

    // Get the clean SVG markup
    const clone = svg.cloneNode(true);
    // Remove runtime attributes
    ['styles', 'rules', 'altText', 'source'].forEach(a => clone.removeAttribute(a));

    const key = title || context || source || `svg_${svgCount}`;
    const dedupKey = (clone.innerHTML || '').replace(/\s+/g, '').substring(0, 100);

    if (!results.svg[key] || results.svg[key]._dedup !== dedupKey) {
      results.svg[key] = {
        region: region,
        context: context,
        title: title,
        source: source,
        viewBox: vb,
        width: w,
        height: h,
        markup: clone.outerHTML,
        _dedup: dedupKey
      };
      svgCount++;
    }
  });

  // --- 2. ALL FONT ICONS (ms-Icon, Fabric, Dyn CRM Symbol, FabricMDL2Icons) ---
  const iconSelectors = [
    'i[class*="ms-Icon"]',
    'i[class*="symbolFont"]',
    'span[class*="symbolFont"]',
    '[data-icon-name]',
    'i[class*="Icon"]'
  ];

  const seenFontIcons = new Set();

  document.querySelectorAll(iconSelectors.join(', ')).forEach(el => {
    const computed = window.getComputedStyle(el, '::before');
    const content = computed.getPropertyValue('content');
    const fontFamily = computed.getPropertyValue('font-family');
    const charCode = content && content !== 'none' && content !== 'normal'
      ? content.codePointAt(1)?.toString(16).toUpperCase() || null
      : null;

    const iconName = el.getAttribute('data-icon-name') ||
                     [...el.classList].find(c => c.startsWith('ms-Icon--'))?.replace('ms-Icon--', '') ||
                     [...el.classList].find(c => c.startsWith('icon-'))?.replace('icon-', '') || '';

    const parent = el.closest('button, a, li, [role="menuitem"], [role="treeitem"], [role="tab"], [class*="btn"], [class*="command"]');
    const context = parent?.getAttribute('aria-label') ||
                    parent?.getAttribute('title') ||
                    parent?.textContent?.trim().split('\n')[0]?.trim().substring(0, 60) || '';
    const region = getRegion(el);

    const dedupKey = `${iconName}_${charCode}_${fontFamily}`;
    if (seenFontIcons.has(dedupKey)) return;
    seenFontIcons.add(dedupKey);

    const key = iconName || context || `font_${fontCount}`;
    results.fontIcon[key] = {
      region: region,
      context: context,
      iconName: iconName,
      fontFamily: fontFamily.replace(/"/g, ''),
      charCode: charCode ? `U+${charCode}` : null,
      classes: el.className
    };
    fontCount++;
  });

  // --- 3. BACKGROUND-IMAGE SVGs (rare but D365 uses some) ---
  document.querySelectorAll('[style*="background-image"]').forEach(el => {
    const bg = el.style.backgroundImage;
    if (bg && bg.includes('svg')) {
      const context = el.getAttribute('title') || el.getAttribute('aria-label') || el.className || '';
      results.svg[`bg_${context || svgCount}`] = {
        region: getRegion(el),
        context: context,
        type: 'background-image',
        value: bg.substring(0, 500)
      };
      svgCount++;
    }
  });

  // Clean up _dedup keys
  Object.values(results.svg).forEach(v => delete v._dedup);

  // Summary
  results.summary = {
    totalSVGs: svgCount,
    totalFontIcons: fontCount,
    regions: [...new Set([
      ...Object.values(results.svg).map(v => v.region),
      ...Object.values(results.fontIcon).map(v => v.region)
    ])],
    extractedAt: new Date().toISOString(),
    pageUrl: window.location.href.split('?')[0]
  };

  // Helper: determine which UI region an element belongs to
  function getRegion(el) {
    const header = el.closest('[class*="navBar"], [class*="headerBar"], [id*="topBar"], header, [class*="appHeader"]');
    if (header) return 'header';

    const sidebar = el.closest('[class*="sitemap"], [class*="siteMap"], [class*="sitenav"], nav[class*="nav"]');
    if (sidebar) return 'sidebar';

    const cmdBar = el.closest('[class*="commandBar"], [class*="CommandBar"], [class*="command-bar"]');
    if (cmdBar) return 'command-bar';

    const grid = el.closest('[class*="ag-"], [class*="grid"], [class*="Grid"], table');
    if (grid) return 'grid';

    const form = el.closest('[class*="form"], [class*="Form"], [class*="tab-content"]');
    if (form) return 'form';

    const tabs = el.closest('[class*="tab"], [role="tablist"]');
    if (tabs) return 'tabs';

    const dialog = el.closest('[role="dialog"], [class*="modal"], [class*="flyout"]');
    if (dialog) return 'dialog';

    return 'other';
  }

  // Copy to clipboard
  const json = JSON.stringify(results, null, 2);
  copy(json);

  // Print summary
  console.log(`\n=== D365 Icon Extraction Complete ===`);
  console.log(`SVG icons: ${svgCount}`);
  console.log(`Font icons: ${fontCount}`);
  console.log(`Regions: ${results.summary.regions.join(', ')}`);
  console.log(`\nResult copied to clipboard! Paste it here.`);
  console.log(`\nBreakdown:`);

  const regionCounts = {};
  [...Object.values(results.svg), ...Object.values(results.fontIcon)].forEach(v => {
    regionCounts[v.region] = (regionCounts[v.region] || 0) + 1;
  });
  Object.entries(regionCounts).sort((a,b) => b[1]-a[1]).forEach(([r, c]) => {
    console.log(`  ${r}: ${c} icons`);
  });

  return results;
})();
