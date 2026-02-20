import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  itemContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#E5E7EB',
  },
  topActionContainer: {
    paddingHorizontal: 20,
    paddingBottom: 15,
    backgroundColor: 'white',
    borderBottomColor: '#E5E7EB',
    borderBottomWidth: 2,
  },
  scrollContent: {
    paddingVertical: 20,
    paddingBottom: 40,
  },
  cardWrapper: {
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginHorizontal: 20,
  },
  listHeader: {
    padding: 20,
    backgroundColor: '#F9FAFB', // Sedikit warna berbeda untuk header list
  },
  listHeaderText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#032746',
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
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 12,
    height: 52,
    backgroundColor: '#2B9846',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 6,
  },
  uploadPlaceholder: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderStyle: 'dashed',
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
  submitButton: {
    backgroundColor: '#2B9846',
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  inputGroup: {
    width: '100%',
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#1F2937',
    backgroundColor: '#FBFBFB',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
})
export default styles
