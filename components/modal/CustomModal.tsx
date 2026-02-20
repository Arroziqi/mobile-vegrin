import React, { ReactNode } from 'react'
import {
  Modal,
  ModalProps,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import Row from '@/components/Row'
import { Feather } from '@expo/vector-icons'

export interface CustomModalProps extends Partial<ModalProps> {
  isVisible: boolean
  onClose: () => void
  children: ReactNode
  title?: string
  showCloseButton?: boolean
  closeButtonStyle?: StyleProp<TextStyle>
  containerStyle?: ViewStyle
  contentStyle?: ViewStyle
  headerStyle?: StyleProp<ViewStyle>
  titleStyle?: TextStyle
  overlayStyle?: ViewStyle
  closeOnOverlayPress?: boolean
  footer?: ReactNode
}

export const CustomModal: React.FC<CustomModalProps> = ({
  isVisible,
  onClose,
  children,
  title,
  showCloseButton = true,
  closeButtonStyle,
  containerStyle,
  contentStyle,
  headerStyle,
  titleStyle,
  overlayStyle,
  closeOnOverlayPress = true,
  animationType = 'fade',
  transparent = true,
  footer,
  ...modalProps
}) => {
  return (
    <Modal
      visible={isVisible}
      animationType={animationType}
      transparent={transparent}
      onRequestClose={onClose}
      {...modalProps}
    >
      <Pressable
        style={[styles.overlay, overlayStyle]}
        onPress={closeOnOverlayPress ? onClose : undefined}
        accessible={false}
      >
        <Pressable
          style={[styles.container, containerStyle]}
          onPress={e => e.stopPropagation()}
        >
          <View>
            {title && (
              <Row
                justify={'space-between'}
                style={[headerStyle, styles.header]}
              >
                <Text style={[styles.title, titleStyle]}>{title}</Text>

                <Pressable onPress={onClose}>
                  <Feather name={'x'} style={closeButtonStyle} size={24} />
                </Pressable>
              </Row>
            )}

            <View style={[styles.body, contentStyle]}>{children}</View>

            {footer}
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '85%',
    maxWidth: 400,
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  body: {
    padding: 16,
  },
  closeButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
})
