import Flex from '@/components/Flex'
import { MaterialIcons } from '@expo/vector-icons'
import { Pressable, Text, View, StyleSheet } from 'react-native'

interface AdminContentButtonProps {
  onPress: () => void
}

const AdminContentButton = ({ onPress }: AdminContentButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: '#e5e7eb' }}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <Flex
        direction="row"
        style={styles.row}
        align="center"
        gap={15}
        justify="space-between"
      >
        <View style={styles.iconBox}>
          <MaterialIcons name="edit" size={12} color="white" />
        </View>

        <Text style={styles.title}>Kelola Konten</Text>

        <MaterialIcons name="arrow-forward-ios" size={12} color="#6A7282" />
      </Flex>

      <Text style={styles.subtitle}>
        Tambah, edit, atau hapus konten artikel
      </Text>
    </Pressable>
  )
}

export default AdminContentButton

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  row: {
    width: '100%',
  },
  iconBox: {
    width: 24,
    height: 24,
    borderRadius: 10,
    backgroundColor: '#2CB41A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    flex: 1,
  },
  subtitle: {
    fontSize: 12,
    width: '100%',
    marginTop: 10,
    fontWeight: '400',
    color: '#6A7282',
  },
})
