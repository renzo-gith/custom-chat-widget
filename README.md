# Custom Chat Widget

Website dan chat widget untuk streamer & VTuber, kompatibel dengan [Social Stream Ninja](https://socialstream.ninja/).

Situs: https://renzo-gith.github.io/custom-chat-widget/

## Struktur

- `index.html`, `site/assets/` — website (galeri template, pembuat URL OBS, jasa custom).
- `Core/renzo-chat-core.js` — logika chat bersama untuk semua widget baru.
- `Core/SSN-Template.html` — titik awal widget baru.
- Widget lama (karya klien sebelumnya, NekoCat, Pastel Chat) tetap di repo [SocialStreamNinja](https://github.com/renzo-gith/SocialStreamNinja) supaya link OBS klien tidak berubah.

## Membuat widget baru

1. Salin `Core/SSN-Template.html` ke `NamaWidget/SSN-NamaWidget.html`, aset gambar di `NamaWidget/Asset/`.
2. Ganti CSS sesuai desain. Logika chat tidak perlu disentuh.
3. Tambahkan ke daftar `TEMPLATES` di `index.html` dengan `path:"NamaWidget/SSN-NamaWidget.html"`.

Link OBS: `https://renzo-gith.github.io/custom-chat-widget/NamaWidget/SSN-NamaWidget.html?session=KODE_SESSION`

Demo tanpa session (untuk atur posisi di OBS atau kirim ke klien): `...SSN-NamaWidget.html?demo=1`

Parameter opsional: `&limit=8` `&autohide=30` `&scale=1` `&owner=NamaStreamer` `&onlytype=youtube,twitch` `&hidetype=tiktok` `&showevents=raid` `&mindono=1`
