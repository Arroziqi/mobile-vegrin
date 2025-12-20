import { LinearGradient } from 'expo-linear-gradient'
import { customizeColors } from '@/libs/core/config/theme/color'
import Flex from '@/components/Flex'
import Avatar from '@/components/Avatar'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { AlertType } from '@/libs/common/types/Alert.type'
import getColorByAlertType from '@/libs/common/utils/getColorByAlertType'

const TopBarHome = () => {
  const [name, setName] = useState('Supri')
  const [alert, setAlert] = useState<AlertType>({
    message: 'Kondisi Cuaca disekitar lahan anda normal',
    variant: 'success',
  })
  return (
    <LinearGradient
      colors={customizeColors.gradient.topBar}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <Flex justify={'space-between'} align={'center'}>
          <Flex align={'center'} gap={10}>
            <Avatar source={require('@/assets/images/avatar.jpg')} />
            <Text style={styles.name}>{name}</Text>
          </Flex>
          <Flex align={'center'} justify={'center'} direction={'column'}>
            <Ionicons name={'notifications'} size={24} color={'#676767'} />
            <Text style={styles.labelNotification}>Notifikasi</Text>
          </Flex>
        </Flex>
        {alert && (
          <Text
            style={[
              styles.alert,
              { color: getColorByAlertType(alert.variant ?? 'info') },
            ]}
          >
            {alert.message}
          </Text>
        )}
      </View>
    </LinearGradient>
  )
}

export default TopBarHome

const styles = StyleSheet.create({
  name: {
    color: customizeColors.brandColor,
    fontSize: 22,
    fontWeight: 'bold',
  },
  container: {
    width: '100%',
  },
  alert: {
    textAlign: 'center',
    marginTop: 10,
  },
  linearGradient: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 21,
  },
  labelNotification: {
    fontSize: 10,
  },
})
