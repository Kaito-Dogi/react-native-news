import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { RouteProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Article } from '../../models/Article';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { NEWS_API_URL } from '../../api/url';
import { NewsApiResponse } from '../../api/response/NewsApiResponse';
import { FlatList, ListRenderItemInfo, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { ListItem } from '../../components/ListItem';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
  route: RouteProp<RootStackParamList, 'Home'>;
};

export const HomeScreen: React.FC<HomeScreenProps> = (props) => {
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
            onListItemPress={() => props.navigation.navigate('Article', { url: '' })}
          />
        )}
        keyExtractor={(article) => article.title}
      />
    </SafeAreaView>
  );
};
