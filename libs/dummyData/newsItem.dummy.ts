import { NewsItem } from '@/libs/submodules/home/components/newsItemCardList/NewsItemCardList.type'

export const newsItemDummy: NewsItem[] = [
  {
    id: '1',
    image: require('@/assets/images/news-1.png'),
    description:
      'BMKG memprediksi hujan lebat disertai angin kencang akan terjadi di beberapa wilayah Indonesia.',
    publishedAt: '12 Des 2025',
    linkLabel: 'Baca Selengkapnya',
    onPressLink: () => console.log('open news 1'),
  },
  {
    id: '2',
    image: require('@/assets/images/news-2.png'),
    description:
      'Pemerintah daerah mengimbau masyarakat untuk waspada terhadap potensi banjir akibat curah hujan tinggi.',
    publishedAt: '11 Des 2025',
    linkLabel: 'Detail',
    onPressLink: () => console.log('open news 2'),
  },
  {
    id: '3',
    image: require('@/assets/images/news-3.png'),
    description:
      'Cuaca cerah berawan diperkirakan akan mendominasi wilayah Jabodetabek sepanjang akhir pekan.',
  },
  {
    id: '4',
    image: require('@/assets/images/news-1.png'),
    description:
      'BMKG mengeluarkan peringatan dini gelombang tinggi untuk wilayah perairan selatan Jawa.',
    publishedAt: '10 Des 2025',
    linkLabel: 'Lihat Info',
    onPressLink: () => console.log('open news 4'),
  },

  {
    id: '5',
    image: require('@/assets/images/news-3.png'),
    description:
      'Cuaca cerah berawan diperkirakan akan mendominasi wilayah Jabodetabek sepanjang akhir pekan.',
  },
  {
    id: '6',
    image: require('@/assets/images/news-1.png'),
    description:
      'BMKG mengeluarkan peringatan dini gelombang tinggi untuk wilayah perairan selatan Jawa.',
    publishedAt: '10 Des 2025',
    linkLabel: 'Lihat Info',
    onPressLink: () => console.log('open news 4'),
  },
]
