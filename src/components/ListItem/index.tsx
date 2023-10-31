import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {
  imageUri: string | undefined;
  title: string;
  author: string;
  onListItemPress: () => void;
};

export const ListItem: React.FC<Props> = ({
  imageUri,
  title,
  author,
  onListItemPress,
}) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onListItemPress}>
      <View style={styles.imageContainer}>
        {!!imageUri && (
          <Image style={styles.image} source={{ uri: imageUri }} />
        )}
      </View>
      <View style={styles.contentContainer}>
        <Text numberOfLines={3} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
};
