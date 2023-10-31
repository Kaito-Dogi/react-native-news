import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Article } from "src/models/Article";
import { ArticleScreen } from "src/screens/ArticleScreen";
import { ClipScreen } from "src/screens/ClipScreen";

/**
 * @package
 */
export type ClipStackParamList = {
  Clip: undefined;
  Article: { article: Article };
};

const Stack = createStackNavigator<ClipStackParamList>();

/**
 * @package
 */
export const ClipStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={"Clip"}>
      <Stack.Screen
        name={"Clip"}
        component={ClipScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={"Article"} component={ArticleScreen} />
    </Stack.Navigator>
  );
};
