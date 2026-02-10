export interface NewsData {
  id: string
  number: number
  title: string
  author: string
  source: string
  url: string
  imageUrl: string
}

export const ADMIN_NEWS_DUMMY_CONTENTS: NewsData[] = [
  {
    id: '1',
    number: 1,
    title: '5 Tanaman Hias yang Dapat Tumbuh dengan Cepat di Dalam Ruangan',
    author: 'Ilham fikriansyah',
    source: 'detikProperti',
    url: 'https://properti.detik.com/',
    imageUrl: 'https://picsum.photos/seed/696/3000/2000',
  },
  {
    id: '2',
    number: 2,
    title: 'PENGARUH HAMA CABAI || Mengenali Jenis Hama Cabai Merah dan Simak',
    author: 'Admin',
    source: 'TaniPedia',
    url: 'https://tanipedia.com/',
    imageUrl: 'https://picsum.photos/seed/123/3000/2000',
  },
  {
    id: '3',
    number: 3,
    title: 'Cara Merawat Aglonema Agar Daun Tetap Merah Merona',
    author: 'Siti Kebun',
    source: 'UrbanGarden',
    url: 'https://urbangarden.id/',
    imageUrl: 'https://picsum.photos/seed/456/3000/2000',
  },
]
