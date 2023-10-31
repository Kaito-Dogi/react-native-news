import React from "react";
import { ArticleScreen } from "src/screens/ArticleScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { ListScreen } from "src/screens/ListScreen";
import { Article } from "src/models/Article";

/**
 * @package
 */
export type HomeStackParamList = {
  List: undefined;
  Article: { article: Article };
};

const Stack = createStackNavigator<HomeStackParamList>();

/**
 * @package
 */
export const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={"List"}>
      <Stack.Screen
        name={"List"}
        component={ListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={"Article"} component={ArticleScreen} />
    </Stack.Navigator>
  );
};
