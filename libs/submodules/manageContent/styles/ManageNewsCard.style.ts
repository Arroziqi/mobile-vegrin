import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  itemContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#E5E7EB',
  },
  badgeNumber: {
    backgroundColor: '#2B9846',
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  itemTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  imageContainer: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#F3F4F6',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  authorText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  urlText: {
    fontSize: 12,
    color: '#032746',
    textDecorationLine: 'underline',
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 44,
  },
  editButton: {
    backgroundColor: '#2B7FFF',
  },
  deleteButton: {
    backgroundColor: '#DC2626',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
})
export default styles
