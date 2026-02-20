import React from 'react'
import { StyleSheet } from 'react-native'
import Flex from '@/components/Flex'
import ButtonCustome from '@/components/buttons/button-custome/ButtonCustome'
import { customizeColors } from '@/libs/core/config/theme/color'

interface ProfileBottomBarProps {
  onCancel: () => void
  onUpdate: () => void
  loading?: boolean
}

function ProfileBottomBar({
  onCancel,
  onUpdate,
  loading,
}: ProfileBottomBarProps) {
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
          onPress={onCancel}
          disabled={loading}
        />
      </Flex>

      <Flex flex={1}>
        <ButtonCustome
          textStyle={styles.textUpdate}
          style={styles.updateButton}
          title={loading ? 'Updating...' : 'Update'}
          onPress={onUpdate}
          disabled={loading}
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
    paddingTop: 11,
    paddingHorizontal: 20,
    paddingBottom: 50,
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
