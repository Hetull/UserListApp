import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  backText: {
    fontSize: 16,
    color: '#007AFF',
  },
  placeholder: {
    width: 60,
  },
});
