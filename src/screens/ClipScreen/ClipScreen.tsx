import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useCallback } from "react";
import { SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { ArticleList } from "src/components/ArticleList";
import { Article } from "src/models/Article";
import { ClipStackParamList } from "src/navigation";
import { State } from "src/store";
import { UserState } from "src/store/reducers/user";

import { styles } from "./styles";

type Props = {
  navigation: StackNavigationProp<ClipStackParamList, "Clip">;
  route: RouteProp<ClipStackParamList, "Clip">;
};

/**
 * @package
 */
export const ClipScreen: React.FC<Props> = ({ navigation, route }) => {
  // 使用していないが呼び出しておく
  route;

  const selector = useSelector<State, UserState>((state) => state.user);
  const { clips } = selector;

  const onListItemPress = useCallback(
    (article: Article) => {
      navigation.navigate("Article", { article });
    },
    [navigation],
  );

  return (
    <SafeAreaView style={styles.container}>
      <ArticleList articles={clips} onListItemPress={onListItemPress} />
    </SafeAreaView>
  );
};
