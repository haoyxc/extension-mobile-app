import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  AsyncStorage,
  Platform
} from "react-native";
import PieChart from "./components/PieChart";
import styles from "./style/style";
import axios from "axios";
import SCREENS from "../constants";
import XDate from "../xdate";

export default function StatsAll(props) {
  const { navigation } = props;
  // const [id, setId] = useState(null);
  const [labels, setLabels] = useState([]);
  const [series, setSeries] = useState([]);

  const userId = navigation.getParam("id");
  const base_url = "https://tranquil-wildwood-15780.herokuapp.com";
  useEffect(() => {
    getStats();
  }, [labels, series]);

  function getDateString(date) {
    if (Platform.OS === "ios")
      return date.toLocaleDateString("en-US", {
        weekday: "short",
        day: "numeric",
        month: "long",
        year: "numeric"
      });
    else {
      var dayOfWeek = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
        monthName = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        utc = date.getTime() + date.getTimezoneOffset() * 60000,
        US_time = utc + 3600000 * -4,
        US_date = new Date(US_time);

      return (
        dayOfWeek[US_date.getDay() - 1] +
        //optional comma ", "
        " " +
        monthName[US_date.getMonth()] +
        " " +
        US_date.getDate() +
        //optional comma
        " " +
        US_date.getFullYear()
      );
    }
  }
  async function getStats() {
    // setId(userId);
    // console.log("in get stats");
    if (!labels.length || !series.length) {
      try {
        let response = await axios(`${base_url}/todayStats/${navigation.getParam("id")}`);
        // console.log(id, "ID", navigation.getParam("id"));
        let data = response.data;
        // console.log("DATA!", data);
        if (data.success) {
          const stats = data.stats;

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
      <Text style={styles.containerText}>Your Stats for Today </Text>
      <PieChart userLabels={labels} userSeries={series} />

      {/* <Text style={{ marginTop: 30 }}>Most used: </Text> */}
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
