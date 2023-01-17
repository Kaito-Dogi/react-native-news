import { SafeAreaView, StyleSheet, Text } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export const ArticleScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is ArticleScreen!</Text>;
    </SafeAreaView>
  );
};
