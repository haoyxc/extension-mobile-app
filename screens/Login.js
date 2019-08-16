import React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style/style.js";
import { SCREENS } from "../constants";
import axios from "axios";

const base_url = "http://fe9642ab.ngrok.io";

function Login(props) {
  const { navigation } = props;

  const [id, setId] = useState("");
  function loadUser(props) {}
  async function login() {
    // navigation.navigate(SCREENS.STATSALL);
    //implement login function here
    try {
      let response = await axios.post(
        base_url + "/login",
        {
          userId: id
        },
        {
          withCredentials: true
        }
      );
      let data = response.data;
      if (!data.success) {
        console.log("not successful");
      } else {
        navigation.navigate(SCREENS.STATSALL);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.loginHeader}>Welcome</Text>
      <TextInput
        style={styles.formInput}
        type="text"
        placeholder="enter your unique id"
        onChangeText={e => setId(e)}
      />
      <TouchableOpacity
        onPress={login}
        style={[styles.button, styles.buttonPrimaryColor]}
      >
        <Text style={styles.buttonLabel}>Tap to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

Login.navigationOptions = {
  title: "Login"
};
export default Login;
