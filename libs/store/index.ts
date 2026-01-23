import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import authReducer from './slices/auth.slice'
import profileReducer from './slices/profile.slice'
import weatherReducer from './slices/weather.slice'
import plantReducer from './slices/plant.slice'

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['token', 'userId', 'deviceId', 'isAuthenticated'],
}

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer)

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    profile: profileReducer,
    weather: weatherReducer,
    plant: plantReducer,
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
