import React, { Component } from "react";
import { BarChart, Grid } from "react-native-svg-charts";
import styles from "../style/style";

export default class BarChart2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [10, 4, 3]
    };
  }

  render() {
    const fill = "#85ddd1";
    return (
      <BarChart
        style={styles.containerPieChart}
        // style={{ height: 200 }}
        data={this.state.data}
        svg={{ fill }}
        // horizontal={true}
        contentInset={{ top: 30, bottom: 30 }}
      >
        <Grid />
      </BarChart>
    );
  }
}
