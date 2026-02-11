import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './UserDetailsStyles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigationTypes';
import { showErrorToast } from '../../utils/toast';
import AppHeader from '../../components/header/header';

type Props = NativeStackScreenProps<RootStackParamList, 'UserDetails'>;

const UserDetailsScreen: React.FC<Props> = ({ route, navigation }) => {
  const { user } = route.params ?? {};

  useEffect(() => {
    if (!user) {
      showErrorToast('User data not available');
    }
  }, [user, navigation]);

  if (!user) return null;

  return (
    <View style={styles.screen}>
      <AppHeader
        title="User Details"
        showBack
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={styles.container}>
        {/* User Name Section */}
        <View style={styles.profileSection}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.username}>@{user.username}</Text>
        </View>

        {/* Info Card */}
        <View style={styles.card}>
          <InfoRow label="Email" value={user.email} />
          <InfoRow label="Phone" value={user.phone} />
          <InfoRow label="Website" value={user.website} />
          <InfoRow label="Company" value={user.company.name} />
        </View>
      </ScrollView>
    </View>
  );
};

export default UserDetailsScreen;

/*  Row Component */
const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);
