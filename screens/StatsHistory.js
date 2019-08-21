import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import PieChart from "./components/PieChart";
import styles from "./style/style";
import axios from "axios";

export default function StatsHistory(props) {
  const { navigation } = props;
  const [labels, setLabels] = useState([]);
  const [series, setSeries] = useState([]);
  const base_url = "https://tranquil-wildwood-15780.herokuapp.com";
  useEffect(() => {
    getStats();
  }, [labels, series]);

  async function getStats() {
    if (!labels.length || !series.length) {
      try {
        let response = await axios(`${base_url}/allStats/${navigation.getParam("id")}`);
        let data = response.data;

        if (data.success) {
          const stats = data.stats;
          stats.sort((a, b) => b.time - a.time);
          await setLabels(stats.map(item => item.url).slice(0, 10));

          await setSeries(stats.map(item => Math.ceil(item.time / 60)).slice(0, 10));
        }
      } catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <View style={styles.containerStats}>
      <Text style={styles.containerText}>Your Cumulative Stats </Text>
      <PieChart userLabels={labels} userSeries={series} />
    </View>
  );
}
