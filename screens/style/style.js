import { StyleSheet } from "react-native";
import * as Font from "expo-font";

// await Font.loadAsync({
//   "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
//   Montserrat: require("./assets/fonts/Montserrat.ttf"),
//   "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf")
// });
export default StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    marginTop: 50,
    alignItems: "center"
    // backgroundColor: "#F5FCFF"
    // fontFamily: Montserrat
  },
  containerStats: {
    flex: 1,
    justifyContent: "center",
    // marginTop: 50,
    alignItems: "center"
    // backgroundColor: "#F5FCFF"
    // marginTop: 200
  },
  containerPieChart: {
    justifyContent: "center",

    height: 350,
    width: 350
  },
  mostText: {
    alignItems: "center",
    marginTop: 30,
    fontWeight: "300"
  },
  containerText: {
    marginBottom: 20,
    fontSize: 20,
    // fontFamily: "sans-serif"
    fontWeight: "300",
    textTransform: "uppercase"
  },
  textBig: {
    fontSize: 18,
    textAlign: "center",
    margin: 10
  },
  button: {
    justifyContent: "center",
    alignSelf: "stretch",
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5
  },
  formInput: {
    height: 40,
    alignSelf: "stretch",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 0.5,
    borderColor: "#d3c0f9" //secondary color
  },
  buttonBlue: {
    backgroundColor: "#0074D9"
  },
  buttonPrimaryColor: {
    backgroundColor: "#85ddd1" //primary color
  },
  buttonLabel: {
    textAlign: "center",
    fontSize: 16,
    color: "white"
  },
  loginHeader: {
    fontSize: 30,
    fontWeight: "300"
  },
  loginBlurb: {
    fontWeight: "200",
    margin: 20,
    fontStyle: "italic",
    color: "gray"
  }
});
