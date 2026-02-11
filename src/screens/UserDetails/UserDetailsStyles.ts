import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  container: {
    padding: 20,
  },
  profileSection: {
    marginBottom: 24,
  },
  name: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1e272e',
  },
  username: {
    fontSize: 16,
    color: '#57606f',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  row: {
    marginBottom: 18,
  },
  label: {
    fontSize: 13,
    color: '#747d8c',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2f3542',
  },
});
