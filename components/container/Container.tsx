import {
  ImageBackground,
  ImageBackgroundProps,
  StyleSheet,
  View,
  ViewProps,
} from 'react-native'

interface ContainerProps extends ViewProps {
  imageBackgroundProps?: ImageBackgroundProps
}

const Container = ({
  children,
  imageBackgroundProps,
  ...props
}: ContainerProps) => {
  return (
    <ImageBackground
      source={imageBackgroundProps?.source}
      style={[styles.background, imageBackgroundProps?.style]}
      resizeMode="cover"
      {...imageBackgroundProps}
    >
      {/* Overlay biar text kebaca */}
      <View style={styles.overlay} />

      <View style={[styles.safeArea, props.style]} {...props}>
        {children}
      </View>
    </ImageBackground>
  )
}

export default Container

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
})
