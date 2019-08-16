import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    margin: 5,
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  textBig: {
    fontSize: 20,
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
    borderColor: "#89AEB2"
  },
  buttonBlue: {
    backgroundColor: "#0074D9"
  },
  buttonPrimaryColor: {
    backgroundColor: "#97f2f3"
  },
  buttonLabel: {
    textAlign: "center",
    fontSize: 16,
    color: "white"
  },
  loginHeader: {
    fontSize: 30
  }
});
