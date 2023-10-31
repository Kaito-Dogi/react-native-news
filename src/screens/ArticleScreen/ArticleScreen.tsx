import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "src/navigation/AppNavigator";
import { RouteProp } from "@react-navigation/native";
import WebView from "react-native-webview";
import { addClip } from "src/store/actions/user";
import { useDispatch } from "react-redux";

type ArticleScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Article">;
  route: RouteProp<RootStackParamList, "Article">;
};

/**
 * @package
 */
export const ArticleScreen: React.FC<ArticleScreenProps> = (props) => {
  const { article } = props.route.params;
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => dispatch(addClip(article))}>
        <Text style={{ margin: 10, fontSize: 30 }}>ADD_CLIP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(addClip(article))}>
        <Text style={{ margin: 10, fontSize: 30 }}>DELETE_CLIP</Text>
      </TouchableOpacity>
      <WebView originWhitelist={["*"]} source={{ uri: article.url }} />
    </SafeAreaView>
  );
};
