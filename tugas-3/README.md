# 🌟 Portfolio CV - Sandi Fariz Ahmadi

Portfolio CV online modern dan interaktif yang dibangun dengan HTML, CSS, dan JavaScript murni. Menampilkan profil profesional, keahlian, proyek, dan pengalaman dengan desain yang menarik dan animasi yang smooth.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![HTML](https://img.shields.io/badge/HTML-5-orange.svg)
![CSS](https://img.shields.io/badge/CSS-3-blue.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 📋 Daftar Isi

- [Demo](#-demo)
- [Fitur](#-fitur)
- [Teknologi](#-teknologi)
- [Instalasi](#-instalasi)
- [Struktur File](#-struktur-file)
- [Kustomisasi](#-kustomisasi)
- [Deploy](#-deploy)
- [Browser Support](#-browser-support)
- [Lisensi](#-lisensi)
- [Kontak](#-kontak)

## 🎯 Demo

**Live Demo:** [Lihat Demo](https://sandifariz-art.github.io/LMS-pemrograman-web/tugas-3/) 

### Preview

![CV Preview](https://via.placeholder.com/800x400/6C63FF/FFFFFF?text=Portfolio+CV+Preview)

## ✨ Fitur

### Design & UI/UX
- 🎨 **Dark Theme Modern** - Desain gelap yang sophisticated dan profesional
- 🌈 **Gradient Effects** - Efek gradient yang eye-catching pada text dan background
- 💫 **Smooth Animations** - Animasi halus pada setiap interaksi
- 🔄 **Interactive Elements** - Hover effects dan transisi yang smooth
- 📱 **Fully Responsive** - Tampil sempurna di semua device (Mobile, Tablet, Desktop)
- 🎭 **Glassmorphism** - Efek glass blur yang modern pada cards

### Animasi & Efek
- ✨ **Animated Background** - Partikel bergerak yang menciptakan atmosfer dinamis
- 💭 **Floating Profile** - Avatar yang melayang dengan animasi smooth
- ⭕ **Progress Rings** - Skill visualization dengan circular progress bars
- 📝 **Typing Effect** - Text yang muncul dengan efek typing
- 🎯 **Parallax Scrolling** - Hero section dengan efek parallax
- 🖱️ **Cursor Trail** - Efek jejak cursor yang interaktif
- 👁️ **Scroll Animations** - Fade-in animation saat scroll menggunakan Intersection Observer

### Sections
1. **Hero Section** - Introduction dengan CTA buttons
2. **About Section** - Bio lengkap dan statistik pencapaian
3. **Skills Section** - Keahlian dengan progress indicators
4. **Projects Section** - Portfolio proyek dengan tags
5. **Education Timeline** - Timeline visual untuk pendidikan & pengalaman
6. **Contact Section** - Informasi kontak dengan social media links

### Fungsionalitas
- 🔗 **Smooth Scroll Navigation** - Navigasi yang smooth ke setiap section
- 📊 **Animated Statistics** - Counter animation untuk angka statistik
- 🎯 **Active Navigation Highlight** - Highlight otomatis sesuai section yang aktif
- 📱 **Mobile Menu Toggle** - Hamburger menu untuk mobile devices
- ⬆️ **Back to Top Button** - FAB (Floating Action Button) untuk kembali ke atas
- 🎨 **Dynamic Navbar** - Navbar yang berubah style saat scroll

## 🛠️ Teknologi

Dibangun dengan teknologi web fundamental tanpa framework atau library eksternal:

- **HTML5** - Semantic markup dan struktur
- **CSS3** - Modern styling dengan:
  - CSS Variables (Custom Properties)
  - Flexbox & Grid Layout
  - CSS Animations & Transitions
  - Media Queries untuk Responsive
  - Backdrop Filter untuk Glassmorphism
- **JavaScript (ES6)** - Vanilla JavaScript untuk interactivity:
  - DOM Manipulation
  - Event Listeners
  - Intersection Observer API
  - SVG Animations
- **Google Fonts** - Poppins font family

## 📦 Instalasi

### Prerequisites

Tidak ada prerequisites khusus! Cukup browser modern.

### Clone Repository

```bash
# Clone repository
git clone https://github.com/sandifariz-art/LMS-pemrograman-web.git

# Masuk ke directory
cd LMS-pemrograman-web

# Buka di browser
# Double click index.html atau gunakan live server
```

### Download ZIP

1. Klik tombol **Code** → **Download ZIP**
2. Extract file ZIP
3. Double click `index.html` untuk membuka di browser

## 📁 Struktur File

```
portfolio-cv/
│
├── index.html          # File HTML utama
├── style.css           # Stylesheet untuk semua styling
├── script.js           # JavaScript untuk interactivity
├── README.md           # Dokumentasi proyek
└── assets/             # (Optional) Folder untuk gambar/assets
    └── foto1.png
```

### Penjelasan File

#### `index.html`
File utama yang berisi struktur HTML lengkap:
- Semantic HTML5 tags
- Meta tags untuk SEO
- Link ke external CSS dan JS
- 6 main sections
- Navigation bar
- Footer

#### `style.css`
Stylesheet lengkap yang mencakup:
- CSS Reset & Variables
- Typography & Colors
- Layout (Flexbox & Grid)
- Animations & Transitions
- Responsive Media Queries
- All component styles

#### `script.js`
JavaScript functionality:
- Smooth scrolling
- Scroll animations
- Progress ring animations
- Typing effect
- Mobile menu toggle
- Cursor trail effect
- Stats counter
- Active navigation

## 🎨 Kustomisasi

### Mengubah Warna

Edit CSS Variables di `style.css`:

```css
:root {
    --primary: #6C63FF;      /* Warna utama (ungu) */
    --secondary: #FF6584;    /* Warna sekunder (pink) */
    --dark: #1a1a2e;         /* Background gelap */
    --light: #eaeaea;        /* Text terang */
    --accent: #00d4ff;       /* Warna aksen (biru) */
}
```

### Mengubah Font

Ganti font di `style.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your-Font:wght@300;400;600;700&display=swap');

body {
    font-family: 'Your-Font', sans-serif;
}
```

### Mengedit Konten

Edit informasi personal di `index.html`:

```html
<!-- Nama -->
<h1>sandi fariz ahmadi</h1>


### Menambah/Mengurangi Section

Untuk menambah section baru:

1. Tambah HTML section di `index.html`:
```html
<section id="nama-section">
    <h2 class="section-title">Judul Section</h2>
    <!-- Konten section -->
</section>
```

2. Tambah link navigation:
```html
<nav>
    <ul>
        <li><a href="#nama-section">Nama Section</a></li>
    </ul>
</nav>
```

3. Tambah styling di `style.css` sesuai kebutuhan


## 📄 Lisensi

MIT License

Copyright (c) 2024 Sandi Fariz Ahmadi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 📞 Kontak

**Sandi Fariz Ahmadi**

- 📧 Email: sandifariz@webmail.umm.ac.id

## 🙏 Acknowledgments

- [Google Fonts](https://fonts.google.com/) - Poppins Font
- [CSS Tricks](https://css-tricks.com/) - CSS Inspiration
- [MDN Web Docs](https://developer.mozilla.org/) - Documentation Reference

## 📈 Changelog

### Version 1.0.0 (2024)
- ✨ Initial release
- 🎨 Modern dark theme design
- 💫 Smooth animations
- 📱 Fully responsive
- 🚀 Performance optimized

---

**⭐ Jika project ini membantu, jangan lupa berikan star!**

**Made by Sandi Fariz Ahmadi**