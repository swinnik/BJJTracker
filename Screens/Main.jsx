import { View, Text, StyleSheet, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";

const MainScreen = ({ navigation }) => {
  const handleNewEntryPress = () => {
    navigation.navigate("NewJournalEntry");
  };

  return (
    <View style={styles.container}>
      <View style={styles.barChart}>
        <Text> Bar Chart Attendance</Text>
      </View>
      <View style={styles.icon}>
        <Text> Academy Logo</Text>
      </View>
      <Text>Sup tyler!</Text>
      <Button
        title="NewEntry"
        onPress={() => navigation.navigate("NewJournalEntry")}
      ></Button>
      <Button
        title="SkillsList"
        onPress={() => navigation.navigate("SkillsList")}
      ></Button>
      <StatusBar style="auto" />
      <View style={styles.footer}>
        <Text> Timer Until Next Class</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    height: 120,
    width: "100%",
    backgroundColor: "green",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    position: "absolute",
    top: 0,
    right: 0,
    height: 120,
    width: "30%",
    backgroundColor: "brown",
    flex: 1,
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MainScreen;
