# Portfolio Ervan Suharlim

Website statis (HTML, CSS, JS biasa, tanpa library) sehingga cepat dibuka dan responsif.

## Isi folder `github-pages/`
- `index.html`: beranda (hero, tentang, berita terbaru)
- `produk.html`: katalog produk dengan pencarian dan filter kategori
- `pesan.html`: halaman produk + form pemesanan + produk terkait (dibuka dari katalog: `pesan.html?p=cetak-id-card`)
- `produk.js`: DATA PRODUK, ilustrasi, dan mesin pencarian. Edit produk di sini.
- `profil.html`, `foto-ervan.jpg`: halaman profil dan foto
- `berita.html`, `berita.js`: berita (dibaca dari Google Sheets)
- `style.css`: semua gaya (warna di `:root`: `--g` hijau lime, `--d` hijau tua)

## Publish di GitHub Pages
Upload semua isi folder `github-pages/` (termasuk `.nojekyll`) ke repository, lalu Settings > Pages > `main` / `(root)`.

## Mengubah produk
Tiap produk satu baris di `produk.js` (urutan: id, nama, kategori, gambar, ringkasan, deskripsi, hal yang perlu disiapkan, contoh subjek, contoh pesan, kata kunci pencarian, catatan). Kata kunci dipakai pencarian (sinonim seperti "banner" untuk spanduk). Pencarian toleran salah ketik.

## Form pemesanan
Tombol WhatsApp membuka chat ke 0858-8269-9718 dengan isi form. Tombol email membuka aplikasi email ke ervansuharlim92@gmail.com. Tanpa layanan pihak ketiga. File dilampirkan customer di chat atau emailnya.

## Berita (Google Sheets)
Link CSV di `SHEET_URL` pada `berita.js`. Kolom: `tanggal`, `judul`, `ringkas`, `link`, `gambar`, `embed` (hanya `judul` wajib). Tanggal format `2026-08-31`. Jika sheet gagal dimuat, tampil berita cadangan di `berita.js`.

## Logo format file
Di halaman pemesanan, format file memakai lencana huruf sebagai cadangan. Untuk logo resmi, simpan `ai.svg`, `id.svg`, `ps.svg`, `cd.svg` di folder `icons/`, dan website otomatis memakainya.
