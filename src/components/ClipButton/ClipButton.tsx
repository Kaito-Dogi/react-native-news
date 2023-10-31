import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";

import { styles } from "./styles";

type Props = {
  onPress: () => void;
  isEnabled: boolean;
};

/**
 * @package
 */
export const ClipButton: React.FC<Props> = ({ isEnabled, onPress }) => {
  const name = isEnabled ? "bookmark" : "bookmark-o";

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <FontAwesome name={name} size={40} color={"gray"} />
    </TouchableOpacity>
  );
};
