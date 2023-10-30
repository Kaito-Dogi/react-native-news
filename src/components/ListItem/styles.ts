import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
  },
  imageContainer: {
    height: 100,
    width: 100,
  },
  contentContainer: {
    height: 100,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
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
