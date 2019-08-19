import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { StatsAllScreen, InsightsScreen, StatsHistoryScreen } from "./screens";
import { SCREENS } from "./constants";

export default createMaterialBottomTabNavigator(
  {
    Dashboard: StatsAllScreen,
    [SCREENS.INSIGHTS]: InsightsScreen,
    [SCREENS.STATSHISTORY]: { screen: StatsHistoryScreen, label: "History!" }
  },
  {
    initialRouteName: "Dashboard",
    activeColor: "#f0edf6",
    inactiveColor: "#3e2465",
    barStyle: { backgroundColor: "#85ddd1" }
  }
);

// if (5 in { 5: 'hello'})
