/* Local AI Field Guide embed: resize iframes from height messages. Messages are accepted only from the iframe's own origin and window. */
(function () {
  'use strict';
  window.addEventListener('message', function (e) {
    var d = e.data;
    if (!d || d.type !== 'fae-height' || typeof d.height !== 'number') return;
    var frames = document.querySelectorAll('iframe.fae-frame');
    for (var i = 0; i < frames.length; i++) {
      var f = frames[i];
      if (f.contentWindow === e.source && f.getAttribute('data-fae-origin') === e.origin) {
        var h = Math.max(400, Math.min(20000, Math.round(d.height)));
        f.style.height = h + 'px';
      }
    }
  });
})();
