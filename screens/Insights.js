import React from "react";
import { View, Text } from "react-native";
import styles from "./style/style";
import BarChart from "./components/BarChart";
export default function Insights() {
  return (
    <View style={styles.containerStats}>
      <Text style={styles.containerText}>Insights</Text>
      <BarChart />
    </View>
  );
}
