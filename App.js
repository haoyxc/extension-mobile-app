import { createStackNavigator, createAppContainer } from "react-navigation";
import { LoginScreen, StatsAllScreen, InsightsScreen } from "./screens";
import { SCREENS } from "./constants";
import InnerNav from "./InnerNav";

const Navigator = createStackNavigator(
  {
    Login: LoginScreen,
    InnerNav: InnerNav,
    StatsAll: StatsAllScreen,
    Insights: InsightsScreen
  },
  {
    initialRouteName: SCREENS.LOGIN,
    headerMode: "none"
    // navigationOptions: {
    //   headerVisible: false
    // }
  }
);

export default createAppContainer(Navigator);
