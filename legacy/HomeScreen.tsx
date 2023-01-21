import React from 'react';
import { Article } from 'src/models/Article';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { NewsApiResponse } from 'src/api/response/NewsApiResponse';
import { NEWS_API_URL } from 'src/api/url';
import { FlatList, ListRenderItemInfo, SafeAreaView, StyleSheet } from 'react-native';
import { ListItem } from 'src/components/ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

type HomeScreenState = {
  articles: Article[];
};

export class HomeScreen extends React.Component<object, HomeScreenState> {
  state: HomeScreenState = {
    articles: [],
  };

  componentDidMount() {
    axios
      .get(NEWS_API_URL)
      .then((res: AxiosResponse<NewsApiResponse>) => {
        const articles = res.data.articles;
        this.setState({ articles });
      })
      .catch((error: AxiosError<{ error: string }>) => {
        alert(error.message);
      });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.articles}
          renderItem={(article: ListRenderItemInfo<Article>) => (
            <ListItem
              imageUri={article.item.urlToImage}
              title={article.item.title}
              author={article.item.author}
              onListItemPress={() => {}}
            />
          )}
          keyExtractor={(article) => article.title}
        />
      </SafeAreaView>
    );
  }
}
