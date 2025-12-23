# 📐 Mobile App Architecture (Feature-Driven)

Dokumen ini menjelaskan **struktur arsitektur** mobile app berbasis **Expo (React Native)**.
Fokus utama arsitektur adalah **feature-driven development**, di mana setiap fitur dikembangkan secara mandiri dan terisolasi.

---

## 🧭 Prinsip Utama

* **Feature-driven**: kode dikelompokkan berdasarkan fitur, bukan tipe file
* **Encapsulation**: setiap fitur mengelola logic & UI-nya sendiri
* **Scalable**: mudah menambah fitur baru tanpa merusak struktur
* **Separation of concerns**: routing, UI umum, dan domain dipisahkan

---

## 🗂️ Struktur Tingkat Tinggi

```
app/            → Routing & navigation
assets/         → Static assets
components/     → Reusable UI components (global)
constants/      → Global constants & theme
hooks/          → Global reusable hooks
libs/           → Core & feature modules
```

---

## 🧭 Routing (`app/`)

Menggunakan **Expo Router (file-based routing)**.

```
app/
├─ (auth)/      → Authentication routes
├─ (tabs)/      → Tab-based routes
├─ _layout.tsx  → Root navigation layout
└─ modal.tsx    → Global modal route
```

Routing hanya berfungsi sebagai **entry point** dan **orchestrator**,
tanpa menyimpan business logic.

---

## 🎨 Assets (`assets/`)

Berisi aset statis aplikasi seperti:

* icon
* splash screen
* image ilustrasi
* branding

Tidak mengandung logic atau konfigurasi.

---

## 🧩 Global Components (`components/`)

Komponen UI yang:

* reusable lintas fitur
* tidak terikat domain tertentu
* bersifat presentational

Contoh:

```
components/
├─ buttons/
├─ input/
├─ text/
├─ container/
└─ ui/
```

---

## 🎯 Global Hooks (`hooks/`)

Custom hooks yang:

* dapat digunakan oleh banyak fitur
* tidak mengandung business logic spesifik domain

Contoh:

* theme
* stepper
* color scheme

---

## 🎨 Global Constants (`constants/`)

Berisi konfigurasi global aplikasi:

* theme
* warna
* typography
* spacing

Digunakan secara konsisten oleh seluruh UI.

---

## 🧠 Domain Layer (`libs/`)

Folder `libs` merupakan **core domain layer** aplikasi.

```
libs/
├─ core/        → App-level configuration
├─ common/      → Shared utilities
└─ submodules/  → Feature modules
```

---

## 🧩 Feature Modules (`libs/submodules/`)

Pendekatan **feature-driven architecture**.

```
libs/submodules/
├─ auth/
├─ home/
└─ ...
```

Setiap folder merepresentasikan **satu fitur / domain**.

### Di dalam satu feature dapat berisi:

* `screens` → halaman utama fitur
* `components` → komponen khusus fitur tersebut
* `hooks` → logic yang hanya dipakai di fitur itu
* `styles` → styling khusus fitur
* `types` → tipe & interface fitur
* `index.ts` → public API feature

Contoh struktur feature:

```
libs/submodules/home/
├─ screens/
├─ components/
├─ hooks/
├─ styles/
├─ types/
└─ index.ts
```

➡️ Feature **tidak boleh langsung bergantung ke feature lain**
➡️ Interaksi lintas fitur melalui layer yang jelas (props / shared utils)

---

## 🔩 Core Configuration (`libs/core/`)

Berisi konfigurasi dasar aplikasi:

* design system
* global config
* app foundation

Tidak mengandung UI atau screen.

---

## 🔁 Alur Pengembangan Fitur

1. Tambah feature baru di `libs/submodules/`
2. Kembangkan UI & logic di dalam feature tersebut
3. Hubungkan ke routing lewat `app/`
4. Gunakan global components & hooks jika diperlukan

---

## 🧱 Boundary Rules (Pedoman Wajib)

* `components/` → **tidak boleh import dari feature**
* Feature → **boleh import global**
* Feature → **tidak saling import langsung**
* Routing → **tidak menyimpan logic bisnis**

---

## 🏁 Ringkasan

| Layer           | Peran                 |
| --------------- | --------------------- |
| app             | Routing & navigation  |
| components      | Global reusable UI    |
| hooks           | Global reusable logic |
| constants       | Design tokens         |
| libs/submodules | Feature / domain      |
| libs/core       | App foundation        |
