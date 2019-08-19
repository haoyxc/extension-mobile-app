import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  AsyncStorage
} from "react-native";
import PieChart from "./components/PieChart";
import styles from "./style/style";
import axios from "axios";
import SCREENS from "../constants";

export default function StatsAll(props) {
  const { navigation } = props;
  const [id, setId] = useState(null);
  const [labels, setLabels] = useState([]);
  const [series, setSeries] = useState([]);

  const userId = navigation.getParam("id");
  const base_url = "https://tranquil-wildwood-15780.herokuapp.com";
  useEffect(() => {
    getStats();
  }, []);

  async function getStats() {
    setId(userId);
    // console.log("in get stats");

    try {
      let response = await axios(`${base_url}/allStats/${navigation.getParam("id")}`);
      console.log(id, "ID", navigation.getParam("id"));
      let data = response.data;
      console.log("DATA!", data);
      if (data.success) {
        const stats = data.stats;
        console.log(stats, "STAT");
        let sites = [];
        let times = [];

        stats.forEach(stat => {
          sites.push(stat.url);
          times.push(stat.time);
        });
        setLabels(sites);
        setSeries(times);
      }
    } catch (e) {
      console.log(e);
    }
    console.log(labels, "LABELS");
    console.log(series, "SERIES");
  }

  return (
    <View style={styles.containerStats}>
      <Text style={styles.containerText}>Your stats for the today: </Text>
      <PieChart userLabels={labels} userSeries={series} />
    </View>
  );
}

StatsAll.navigationOptions = ({ navigation }) => ({
  title: "Stats",
  headerLeft: (
    <Button
      title="Logout"
      onPress={() => {
        AsyncStorage.setItem(userId, "");
        navigation.navigation(SCREENS.LOGIN);
      }}
    />
  )
});
// StatsAll.navigationOptions = ({navigation}) => {(
//   headerRight: (
//     <Button
//     />
//   )
// )}
