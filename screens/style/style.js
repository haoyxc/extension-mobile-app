import { StyleSheet } from "react-native";
const colors = {
  //teal ish
  colorPrimary: "#85ddd1",
  //purple ish
  colorSecondary: "d3c0f9",
  //green
  colorHelper1: "d7e7a9",
  //pink
  colorHelper2: "fdbccf",
  //red
  colorHelper3: "f99a9c"
};
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
    borderColor: color.colorSecondary
  },
  buttonBlue: {
    backgroundColor: "#0074D9"
  },
  buttonPrimaryColor: {
    backgroundColor: colors.primaryColor
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
