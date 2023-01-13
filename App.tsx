import { FlatList, ListRenderItemInfo, SafeAreaView, StyleSheet } from 'react-native';
import { ListItem } from './src/components/ListItem';
import { articles } from './src/const/articles';
import { Article } from './src/types/Article';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={(article: ListRenderItemInfo<Article>) => (
          <ListItem
            imageUri={article.item.urlToImage}
            title={article.item.title}
            author={article.item.author}
          />
        )}
        keyExtractor={(article) => article.title}
      />
    </SafeAreaView>
  );
}
