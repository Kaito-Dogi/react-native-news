import { FlatList, ListRenderItemInfo, SafeAreaView, StyleSheet } from 'react-native';
import { ListItem } from './src/components/ListItem';
import { Article } from './src/types/Article';
import React, { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { NEWS_API_URL } from "./src/api/url"
import { NewsApiResponse } from "./src/api/response/NewsApiResponse";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const App: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios
      .get(NEWS_API_URL)
      .then((res: AxiosResponse<NewsApiResponse>) => {
        const articles = res.data.articles;
        setArticles(articles);
      })
      .catch((error: AxiosError<{ error: string }>) => {
        alert(error.message);
      });
  }, []);

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
};

export default App;
