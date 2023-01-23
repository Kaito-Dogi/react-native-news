import React from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'src/navigation/AppNavigator';
import { RouteProp } from '@react-navigation/native';
import WebView from 'react-native-webview';

type ArticleScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Article'>;
  route: RouteProp<RootStackParamList, 'Article'>;
};
export const ArticleScreen: React.FC<ArticleScreenProps> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView originWhitelist={['*']} source={{ uri: props.route.params.url }} />
    </SafeAreaView>
  );
};
