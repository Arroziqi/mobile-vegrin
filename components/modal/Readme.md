# Modal Reusable untuk Expo React Native

Komponen modal yang reusable dengan logic terpisah menggunakan custom hook.

## File Structure

```
├── useModal.ts          # Custom hook untuk logic modal
├── CustomModal.tsx      # Komponen modal reusable
└── ExampleUsage.tsx     # Contoh penggunaan
```

## Cara Penggunaan

### 1. Import komponen dan hook

```tsx
import { CustomModal } from './CustomModal';
import { useModal } from './useModal';
```

### 2. Gunakan hook di komponen

```tsx
const MyComponent = () => {
  const modal = useModal();

  return (
    <>
      <Button onPress={modal.show} title="Buka Modal" />
      
      <CustomModal
        isVisible={modal.isVisible}
        onClose={modal.hide}
        title="Judul Modal"
      >
        <Text>Konten modal di sini</Text>
      </CustomModal>
    </>
  );
};
```

## API Reference

### useModal Hook

Hook untuk mengelola state dan logic modal.

**Returns:**
- `isVisible` (boolean): Status visibility modal
- `show()`: Function untuk menampilkan modal
- `hide()`: Function untuk menyembunyikan modal
- `toggle()`: Function untuk toggle modal

**Parameter:**
- `initialState` (boolean, optional): State awal modal. Default: `false`

### CustomModal Component

**Props:**

| Prop | Type | Default | Deskripsi |
|------|------|---------|-----------|
| `isVisible` | boolean | required | Status visibility modal |
| `onClose` | () => void | required | Callback saat modal ditutup |
| `children` | ReactNode | required | Konten modal |
| `title` | string | - | Judul modal (opsional) |
| `showCloseButton` | boolean | `true` | Tampilkan tombol tutup |
| `closeButtonText` | string | `'Tutup'` | Text tombol tutup |
| `closeOnOverlayPress` | boolean | `true` | Tutup modal saat overlay diklik |
| `animationType` | 'none' \| 'slide' \| 'fade' | `'fade'` | Tipe animasi modal |
| `containerStyle` | ViewStyle | - | Custom style untuk container |
| `contentStyle` | ViewStyle | - | Custom style untuk content |
| `titleStyle` | TextStyle | - | Custom style untuk title |
| `overlayStyle` | ViewStyle | - | Custom style untuk overlay |

## Contoh Penggunaan Lanjutan

### Modal dengan Custom Styling

```tsx
const modal = useModal();

<CustomModal
  isVisible={modal.isVisible}
  onClose={modal.hide}
  title="Modal Custom"
  containerStyle={{
    backgroundColor: '#1F2937',
    borderRadius: 20,
  }}
  titleStyle={{
    color: '#FFFFFF',
  }}
>
  <Text style={{ color: '#E5E7EB' }}>Konten dengan styling custom</Text>
</CustomModal>
```

### Modal Tanpa Tombol Tutup

```tsx
<CustomModal
  isVisible={modal.isVisible}
  onClose={modal.hide}
  title="Konfirmasi"
  showCloseButton={false}
>
  <Text>Apakah Anda yakin?</Text>
  <View style={{ flexDirection: 'row', gap: 10 }}>
    <Button title="Batal" onPress={modal.hide} />
    <Button title="Ya" onPress={() => {
      // lakukan sesuatu
      modal.hide();
    }} />
  </View>
</CustomModal>
```

### Modal yang Tidak Bisa Ditutup dengan Klik Overlay

```tsx
<CustomModal
  isVisible={modal.isVisible}
  onClose={modal.hide}
  title="Penting"
  closeOnOverlayPress={false}
>
  <Text>Modal ini harus ditutup dengan tombol</Text>
</CustomModal>
```

### Multiple Modals

```tsx
const confirmModal = useModal();
const infoModal = useModal();

<>
  <CustomModal
    isVisible={confirmModal.isVisible}
    onClose={confirmModal.hide}
    title="Konfirmasi"
  >
    <Text>Modal konfirmasi</Text>
  </CustomModal>

  <CustomModal
    isVisible={infoModal.isVisible}
    onClose={infoModal.hide}
    title="Informasi"
  >
    <Text>Modal informasi</Text>
  </CustomModal>
</>
```

## Features

✅ Reusable dan mudah digunakan
✅ Logic terpisah dengan custom hook
✅ Fully customizable styling
✅ TypeScript support
✅ Animasi smooth
✅ Close on overlay press (configurable)
✅ Responsive design
✅ Support semua prop dari React Native Modal

## Notes

- Komponen ini menggunakan React Native Modal bawaan
- Cocok untuk Expo dan React Native CLI
- Styling menggunakan StyleSheet untuk performa optimal
- Hook menggunakan useCallback untuk mencegah unnecessary re-renders