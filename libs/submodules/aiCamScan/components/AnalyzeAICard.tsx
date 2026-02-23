import Flex from '@/components/Flex'
import { customizeColors } from '@/libs/core/config/theme/color'
import { MaterialIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, View } from 'react-native'

export interface CareItem {
  id: string
  text: string
}

export const analyzeAICardData = {
  description:
    'Gambir ini menampilkan sekat sayuran hijau yang umumnya dikenal sebagai kangkung dari runcingsi di bagian ujung. Sayuran ini memiliki akar yang terlihat, menunjukkan bahwa ini adalah tanaman yang dicabut langsung menandai cabut muda di bagian bawah batangnya yang putih. Daun hijau yang bervariasi hijau cerah, valid rampang, dan disunibukan dalam kondisi segar. Tidak tampak adanya belalai di bagian atas.',
  tips: [
    {
      id: '1',
      text: 'Siram secara teratur, terutama di musim kemarau',
    },
    {
      id: '2',
      text: 'Berikan pupuk organik setiap 2 minggu sekali',
    },
    {
      id: '3',
      text: 'Pastikan mendapat sinar matahari yang cukup',
    },
    {
      id: '4',
      text: 'Pangkas daun yang menguning untuk pertumbuhan optimal',
    },
  ] as CareItem[],
}

// "symptoms": [
//     "Bercak putih menonjol (pustul) pada permukaan bawah daun",
//     "Pustul berisi spora seperti tepung putih",
//     "Warna daun menguning pada bagian atas yang berlawanan dengan bercak"
//   ],
//   "treatment": {
//     "organic": "Segera cabut dan musnahkan daun yang terinfeksi, perbaiki sirkulasi udara dengan menjarangkan tanaman, dan gunakan semprotan fungisida nabati dari larutan bawang putih.",
//     "chemical": "Aplikasikan fungisida berbahan aktif Mankozeb, Klorotalonil, atau Metalaksil sesuai dosis anjuran pada label kemasan."
//   },

interface AnalyzeAICardProps {
  symptoms: string[]
  treatment: {
    organic: string
    chemical: string
  }
}

const AnalyzeAICard = ({ symptoms, treatment }: AnalyzeAICardProps) => {
  return (
    <Flex direction="column" style={styles.container} gap={20}>
      <LinearGradient
        colors={['#AD46FF', '#615FFF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.headerGradient}
      >
        <Flex direction="row" align="flex-start" gap={8}>
          <Flex style={styles.iconContainer}>
            <MaterialIcons
              name="lightbulb"
              size={24}
              color={customizeColors.white}
            />
          </Flex>
          <Flex direction="column" align="flex-start" gap={5}>
            <Text style={styles.title}>Analisis AI</Text>
            <Text style={styles.subtitle}>Vegrin AI Assistant</Text>
          </Flex>
        </Flex>
      </LinearGradient>
      <Flex
        direction="row"
        align="flex-start"
        gap={10}
        style={styles.descriptionContainer}
      >
        <MaterialIcons
          name="info-outline"
          size={24}
          color={customizeColors.purple1}
        />
        <Text style={styles.descriptionText}>{symptoms?.join(', ') + '.'}</Text>
      </Flex>
      <Flex
        style={styles.tipsContainer}
        direction="column"
        gap={12}
        align="flex-start"
      >
        <Text style={styles.tipsTitle}>💡 Tips Perawatan:</Text>

        {/* --- Blok Perawatan Organik --- */}
        {treatment?.organic && (
          <Flex
            direction="row"
            align="flex-start"
            gap={10}
            style={styles.treatmentBlock}
          >
            <View style={[styles.iconWrapper, { backgroundColor: '#ECFDF5' }]}>
              <MaterialIcons name="eco" size={20} color="#10B981" />
            </View>
            <Flex
              direction="column"
              align="flex-start"
              style={styles.textWrapper}
            >
              <Text style={[styles.treatmentLabel, { color: '#059669' }]}>
                Penanganan Organik
              </Text>
              <Text style={styles.tipText}>{treatment.organic}</Text>
            </Flex>
          </Flex>
        )}

        {/* --- Blok Perawatan Kimiawi --- */}
        {treatment?.chemical && (
          <Flex
            direction="row"
            align="flex-start"
            gap={10}
            style={styles.treatmentBlock}
          >
            <View style={[styles.iconWrapper, { backgroundColor: '#EFF6FF' }]}>
              <MaterialIcons name="science" size={20} color="#3B82F6" />
            </View>
            <Flex
              direction="column"
              align="flex-start"
              style={styles.textWrapper}
            >
              <Text style={[styles.treatmentLabel, { color: '#2563EB' }]}>
                Penanganan Kimiawi
              </Text>
              <Text style={styles.tipText}>{treatment.chemical}</Text>
            </Flex>
          </Flex>
        )}
      </Flex>
    </Flex>
  )
}
export default AnalyzeAICard

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: customizeColors.text.reverse,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: customizeColors.text.reverse,
  },
  container: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '100%',
    overflow: 'hidden',
  },
  headerGradient: {
    padding: 20,
    width: '100%',
  },
  iconContainer: {
    backgroundColor: '#FFFFFF33',
    borderRadius: 10,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionContainer: {
    marginHorizontal: 20,
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: '400',
    color: customizeColors.text.primary,
    flex: 1,
    flexShrink: 1,
  },
  tipsContainer: {
    backgroundColor: '#F8FAFC',
    padding: 16,
    borderRadius: 12,
    alignSelf: 'stretch',
    margin: 10,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: customizeColors.text.primary,
    marginBottom: 4,
  },
  treatmentBlock: {
    width: '100%',
    marginTop: 4,
  },
  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2, // Menyelaraskan ikon dengan baris pertama teks
  },
  textWrapper: {
    flex: 1, // PENTING: Mencegah teks panjang menabrak batas layar
  },
  treatmentLabel: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 2,
  },
  tipText: {
    fontSize: 13,
    lineHeight: 20, // Memberikan jarak antar baris agar nyaman dibaca
    color: '#475569', // Abu-abu gelap (Slate-600)
  },
  tipBullet: {
    fontSize: 12,
    color: customizeColors.purple3,
  },
})
