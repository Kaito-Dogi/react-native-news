import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from 'src/screens/HomeScreen';
import { ArticleScreen } from 'src/screens/ArticleScreen';

export type RootStackParamList = {
  Home: undefined;
  Article: { url: string };
};

const RootStack = createStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={'Home'}>
        <RootStack.Screen name={'Home'} component={HomeScreen} options={{ headerShown: false }} />
        <RootStack.Screen name={'Article'} component={ArticleScreen} initialParams={{ url: '' }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
