import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native'

interface SearchBarProps extends TextInputProps {
  value: string
  onChangeText: (text: string) => void
}

const SearchBar = ({
  value,
  onChangeText,
  style,
  ...props
}: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <MaterialIcons
          name="search"
          size={20}
          color="#9CA3AF"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Cari nama tanaman"
          placeholderTextColor="#9CA3AF"
          value={value}
          onChangeText={onChangeText}
          {...props}
        />
      </View>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    zIndex: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    backgroundColor: '#FAFAFA', // Tetap punya background sendiri
    height: 48,
    paddingHorizontal: 12,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#1F2937',
    height: '100%',
  },
})
