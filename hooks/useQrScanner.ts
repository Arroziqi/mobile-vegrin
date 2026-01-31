import { useEffect, useRef, useState } from 'react'
import { BarcodeScanningResult, Camera } from 'expo-camera'
import { Animated, Vibration } from 'react-native'

export interface UseQrScannerReturn {
  hasPermission: boolean | null
  isScanning: boolean
  scannedData: string | null
  justScanned: boolean
  pulseAnim: Animated.Value
  lineAnim: Animated.Value
  startScanning: () => void
  stopScanning: () => void
  resetScanner: () => void
  requestPermission: () => Promise<void>
  handleBarCodeScanned: (scanningResult: BarcodeScanningResult) => void
}

export const useQrScanner = (): UseQrScannerReturn => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const [isScanning, setIsScanning] = useState(false)
  const [scannedData, setScannedData] = useState<string | null>(null)
  const [justScanned, setJustScanned] = useState(false)

  // Animation refs
  const pulseAnim = useRef(new Animated.Value(1)).current
  const lineAnim = useRef(new Animated.Value(0)).current

  const requestPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync()
    setHasPermission(status === 'granted')
  }

  useEffect(() => {
    requestPermission()
  }, [])

  // Pulse animation effect
  useEffect(() => {
    if (isScanning) {
      const pulse = Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.05,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      )
      pulse.start()
      return () => pulse.stop()
    } else {
      pulseAnim.setValue(1)
    }
  }, [isScanning, pulseAnim])

  // Scanning line animation effect
  useEffect(() => {
    if (isScanning) {
      const scan = Animated.loop(
        Animated.sequence([
          Animated.timing(lineAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(lineAnim, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
          }),
        ])
      )
      scan.start()
      return () => scan.stop()
    }
  }, [isScanning, lineAnim])

  const startScanning = () => {
    setIsScanning(true)
    setScannedData(null)
    setJustScanned(false)
  }

  const stopScanning = () => {
    setIsScanning(false)
  }

  const resetScanner = () => {
    setScannedData(null)
    setIsScanning(false)
    setJustScanned(false)
  }

  const handleBarCodeScanned = (scanningResult: BarcodeScanningResult) => {
    if (isScanning && !scannedData && !justScanned) {
      // Vibrate to give haptic feedback
      Vibration.vibrate(100)

      setScannedData(scanningResult.data)
      setIsScanning(false)
      setJustScanned(true)

      // Reset justScanned after 2 seconds
      setTimeout(() => {
        setJustScanned(false)
      }, 2000)
    }
  }

  return {
    hasPermission,
    isScanning,
    scannedData,
    justScanned,
    pulseAnim,
    lineAnim,
    startScanning,
    stopScanning,
    resetScanner,
    requestPermission,
    handleBarCodeScanned,
  }
}
