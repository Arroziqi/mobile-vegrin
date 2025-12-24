import { StyleSheet } from 'react-native'

const pillButtonTabsStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  tab: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
})

export default pillButtonTabsStyle
