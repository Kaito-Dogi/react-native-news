import {StyleSheet, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}></View>
        <View style={styles.contentContainer}></View>
      </View>
    </View>
  );
}

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
    flexDirection: "row"
  },
  imageContainer: {
    height: 100,
    width: 100,
    backgroundColor: "red"
  },
  contentContainer: {
    height: 100,
    backgroundColor: "blue",
    flex: 1
  }
});
