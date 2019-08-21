import React from "react";
import { useState, useEffect } from "react";
import { AsyncStorage, View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style/style.js";
import { SCREENS } from "../constants";
import axios from "axios";

const base_url = "http://tranquil-wildwood-15780.herokuapp.com";

function Login(props) {
  const { navigation } = props;

  const [id, setId] = useState("");
  function loadUser() {
    AsyncStorage.getItem("userId")
      .then(result => {
        if (result && result.length > 0) {
          setId(result);
          login(result);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  useEffect(() => {
    loadUser();
  }, []);
  async function login(id = id) {
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
        AsyncStorage.setItem("userId", id);

        navigation.navigate(SCREENS.INNERNAV, {
          id: id
        });
        setId("");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.loginHeader}>Welcome to Trackr</Text>
      <TextInput
        style={styles.formInput}
        type="text"
        placeholder="enter your unique id"
        onChangeText={e => setId(e)}
        value={id}
      />
      <TouchableOpacity
        onPress={e => login(id)}
        style={[styles.button, styles.buttonPrimaryColor]}
      >
        <Text style={styles.buttonLabel}>Tap to Login</Text>
      </TouchableOpacity>
      <Text style={styles.loginBlurb}>
        PSST. If you don't know your unique ID, don't worry! Download our chrome extension
        first.
      </Text>
    </View>
  );
}

Login.navigationOptions = {
  title: "Login"
};
export default Login;
