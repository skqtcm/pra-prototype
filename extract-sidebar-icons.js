// Paste this into Chrome DevTools console on the D365 PRM page.
// It extracts all sidebar SVG icons and copies the result to clipboard.

(function() {
  const navItems = document.querySelectorAll('li[role="treeitem"], li[role="menuitem"]');
  const icons = {};

  navItems.forEach(item => {
    const label = (item.getAttribute('aria-label') || item.textContent || '').trim().split('\n')[0].trim();
    if (!label) return;

    // Check for SVG icon
    const svg = item.querySelector('svg');
    if (svg) {
      const clone = svg.cloneNode(true);
      // Clean up obfuscated classes
      clone.removeAttribute('class');
      clone.querySelectorAll('*').forEach(el => el.removeAttribute('class'));
      // Ensure viewBox and dimensions
      if (!clone.getAttribute('viewBox') && clone.getAttribute('width') && clone.getAttribute('height')) {
        clone.setAttribute('viewBox', `0 0 ${clone.getAttribute('width')} ${clone.getAttribute('height')}`);
      }
      clone.setAttribute('width', '16');
      clone.setAttribute('height', '16');
      clone.setAttribute('fill', 'currentColor');
      icons[label] = clone.outerHTML;
    }

    // Check for font icon (Dyn CRM Symbol)
    const fontIcon = item.querySelector('[class*="symbolFont"], .ms-Icon');
    if (fontIcon && !svg) {
      const cs = getComputedStyle(fontIcon);
      const charCode = getComputedStyle(fontIcon, '::before').content;
      icons[label] = {
        type: 'font-icon',
        fontFamily: cs.fontFamily,
        content: fontIcon.textContent || charCode,
        charCodeHex: fontIcon.textContent ? fontIcon.textContent.codePointAt(0).toString(16) : null
      };
    }
  });

  // Also grab from the sidebar navigation specifically
  const sidebarIcons = document.querySelectorAll('[data-id="sitemap-entity"] svg, [class*="sitenav"] svg, nav svg');
  sidebarIcons.forEach((svg, i) => {
    const parent = svg.closest('li, button, a, [role="treeitem"]');
    const label = parent ? (parent.getAttribute('aria-label') || parent.textContent || '').trim().split('\n')[0].trim() : `sidebar-icon-${i}`;
    if (!icons[label]) {
      const clone = svg.cloneNode(true);
      clone.removeAttribute('class');
      clone.querySelectorAll('*').forEach(el => el.removeAttribute('class'));
      clone.setAttribute('width', '16');
      clone.setAttribute('height', '16');
      clone.setAttribute('fill', 'currentColor');
      icons[label] = clone.outerHTML;
    }
  });

  const result = JSON.stringify(icons, null, 2);
  copy(result);
  console.log('Copied to clipboard! Paste into a file.');
  console.log(`Found ${Object.keys(icons).length} icons:`);
  Object.keys(icons).forEach(k => console.log(`  - ${k}`));
  return icons;
})();
