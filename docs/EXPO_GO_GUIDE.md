# 📱 Expo Go Guide - Running Vegrin App

Panduan lengkap untuk menjalankan Vegrin app menggunakan Expo Go tanpa perlu native development setup.

---

## ✨ Keuntungan Expo Go

- ✅ **Instant Preview**: Lihat perubahan code real-time
- ✅ **No Build Required**: Langsung run tanpa compile
- ✅ **Easy Sharing**: Share ke tim melalui QR code
- ✅ **Full Native API**: Akses ke camera, location, notifications, dll
- ✅ **Multi-platform**: Test di iOS dan Android bersamaan

⚠️ **Limitation**: Beberapa custom native modules tidak bisa digunakan di Expo Go. Untuk itu gunakan Development Build atau Bare React Native.

---

## 🚀 Quick Start

### 1. Install Expo Go

Unduh Expo Go app di device Anda:

**iOS**:

- [App Store](https://apps.apple.com/us/app/expo-go/id1054236197)

**Android**:

- [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

### 2. Start Development Server

```bash
# Dari root project
cd mobile-vegrin

# Start Expo server
npm start
```

Output akan menampilkan:

```
│                                                                │
│   ▄█ ▄▄▄█▄▄▄    ▄▄▄█  ▄▄▄█     ▄█
│   ▄█ ▄█▀▀▀█   ▄█     ▄█▀▀▀█   ▄█
│   ▄█ ▄█   ▄█   ▄█     ▄█       ▄█
│   ▀▀ ▀▀▀▀▀▀▀    ▀▀▀▀  ▀▀▀▀▀▀▀ ▀▀▀▀
│                                                                │

✓ Metro server started on port 8081
✓ Press w to open web, a for Android, i for iOS

Press 'w' │ 'a' │ 'i' │ 'r' to open web, Android, iOS or reload
Press '?' to show all commands
```

### 3. Choose Platform

#### 📱 Android

**Option A: Android Emulator**

```bash
# Make sure Android emulator is running
# Then press 'a' in terminal
```

**Option B: Physical Device**

1. Pastikan device terhubung ke network yang sama dengan computer
2. Di Expo Go app, tekan "Scan QR"
3. Scan QR code dari terminal
4. App akan load di device

#### 🍎 iOS

**Option A: iOS Simulator (macOS only)**

```bash
# Press 'i' in terminal
# Simulator will open automatically
```

**Option B: Physical Device**

1. Pastikan device terhubung ke network yang sama
2. Di Expo Go app, tekan "Scan QR"
3. Scan QR code dari terminal
4. App akan load di device

#### 🌐 Web Browser

```bash
# Press 'w' in terminal
# Browser akan open otomatis di http://localhost:8081
```

---

## 🔄 Hot Reload & Development

### Live Reload

Setiap kali Anda save file, app akan reload otomatis. Tidak perlu restart.

```bash
# Cara disable auto-reload jika tidak diinginkan
npm start -- --no-dev-client
```

### Debug Menu

Di Expo Go app, shake device atau tekan Ctrl+M (Android) / Cmd+D (iOS):

- **View Element Inspector**: Inspect UI elements
- **Performance Monitor**: Monitor performance
- **Logs**: Lihat console logs
- **Reload**: Manual reload app

### Console Logs

Logs dari app akan muncul di terminal:

```bash
# Terminal output
[16:30:45] LOG: User logged in
[16:30:46] ERROR: Failed to load data
```

---

## 🔗 Sharing with Team

### Via QR Code

1. Start dev server: `npm start`
2. QR code akan ditampilkan di terminal
3. Share QR code ke tim member
4. Team member scan dengan Expo Go
5. App akan load di device mereka

### Via Link

```bash
# Copy link dari terminal
# https://expo.dev/--/to/exp://xx.xx.xx.xx:8081
```

Share link ke team untuk quick access.

---

## 📲 Network Configuration

### Local Network

Untuk development di local network:

```bash
# Automatic (recommended)
npm start

# Manual - using LAN
npm start -- --localhost

# Using Tunneling (cloud connection)
npm start -- --tunnel
```

### Firewall

Jika behind corporate firewall:

1. **Allow port 8081** di firewall settings
2. Atau gunakan **Tunnel mode**: `npm start -- --tunnel`

### Offline Development

Expo Go tidak bisa digunakan offline. Untuk offline development, gunakan Development Build.

---

## 🐛 Troubleshooting

### QR Code Not Showing

```bash
# Clear cache dan restart
npm start -- --clear
```

### "Could not connect to device"

1. Pastikan device & computer di network yang sama
2. Check firewall settings
3. Try tunnel mode: `npm start -- --tunnel`

### App Crashes After Load

1. Lihat error message di console
2. Check `.env` file konfigurasi
3. Restart: `npm start -- --clear`

### Location/Camera Not Working

1. Pastikan permissions sudah granted di device settings
2. Check `app.json` untuk permission configuration
3. Restart Expo Go app

### Performance Issues

1. Disable remote debugging: Menu > Debug > Disable Remote JS Debugging
2. Clear cache: `npm start -- --clear`
3. Close unnecessary apps di device

---

## ⚡ Performance Tips

### For Better Development Experience

1. **Use Physical Device** - Emulator lebih lambat
2. **Close Unnecessary Apps** - Lebih banyak RAM untuk app
3. **Disable Remote Debugger** - Saat tidak debugging
4. **Use `expo-dev-client`** - Untuk development yang lebih fast

### For Faster Builds

```bash
# Skip bundling (jika tidak ada changes)
npm start -- --fast

# Use specific bundle platform
npm start -- --clear --offline
```

---

## 📦 Managing Modules

### Check Available APIs

```bash
# List semua available modules di Expo Go
npm list expo
```

### Using Native Modules

Jika module tidak available di Expo Go:

1. Use Development Build
2. Create Expo Plugin
3. Atau use bare React Native

Lihat [Expo Modules API](https://docs.expo.dev/modules/overview/) untuk detail.

---

## 🔐 Security Notes

- **QR Code**: Dapat diakses oleh siapapun yang bisa scan. Don't share publicly
- **Network**: Ensure private network. Jangan expose ke internet
- **Data**: Don't store sensitive data di local storage
- **API Keys**: Use `.env.local` untuk keys, jangan commit ke git

---

## 📋 Expo Go Checklist

Sebelum deploy ke production:

- [ ] Test di iOS dan Android
- [ ] Test network connectivity
- [ ] Check permissions di app.json
- [ ] Test offline scenarios
- [ ] Performance testing
- [ ] Security audit
- [ ] Build with EAS Build untuk production

---

## 📖 Next Steps

- 🏗️ **[Build Guide](./BUILD_GUIDE.md)** - Build untuk App Store & Play Store
- 📐 **[Architecture](./ARCHITECTURE.md)** - Struktur project
- 🔗 **[API Integration](./API_INTEGRATION.md)** - Integrasi backend API

---

## ❓ FAQ

**Q: Apakah Expo Go bisa digunakan untuk production?**
A: Tidak. Expo Go hanya untuk development. Gunakan EAS Build untuk production.

**Q: Bagaimana jika device tidak bisa scan QR code?**
A: Copy link dari terminal dan paste di Expo Go app.

**Q: Bisakah saya test multiple devices bersamaan?**
A: Ya, scan QR code dari multiple devices. Mereka akan connected ke server yang sama.

**Q: Apakah ada limitation di Expo Go?**
A: Ya, beberapa native modules tidak supported. Lihat [Expo Go Limitations](https://docs.expo.dev/bare/exploring-managed-workflow/#limitations-of-the-managed-workflow).

---

**Happy developing! 🌱**
