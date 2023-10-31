import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useCallback } from "react";
import { SafeAreaView } from "react-native";
import WebView from "react-native-webview";
import { useDispatch, useSelector } from "react-redux";
import { ClipButton } from "src/components/ClipButton";
import { HomeStackParamList } from "src/navigation";
import { State } from "src/store";
import { addClip, deleteClip } from "src/store/actions/user";
import { UserState } from "src/store/reducers/user";

import { styles } from "./styles";

type Props = {
  navigation: StackNavigationProp<HomeStackParamList, "Article">;
  route: RouteProp<HomeStackParamList, "Article">;
};

/**
 * @package
 */
export const ArticleScreen: React.FC<Props> = ({ navigation, route }) => {
  // 使用していないが呼び出しておく
  navigation;

  const { article } = route.params;

  const dispatch = useDispatch();

  const selector = useSelector<State, UserState>((state) => state.user);
  const { clips } = selector;

  const isClipped = clips.includes(article);
  const toggleClip = useCallback(() => {
    isClipped ? dispatch(deleteClip(article)) : dispatch(addClip(article));
  }, [isClipped, article, dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <ClipButton onPress={toggleClip} isEnabled={isClipped} />
      <WebView originWhitelist={["*"]} source={{ uri: article.url }} />
    </SafeAreaView>
  );
};
