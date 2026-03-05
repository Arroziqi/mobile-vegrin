// hooks/usePlant.ts
import { useAppDispatch, useAppSelector } from '@/libs/store/reduxHooks'
import {
  analyzePlant,
  getPlantDetail,
  getPlantLogs,
} from '@/libs/store/slices/plant.slice'
import * as ImageManipulator from 'expo-image-manipulator'
import * as ImagePicker from 'expo-image-picker'
import { useCallback, useState } from 'react'

export const usePlant = () => {
  const dispatch = useAppDispatch()
  const { logs, currentLog, loading, analyzing, error } = useAppSelector(
    state => state.plant
  )
  const [localError, setLocalError] = useState<string | null>(null)

  // Analyze plant dari URI
  const analyze = async (uri: string) => {
    try {
      setLocalError(null)
      const result = await dispatch(analyzePlant(uri)).unwrap()
      return { success: true, data: result }
    } catch (err) {
      const errorMessage = err as string
      setLocalError(errorMessage)
      return { success: false, error: errorMessage }
    }
  }

  // Pick image dari galeri dan analyze
  const pickAndAnalyze = async () => {
    try {
      setLocalError(null)

      // Request permission
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
      if (status !== 'granted') {
        throw new Error('Permission to access gallery was denied')
      }

      // Pick image
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.8,
      })

      if (result.canceled) {
        return { success: false, error: 'Dibatalkan oleh user' }
      }

      // Pass URI langsung — React Native tidak butuh convert ke Blob
      const uri = result.assets[0].uri

      // Analyze
      const analyzeResult = await dispatch(analyzePlant(uri)).unwrap()
      return { success: true, data: analyzeResult }
    } catch (err) {
      const errorMessage = (err as Error).message
      setLocalError(errorMessage)
      return { success: false, error: errorMessage }
    }
  }

  // Take photo dengan kamera dan analyze
  const captureAndAnalyze = async () => {
    try {
      setLocalError(null)

      // Request permission
      const { status } = await ImagePicker.requestCameraPermissionsAsync()
      if (status !== 'granted') {
        throw new Error('Permission to access camera was denied')
      }

      // Take photo — allowsEditing menampilkan UI crop setelah foto diambil
      const result = await ImagePicker.launchCameraAsync({
        quality: 0.5,
        allowsEditing: true,
        aspect: [4, 3],
      })

      if (result.canceled) {
        return { success: false, error: 'Dibatalkan oleh user' }
      }

      // Pass URI langsung — React Native tidak butuh convert ke Blob
      const cameraUri = result.assets[0].uri
      console.log('[captureAndAnalyze] URI kamera:', cameraUri)

      // Resize ke max 1024px agar tidak melebihi batas upload server
      const manipulated = await ImageManipulator.manipulateAsync(
        cameraUri,
        [{ resize: { width: 1024 } }],
        { compress: 0.5, format: ImageManipulator.SaveFormat.JPEG }
      )
      const stableUri = manipulated.uri
      console.log('[captureAndAnalyze] URI setelah resize:', stableUri)

      // Analyze
      const analyzeResult = await dispatch(analyzePlant(stableUri)).unwrap()
      return { success: true, data: analyzeResult }
    } catch (err) {
      console.error('[captureAndAnalyze] Error:', err, typeof err)
      const errorMessage =
        typeof err === 'string'
          ? err
          : ((err as Error).message ?? 'Gagal menganalisis tanaman')
      setLocalError(errorMessage)
      return { success: false, error: errorMessage }
    }
  }

  // Fetch all plant logs
  const fetchLogs = async () => {
    try {
      setLocalError(null)
      const result = await dispatch(getPlantLogs()).unwrap()
      return { success: true, data: result }
    } catch (err) {
      const errorMessage = err as string
      setLocalError(errorMessage)
      return { success: false, error: errorMessage }
    }
  }

  // Fetch detail log by ID
  const fetchDetail = async (plantId: string) => {
    try {
      setLocalError(null)
      const result = await dispatch(getPlantDetail(plantId)).unwrap()
      return { success: true, data: result }
    } catch (err) {
      const errorMessage = err as string
      setLocalError(errorMessage)
      return { success: false, error: errorMessage }
    }
  }

  // Get logs by condition
  const getLogsByCondition = useCallback(
    (condition: string) => {
      return logs.filter(
        log => log?.condition?.toLowerCase() === condition.toLowerCase()
      )
    },
    [logs]
  )

  // Get healthy plants
  const healthyPlants = getLogsByCondition('Baik')

  // Get sick plants
  const sickPlants = getLogsByCondition('Cukup')

  // Get stats
  const stats = {
    total: logs.length,
    healthy: healthyPlants.length,
    sick: sickPlants.length,
  }

  // Clear error
  const clearError = () => {
    setLocalError(null)
  }

  return {
    // State
    logs,
    currentLog,
    loading,
    analyzing,
    error: error || localError,

    // Computed
    healthyPlants,
    sickPlants,
    stats,

    // Actions
    analyze,
    pickAndAnalyze,
    captureAndAnalyze,
    fetchLogs,
    fetchDetail,
    getLogsByCondition,
    clearError,
  }
}
