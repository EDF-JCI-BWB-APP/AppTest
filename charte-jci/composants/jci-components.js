/* @ds-bundle: {"format":4,"namespace":"JCI","components":[{"name":"Logo"},{"name":"LocalLogo"},{"name":"Ripple"}]} */
(function () {
  var R = window.React, h = R.createElement;
  // Chemin des logos : définir window.JCI_LOGO_BASE avant de charger ce fichier si besoin.
  var BASE = (typeof window !== 'undefined' && window.JCI_LOGO_BASE) || 'charte-jci/assets/logos/';
  var FILES = {
    default: BASE + 'jci-logo-default.png',
    inverted: BASE + 'jci-logo-inverted.png',
    white: BASE + 'jci-logo-white.png',
    black: BASE + 'jci-logo-black.png'
  };
  var RATIO = 662 / 1600; // image height / width
  function Logo(p) {
    var variant = p.variant || 'default';
    var w = p.width || 240;
    return h('img', { src: p.src || FILES[variant], alt: p.alt || 'JCI', width: w, style: Object.assign({ display: 'block', height: 'auto' }, p.style) });
  }
  // National / local lock-up: location name in Plus Jakarta Sans Bold, left-aligned to the wordmark, starting at the shield tip.
  function LocalLogo(p) {
    var w = p.width || 570;
    var variant = p.variant || 'default';
    var color = p.color || (variant === 'black' ? 'var(--jci-black)' : variant === 'white' ? 'var(--jci-white)' : 'var(--jci-blue)');
    var fs = 0.0987 * w * (p.fontScale || 1);
    var lines = String(p.name || '').split('\n');
    return h('div', { style: { position: 'relative', width: w, height: w * RATIO + fs * 1.1 * lines.length - 0.0175 * w, lineHeight: 0 } },
      h('img', { src: p.src || FILES[variant], alt: 'JCI ' + lines.join(' '), width: w, style: { display: 'block', height: 'auto' } }),
      h('div', { style: { position: 'absolute', left: 0.00875 * w, top: 0.4025 * w, fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: fs, lineHeight: 1.1, letterSpacing: 0, color: color, whiteSpace: 'pre' } }, lines.join('\n')));
  }
  function arc(cx, cy, r, a0, a1) {
    var x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0), x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
    return 'M' + x0.toFixed(2) + ' ' + y0.toFixed(2) + 'A' + r + ' ' + r + ' 0 0 1 ' + x1.toFixed(2) + ' ' + y1.toFixed(2);
  }
  // Ripple: rings of width x, spacing x, four quarters per ring separated by x, each ring rotated 15deg vs the next smaller.
  function Ripple(p) {
    var size = p.size || 320, rings = p.rings || 3, fade = p.fadeRings == null ? 2 : p.fadeRings, step = p.rotation == null ? 15 : p.rotation;
    var colors = p.colors || ['var(--jci-teal)', 'var(--jci-blue)', 'var(--jci-navy)', 'var(--jci-black)'];
    var fadeColors = p.fadeColors || ['var(--jci-teal-25)', 'var(--jci-blue-25)', 'var(--jci-navy-25)', 'var(--jci-black-25)'];
    var total = rings + fade, x = size / 2 / (1 + 2 * total + 0.0), inner = x * 1.0, c = size / 2, out = [];
    x = size / 2 / (2 * total + 1.5); inner = x * 1.5;
    for (var i = 0; i < total; i++) {
      var r = inner + (2 * i + 0.5) * x, gap = x / r, base = -Math.PI / 2 + i * step * Math.PI / 180;
      for (var q = 0; q < 4; q++) {
        var a0 = base + q * Math.PI / 2 + gap / 2, a1 = base + (q + 1) * Math.PI / 2 - gap / 2;
        out.push(h('path', { key: i + '-' + q, d: arc(c, c, r, a0, a1), fill: 'none', stroke: (i < rings ? colors : fadeColors)[q], strokeWidth: x }));
      }
    }
    return h('svg', { width: size, height: size, viewBox: '0 0 ' + size + ' ' + size, role: 'img', 'aria-label': p.label || 'JCI ripple', style: p.style }, out);
  }
  window.JCI = { Logo: Logo, LocalLogo: LocalLogo, Ripple: Ripple };
})();
