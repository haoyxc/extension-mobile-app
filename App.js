import { createStackNavigator, createAppContainer } from "react-navigation";
import { LoginScreen, StatsAllScreen, InsightsScreen } from "./screens";
import { SCREENS } from "./constants";

const Navigator = createStackNavigator(
  {
    Login: LoginScreen,
    StatsAll: StatsAllScreen,
    Insights: InsightsScreen
  },
  {
    initialRouteName: SCREENS.LOGIN,
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(Navigator);
