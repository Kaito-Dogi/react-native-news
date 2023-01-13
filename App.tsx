import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: dummyImageUri }} />
        </View>
        <View style={styles.contentContainer}>
          <Text numberOfLines={3} style={styles.sentence}>
            {dummySentence}
          </Text>
          <Text style={styles.providerName}>{dummyProviderName}</Text>
        </View>
      </View>
    </View>
  );
}

const dummyImageUri: string = 'https://placehold.jp/100x100.png';
const dummySentence: string =
  'A React component for displaying text. Text supports nesting, styling, and touch handling. In the following example, the nested title and body text will inherit the fontFamily from styles.baseText, but the title provides its own additional styles. The title and body will stack on top of each other on account of the literal newlines:';
const dummyProviderName: string = 'React Native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  sentence: {
    fontSize: 16,
  },
  providerName: {
    fontSize: 12,
  },
});
