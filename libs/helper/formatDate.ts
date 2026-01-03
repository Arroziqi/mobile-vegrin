// format input backend selalu: TAHUN-BULAN-TANGGAL JAM:MENIT:DETIK
import { format, parse } from 'date-fns'
import { id } from 'date-fns/locale'

export const formatDate = (
  dateString: string,
  formatStr: string = 'dd MMMM yyyy, HH:mm'
) => {
  if (!dateString) return '-'

  try {
    const parsedDate = parse(dateString, 'yyyy-MM-dd HH:mm:ss', new Date())
    return format(parsedDate, formatStr, { locale: id })
  } catch (error) {
    console.error('Date Error:', error)
    return dateString
  }
}

export const getTimeOnly = (dateString: string): string => {
  if (!dateString) return ''

  try {
    const parsedDate = parse(dateString, 'yyyy-MM-dd HH:mm:ss', new Date())
    return format(parsedDate, 'HH:mm')
  } catch (error) {
    console.error('Date Error:', error)
    return ''
  }
}
