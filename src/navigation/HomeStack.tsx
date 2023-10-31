import React from "react";
import { ArticleScreen } from "src/screens/ArticleScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "src/screens/HomeScreen";
import { Article } from "src/models/Article";

/**
 * @package
 */
export type HomeStackParamList = {
  Home: undefined;
  Article: { article: Article };
};

const Stack = createStackNavigator<HomeStackParamList>();

/**
 * @package
 */
export const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={"Home"}>
      <Stack.Screen
        name={"Home"}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={"Article"} component={ArticleScreen} />
    </Stack.Navigator>
  );
};
