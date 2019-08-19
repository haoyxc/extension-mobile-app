import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Pie from "react-native-pie";
import styles from "../style/style";

export default class PieChart extends Component {
  render() {
    return (
      <View style={styles.containerStats}>
        <Pie
          radius={100}
          //   innerRadius={60}
          series={[10, 20, 30, 40]}
          colors={["#f00", "#0f0", "#00f", "#ff0"]}
        />
      </View>
    );
  }
}
