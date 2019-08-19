import React, { Component } from "react";
import { BarChart, Grid } from "react-native-svg-charts";

export default class BarChart2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BarChart
        style={{ height: 200 }}
        data={data}
        svg={{ fill }}
        contentInset={{ top: 30, bottom: 30 }}
      >
        <Grid />
      </BarChart>
    );
  }
}
