import React from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { Article } from "src/models/Article";

import { ListItem } from "../ListItem";

type Props = {
  articles: Article[];
  onListItemPress: (article: Article) => void;
};

/**
 * @package
 */
export const ArticleList: React.FC<Props> = ({ articles, onListItemPress }) => {
  return (
    <FlatList
      data={articles}
      renderItem={(article: ListRenderItemInfo<Article>) => (
        <ListItem
          imageUri={article.item.urlToImage}
          title={article.item.title}
          author={article.item.author}
          onListItemPress={() => onListItemPress(article.item)}
        />
      )}
      keyExtractor={(article) => article.title}
    />
  );
};
