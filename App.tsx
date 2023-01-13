import { StyleSheet, View } from 'react-native';
import { ListItem } from './src/components/ListItem';

const dummyImageUri: string = 'https://placehold.jp/100x100.png';
const dummyTitle: string =
  'A React component for displaying text. Text supports nesting, styling, and touch handling. In the following example, the nested title and body text will inherit the fontFamily from styles.baseText, but the title provides its own additional styles. The title and body will stack on top of each other on account of the literal newlines:';
const dummyAuthor: string = 'React Native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem imageUri={dummyImageUri} title={dummyTitle} author={dummyAuthor} />
      <ListItem imageUri={dummyImageUri} title={dummyTitle} author={dummyAuthor} />
      <ListItem imageUri={dummyImageUri} title={dummyTitle} author={dummyAuthor} />
    </View>
  );
}
