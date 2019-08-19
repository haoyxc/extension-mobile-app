import React, { Component } from "react";
import { StyleSheet, View, Text, Animated } from "react-native";
import { PieChart } from "react-native-svg-charts";

import styles from "../style/style";

export default class PieChart2 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [50, 10, 40, 95, 85, 91, 35, 53, 24, 50],
      pos: new Animated.ValueXY(),
      display: false,
      labels: [
        "Facebook",
        "Instagram",
        "Youtube",
        "GMail",
        "Github",
        "Google Docs",
        "Leetcode",
        "Amazon",
        "Trashcan",
        "Microsoft"
      ],
      target: null
    };
  }
  handlePress(e, index) {
    console.log(this.state.labels[index]);
    this.setState({
      display: true,
      pos: new Animated.ValueXY({
        x: e.nativeEvent.locationX - 50,
        y: e.nativeEvent.locationY
      }),
      target: [this.state.data[index], this.state.labels[index]]
    });
    console.log(this.state.display);
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
      //   "#d7e7a9"
    ];
    // console.log("OTHER", this.state.display);
    // console.log("DATA", this.state.data);
    const pieData = this.state.data
      // .filter(value => value > 0)
      .map((value, index) => ({
        value,
        svg: {
          fill: colors[index],
          onPress: e => this.handlePress(e, index)
        },
        key: `pie-${index}`
      }));
    //have a view, position absolute to where the event is
    return (
      <View>
        {/* <Text>pie chart </Text> */}
        <PieChart style={styles.containerPieChart} data={pieData} />
        {this.state.display ? (
          <Animated.View
            style={[
              this.state.pos.getLayout(),
              {
                backgroundColor: "#85ddd1",
                width: 100,
                height: 80,
                position: "absolute",
                // padding: 20
                // borderRadius: 20,
                // border: "black",
                borderRadius: 10,
                borderWidth: 0.5,
                borderColor: "#black"
              }
            ]}
          >
            <Text style={{ margin: 10 }}>{`${this.state.target[0]} minutes on ${
              this.state.target[1]
            }`}</Text>
          </Animated.View>
        ) : null}
      </View>
    );
  }
}
