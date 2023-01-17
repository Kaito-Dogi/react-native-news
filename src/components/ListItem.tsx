import { Image, StyleSheet, Text, View } from 'react-native';

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

type Props = {
  imageUri: string | undefined;
  title: string;
  author: string;
};

export const ListItem = (props: Props) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        {!!props.imageUri && <Image style={styles.image} source={{ uri: props.imageUri }} />}
      </View>
      <View style={styles.contentContainer}>
        <Text numberOfLines={3} style={styles.title}>
          {props.title}
        </Text>
        <Text style={styles.author}>{props.author}</Text>
      </View>
    </View>
  );
};
