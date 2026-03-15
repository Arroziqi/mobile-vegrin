# 🌱 Vegrin App - Smart Plant Monitoring System

<div align="center">

![Vegrin](./assets/images/logo-vegrin.png)

**Vegrin** adalah aplikasi mobile cerdas untuk monitoring kondisi tanaman dan manajemen lahan pertanian menggunakan teknologi AI, IoT, dan prediksi cuaca real-time.

[Fitur](#-fitur) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Dokumentasi](#-dokumentasi) • [Kontribusi](#-kontribusi)

</div>

---

## 📋 Daftar Isi

1. [Tentang Vegrin](#-tentang-vegrin)
2. [Fitur](#-fitur)
3. [Tech Stack](#-tech-stack)
4. [Getting Started](#-getting-started)
5. [Dokumentasi](#-dokumentasi)
6. [Struktur Project](#-struktur-project)
7. [Development](#-development)
8. [Kontribusi](#-kontribusi)

---

## 🌿 Tentang Vegrin

Vegrin adalah platform monitoring tanaman komprehensif yang menggabungkan:

- **🤖 AI-Powered Plant Scanning**: Identifikasi kondisi tanaman, deteksi penyakit, dan analisis kesehatan menggunakan computer vision
- **📡 IoT Integration**: Monitor lahan secara real-time dengan sensor IoT yang terintegrasi untuk kelembaban, suhu, dan parameter tanah lainnya
- **🌤️ Weather Prediction**: Prediksi cuaca akurat untuk membantu perencanaan pertanian
- **📚 Educational Content**: Pusat pengetahuan dan edukasi tentang praktik pertanian berkelanjutan

---

## ✨ Fitur

### 🔍 Plant Diagnosis (AI Cam Scan)

- Scan tanaman menggunakan kamera untuk analisis kondisi kesehatan
- Deteksi otomatis penyakit dan hama
- Rekomendasi treatment berdasarkan AI
- Riwayat scanning dan tracking kesehatan

### 🏡 IoT Dashboard

- Monitoring lahan real-time via sensor IoT
- Visualisasi data kelembaban, suhu, dan kondisi tanah
- Alert dan notifikasi otomatis untuk kondisi abnormal
- Kontrol device IoT terintegrasi

### 🌦️ Weather Forecast

- Prediksi cuaca 7-14 hari ke depan
- Informasi curah hujan dan kelembaban udara
- Rekomendasi aktivitas pertanian berdasarkan cuaca

### 📖 Educational Content

- Artikel dan tips pertanian
- Tutorial video praktik berkelanjutan
- Kalender pertanian
- Knowledge base tanaman

### 👤 User Profile & Settings

- Manajemen profil pengguna
- Preferensi notifikasi
- Privacy policy dan terms
- Export data monitoring

---

## 🛠️ Tech Stack

### Frontend

- **Framework**: React Native dengan [Expo](https://expo.dev)
- **Language**: TypeScript
- **Routing**: Expo Router (file-based)
- **State Management**: Redux Toolkit
- **Data Fetching**: TanStack React Query (React Query)
- **HTTP Client**: Axios
- **UI Components**: Expo UI, React Native components

### Backend Integration

- **Camera**: Expo Camera (plant scanning)
- **Location**: Expo Location (IoT device tracking)
- **Notifications**: Expo Notifications
- **Image Processing**: Expo Image Manipulator
- **Storage**: AsyncStorage

### Development Tools

- **Package Manager**: npm
- **Linter**: ESLint
- **Code Formatter**: Prettier
- **TypeScript**: Type-safe development

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ dan npm
- Expo CLI (`npm install -g expo-cli`)
- Android Studio / iOS Simulator (opsional)
- Expo Go app (untuk testing di device)

### Installation

1. **Clone repository**

   ```bash
   git clone <repository-url>
   cd mobile-vegrin
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Setup environment**

   ```bash
   # Copy .env.example ke .env dan isi dengan konfigurasi
   cp .env.example .env
   ```

4. **Start development server**
   ```bash
   npm start
   ```

Lihat [Panduan Expo Go](./docs/EXPO_GO_GUIDE.md) untuk detail lebih lanjut.

---

## 📚 Dokumentasi

Dokumentasi lengkap tersedia di folder `docs/`:

| Dokumen                                                 | Deskripsi                                               |
| ------------------------------------------------------- | ------------------------------------------------------- |
| [🚀 Getting Started](./docs/GETTING_STARTED.md)         | Setup development environment dan quick start           |
| [📱 Expo Go Guide](./docs/EXPO_GO_GUIDE.md)             | Cara menjalankan app via Expo Go                        |
| [🏗️ Build Guide](./docs/BUILD_GUIDE.md)                 | Cara mem-build APK, AAB untuk Android dan IPA untuk iOS |
| [🔄 Update & Maintenance](./docs/UPDATE_MAINTENANCE.md) | Strategi update, versioning, dan maintenance            |
| [📐 Architecture](./docs/ARCHITECTURE.md)               | Arsitektur app, struktur folder, dan design patterns    |
| [🔗 API Integration](./docs/API_INTEGRATION.md)         | Dokumentasi integrasi dengan backend API                |
| [🧪 Testing & QA](./docs/TESTING_QA.md)                 | Testing strategy, debugging, dan quality assurance      |
| [📖 VegrinAPI Reference](./docs/VegrinAPI.md)           | API reference dan endpoints                             |

---

## 📁 Struktur Project

```
mobile-vegrin/
├── app/                    # Routing & navigation (Expo Router)
│   ├── (auth)/            # Authentication screens
│   ├── (tabs)/            # Tab-based screens
│   ├── analyze/           # Analysis screens
│   ├── dashboard-iot/     # IoT monitoring dashboard
│   ├── history/           # Riwayat scanning
│   ├── manage-content/    # Content management
│   ├── notification/      # Notifications
│   ├── profile/           # User profile
│   └── _layout.tsx        # Root navigation layout
│
├── components/            # Reusable UI components
│   ├── AppBar.tsx
│   ├── buttons/           # Button components
│   ├── card/              # Card components
│   ├── input/             # Input components
│   ├── modal/             # Modal components
│   ├── text/              # Text components
│   └── ui/                # UI utilities
│
├── libs/                  # Core libraries & utilities
│   ├── common/            # Common utilities
│   ├── core/              # Core functions
│   ├── dummyData/         # Mock data
│   ├── hooks/             # Custom hooks
│   ├── services/          # API services
│   └── store/             # Redux store
│
├── constants/             # Global constants & theme
├── hooks/                 # Global reusable hooks
├── assets/                # Images, fonts, icons
├── docs/                  # Dokumentasi teknis
└── scripts/               # Build scripts
```

---

## 💻 Development

### Available Scripts

```bash
# Development
npm start              # Start Expo development server
npm run android        # Run di Android emulator
npm run ios            # Run di iOS simulator
npm run web            # Run di web browser

# Code quality
npm run lint           # Run ESLint
npm run format         # Format code dengan Prettier
npm run format:check   # Check code formatting

# Project management
npm run reset-project  # Reset ke starter template
```

### Development Workflow

1. **Edit files** di direktori `app/` untuk routing dan screens
2. **Reusable components** di `components/`
3. **Business logic** di `libs/`
4. **Styles** menggunakan theme dari `constants/theme.ts`
5. **Hot reload** otomatis saat save file

Lihat [Architecture](./docs/ARCHITECTURE.md) untuk detail struktur development.

---

## 🤝 Kontribusi

Kami menyambut kontribusi dari community! Berikut cara berkontribusi:

1. Fork repository
2. Buat branch feature (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

### Development Guidelines

- Ikuti TypeScript best practices
- Pastikan code sudah di-format dengan Prettier
- Tambahkan comments untuk logic kompleks
- Test di Android dan iOS sebelum PR
- Update dokumentasi jika ada perubahan major

---

## 📄 License

Project ini dilisensikan di bawah [MIT License](./LICENSE) - lihat file LICENSE untuk detail.

---

## 📞 Support

Untuk pertanyaan atau dukungan:

- 📧 Email: support@vegrin.app
- 💬 Discord: [Join Community](https://discord.gg/vegrin)
- 🐛 Issues: [GitHub Issues](./issues)

---

## 🙏 Acknowledgments

- [Expo](https://expo.dev) - React Native framework
- [React Navigation](https://reactnavigation.org/) - Navigation library
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [TanStack React Query](https://tanstack.com/query/latest) - Data fetching

---

**Made with 🌱 for farmers by tech enthusiasts**
