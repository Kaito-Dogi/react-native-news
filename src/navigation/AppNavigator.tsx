import { FontAwesome } from "@expo/vector-icons";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import React from "react";

import { ClipStack } from "./ClipStack";
import { HomeStack } from "./HomeStack";

type RootTabParamList = {
  Home: undefined;
  Clip: undefined;
};

type ScreenOptionsProps = {
  route: RouteProp<RootTabParamList, keyof RootTabParamList>;
};

const screenOptions = ({
  route,
}: ScreenOptionsProps): BottomTabNavigationOptions => ({
  tabBarIcon: ({
    color,
    focused,
    size,
  }: {
    focused: boolean;
    color: string;
    size: number;
  }) => {
    // 使用していないが呼び出しておく
    focused;

    switch (route.name) {
      case "Home":
        return <FontAwesome name={"home"} size={size} color={color} />;
      case "Clip":
        return <FontAwesome name={"bookmark"} size={size} color={color} />;
    }
  },
});

const Tab = createBottomTabNavigator<RootTabParamList>();

/**
 * @package
 */
export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Clip"
          component={ClipStack}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
