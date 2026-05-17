import { Stack } from 'expo-router'
import { useAuth } from '@/libs/hooks'
import { ActivityIndicator, View } from 'react-native'

export function RootNavigator() {
  const { isAuthenticated, loading, roleName } = useAuth()

  // Optional: loading saat rehydrate token
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* PROTECTED APP */}
      <Stack.Protected guard={isAuthenticated}>
        <Stack.Screen name="(tabs)" />
      </Stack.Protected>

      {/* AUTH FLOW */}
      <Stack.Protected guard={!isAuthenticated}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>

      {/* MODAL (bebas, optional) */}
      <Stack.Screen
        name="modal"
        options={{ presentation: 'modal', title: 'Modal' }}
      />
    </Stack>
  )
}
