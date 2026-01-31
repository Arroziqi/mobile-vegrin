import React, { JSX } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { CameraView } from 'expo-camera'
import { UseQrScannerReturn } from '@/hooks/useQrScanner'

interface Props {
  scanner: UseQrScannerReturn
}

function QrCodeScanner({ scanner }: Props): JSX.Element {
  const { isScanning, justScanned, handleBarCodeScanned, pulseAnim, lineAnim } =
    scanner

  const translateY = lineAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 160],
  })

  return (
    <View style={styles.scannerContainer}>
      <View style={styles.scannerBorder}>
        <Animated.View
          style={[styles.scannerFrame, { transform: [{ scale: pulseAnim }] }]}
        >
          {/* Camera View with auto focus */}
          {isScanning ? (
            <CameraView
              style={styles.camera}
              facing="back"
              onBarcodeScanned={handleBarCodeScanned}
              barcodeScannerSettings={{
                barcodeTypes: ['qr'],
              }}
              autofocus="on"
              zoom={0}
              enableTorch={false}
            />
          ) : (
            <View style={styles.placeholderCamera} />
          )}

          {/* Overlay */}
          <View style={styles.overlay}>
            {/* Corner Top Left */}
            <View
              style={[
                styles.corner,
                styles.cornerTopLeft,
                justScanned && styles.cornerSuccess,
              ]}
            />

            {/* Corner Top Right */}
            <View
              style={[
                styles.corner,
                styles.cornerTopRight,
                justScanned && styles.cornerSuccess,
              ]}
            />

            {/* Content hint or success message */}
            {!isScanning && !justScanned && (
              <View style={styles.hintContainer}>
                <Ionicons
                  name={'qr-code-outline'}
                  size={40}
                  color={'#99A1AF'}
                />
                <Text style={styles.hintText}>Arahkan kamera ke QR Code</Text>
              </View>
            )}

            {isScanning && (
              <View style={styles.hintContainer}>
                <Text style={styles.scanningText}>Scanning...</Text>
                <Text style={styles.scanningSubtext}>
                  Posisikan QR code dalam kotak
                </Text>
              </View>
            )}

            {justScanned && (
              <View style={styles.hintContainer}>
                <Ionicons
                  name={'checkmark-circle'}
                  size={60}
                  color={'#00C950'}
                />
                <Text style={styles.successText}>Berhasil!</Text>
              </View>
            )}

            {/* Corner Bottom Left */}
            <View
              style={[
                styles.corner,
                styles.cornerBottomLeft,
                justScanned && styles.cornerSuccess,
              ]}
            />

            {/* Corner Bottom Right */}
            <View
              style={[
                styles.corner,
                styles.cornerBottomRight,
                justScanned && styles.cornerSuccess,
              ]}
            />
          </View>

          {/* Scanning line animation */}
          {isScanning && (
            <Animated.View
              style={[styles.scanLine, { transform: [{ translateY }] }]}
            />
          )}
        </Animated.View>
      </View>
    </View>
  )
}

export default QrCodeScanner

const styles = StyleSheet.create({
  scannerContainer: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#101828',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  scannerBorder: {
    margin: 16,
    borderWidth: 2.68,
    borderColor: '#00C950',
    borderRadius: 14,
    padding: 20,
    overflow: 'hidden',
  },
  scannerFrame: {
    width: 200,
    height: 200,
    position: 'relative',
    overflow: 'hidden',
  },
  camera: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 14,
  },
  placeholderCamera: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  corner: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderColor: '#00C950',
  },
  cornerSuccess: {
    borderColor: '#00FF6B',
    shadowColor: '#00C950',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  cornerTopLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 2.68,
    borderLeftWidth: 2.68,
    borderTopLeftRadius: 14,
  },
  cornerTopRight: {
    top: 0,
    right: 0,
    borderTopWidth: 2.68,
    borderRightWidth: 2.68,
    borderTopRightRadius: 14,
  },
  cornerBottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 2.68,
    borderLeftWidth: 2.68,
    borderBottomLeftRadius: 14,
  },
  cornerBottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 2.68,
    borderRightWidth: 2.68,
    borderBottomRightRadius: 14,
  },
  hintContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hintText: {
    marginTop: 8,
    color: '#99A1AF',
    fontSize: 14,
    textAlign: 'center',
    width: '80%',
  },
  scanningText: {
    color: '#00C950',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  scanningSubtext: {
    marginTop: 8,
    color: '#99A1AF',
    fontSize: 12,
    textAlign: 'center',
    width: '80%',
  },
  successText: {
    marginTop: 12,
    color: '#00C950',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  scanLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#00C950',
    opacity: 0.8,
    shadowColor: '#00C950',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
  },
})
