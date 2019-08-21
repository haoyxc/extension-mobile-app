import React, { Component } from "react";
import { BarChart, Grid } from "react-native-svg-charts";
import styles from "../style/style";
import { View, Text } from "react-native";

export default class BarChart2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [10, 4, 3]
    };
  }

  render() {
    todayTotal = this.props.todayTotal;
    yestTotal = this.props.yestTotal;

    const fill = "#85ddd1";
    function percChange(yest, tod) {
      return Math.ceil((100 * (tod - yest)) / yest);
    }
    function minChange(yest, tod) {
      return Math.ceil((tod - yest) / 60);
    }
    let perc = percChange(yestTotal, todayTotal);
    let min = minChange(yestTotal, todayTotal);
    let textColor = perc >= 0 ? "red" : "green";

    return (
      <View style={{ alignItems: "center" }}>
        <BarChart
          style={styles.containerPieChart}
          data={[yestTotal / 60, todayTotal / 60]}
          svg={{ fill }}
          contentInset={{ top: 20, bottom: 20 }}
        >
          <Grid />
        </BarChart>
        <Text style={styles.mostText}>
          Usage today is a{" "}
          <Text style={{ color: textColor, fontWeight: "bold" }}>
            {Math.abs(perc)}%{perc >= 0 ? " increase" : " decrease"}
          </Text>{" "}
          from yesterday
        </Text>
      </View>
    );
  }
}
