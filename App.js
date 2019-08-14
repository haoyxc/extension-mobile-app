import { createStackNavigator, createAppContainer } from "react-navigation";
import { LoginScreen } from "./screens";
import { SCREENS } from "./constants";

const Navigator = createStackNavigator(
  {
    Login: LoginScreen
  },
  { initialRouteName: SCREENS.LOGIN }
);

export default createAppContainer(Navigator);

// import React from "react";
// import { StyleSheet, Text, View, AppRegistry } from "react-native";
// import { NativeRouter, Route, Link, Redirect, BackButton } from "react-router-native";
// import styles from "./src/style.js";
// import Homepage from "./src/containers/Homepage.js";
// import Login from "./src/containers/Login.js";

// export default function App() {
//   return (
//     <NativeRouter>
//       <BackButton />
//       <View style={styles.login}>
//         <Homepage />
//         {/* <Link to="/login" component={Login} /> */}
//       </View>
//     </NativeRouter>
//   );
// }
