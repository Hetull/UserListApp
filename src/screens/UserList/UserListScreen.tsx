import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { fetchUsersAPI } from '../../services/api';
import { User } from '../../types/userTypes';
import UserCard from '../../components/UserCard';
import styles from './UserListStyles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigationTypes';
import { showErrorToast } from '../../utils/toast';
import AppHeader from '../../components/header/header';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, 'Users'>;

const UserListScreen: React.FC<Props> = ({ navigation }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch Users
  const loadUsers = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchUsersAPI();
      setUsers(data);
    } catch (err: any) {
      const message = err.message || 'Something went wrong';
      setError(message);

      // Show toast on error
      showErrorToast(message);
    } finally {
      setLoading(false);
    }
  }, []);

  //API Call
  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  // Refresh
  const onRefresh = () => {
    loadUsers();
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <>
      <AppHeader title="Users" />
      <SafeAreaView style={{ flex: 1 }} edges={['bottom']}>
        <FlatList
          data={users}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <UserCard
              user={item}
              onPress={() => navigation.navigate('UserDetails', { user: item })}
            />
          )}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={onRefresh} />
          }
          contentContainerStyle={styles.listContainer}
        />
      </SafeAreaView>
    </>
  );
};

export default UserListScreen;
