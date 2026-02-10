import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    minHeight: 200,
  },
  header: {
    backgroundColor: '#DC2626',
    width: '100%',
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  iconWrapper: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#FFFFFF33',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  headerTitle: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
  },
  content: {
    padding: 20,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 8,
    textAlign: 'center',
  },
  titleBox: {
    borderRadius: 10,
    backgroundColor: '#F9FAFB',
    padding: 10,
  },
  itemTitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  warningBox: {
    padding: 10,
    backgroundColor: '#FFFBEB',
    borderColor: '#FEE685',
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 10,
  },
  warningText: {
    color: '#92400E',
    textAlign: 'center',
  },
  deleteButton: {
    backgroundColor: '#DC2626',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  cancelButton: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
  },
  cancelButtonText: {
    fontWeight: '600',
  },
})

export default styles
