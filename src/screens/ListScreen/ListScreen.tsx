import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Article } from "src/models/Article";
import axios, { AxiosError, AxiosResponse } from "axios";
import { NEWS_API_URL } from "src/api/url";
import { NewsApiResponse } from "src/api/response/NewsApiResponse";
import { FlatList, ListRenderItemInfo, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { ListItem } from "src/components/ListItem";
import { HomeStackParamList } from "src/navigation";

type Props = {
  navigation: StackNavigationProp<HomeStackParamList, "List">;
  route: RouteProp<HomeStackParamList, "List">;
};

/**
 * @package
 */
export const ListScreen: React.FC<Props> = ({ navigation, route }) => {
  // 使用しないが呼び出しておく
  route;

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
            onListItemPress={() =>
              navigation.navigate("Article", { article: article.item })
            }
          />
        )}
        keyExtractor={(article) => article.title}
      />
    </SafeAreaView>
  );
};
