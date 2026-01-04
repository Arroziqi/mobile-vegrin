import React from 'react'
import Container from '@/components/container/Container'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import ProfileTopBar from '@/libs/submodules/profile/components/topbar/ProfileTopBar'

function PrivacyPolicyScreen() {
  return (
    <Container>
      <View style={styles.container}>
        <ProfileTopBar title={'Privacy Policy'} />
        <ScrollView style={styles.content}>
          <Text>
            Privacy Policy (Kebijakan Privasi) Terakhir diperbarui: [isi
            tanggal] Kami menghargai privasi Anda dan berkomitmen untuk
            melindungi data pribadi yang Anda berikan saat menggunakan aplikasi
            [Nama Aplikasi]. Kebijakan Privasi ini menjelaskan bagaimana kami
            mengumpulkan, menggunakan, menyimpan, dan melindungi informasi Anda.
            1. Informasi yang Kami Kumpulkan Kami dapat mengumpulkan beberapa
            jenis informasi berikut: Informasi Pribadi: seperti nama, alamat
            email, dan nomor telepon yang Anda berikan secara langsung. Foto /
            Gambar: termasuk foto profil yang Anda unggah melalui kamera atau
            galeri. Informasi Teknis: seperti jenis perangkat, sistem operasi,
            dan data penggunaan aplikasi untuk meningkatkan performa layanan. 2.
            Penggunaan Informasi Informasi yang dikumpulkan digunakan untuk:
            Menyediakan dan mengelola fitur aplikasi Menampilkan dan memperbarui
            profil pengguna Meningkatkan keamanan dan pengalaman pengguna
            Menyediakan dukungan dan layanan terkait aplikasi 3. Akses Kamera
            dan Galeri Aplikasi dapat meminta izin untuk mengakses: Kamera:
            digunakan hanya untuk mengambil foto (misalnya foto profil) Galeri:
            digunakan untuk memilih gambar yang ingin Anda unggah Akses ini
            hanya digunakan sesuai tindakan yang Anda pilih dan tidak digunakan
            tanpa persetujuan Anda. 4. Penyimpanan dan Keamanan Data Kami
            menerapkan langkah-langkah keamanan yang wajar untuk melindungi data
            Anda dari akses, perubahan, atau pengungkapan yang tidak sah. Namun,
            perlu diketahui bahwa tidak ada sistem yang sepenuhnya aman. 5.
            Pembagian Informasi Kami tidak menjual atau menyewakan data pribadi
            Anda kepada pihak ketiga. Informasi hanya dapat dibagikan jika:
            Diperlukan untuk menjalankan layanan aplikasi Diwajibkan oleh hukum
            atau peraturan yang berlaku 6. Hak Pengguna Anda berhak untuk:
            Mengakses dan memperbarui data pribadi Anda Meminta penghapusan data
            tertentu Menarik izin akses (kamera/galeri) melalui pengaturan
            perangkat Anda 7. Perubahan Kebijakan Privasi Kami dapat memperbarui
            Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan
            diberitahukan melalui aplikasi atau halaman ini. 8. Hubungi Kami
            Jika Anda memiliki pertanyaan atau kekhawatiran terkait Kebijakan
            Privasi ini, silakan hubungi kami melalui: Email: [email@domain.com
            ] Aplikasi: [Nama Aplikasi]
          </Text>
        </ScrollView>
      </View>
    </Container>
  )
}

export default PrivacyPolicyScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  content: {
    padding: 21,
    height: '100%',
  },
})
