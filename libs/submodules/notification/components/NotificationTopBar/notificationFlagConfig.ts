import { ReactNode } from 'react'

export type NotificationFlagType = 'urgent' | 'info' | 'news'

export interface NotificationFlagItemType {
  type: NotificationFlagType
  count: number
  icon: ReactNode
  label: string
}

export interface NotificationFlagConfigItem {
  iconColor: string
  borderColor: string
  backgroundColor: string
  textColor: string
}
export const notificationFlagConfig: Record<
  NotificationFlagType,
  NotificationFlagConfigItem
> = {
  urgent: {
    iconColor: '#E7000B',
    borderColor: '#FFC9C9',
    backgroundColor: '#FEF2F2',
    textColor: '#C10007',
  },
  info: {
    iconColor: '#155DFC',
    borderColor: '#BEDBFF',
    backgroundColor: '#EFF6FF',
    textColor: '#1447E6',
  },
  news: {
    iconColor: '#9810FA',
    borderColor: '#E9D4FF',
    backgroundColor: '#FAF5FF',
    textColor: '#8200DB',
  },
}
