import AsyncStorage from '@react-native-async-storage/async-storage'
import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'

import authReducer from './slices/auth.slice'
import notificationReducer from './slices/notification.slice'
import plantReducer from './slices/plant.slice'
import profileReducer from './slices/profile.slice'
import weatherReducer from './slices/weather.slice'

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['token', 'userId', 'deviceId', 'isAuthenticated', 'roleName'],
}

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer)

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    profile: profileReducer,
    weather: weatherReducer,
    plant: plantReducer,
    notification: notificationReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'plant/analyze/pending',
        ],
        ignoredActionPaths: ['payload.image_file'],
      },
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
