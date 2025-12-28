import React from 'react'
import { StyleSheet } from 'react-native'
import Flex from '@/components/Flex'
import ButtonCustome from '@/components/buttons/button-custome/ButtonCustome'
import { customizeColors } from '@/libs/core/config/theme/color'
import { useRouter } from 'expo-router'

function ProfileBottomBar() {
  const router = useRouter()
  return (
    <Flex
      justify="space-between"
      align="center"
      style={styles.container}
      gap={12}
    >
      <Flex flex={1}>
        <ButtonCustome
          variant="submitButtonOutline"
          title="Cancel"
          onPress={() => router.back()}
        />
      </Flex>

      <Flex flex={1}>
        <ButtonCustome
          textStyle={styles.textUpdate}
          style={styles.updateButton}
          title="Update"
        />
      </Flex>
    </Flex>
  )
}

export default ProfileBottomBar

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#ECFCF4',
    paddingVertical: 11,
    paddingHorizontal: 20,
  },
  updateButton: {
    backgroundColor: customizeColors.brandColor,
    borderColor: customizeColors.brandColor,
    borderWidth: 2,
  },
  textUpdate: {
    color: 'white',
  },
})
