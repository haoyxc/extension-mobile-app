import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./style/style";
import BarChart from "./components/BarChart";
import axios from "axios";

export default function Insights(props) {
  const { navigation } = props;
  const [todayTotal, setTodayTotal] = useState(0);
  const [yestTotal, setYestTotal] = useState(0);

  const base_url = "https://tranquil-wildwood-15780.herokuapp.com";
  useEffect(() => {
    getStats();
  }, [todayTotal, yestTotal]);

  async function getStats() {
    // setId(userId);
    // console.log("in get stats");
    if (!todayTotal || !yestTotal) {
      try {
        let response = await axios(`${base_url}/todayStats/${navigation.getParam("id")}`);
        let dataToday = response.data;
        // console.log(dataToday);

        let responseY = await axios(
          `${base_url}/yesterdayStats/${navigation.getParam("id")}`
        );
        let dataYest = responseY.data;

        if (dataToday.success && dataYest.success) {
          const statsToday = dataToday.stats;
          const statsYes = dataYest.stats;
          // console.log(statsToday, statsYes);
          const today = statsToday.reduce((acc, item) => {
            // console.log(item.time);
            return acc + item.time;
          }, 0);
          // console.log("TDOA", today);
          setTodayTotal(
            statsToday.reduce((acc, item) => {
              return acc + item.time;
            }, 0)
          );
          setYestTotal(
            statsYes.reduce((acc, item) => {
              return acc + item.time;
            }, 0)
          );
          // console.log(todayTotal, yestTotal);
          // stats.sort((a, b) => b.time - a.time);
          // await setLabels(stats.map(item => item.url).slice(0, 10));

          // await setSeries(stats.map(item => Math.ceil(item.time / 60)).slice(0, 10));
        }
      } catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <View style={styles.containerStats}>
      <Text style={styles.containerText}>Insights</Text>
      <BarChart todayTotal={todayTotal} yestTotal={yestTotal} />
    </View>
  );
}
