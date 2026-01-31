import { useCallback, useState } from 'react'

export interface UseModalReturn {
  isVisible: boolean
  show: () => void
  hide: () => void
  toggle: () => void
}

export const useModal = (initialState: boolean = false): UseModalReturn => {
  const [isVisible, setIsVisible] = useState(initialState)

  const show = useCallback(() => {
    setIsVisible(true)
  }, [])

  const hide = useCallback(() => {
    setIsVisible(false)
  }, [])

  const toggle = useCallback(() => {
    setIsVisible(prev => !prev)
  }, [])

  return {
    isVisible,
    show,
    hide,
    toggle,
  }
}
