import React, { Dimensions } from "react";
import { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import PieChart from "./components/PieChart";
import Pie from "react-native-pie";
import styles from "./style/style";

export default function StatsAll() {
  // const screenWidth = Dimensions.get("window");

  return (
    <View style={styles.containerStats}>
      <Text style={styles.containerText}>Your stats for the today: </Text>
      <PieChart />
    </View>
    // <PieChart
    //   data={data}
    //   // width={screenWidth}
    //   height={220}
    //   // chartConfig={chartConfig}
    //   accessor="population"
    //   backgroundColor="transparent"
    //   paddingLeft="15"
    //   absolute
    // />
  );
}
