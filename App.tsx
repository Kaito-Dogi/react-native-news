import React from "react";
import { Provider } from "react-redux";
import { AppNavigator } from "src/navigation";
import { store } from "src/store";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};
