import { FlatList, ListRenderItemInfo, SafeAreaView, StyleSheet } from 'react-native';
import { ListItem } from './src/components/ListItem';
import { dummyArticles } from './src/const/dummyArticles';
import { Article } from './src/types/Article';
import { useState } from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function App() {
  const [articles, setArticles] = useState(dummyArticles);

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
