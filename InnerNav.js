import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { StatsAllScreen, InsightsScreen } from "./screens";
import { SCREENS } from "./constants";

const navigator = createMaterialBottomTabNavigator(
  {
    StatsAll: StatsAllScreen,
    InsightsScreen: InsightsScreen
  },
  {
    initialRouteName: SCREENS.STATSALL
  }
);

export default function InnerNav() {
  return <div />;
}
