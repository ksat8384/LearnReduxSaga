import React, { FC } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Stories, { IStoriesProps } from "./Stories";
import { Provider } from "react-redux";
import store from "../redux/Store";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Stories />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
