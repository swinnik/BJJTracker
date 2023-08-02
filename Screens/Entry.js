import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

const Entry = ({ route }) => {
  const { entry, setFilter } = route.params;
  console.log(route.params);
  const [body, setBody] = useState(entry.text);

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.topRow}>
          <Text>{entry.title}</Text>
          <Text>Written: {entry.formattedDate}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text>BODY</Text>
        <Text> Edit</Text>
        <Text>{body}</Text>
      </View>
      <View style={styles.skills}>
        <Text>SKILLS</Text>
        <Text>{entry.skills.join(", ")}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    backgroundColor: "lightblue",
    padding: 10,
  },

  body: {
    backgroundColor: "lightgrey",
    padding: 10,
    marginVertical: 10,
  },
  skills: {
    backgroundColor: "lightgreen",
    padding: 10,
  },
});

export default Entry;
