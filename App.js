import * as Expo from "expo";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { Image } from "react-native";

import App from "../AppNavigator";

import configureStore from "./configureStore";
const store = configureStore();

export default class Setup extends Component {
  state = {
    isReady: false
  };
  componentWillMount() {
    this.loadFonts();
  }

  cacheImages(images) {
    return images.map(image => {
      if (typeof image === "string") {
        return Image.prefetch(image);
      } else {
        return Expo.Asset.fromModule(image).downloadAsync();
      }
    });
  }

  async loadFonts() {
    await Expo.Font.loadAsync({});
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
