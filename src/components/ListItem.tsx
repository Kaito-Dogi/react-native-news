import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    height: 100,
    width: 100,
  },
  contentContainer: {
    height: 100,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 8,
  },
  image: {
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 16,
  },
  author: {
    fontSize: 12,
  },
});

type ListItemProps = {
  imageUri: string | undefined;
  title: string;
  author: string;
  onListItemPress: () => void;
};

export const ListItem = (props: ListItemProps) => {
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
