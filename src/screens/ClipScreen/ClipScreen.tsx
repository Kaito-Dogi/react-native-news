import React from "react";
import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";

/**
 * @package
 */
export const ClipScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ClipScreen</Text>
    </SafeAreaView>
  );
};
