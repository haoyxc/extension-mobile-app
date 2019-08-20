import { createStackNavigator, createAppContainer } from "react-navigation";
import { LoginScreen } from "./screens";
import { SCREENS } from "./constants";
import InnerNav from "./InnerNav";

const Navigator = createStackNavigator(
  {
    Login: LoginScreen,
    [SCREENS.INNERNAV]: InnerNav
    // StatsAll: StatsAllScreen,
  },
  {
    initialRouteName: SCREENS.LOGIN
    // headerMode: "none"
    // navigationOptions: {
    //   headerVisible: false
    // }
  }
);

export default createAppContainer(Navigator);
