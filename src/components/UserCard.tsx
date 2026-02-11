import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { User } from '../types/userTypes';
import styles from './UserCardStyles';

interface Props {
  user: User;
  onPress: () => void;
}

const UserCard: React.FC<Props> = ({ user, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Text style={styles.company}>{user.company.name}</Text>
    </TouchableOpacity>
  );
};

export default UserCard;
