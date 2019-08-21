import React, { Component } from "react";
import { StyleSheet, View, Text, Animated } from "react-native";
import { PieChart } from "react-native-svg-charts";

import styles from "../style/style";

export default class PieChart2 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pos: new Animated.ValueXY(),
      display: false,
      target: null
    };
  }

  handlePress(e, index) {
    // console.log(this.state.labels[index]);
    this.setState({
      display: true,
      pos: new Animated.ValueXY({
        x: e.nativeEvent.locationX - 60,
        y: e.nativeEvent.locationY
      }),
      target: [this.props.userSeries[index], this.props.userLabels[index]]
    });
    // console.log(this.state.display);
  }
  render() {
    const colors = [
      "#f7adce",
      "#7fd3f7",
      "#84f2b3",
      "#c49bdf",
      "#ffde17",
      "#baed91",
      "#fea3aa",
      "#b2cefe",
      "#D3C0F9",
      "#fdbccf"
    ];

    const pieData = this.props.userSeries
      // .filter(value => value > 0)
      .map((value, index) => ({
        value,
        svg: {
          fill: colors[index % 10],
          onPress: e => this.handlePress(e, index)
        },
        key: `pie-${index}`
      }));
    const most = this.props.userLabels[0];
    return (
      <View>
        <PieChart style={styles.containerPieChart} data={pieData} />
        {this.state.display ? (
          <Animated.View
            style={[
              this.state.pos.getLayout(),
              {
                backgroundColor: "#85ddd1",
                width: 120,
                height: 100,
                position: "absolute",
                // padding: 20
                // borderRadius: 20,
                // border: "black",
                borderRadius: 10,
                borderWidth: 0.5,
                borderColor: "#black",
                zIndex: 3
              }
            ]}
          >
            <Text style={{ margin: 5, marginTop: 10 }}>{`${
              this.state.target[0]
            } minutes on ${this.state.target[1]}`}</Text>
          </Animated.View>
        ) : null}
        {most ? <Text style={styles.mostText}>Most used website: {most}</Text> : null}
      </View>
    );
  }
}
