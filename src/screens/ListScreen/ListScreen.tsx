import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import axios, { AxiosError, AxiosResponse } from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { NewsApiResponse } from "src/api/response/NewsApiResponse";
import { NEWS_API_URL } from "src/api/url";
import { ArticleList } from "src/components/ArticleList";
import { Article } from "src/models/Article";
import { HomeStackParamList } from "src/navigation";

import { styles } from "./styles";

type Props = {
  navigation: StackNavigationProp<HomeStackParamList, "List">;
  route: RouteProp<HomeStackParamList, "List">;
};

/**
 * @package
 */
export const ListScreen: React.FC<Props> = ({ navigation, route }) => {
  // 使用していないが呼び出しておく
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

  const onListItemPress = useCallback(
    (article: Article) => {
      navigation.navigate("Article", { article });
    },
    [navigation],
  );

  return (
    <SafeAreaView style={styles.container}>
      <ArticleList articles={articles} onListItemPress={onListItemPress} />
    </SafeAreaView>
  );
};
