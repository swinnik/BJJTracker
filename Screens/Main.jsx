import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";

const attendanceGrid = [
  [0, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 0],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 1, 1, 0, 1, 1, 0],
];

const MainScreen = ({ navigation }) => {
  const handleNewEntryPress = () => {
    navigation.navigate("NewJournalEntry");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <View style={styles.barChart}>
          <View style={styles.gridContainer}>
            <View style={styles.weekdays}>
              <Text>M</Text>
              <Text>T</Text>
              <Text>W</Text>
              <Text>T</Text>
              <Text>F</Text>
              <Text>S</Text>
              <Text>S</Text>
            </View>
            {attendanceGrid.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.row}>
                {row.map((value, colIndex) => (
                  <View
                    key={colIndex}
                    style={[
                      styles.squircle,
                      { backgroundColor: value === 1 ? "green" : "lightgrey" },
                    ]}
                  />
                ))}
              </View>
            ))}
          </View>
          <View style={styles.flameSection}>
            <Image
              style={styles.flameImage}
              source={require("../assets/fire.png")}
            />
            <Text>69</Text>
          </View>
        </View>
        <View style={styles.icon}>
          <Image
            style={styles.academyLogo}
            source={require("../assets/CapybaraLogo.png")}
          />
        </View>
      </View>
      <View style={styles.dashboard}>
        <View style={styles.stat}>
          <Text>Last Time Belt Washed</Text>
          <Text> 3 days ago</Text>
        </View>
        <View style={styles.stat}>
          <Text> Consecutive fire streak</Text>
          <Text> 10 Classes in a row!</Text>
        </View>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity
          onPress={() => navigation.navigate("NewJournalEntry")}
        >
          <View style={styles.action}>
            <Text>New Entry</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SkillsList")}>
          <View style={styles.action}>
            <Text>Skills List</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.timer}> 4hr 20minutes until next class </Text>
      </View>
    </View>
  );
};

const lightPurple = "#CBC3E3";
const styles = StyleSheet.create({
  academyLogo: {
    width: 100,
    height: 100,
    overflow: "show",
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },

  weekdays: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flameImage: {
    width: 40,
    height: 40,
    overflow: "show",
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  flameSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "cen ter",
  },
  gridContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 5,
  },
  squircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 5,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: lightPurple,
    width: "100%",
    // padding: 10,
  },
  action: {
    margin: 20,
    alignItems: "center",
    width: "100%",
    padding: 10,
    backgroundColor: "#f8ebeb",
    borderRadius: 14,

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },

  header: {
    height: 130,
    width: "102%",
    backgroundColor: lightPurple,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 10,
    borderColor: lightPurple,
  },
  stat: {
    flex: 1,
    flexDirection: "row",
    // borderWidth: 1,
    // borderColor: "black",
    marginVertical: 5,
    justifyContent: "space-between",
    alignItems: "center",
    height: "10%",
    padding: 15,
    backgroundColor: "#f8ebeb",
    // borderRadius: 14,
  },
  dashboard: {
    backgroundColor: lightPurple,
    width: "100%",
    // width: "85%",
    // borderRadius: 14,

    height: "25%",
    paddingVertical: 10,
    // shadowColor: "#000000",
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // shadowOpacity: 0.8,
    // shadowRadius: 4,
  },

  timer: {
    fontWeight: "bold",
    fontSize: 20,
  },
  footer: {
    bottom: -35,
    width: "100%",
    height: "15%",
    padding: 25,
    backgroundColor: "lightgreen",
    justifyContent: "start",
    alignItems: "center",
  },

  icon: {
    position: "absolute",
    top: 0,
    right: 0,
    height: 130,
    width: "30%",

    justifyContent: "center",
    alignItems: "center",
  },
  barChart: {
    position: "absolute",
    top: 0,
    left: 0,
    // height: 120,
    width: "70%",

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default MainScreen;
