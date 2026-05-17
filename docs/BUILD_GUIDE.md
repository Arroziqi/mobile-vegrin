# 🏗️ Build Guide - Vegrin App

Panduan lengkap untuk mem-build Vegrin app untuk production release di App Store (iOS) dan Play Store (Android).

---

## 📋 Prerequisites

Sebelum mem-build, pastikan:

- ✅ Development setup sudah complete (lihat [Getting Started](./GETTING_STARTED.md))
- ✅ Code sudah tested dan siap production
- ✅ Version number sudah updated di `app.json`
- ✅ `app.json` sudah dikonfigurasi dengan benar
- ✅ Certificates dan provisioning profiles sudah siap

### Accounts Required

- **Google Play Developer Account** (~$25 one-time)
- **Apple Developer Account** ($99/year)
- **EAS (Expo Application Services) Account** (free tier available)

---

## 🛠️ Setup

### 1. Install EAS CLI

```bash
npm install -g eas-cli
```

### 2. Login to Expo Account

```bash
eas login
```

Ini akan prompt untuk membuka browser dan login. Atau:

```bash
eas login -u <username> -p <password>
```

### 3. Configure `eas.json`

Buat atau update `eas.json` di root project:

```json
{
  "cli": {
    "version": ">= 0.55.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal",
      "env": {
        "EXPO_PUBLIC_ENV": "preview"
      }
    },
    "production": {
      "env": {
        "EXPO_PUBLIC_ENV": "production"
      }
    }
  },
  "submit": {
    "production": {
      "android": {
        "serviceAccount": "./.eas/production-android.json",
        "track": "production"
      },
      "ios": {
        "appleId": "your-email@example.com"
      }
    }
  }
}
```

---

## 🔨 Building

### Android Build

#### 1. Generate or Use Existing Keystore

```bash
# Generate keystore (first time)
eas build --platform android --latest

# Atau manual generate
keytool -genkey -v -keystore vegrin-release-key.keystore \
  -keyalg RSA -keysize 2048 -validity 10000 \
  -alias vegrin-key
```

#### 2. Build APK

```bash
# Interactive build
eas build --platform android --profile production

# Atau spesifik untuk preview/development
eas build --platform android --profile preview
```

Output akan menampilkan:

```
✓ Android build created
✓ Download URL: https://eas-builds.s3.amazonaws.com/...
```

#### 3. Download Build

```bash
# Download APK untuk testing
curl -o vegrin.apk https://eas-builds.s3.amazonaws.com/...
```

Atau download dari Expo dashboard.

### iOS Build

#### 1. Setup Apple Developer Certificate

Untuk production iOS build, Anda memerlukan:

- Apple Developer Account
- App ID
- Distribution Certificate
- Provisioning Profile

#### 2. Build IPA

```bash
# Interactive build
eas build --platform ios --profile production

# Atau development
eas build --platform ios --profile preview
```

#### 3. Troubleshooting

```bash
# Jika ada certificate issues
eas credentials

# Atau clear dan reset
eas credentials --platform ios
```

---

## 📦 Build Profiles

### Development

Untuk internal testing dengan development client:

```bash
eas build --platform android --profile development
```

**Features:**:

- Fast build time
- Hot reload enabled
- Debug tools available
- Only untuk testing

### Preview

Untuk QA dan user testing:

```bash
eas build --platform android --profile preview
```

**Features**:

- Closer to production
- Testing in real conditions
- Tidak ada debug tools
- Can be shared dengan testers

### Production

Untuk App Store & Play Store release:

```bash
eas build --platform android --profile production
eas build --platform ios --profile production
```

**Features**:

- Optimized untuk performance
- Signing untuk store
- Ready untuk submission

---

## 📤 Submit to Stores

### Android Play Store

#### 1. Setup Google Play Account

```bash
# Configure service account
eas credentials --platform android
```

#### 2. Create Release Build

```bash
eas build --platform android --profile production
```

#### 3. Submit to Play Store

```bash
# Auto submit
eas submit --platform android --latest

# Atau specify build ID
eas submit --platform android --id <build-id>
```

#### 4. Manual Review

