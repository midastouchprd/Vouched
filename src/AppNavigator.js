import React from "react";
import { StackNavigator } from "react-navigation";

import LandingPage from "./components/LandingPage";


const AppNavigator = StackNavigator(
  {
    LandingPage: { screen: LandingPage },
  },
  {
    initialRouteName: "LandingPage",
    headerMode: "none"
  }
);

export default AppNavigator
