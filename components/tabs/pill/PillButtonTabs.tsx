import { Pressable, Text, View } from 'react-native'
import { PillButtonTabsProps } from './PillButtonTabs.type'
import { usePillButtonTabs } from './usePillButtonTabs'
import styles from './PillButtonTabs.style'

const DEFAULT_COLORS = {
  activeBg: '#2CB41A',
  inactiveBg: 'transparent',
  activeText: '#FFFFFF',
  inactiveText: '#1C8ABA',
}

const PillButtonTabs = <T extends string>({
  items,
  activeKey,
  defaultActiveKey,
  onChange,
  colors,
  containerStyle,
}: PillButtonTabsProps<T>) => {
  const tabs = usePillButtonTabs<T>({
    activeKey,
    defaultActiveKey,
    onChange,
  })

  const mergedColors = {
    activeBg: colors?.activeBg ?? DEFAULT_COLORS.activeBg,
    inactiveBg: colors?.inactiveBg ?? DEFAULT_COLORS.inactiveBg,
    activeText: colors?.activeText ?? DEFAULT_COLORS.activeText,
    inactiveText: colors?.inactiveText ?? DEFAULT_COLORS.inactiveText,
  }

  return (
    <View style={[styles.container, containerStyle]}>
      {items.map(item => {
        const isActive = item.key === tabs.activeKey

        return (
          <Pressable
            key={item.key}
            disabled={item.disabled}
            onPress={() => tabs.setActiveKey(item.key)}
            style={[
              styles.tab,
              {
                backgroundColor: isActive
                  ? mergedColors.activeBg
                  : mergedColors.inactiveBg,
              },
            ]}
          >
            <Text
              style={[
                styles.text,
                {
                  color: isActive
                    ? mergedColors.activeText
                    : mergedColors.inactiveText,
                },
              ]}
            >
              {item.label}
            </Text>
          </Pressable>
        )
      })}
    </View>
  )
}

export default PillButtonTabs
