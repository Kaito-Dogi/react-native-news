import { FlatList, ListRenderItemInfo, SafeAreaView, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { Article } from '../types/Article';
import { NEWS_API_URL } from '../api/url';
import { NewsApiResponse } from '../api/response/NewsApiResponse';
import { ListItem } from '../components/ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export const HomeScreen: React.FC = () => {
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
            onListItemPress={() => alert(article.item.title)}
          />
        )}
        keyExtractor={(article) => article.title}
      />
    </SafeAreaView>
  );
};
