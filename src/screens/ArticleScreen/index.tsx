import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { styles } from './styles';

export const ArticleScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is ArticleScreen!</Text>
    </SafeAreaView>
  );
};
