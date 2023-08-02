import { View, Text, StyleSheet, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";

const MainScreen = ({ navigation }) => {
  const handleNewEntryPress = () => {
    navigation.navigate("NewJournalEntry");
  };

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MainScreen;
