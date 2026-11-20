/* Homegrown AI: faceted search, needs-based ranking, and the AI beginner toggle.
   Data: data/products.json (same origin). DOM text uses textContent only. State lives in the URL hash. */
(function () {
  'use strict';
  var FACET_ORDER = [
    ['tt', 'Type of technology'], ['sub', 'Subject'], ['gr', 'Grade'], ['rt', 'Kind of resource'],
    ['priv', 'Student data'], ['cost', 'Cost'], ['pf', 'Works on'], ['net', 'Internet'],
    ['ease', 'Ease for students'], ['tc', 'Teacher learning curve'], ['setup', 'Setup time'],
    ['aic', 'AI features'], ['lp', 'Learning goal'], ['it', 'IT help'], ['os', 'Open source'], ['age', 'Youngest users']
  ];
  var OPEN_BY_DEFAULT = { tt: true, sub: true, gr: true };
  var PAGE = 24;
  var data, labels, icons;
  var state = { q: '', beg: false, local: true, hideUnv: false, sort: 'match', f: {}, needs: {}, shown: PAGE };
  var els = {};

  function $(id) { return document.getElementById(id); }

  function svgIcon(name, cls) {
    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    svg.setAttribute('class', cls || 'icon');
    var p = document.createElementNS(ns, 'path');
    p.setAttribute('d', icons[name] || icons.software);
    p.setAttribute('fill', 'none');
    p.setAttribute('stroke', 'currentColor');
    p.setAttribute('stroke-width', '1.8');
    p.setAttribute('stroke-linecap', 'round');
    p.setAttribute('stroke-linejoin', 'round');
    svg.appendChild(p);
    return svg;
  }

  /* ---------- URL state ---------- */
  function readHash() {
    var h = location.hash.replace(/^#/, '');
    if (!h) return;
    h.split('&').forEach(function (part) {
      var kv = part.split('=');
      var k = decodeURIComponent(kv[0] || '');
      var v = decodeURIComponent(kv[1] || '');
      if (k === 'q') state.q = v.slice(0, 100);
      else if (k === 'beg') state.beg = v === '1';
      else if (k === 'local') state.local = v !== '0';
      else if (k === 'unv') state.hideUnv = v === '1';
      else if (k === 'sort' && /^(match|pop|az)$/.test(v)) state.sort = v;
      else if (k.indexOf('f.') === 0 && labels[k.slice(2)]) {
        state.f[k.slice(2)] = v.split(',').filter(function (x) { return labels[k.slice(2)][x]; });
      } else if (k.indexOf('n.') === 0 && /^[a-z]+$/.test(k.slice(2)) && /^[a-z0-9_]*$/.test(v)) state.needs[k.slice(2)] = v;
    });
  }
  function writeHash() {
    var parts = [];
    if (state.q) parts.push('q=' + encodeURIComponent(state.q));
    if (state.beg) parts.push('beg=1');
    if (!state.local) parts.push('local=0');
    if (state.hideUnv) parts.push('unv=1');
    if (state.sort !== 'match') parts.push('sort=' + state.sort);
    Object.keys(state.f).forEach(function (k) { if (state.f[k].length) parts.push('f.' + k + '=' + state.f[k].join(',')); });
    Object.keys(state.needs).forEach(function (k) { if (state.needs[k]) parts.push('n.' + k + '=' + state.needs[k]); });
    var h = parts.length ? '#' + parts.join('&') : '';
    try { history.replaceState(null, '', location.pathname + location.search + h); } catch (e) { /* ignore */ }
  }

  /* ---------- facets ---------- */
  function buildFacets() {
    var box = $('facets');
    var counts = {};
    data.forEach(function (it) {
      FACET_ORDER.forEach(function (fo) {
        var k = fo[0];
        counts[k] = counts[k] || {};
        (it[k] || []).forEach(function (v) { counts[k][v] = (counts[k][v] || 0) + 1; });
      });
    });
    FACET_ORDER.forEach(function (fo) {
      var k = fo[0];
      var det = document.createElement('details');
      det.className = 'facet';
      if (state.f[k] && state.f[k].length) det.open = true;
      var sum = document.createElement('summary');
      sum.textContent = fo[1];
      det.appendChild(sum);
      var fs = document.createElement('fieldset');
      var lg = document.createElement('legend');
      lg.className = 'visually-hidden';
      lg.textContent = fo[1];
      fs.appendChild(lg);
      Object.keys(labels[k]).forEach(function (v) {
        if (!counts[k][v]) return;
        var id = 'f-' + k + '-' + v;
        var row = document.createElement('div');
        row.className = 'check';
        var inp = document.createElement('input');
        inp.type = 'checkbox';
        inp.id = id;
        inp.value = v;
        inp.dataset.facet = k;
        inp.checked = !!(state.f[k] && state.f[k].indexOf(v) !== -1);
        var lab = document.createElement('label');
        lab.htmlFor = id;
        lab.textContent = labels[k][v] + ' ';
        var c = document.createElement('span');
        c.className = 'facet-count';
        c.dataset.count = k + ':' + v;
        lab.appendChild(c);
        row.appendChild(inp);
        row.appendChild(lab);
        fs.appendChild(row);
        inp.addEventListener('change', function () {
          var arr = state.f[k] || [];
          if (inp.checked) arr.push(v); else arr = arr.filter(function (x) { return x !== v; });
          state.f[k] = arr;
          state.shown = PAGE;
          render();
        });
      });
      det.appendChild(fs);
      box.appendChild(det);
    });
    var sel = $('need-subject');
    Object.keys(labels.sub).forEach(function (v) {
      var o = document.createElement('option');
      o.value = v;
      o.textContent = labels.sub[v];
      sel.appendChild(o);
    });
  }

  /* ---------- big type-of-technology buttons (synced with the tt facet) ---------- */
  function buildTechButtons() {
    var box = $('tech-buttons');
    if (!box) return;
    ['ai', 'computing', 'robotics', 'unplugged'].forEach(function (v) {
      if (!labels.tt[v]) return;
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'tech-btn';
      b.dataset.tt = v;
      b.setAttribute('aria-pressed', 'false');
      b.appendChild(svgIcon(v, 'tech-icon'));
      var s = document.createElement('span');
      s.textContent = labels.tt[v];
      b.appendChild(s);
      b.addEventListener('click', function () {
        var arr = state.f.tt || [];
        arr = arr.indexOf(v) === -1 ? arr.concat([v]) : arr.filter(function (x) { return x !== v; });
        state.f.tt = arr;
        var cb = $('f-tt-' + v);
        if (cb) cb.checked = arr.indexOf(v) !== -1;
        state.shown = PAGE;
        render();
      });
      box.appendChild(b);
    });
  }
  function syncTechButtons() {
    document.querySelectorAll('.tech-btn').forEach(function (b) {
      b.setAttribute('aria-pressed', (state.f.tt || []).indexOf(b.dataset.tt) !== -1 ? 'true' : 'false');
    });
  }

  /* ---------- matching ---------- */
  function norm(s) { return String(s || '').toLowerCase(); }
  function textMatch(it, words) {
    if (!words.length) return 1;
    var hay = norm(it.n + ' ' + it.t + ' ' + it.o + ' ' + it.k);
    var score = 0;
    for (var i = 0; i < words.length; i++) {
      if (hay.indexOf(words[i]) === -1) return 0;
      score += norm(it.n).indexOf(words[i]) !== -1 ? 3 : 1;
    }
    return score;
  }
  /* Step 1 (grade, subject, devices) filters as soon as any one is chosen. */
  function passesClass(it) {
    var n = state.needs;
    if (n.grade && (it.gr || []).indexOf(n.grade) === -1) return false;
    if (n.subject && (it.sub || []).indexOf(n.subject) === -1) return false;
    if (n.device) {
      var pf = it.pf || [];
      if (n.device === 'paper') { if (pf.indexOf('paper') === -1 && (it.rt || []).indexOf('unplugged') === -1 && (it.tt || []).indexOf('unplugged') === -1) return false; }
      else if (n.device === 'chromebook') { if (pf.indexOf('chromebook') === -1 && pf.indexOf('browser') === -1) return false; }
      else if (pf.indexOf(n.device) === -1 && pf.indexOf('browser') === -1) return false;
    }
    return true;
  }
  function passes(it, skip) {
    if (!passesClass(it)) return false;
    if (state.beg && !it.beg) return false;
    if (state.local && it.priv.indexOf('red') !== -1) return false;
    if (state.hideUnv && it.priv.indexOf('unverified') !== -1) return false;
    var keys = Object.keys(state.f);
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      if (k === skip) continue;
      var want = state.f[k];
      if (!want || !want.length) continue;
      var have = it[k] || [];
      var ok = false;
      for (var j = 0; j < want.length; j++) if (have.indexOf(want[j]) !== -1) { ok = true; break; }
      if (!ok) return false;
    }
    return true;
  }
  /* Needs score: weighted fit to the "I'm looking for" panel. Higher is better. */
  function needsScore(it) {
    var n = state.needs, s = 0;
    function has(k, v) { return (it[k] || []).indexOf(v) !== -1; }
    if (n.grade) s += has('gr', n.grade) ? 3 : -3;
    if (n.subject) s += has('sub', n.subject) ? 4 : -2;
    if (n.device) {
      if (n.device === 'paper') s += (has('pf', 'paper') || has('rt', 'unplugged')) ? 4 : -4;
      else s += (has('pf', n.device) || has('pf', 'browser') && n.device === 'chromebook') ? 3 : -2;
    }
    if (n.internet === 'limited') s += has('net', 'none') || has('net', 'setup_only') ? 3 : -3;
    if (n.budget === 'free') s += has('cost', 'free') ? 3 : -3;
    if (n.budget === 'low') s += (has('cost', 'free') || has('cost', 'under50')) ? 2 : -2;
    if (n.privacy === 'strict') s += (has('priv', 'green') || has('priv', 'blue') || has('priv', 'paper')) ? 4 : -4;
    else s += (has('priv', 'green') || has('priv', 'paper') || has('priv', 'blue')) ? 1 : 0;
    if (n.comfort === 'new') s += (has('tc', 'easy') ? 2 : has('tc', 'advanced') ? -3 : 0) + (has('setup', 'days') ? -2 : 0);
    if (n.comfort === 'confident') s += has('tc', 'advanced') ? 1 : 0;
    return s;
  }

  /* ---------- render ---------- */
  function render() {
    writeHash();
    var words = norm(state.q).split(/\s+/).filter(Boolean);
    var list = [];
    data.forEach(function (it) {
      var tm = textMatch(it, words);
      if (!tm || !passes(it)) return;
      list.push({ it: it, tm: tm, ns: needsScore(it) });
    });
    if (state.sort === 'az') list.sort(function (a, b) { return a.it.n.localeCompare(b.it.n); });
    else if (state.sort === 'pop') list.sort(function (a, b) { return b.it.pop - a.it.pop; });
    else list.sort(function (a, b) { return (b.ns - a.ns) || (b.tm - a.tm) || (b.it.pop - a.it.pop); });
    updateCounts(words);
    var ul = els.cards;
    ul.textContent = '';
    var frag = document.createDocumentFragment();
    list.slice(0, state.shown).forEach(function (r) { frag.appendChild(card(r.it)); });
    ul.appendChild(frag);
    window.FAE.wireStars(ul);
    els.count.textContent = list.length === 1 ? '1 tool found' : list.length + ' tools found';
    els.more.hidden = list.length <= state.shown;
    var notes = [];
    if (state.local) notes.push('Tools that send student data to a company are hidden.');
    if (state.beg) notes.push('Showing tools for AI beginners.');
    var cls = [];
    if (state.needs.grade) cls.push(labels.gr[state.needs.grade] || state.needs.grade);
    if (state.needs.subject && !(state.f.sub && state.f.sub.length)) cls.push(labels.sub[state.needs.subject] || state.needs.subject);
    if (state.needs.device) cls.push({ chromebook: 'Chromebooks', ipad: 'iPads', windows: 'Windows computers', mac: 'Macs', paper: 'No devices' }[state.needs.device] || state.needs.device);
    if (cls.length) notes.push('Showing tools for: ' + cls.join(', ') + '.');
    if (state.f.sub && state.f.sub.length) notes.push('Subject: ' + state.f.sub.map(function (v) { return labels.sub[v] || v; }).join(', ') + '. Use More filters to change it.');
    els.note.hidden = !notes.length;
    els.note.textContent = notes.join(' ');
    els.beg.setAttribute('aria-pressed', state.beg ? 'true' : 'false');
    syncTechButtons();
    var mf = document.querySelector('#more-filters > summary');
    if (mf) { var n = activeFilterCount(); mf.textContent = n ? 'More filters (' + n + ' on)' : 'More filters'; }
    window.FAE.postHeight();
  }
  function updateCounts(words) {
    FACET_ORDER.forEach(function (fo) {
      var k = fo[0], c = {};
      data.forEach(function (it) {
        if (!textMatch(it, words) || !passes(it, k)) return;
        (it[k] || []).forEach(function (v) { c[v] = (c[v] || 0) + 1; });
      });
      document.querySelectorAll('[data-count^="' + k + ':"]').forEach(function (el) {
        var v = el.dataset.count.split(':')[1];
        el.textContent = '(' + (c[v] || 0) + ')';
      });
    });
  }
  function badge(text, cls) {
    var b = document.createElement('span');
    b.className = 'badge ' + (cls || '');
    b.textContent = text;
    return b;
  }
  function gradeRange(gr) {
    var order = ['k2', 'g35', 'g68', 'g912'], names = { k2: 'PreK', g35: '3', g68: '6', g912: '9' }, ends = { k2: '2', g35: '5', g68: '8', g912: '12' };
    var idx = gr.map(function (g) { return order.indexOf(g); }).filter(function (i) { return i >= 0; }).sort();
    if (!idx.length) return '';
    return 'Grades ' + names[order[idx[0]]] + '-' + ends[order[idx[idx.length - 1]]];
  }
  var COST_SIGN = { free: 'FREE', under50: '$', '50to200': '$$', over200: '$$$', license: '$ License' };
  var PRIV_SHORT = { green: 'Stays on device', blue: 'School server', yellow: 'Local, optional cloud',
    red: 'Sends data to a company', paper: 'No device needed', unverified: 'Privacy unverified' };
  function tag(iconName, text, cls, title) {
    var li = document.createElement('li');
    li.className = 'tag ' + (cls || '');
    if (iconName) li.appendChild(svgIcon(iconName, 'tag-icon'));
    var sp = document.createElement('span');
    sp.textContent = text;
    li.appendChild(sp);
    if (title) li.title = title;
    return li;
  }
  function card(it) {
    var node = els.tpl.content.firstElementChild.cloneNode(true);
    var a = node.querySelector('.card-title a');
    a.textContent = it.n;
    a.href = 'tools/' + it.s + '.html';
    node.querySelector('.card-tagline').textContent = it.t;
    if (it.img) {  /* only show a picture when a real one exists */
      var fig = document.createElement('div');
      fig.className = 'card-img';
      var im = document.createElement('img');
      im.src = 'images/' + it.img;
      im.alt = '';
      im.loading = 'lazy';
      im.width = 96; im.height = 72;
      fig.appendChild(im);
      node.insertBefore(fig, node.firstChild);
      node.classList.add('has-img');
    }
    var tags = node.querySelector('.card-tags');
    (it.cost || []).forEach(function (c) {
      if (c === 'unknown' || !COST_SIGN[c]) return;
      tags.appendChild(tag(null, COST_SIGN[c], 'tag-cost cost-' + c, labels.cost[c]));
      if (c !== 'free') tags.appendChild(tag(null, labels.cost[c], 'tag-plain'));
    });
    (it.tt || []).forEach(function (t) { tags.appendChild(tag(t, labels.tt[t] || t, 'tag-tech')); });
    (it.priv || []).forEach(function (p) { tags.appendChild(tag('p-' + p, PRIV_SHORT[p] || labels.priv[p] || p, 'priv-' + p, labels.priv[p])); });
    var g = gradeRange(it.gr || []);
    if (g) tags.appendChild(tag('grade', g, 'tag-plain'));
    if (it.beg) tags.appendChild(tag('sparkle', 'AI beginner', 'tag-beginner'));
    var star = node.querySelector('.star-btn');
    star.setAttribute('data-star', it.s);
    star.setAttribute('data-name', it.n);
    star.insertBefore(svgIcon('star', 'star-icon'), star.firstChild);
    return node;
  }
  function activeFilterCount() {
    var n = state.hideUnv ? 1 : 0;
    Object.keys(state.f).forEach(function (k) { if (k !== 'tt') n += (state.f[k] || []).length; });
    return n;
  }
  function setSubject(id) {
    state.f.sub = [id];
    state.needs.subject = id;
    var ns = $('need-subject');
    if (ns) ns.value = id;
    document.querySelectorAll('#facets input[data-facet="sub"]').forEach(function (cb) { cb.checked = cb.value === id; });
    state.shown = PAGE;
    render();
  }

  /* ---------- wiring ---------- */
  function wireTiles() {
    document.querySelectorAll('.subject-tile[data-sub]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        setSubject(a.getAttribute('data-sub'));
        var b = $('browse');
        if (b) b.scrollIntoView({ block: 'start' });
        var h = $('result-count');
        if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
      });
    });
  }
  function wire() {
    wireTiles();
    var t;
    els.q.value = state.q;
    els.q.addEventListener('input', function () {
      window.clearTimeout(t);
      t = window.setTimeout(function () { state.q = els.q.value.trim().slice(0, 100); state.shown = PAGE; render(); }, 200);
    });
    els.beg.addEventListener('click', function () { state.beg = !state.beg; state.shown = PAGE; render(); });
    var lo = $('local-only'), hu = $('hide-unverified');
    lo.checked = state.local; hu.checked = state.hideUnv;
    lo.addEventListener('change', function () { state.local = lo.checked; state.shown = PAGE; render(); });
    hu.addEventListener('change', function () { state.hideUnv = hu.checked; state.shown = PAGE; render(); });
    var so = $('sort');
    so.value = state.sort;
    so.addEventListener('change', function () { state.sort = so.value; render(); });
    els.more.addEventListener('click', function () {
      var first = state.shown;
      state.shown += PAGE;
      render();
      var next = els.cards.children[first];
      if (next) { var link = next.querySelector('a'); if (link) link.focus(); }
    });
    document.querySelectorAll('[data-need]').forEach(function (sel) {
      var k = sel.getAttribute('data-need');
      if (state.needs[k]) { sel.value = state.needs[k]; if (['internet', 'budget', 'privacy', 'comfort'].indexOf(k) !== -1) $('more-options').open = true; }
      sel.addEventListener('change', function () {
        state.needs[k] = sel.value;
        if (k === 'subject') {  /* the step 1 subject replaces any subject chosen from a tile or filter */
          state.f.sub = [];
          document.querySelectorAll('#facets input[data-facet="sub"]').forEach(function (cb) { cb.checked = false; });
        }
        if (sel.value) state.sort = 'match';
        so.value = state.sort;
        state.shown = PAGE;
        render();
      });
    });
    $('clear-filters').addEventListener('click', function () {
      state.f = {}; state.q = ''; state.beg = false; state.local = true; state.hideUnv = false; state.needs = {};
      els.q.value = ''; lo.checked = true; hu.checked = false;
      document.querySelectorAll('#facets input').forEach(function (i) { i.checked = false; });
      document.querySelectorAll('[data-need]').forEach(function (s) { s.value = ''; });
      state.shown = PAGE;
      render();
      window.FAE.announce('All filters cleared.');
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    els = { cards: $('cards'), count: $('result-count'), more: $('more'), note: $('filter-note'), beg: $('beginner-toggle'), q: $('q'), tpl: $('card-tpl') };
    fetch('data/products.json', { credentials: 'same-origin' })
      .then(function (r) { if (!r.ok) throw new Error('load'); return r.json(); })
      .then(function (j) {
        data = j.items; labels = j.labels; icons = j.icons || {};
        readHash();
        buildFacets();
        buildTechButtons();
        wire();
        render();
      })
      .catch(function () { els.count.textContent = 'The tool list could not load. Please refresh the page.'; });
  });
})();
