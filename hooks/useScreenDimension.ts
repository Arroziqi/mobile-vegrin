import { useEffect, useState } from 'react'
import { Dimensions, ScaledSize } from 'react-native'

type ScreenDimension = {
  width: number
  height: number
}

export const useScreenDimension = (): ScreenDimension => {
  const getScreen = (): ScreenDimension => {
    const { width, height }: ScaledSize = Dimensions.get('window')
    return { width, height }
  }

  const [screen, setScreen] = useState<ScreenDimension>(getScreen)

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setScreen({
        width: window.width,
        height: window.height,
      })
    })

    return () => subscription?.remove()
  }, [])

  return screen
}
