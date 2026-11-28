// Vierstin — Alert New Membership (Streamlabs)
// 1. Skala otomatis: alert 1224 x 723 mengecil/membesar mengikuti ukuran layar
//    (preview Streamlabs, OBS, atau ukuran Browser Source apa pun) dan selalu di tengah.
// 2. Nama member yang panjang dikecilkan supaya muat di papan (72px sampai minimal 40px).
(function () {
  var W = 1224, H = 723;

  function place(st) {
    var vw = window.innerWidth, vh = window.innerHeight;
    if (!vw || !vh) return;
    var s = Math.min(vw / W, vh / H);
    st.style.zoom = s;
    st.style.translate = "0 0";
    var r = st.getBoundingClientRect();
    var dx = (vw - r.width) / 2 - r.left, dy = (vh - r.height) / 2 - r.top;
    st.style.translate = (dx / s) + "px " + (dy / s) + "px";
  }

  function fit(el) {
    var size = 72;
    el.style.fontSize = size + "px";
    while (el.scrollWidth > el.clientWidth && size > 40) {
      size -= 2;
      el.style.fontSize = size + "px";
    }
  }

  function run() {
    document.querySelectorAll(".vs-stage").forEach(place);
    document.querySelectorAll(".vs-name").forEach(fit);
  }

  run();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(run);
  setTimeout(run, 300);

  // Sekali saja: pantau alert baru yang dimasukkan Streamlabs dan perubahan ukuran layar
  if (!window.__vsAlertInit) {
    window.__vsAlertInit = true;
    window.addEventListener("resize", run);
    new MutationObserver(function (ms) {
      for (var i = 0; i < ms.length; i++) {
        if (ms[i].addedNodes.length) { run(); break; }
      }
    }).observe(document.body, { childList: true, subtree: true });
  }
})();
