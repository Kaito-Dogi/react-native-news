import { FlatList, ListRenderItemInfo, SafeAreaView, StyleSheet } from 'react-native';
import { ListItem } from './src/components/ListItem';
import { Article } from './src/types/Article';
import React, { useEffect, useState } from 'react';
import { ENV } from './ENV';
import axios, { AxiosError, AxiosResponse } from 'axios';

const URL = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${ENV.NEWS_API_KEY}`;

type NewsAPiResponse = {
  status: string;
  totalResults: number;
  articles: Article[];
};

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
      .get(URL)
      .then((res: AxiosResponse<NewsAPiResponse>) => {
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
