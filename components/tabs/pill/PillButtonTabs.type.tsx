export type UsePillButtonTabsParams<T extends string = string> = {
  activeKey?: T
  defaultActiveKey?: T
  onChange?: (key: T) => void
}

export type PillButtonTabItem<T extends string = string> = {
  key: T
  label: string
  disabled?: boolean
}

export type PillButtonTabsColors = {
  activeBg?: string
  inactiveBg?: string
  activeText?: string
  inactiveText?: string
}

export type PillButtonTabsProps<T extends string = string> =
  UsePillButtonTabsParams<T> & {
    items: PillButtonTabItem<T>[]
    colors?: PillButtonTabsColors
    containerStyle?: object
  }
