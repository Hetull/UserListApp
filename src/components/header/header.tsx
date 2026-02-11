import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './headerStyle';

interface Props {
  title: string;
  onBackPress?: () => void;
  showBack?: boolean;
}

const AppHeader: React.FC<Props> = ({
  title,
  onBackPress,
  showBack = false,
}) => {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View style={styles.header}>
        {showBack ? (
          <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
            <Text style={styles.backText}>{'<'} Back</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.placeholder} />
        )}

        <Text style={styles.title}>{title}</Text>

        <View style={styles.placeholder} />
      </View>
    </SafeAreaView>
  );
};

export default AppHeader;