1. Login ke [Google Play Console](https://play.google.com/console)
2. Navigate ke "Vegrin" app
3. Go to "Release" > "Production"
4. Review build details
5. Submit for review

**Approval Time**: 2-4 jam biasanya

### iOS App Store

#### 1. Setup Apple Account

```bash
eas credentials --platform ios
```

#### 2. Create Release Build

```bash
eas build --platform ios --profile production
```

#### 3. Submit to App Store

```bash
# Auto submit
eas submit --platform ios --latest

# Atau manual
eas submit --platform ios --id <build-id>
```

#### 4. App Store Connect

1. Login ke [App Store Connect](https://appstoreconnect.apple.com)
2. Navigate ke "Vegrin" app
3. Go to "TestFlight" untuk test sebelum submit
4. Submit for review di "App Store"
5. Fill app information dan screenshots

**Approval Time**: 1-3 hari biasanya

---

## 🔐 Signing & Certificates

### Android Signing

```bash
# View current signing config
eas credentials --platform android

# Rotate keystore jika diperlukan
eas credentials --platform android --clear
```

### iOS Signing

```bash
# View signing certificates
eas credentials --platform ios

# Manage certificates
eas credentials --platform ios --interactive
```

---

## 📝 Version Management

Update version di `app.json`:

```json
{
  "expo": {
    "name": "Vegrin",
    "version": "1.0.0",
    ...
  }
}
```

### Versioning Strategy

- **Major.Minor.Patch** (e.g., 1.2.3)
- **Major**: Breaking changes
- **Minor**: New features
- **Patch**: Bug fixes

---

## 🧪 Testing Builds

### Local Testing

```bash
# Install APK ke Android device
adb install vegrin.apk

# Atau buka di emulator
```

### TestFlight (iOS)

```bash
# Submit untuk TestFlight
eas build --platform ios --profile preview

# Testers akan dapat invite via email
```

### Open Testing (Android)

```bash
# Setup di Play Console
# Navigate ke Release > Open testing
# Add testers email
```

---

## 🐛 Build Troubleshooting

### Build Failed: "Out of Memory"

```bash
# Increase Node memory
export NODE_OPTIONS=--max-old-space-size=4096
eas build --platform android
```

### Keystore Error

```bash
# Reset Android credentials
eas credentials --platform android --clear
```

### Certificate Issues

```bash
# For iOS
eas credentials --platform ios --interactive
```

### Build Hangs

```bash
# Check build status
eas build:list

# Cancel build
eas build:cancel <build-id>

# Retry
eas build --platform android --latest
```

---

## 📊 Build Management

### List Builds

```bash
# All builds
eas build:list

# Filter by platform
eas build:list --platform android

# Recent builds
eas build:list --limit 10
```

### View Build Details

```bash
eas build:view <build-id>
```

### Delete Build

```bash
# Deprecated builds bisa didelete via Expo Dashboard
```

---

## 🔄 Continuous Integration (CI/CD)

### GitHub Actions Example

Buat `.github/workflows/build.yml`:

```yaml
name: Build

on:
  push:
    branches:
      - main
  pull_request:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Setup EAS
        uses: expo/expo-github-action@v8
        with:
          eas-version: latest
          token: ${{ secrets.EXPO_TOKEN }}

      - name: Build Android
        run: eas build --platform android --non-interactive

      - name: Build iOS
        run: eas build --platform ios --non-interactive
```

---

## 📋 Pre-Release Checklist

- [ ] Versioning updated di `app.json`
- [ ] All tests passing
- [ ] Code reviewed
- [ ] Changelog updated
- [ ] Screenshots captured untuk stores
- [ ] App description updated
- [ ] Privacy policy & terms ready
- [ ] Build tested di device
- [ ] Performance optimized
- [ ] Crash logs checked

---

## 📖 Next Steps

- 🔄 **[Update & Maintenance](./UPDATE_MAINTENANCE.md)** - Update strategy & maintenance
- 📐 **[Architecture](./ARCHITECTURE.md)** - Project architecture
- 🔗 **[API Integration](./API_INTEGRATION.md)** - Backend integration

---

## ❓ FAQ

**Q: Berapa lama build process?**
A: 5-15 menit tergantung platform dan system load.

**Q: Bisakah build di offline?**
A: Tidak, EAS memerlukan internet connection.

**Q: Apa perbedaan APK dan AAB?**
A: APK adalah install file, AAB adalah bundle untuk Play Store yang lebih optimal.

**Q: Bagaimana jika build failed?**
A: Check error logs, fix issue, dan retry.

---

**Ready to ship! 🚀🌱**
