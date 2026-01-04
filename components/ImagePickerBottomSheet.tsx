import React, { forwardRef, useMemo } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet'
import { MaterialIcons } from '@expo/vector-icons'
import { customizeColors } from '@/libs/core/config/theme/color'

interface Props {
  onPickCamera: () => void
  onPickGallery: () => void
}

// eslint-disable-next-line react/display-name
const ImagePickerBottomSheet = forwardRef<BottomSheet, Props>(
  ({ onPickCamera, onPickGallery }, ref) => {
    const snapPoints = useMemo(() => ['32%'], [])

    return (
      <BottomSheet
        ref={ref}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        backdropComponent={props => (
          <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            opacity={0.4}
          />
        )}
        style={styles.sheet}
      >
        <BottomSheetView style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Profile Photo</Text>

            <Pressable onPress={() => (ref as any)?.current?.close()}>
              <MaterialIcons name="close" size={22} color="#000" />
            </Pressable>
          </View>

          <View style={styles.divider} />

          {/* Actions */}
          <View style={styles.actions}>
            <Pressable style={styles.actionItem} onPress={onPickCamera}>
              <View style={styles.iconWrapper}>
                <MaterialIcons
                  name="photo-camera"
                  size={33}
                  color={customizeColors.primary.color1}
                />
              </View>
              <Text style={styles.actionLabel}>Camera</Text>
            </Pressable>

            <Pressable style={styles.actionItem} onPress={onPickGallery}>
              <View style={styles.iconWrapper}>
                <MaterialIcons
                  name="image"
                  size={33}
                  color={customizeColors.primary.color1}
                />
              </View>
              <Text style={styles.actionLabel}>Gallery</Text>
            </Pressable>
          </View>
        </BottomSheetView>
      </BottomSheet>
    )
  }
)

export default ImagePickerBottomSheet

const styles = StyleSheet.create({
  sheet: {
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    overflow: 'hidden',
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 12,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: 'regular',
    color: customizeColors.secondary.color1,
  },

  divider: {
    height: 1,
    backgroundColor: customizeColors.border,
    marginBottom: 24,
  },

  actions: {
    flexDirection: 'row',
    gap: 20,
  },

  actionItem: {
    alignItems: 'center',
    gap: 8,
  },

  iconWrapper: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 1.5,
    borderColor: customizeColors.primary.color1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  actionLabel: {
    fontSize: 16,
    fontWeight: 'regular',
    color: customizeColors.placeholder,
  },
})
