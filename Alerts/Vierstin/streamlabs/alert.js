// Vierstin — Alert New Membership (Streamlabs)
// Mengecilkan nama member yang panjang supaya muat di papan (72px sampai minimal 40px).
(function () {
  function fit() {
    document.querySelectorAll(".vs-name").forEach(function (el) {
      var size = 72;
      el.style.fontSize = size + "px";
      while (el.scrollWidth > el.clientWidth && size > 40) {
        size -= 2;
        el.style.fontSize = size + "px";
      }
    });
  }
  fit();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
  setTimeout(fit, 300);
})();
