import React, { Component } from "react";
import { BarChart, Grid } from "react-native-svg-charts";
import styles from "../style/style";
import { View, Text } from "react-native";
// import styles from "../style/style";

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

    return (
      <View>
        <BarChart
          style={styles.containerPieChart}
          data={[yestTotal, todayTotal]}
          svg={{ fill }}
          contentInset={{ top: 30, bottom: 30 }}
        >
          <Grid />
        </BarChart>
        <Text style={styles.mostText}>
          Usage today is a {Math.abs(perc)}%{/* , or {min} minute{" "} */}
          {perc >= 0 ? " increase" : " decrease"} from yesterday
        </Text>
      </View>
    );
  }
}
