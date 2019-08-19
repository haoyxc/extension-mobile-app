import React, { Dimensions } from "react";
import { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import PieChart from "./components/PieChart";
import Pie from "react-native-pie";

export default function StatsAll() {
  // const screenWidth = Dimensions.get("window");

  return (
    <View>
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
