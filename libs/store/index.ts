// store/index.ts
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth.slice'
import profileReducer from './slices/profile.slice'
import weatherReducer from './slices/weather.slice'
import plantReducer from './slices/plant.slice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    weather: weatherReducer,
    plant: plantReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore File/Blob objects in actions
        ignoredActions: ['plant/analyze/pending'],
        ignoredActionPaths: ['payload.image_file'],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
