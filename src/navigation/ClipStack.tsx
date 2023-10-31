import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ClipScreen } from "src/screens/ClipScreen";

/**
 * @package
 */
export type ClipStackParamList = {
  Clip: undefined;
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
    </Stack.Navigator>
  );
};
