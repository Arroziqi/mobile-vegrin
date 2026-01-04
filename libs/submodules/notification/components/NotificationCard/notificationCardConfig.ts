export type NotificationFlagType = 'urgent' | 'info' | 'news' | 'warning'

export interface NotificationFlagVisual {
  stripColor: string
  iconColor: string
  iconBackgroundColor: string
  dotColor: string
  textColor: string
  backgroundColor: string
}

export const notificationCardConfig: Record<
  NotificationFlagType,
  NotificationFlagVisual
> = {
  urgent: {
    stripColor: '#E7000B',
    iconColor: '#E7000B',
    iconBackgroundColor: '#FFC9C9',
    dotColor: '#DC2626',
    textColor: '#C10007',
    backgroundColor: '#FEF2F2',
  },
  info: {
    stripColor: '#2563EB',
    iconColor: '#155DFC',
    iconBackgroundColor: '#BEDBFF',
    dotColor: '#2563EB',
    textColor: '#1447E6',
    backgroundColor: '#EFF6FF',
  },
  news: {
    stripColor: '#8200DB',
    iconColor: '#9810FA',
    iconBackgroundColor: '#E9D4FF',
    dotColor: '#8200DB',
    textColor: '#8200DB',
    backgroundColor: '#FAF5FF',
  },
  warning: {
    stripColor: '#BB4D00',
    iconColor: '#BB4D00',
    iconBackgroundColor: '#FEF3C6',
    dotColor: '#FE9A00',
    textColor: '#BB4D00',
    backgroundColor: '#FEFCE8',
  },
}
