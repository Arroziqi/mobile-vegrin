import { Tabs } from 'expo-router'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons'

import { HapticTab } from '@/components/haptic-tab'
import { Colors } from '@/constants/theme'
import { useColorScheme } from '@/hooks/use-color-scheme'
import ProfileDrawer from '@/libs/submodules/profile/components/profileDrawer/ProfileDrawer'

export default function TabLayout() {
  const colorScheme = useColorScheme()
  const tintColor = Colors[colorScheme ?? 'light'].tint
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: tintColor,
          tabBarInactiveTintColor: '#888888',
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarStyle: styles.tabBar,
          tabBarShowLabel: true,
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Beranda',
            tabBarIcon: ({ color, focused }) => (
              <Octicons
                size={28}
                name={focused ? 'home-fill' : 'home'}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="ai-cam-scan"
          options={{
            title: 'AI Kamera',
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcons
                name="camera-alt"
                size={focused ? 36 : 32}
                color={focused ? '#FFFFFF' : tintColor}
                style={[
                  styles.scanIcon,
                  {
                    backgroundColor: focused ? tintColor : '#FFFFFF',
                    borderColor: tintColor,
                  },
                ]}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="dev"
          options={{
            title: 'Profile',
            tabBarButton: props => (
              <HapticTab {...props} onPress={() => setProfileOpen(true)} />
            ),
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                size={28}
                name={focused ? 'person' : 'person-outline'}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
      <ProfileDrawer
        visible={profileOpen}
        onClose={() => setProfileOpen(false)}
      />
    </>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 84,
    backgroundColor: '#EEF5F1',
    borderTopLeftRadius: 14.67,
    borderTopRightRadius: 14.67,
    borderTopWidth: 0,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    paddingTop: 8,
  },
  scanIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 6,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: -24,
  },
  tabBarLabel: {
    marginTop: 5,
  },
})
