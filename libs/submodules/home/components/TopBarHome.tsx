import Avatar from '@/components/Avatar'
import Flex from '@/components/Flex'
import { AlertType } from '@/libs/common/types/Alert.type'
import { buildAvatarUrl } from '@/libs/common/utils/buildAvatarUrl'
import getColorByAlertType from '@/libs/common/utils/getColorByAlertType'
import { customizeColors } from '@/libs/core/config/theme/color'
import { useProfile } from '@/libs/hooks'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const TopBarHome = () => {
  const { profile } = useProfile(true)
  const avatarUrl = buildAvatarUrl(profile?.photo_profile)
  const [alert, setAlert] = useState<AlertType>({
    message: 'Kondisi Cuaca disekitar lahan anda normal',
    variant: 'success',
  })

  const router = useRouter()
  return (
    <LinearGradient
      colors={customizeColors.gradient.topBar}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <Flex justify={'space-between'} align={'center'}>
          <Flex align={'center'} gap={10}>
            <Avatar
              source={
                avatarUrl
                  ? { uri: avatarUrl }
                  : require('@/assets/images/avatar.jpg')
              }
            />
            <Text style={styles.name}>{profile?.front_name ?? 'username'}</Text>
          </Flex>
          <Pressable onPress={() => router.push('/notification')}>
            <Flex align={'center'} justify={'center'} direction={'column'}>
              <Ionicons name={'notifications'} size={24} color={'#676767'} />
              <Text style={styles.labelNotification}>Notifikasi</Text>
            </Flex>
          </Pressable>
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
    paddingTop: 40,
    paddingBottom: 21,
  },
  labelNotification: {
    fontSize: 10,
  },
})
