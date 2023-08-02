import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Landing = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={() => navigation.navigate("Main")}>
        <Image style={styles.shaka} source={require("../assets/shaka.webp")} />
      </TouchableOpacity>
      <Text style={styles.title}> BJJ Tracker is Loading. OSS!</Text>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginTop: 20,
  },
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "light-grey",
  },

  shaka: {
    overflow: "show",
    width: 200,
    height: 200,
    backgroundColor: "purple",
    borderRadius: 100,
    // boxShadow: "0 0 0 5px rgba(0, 0, 0, 0.5)",
  },
});
