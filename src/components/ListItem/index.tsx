import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

type ListItemProps = {
  imageUri: string | undefined;
  title: string;
  author: string;
  onListItemPress: () => void;
};

export const ListItem: React.FC<ListItemProps> = (props) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={props.onListItemPress}>
      <View style={styles.imageContainer}>
        {!!props.imageUri && <Image style={styles.image} source={{ uri: props.imageUri }} />}
      </View>
      <View style={styles.contentContainer}>
        <Text numberOfLines={3} style={styles.title}>
          {props.title}
        </Text>
        <Text style={styles.author}>{props.author}</Text>
      </View>
    </TouchableOpacity>
  );
};
