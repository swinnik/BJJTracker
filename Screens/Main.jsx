import { View, Text, StyleSheet, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";

const attendanceGrid = [
  [0, 1, 0, 1],
  [1, 1, 1, 0],
  [1, 0, 1, 1],
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
            {attendanceGrid.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.row}>
                {row.map((value, colIndex) => (
                  <View
                    key={colIndex}
                    style={[
                      styles.squircle,
                      { backgroundColor: value === 1 ? "green" : "red" },
                    ]}
                  />
                ))}
              </View>
            ))}
          </View>
        </View>
        <View style={styles.icon}>
          <Text> Academy Logo</Text>
        </View>
      </View>
      <View style={styles.dashboard}>
        <View style={styles.stat}>
          <Text>Last Time Belt Washed</Text>
          <Text> 3 days ago</Text>
        </View>
        <View style={styles.stat}>
          <Text> Consecutivev fire streak</Text>
          <Text> 10 Classes in a row!</Text>
        </View>
      </View>
      <View style={styles.actions}>
        <View style={styles.action}>
          <Button
            title="NewEntry"
            onPress={() => navigation.navigate("NewJournalEntry")}
          ></Button>
        </View>
        <View style={styles.action}>
          <Button
            title="SkillsList"
            onPress={() => navigation.navigate("SkillsList")}
          ></Button>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.timer}> 4hr 20minutes until next class </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    justifyContent: "space-between",
    alignItems: "center",
    // height:
    width: "100%",
    padding: 10,
  },
  action: {
    borderWidth: 1,
    borderColor: "black",
    margin: 20,
    alignItems: "center",
    width: "40%",
    padding: 10,
    backgroundColor: "#f8ebeb",
    borderRadius: 14,

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },

  header: {
    height: 120,
    width: "102%",
    backgroundColor: "purple",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  stat: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    margin: 5,
    justifyContent: "space-between",
    alignItems: "center",
    height: "10%",
    padding: 10,
    backgroundColor: "#f8ebeb",
    borderRadius: 14,
  },
  dashboard: {
    backgroundColor: "blue",
    width: "85%",
    borderRadius: 14,

    height: "25%",
    padding: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
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
    backgroundColor: "green",
    justifyContent: "start",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },

  icon: {
    position: "absolute",
    top: 0,
    right: 0,
    height: 120,
    width: "30%",
    backgroundColor: "brown",
    justifyContent: "center",
    alignItems: "center",
  },
  barChart: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 120,
    width: "70%",
    backgroundColor: "purple",
    justifyContent: "center",
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
