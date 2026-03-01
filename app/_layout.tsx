import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'

import { RootNavigator } from '@/components/RootNavigator'
import { useColorScheme } from '@/hooks/use-color-scheme'
import { persistor, store } from '@/libs/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import * as Linking from 'expo-linking'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export const unstable_settings = {
  anchor: '(tabs)',
}

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const queryClient = new QueryClient()
  const router = useRouter()

  useEffect(() => {
    const subscription = Linking.addEventListener('url', event => {
      const data = Linking.parse(event.url)

      if (data.path === 'login') {
        const token = data.queryParams?.token

        if (token) {
          router.push({
            pathname: '/login',
            params: { token },
          })
        }
      }
    })

    return () => subscription.remove()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider
          value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <RootNavigator />
              <StatusBar style="auto" />
            </PersistGate>
          </Provider>
        </ThemeProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  )
}
