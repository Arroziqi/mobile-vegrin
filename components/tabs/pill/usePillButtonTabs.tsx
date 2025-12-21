import { useCallback, useState } from 'react'
import { UsePillButtonTabsParams } from './PillButtonTabs.type'

export const usePillButtonTabs = <T extends string>({
  activeKey,
  defaultActiveKey,
  onChange,
}: UsePillButtonTabsParams<T>) => {
  const isControlled = activeKey !== undefined

  const [internalKey, setInternalKey] = useState<T | undefined>(
    defaultActiveKey
  )

  const currentKey = isControlled ? activeKey : internalKey

  const setActiveKey = useCallback(
    (key: T) => {
      if (!isControlled) {
        setInternalKey(key)
      }
      onChange?.(key)
    },
    [isControlled, onChange]
  )

  return {
    activeKey: currentKey,
    setActiveKey,
    isControlled,
  }
}
