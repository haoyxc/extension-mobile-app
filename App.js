import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import styles from "./src/style.js";
import Homepage from "./src/containers/Homepage.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>HELLO WORLD</Text>
    </View>
  );
}
