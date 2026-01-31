import { useCallback, useMemo, useState } from 'react'
import { LayoutChangeEvent } from 'react-native'

interface UseGridLayoutProps {
  numColumns?: number | { [key: string]: number }
  gridGap?: number | { [key: string]: number }
  breakpoints?: {
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
  defaultNumColumns?: number
  defaultGridGap?: number
}

interface UseGridLayoutReturn {
  itemWidth: number
  containerWidth: number
  currentColumns: number
  currentGap: number
  handleLayout: (event: LayoutChangeEvent) => void
}

export const useGridLayout = ({
  numColumns = 2,
  gridGap = 12,
  breakpoints = { sm: 576, md: 768, lg: 992, xl: 1200 },
  defaultNumColumns = 2,
  defaultGridGap = 12,
}: UseGridLayoutProps = {}): UseGridLayoutReturn => {
  const [itemWidth, setItemWidth] = useState<number>(0)
  const [containerWidth, setContainerWidth] = useState<number>(0)

  // Menentukan jumlah kolom berdasarkan lebar container
  const currentColumns = useMemo(() => {
    if (typeof numColumns === 'number') return numColumns

    const { sm = 576, md = 768, lg = 992, xl = 1200 } = breakpoints

    if (containerWidth >= xl && numColumns.xl) return numColumns.xl
    if (containerWidth >= lg && numColumns.lg) return numColumns.lg
    if (containerWidth >= md && numColumns.md) return numColumns.md
    if (containerWidth >= sm && numColumns.sm) return numColumns.sm

    return defaultNumColumns
  }, [containerWidth, numColumns, breakpoints, defaultNumColumns])

  // Menentukan grid gap berdasarkan lebar container
  const currentGap = useMemo(() => {
    if (typeof gridGap === 'number') return gridGap

    const { sm = 576, md = 768, lg = 992, xl = 1200 } = breakpoints

    if (containerWidth >= xl && gridGap.xl) return gridGap.xl
    if (containerWidth >= lg && gridGap.lg) return gridGap.lg
    if (containerWidth >= md && gridGap.md) return gridGap.md
    if (containerWidth >= sm && gridGap.sm) return gridGap.sm

    return defaultGridGap
  }, [containerWidth, gridGap, breakpoints, defaultGridGap])

  const handleLayout = useCallback(
    (event: LayoutChangeEvent) => {
      const width = event.nativeEvent.layout.width
      setContainerWidth(width)

      // Hitung lebar item berdasarkan kolom dan gap yang telah ditentukan
      const calculatedWidth =
        (width - currentGap * (currentColumns - 1)) / currentColumns
      setItemWidth(calculatedWidth)
    },
    [currentColumns, currentGap]
  )

  return {
    itemWidth,
    containerWidth,
    currentColumns,
    currentGap,
    handleLayout,
  }
}
