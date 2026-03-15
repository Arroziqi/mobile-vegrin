# 🚀 Getting Started - Vegrin App Development

Panduan lengkap untuk setup development environment dan memulai development Vegrin app.

---

## 📋 Prerequisites

Sebelum memulai, pastikan Anda memiliki:

### Required

- **Node.js**: v18 atau lebih baru ([download](https://nodejs.org/))
- **npm**: v9 atau lebih baru (biasanya included dengan Node.js)
- **Expo CLI**: `npm install -g expo-cli`
- **Git**: untuk version control

### Optional (untuk native testing)

- **Android Studio**: untuk Android emulator
- **Xcode**: untuk iOS simulator (macOS only)
- **Expo Go App**: untuk testing di physical device (tersedia di App Store & Play Store)

---

## 🛠️ Installation

### 1. Clone Repository

```bash
git clone <repository-url>
cd mobile-vegrin
```

### 2. Install Dependencies

```bash
npm install
```

Ini akan menginstall semua packages yang terdaftar di `package.json`.

### 3. Setup Environment Variables

Buat file `.env` di root project:

```bash
cp .env.example .env
```

Kemudian edit `.env` dengan konfigurasi yang sesuai:

```env
# API Configuration
EXPO_PUBLIC_API_URL=https://api.vegrin.app
EXPO_PUBLIC_API_KEY=your_api_key_here

# Camera & AI
EXPO_PUBLIC_ML_MODEL_URL=https://models.vegrin.app/plant-detection

# Weather API
EXPO_PUBLIC_WEATHER_API_KEY=your_weather_api_key

# Feature Flags
EXPO_PUBLIC_ENABLE_IOT_DASHBOARD=true
EXPO_PUBLIC_ENABLE_AI_SCAN=true
```

**Note**: Variabel yang dimulai dengan `EXPO_PUBLIC_` akan accessible dari JavaScript. Untuk sensitive data, gunakan `.env.local` yang tidak di-commit.

### 4. Verify Installation

```bash
npm start
```

Jika berhasil, Anda akan melihat Expo CLI menu dengan opsi untuk run di berbagai platform.

---

## 🚀 Quick Start

### Development Mode (Expo Go)

Cara paling cepat untuk mulai development:

```bash
npm start
```

Pilih platform:

- Tekan `w` untuk web browser
- Tekan `a` untuk Android emulator / device
- Tekan `i` untuk iOS simulator / device
- Scan QR code dengan Expo Go app

### Platform Specific

```bash
# Android emulator
npm run android

# iOS simulator (macOS only)
npm run ios

# Web browser
npm run web
```

---

## 📱 Running on Physical Device

### Menggunakan Expo Go

1. **Install Expo Go app**:
   - [iOS App Store](https://apps.apple.com/us/app/expo-go/id1054236197)
   - [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. **Start development server**:

   ```bash
   npm start
   ```

3. **Scan QR code** dengan Expo Go app

4. **App akan load** di device Anda

### Menggunakan Development Build

Untuk fitur yang memerlukan native modules:

```bash
# Build development app
eas build --platform android --profile preview

# Atau untuk iOS
eas build --platform ios --profile preview
```

Lihat [EAS Build Documentation](https://docs.expo.dev/build/introduction/) untuk detail.

---

## 💻 Development Workflow

### File Structure

```
app/                    # Routing & screens
components/             # Reusable UI components
libs/                   # Business logic & services
constants/              # Global constants & theme
hooks/                  # Custom React hooks
assets/                 # Images, fonts, icons
```

### Making Changes

1. **Edit files** - Changes auto-reload
2. **Test on device** - Use Expo Go or emulator
3. **Check code quality** - Run linting
4. **Commit changes** - Use git commits

### Code Quality Commands

```bash
# Lint code
npm run lint

# Format code
npm run format

# Check formatting
npm run format:check
```

---

## 📁 Project Configuration Files

### `app.json`

Konfigurasi Expo app (nama, icon, permissions, dll)

### `eas.json`

Konfigurasi EAS Build dan Submit

### `tsconfig.json`

TypeScript configuration

### `metro.config.js`

Metro bundler configuration

### `.env` & `.env.example`

Environment variables (create `.env` dari `.env.example`)

---

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Gunakan port berbeda
npm start -- --port 8081
```

### Cache Issues

```bash
# Clear npm cache
npm cache clean --force

# Clear Expo cache
rm -rf .expo

# Reinstall dependencies
rm -rf node_modules
npm install
```

### Module Not Found

```bash
# Clear Metro bundler cache
npm start -- --clear
```

### Android Emulator Issues

```bash
# List available emulators
emulator -list-avds

# Launch specific emulator
emulator @EmulatorName
```

---

## 📖 Next Steps

- 📱 **[Expo Go Guide](./EXPO_GO_GUIDE.md)** - Detail menjalankan via Expo Go
- 🏗️ **[Build Guide](./BUILD_GUIDE.md)** - Cara build untuk production
- 📐 **[Architecture](./ARCHITECTURE.md)** - Pahami struktur project
- 🔗 **[API Integration](./API_INTEGRATION.md)** - Integrasi dengan backend

---

## ❓ FAQ

**Q: Apakah saya perlu Xcode/Android Studio untuk development?**
A: Tidak untuk Expo Go development. Anda hanya perlu untuk native development atau jika ingin emulator.

**Q: Bagaimana cara test offline?**
A: Gunakan `npm start` tanpa internet, atau setup Expo locally dengan `expo start --localhost`.

**Q: Apakah sudah bisa deploy ke production?**
A: Ya, lihat [Build Guide](./BUILD_GUIDE.md) untuk build APK/IPA dan submit ke stores.

**Q: Bagaimana cara collaborate dengan tim?**
A: Gunakan git untuk version control dan create separate feature branches.

---

**Enjoy coding! 🌱**
