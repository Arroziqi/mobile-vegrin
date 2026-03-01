import { API_BASE_URL } from '@/libs/core/config/app.config'
import { customizeColors } from '@/libs/core/config/theme/color'
import { Image, StyleSheet, Text, View } from 'react-native'

// const imageCardData = {
//   imagePath: require('@/assets/images/kangkung.jpg'),
//   confidence: 92.5,
// }

interface ImageCardProps {
  imagePath: string
  confidence: number
}

const ImageCard = ({ imagePath, confidence }: ImageCardProps) => {
  const imageUrl = `${API_BASE_URL}/${imagePath}`
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.confidenceContainer}>
        <Text style={styles.confidenceLabel}>
          {`${confidence.toFixed(1)}% Akurat`}
        </Text>
      </View>
    </View>
  )
}
export default ImageCard

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 300,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: customizeColors.white,
    overflow: 'hidden',
    shadowColor: customizeColors.green5,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.1,
    shadowRadius: 25,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  confidenceContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: customizeColors.green5,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: 'center',
  },
  confidenceLabel: {
    fontSize: 11,
    fontWeight: '500',
    color: '#ffffff',
  },
  confidenceScore: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 2,
  },
  confidence: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignSelf: 'flex-end',
  },
})
