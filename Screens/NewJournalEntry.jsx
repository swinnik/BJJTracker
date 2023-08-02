// NewJournalEntries.js
import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Input } from "react-native-elements";
import EntriesContext from "../EntriesContext";

const NewJournalEntries = ({ navigation }) => {
  const { entries, setEntries, skills, setSkills } = useContext(EntriesContext);
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const [title, setTitle] = useState("New Journal Entry");
  const [text, setText] = useState("");
  const [keywords, setKeywords] = useState("");

  useEffect(() => {
    console.log(entries);
    console.log("SKILLS", skills);
  }, [entries]);

  const submitEntry = () => {
    const newSkills = keywords.replace(/[ ]+/g, "").toLowerCase().split(",");
    const entry = {
      title,
      text,
      newSkills,
      formattedDate,
    };

    setEntries((prevEntries) => [...prevEntries, entry]);
    setSkills((prevSkills) => {
      const uniqueNewSkills = newSkills.filter(
        (newSkill) => !prevSkills.includes(newSkill)
      );
      return [...prevSkills, ...uniqueNewSkills];
    });
    navigation.navigate("Main");
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.header}>
        <TextInput
          title="Journal Entry"
          value={title}
          onChangeText={setTitle}
        />
        <Text>{formattedDate}</Text>
      </View>
      <TextInput
        style={styles.newEntry}
        multiline
        numberOfLines={10}
        value={text}
        onChangeText={setText}
        placeholder="NewJournal"
      ></TextInput>
      <TextInput
        style={styles.keywords}
        numberOfLines={1}
        value={keywords}
        onChangeText={setKeywords}
        placeholder="Keywords"
      ></TextInput>
      <TouchableOpacity style={styles.submit} onPress={submitEntry}>
        <Text>Submit Entry</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    height: 100,
    width: "100%",
    backgroundColor: "purple",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  newEntry: {
    marginTop: 40,
    backgroundColor: "white",
    width: "80%",
    flex: 1,
    maxHeight: 400,
    borderRadius: 14,
    padding: 10,
    margin: 10,
  },
  keywords: {
    backgroundColor: "white",
    width: "80%",
    height: 100,
    borderRadius: 14,
    padding: 10,
    margin: 10,
  },
  submit: {
    backgroundColor: "yellow",
    width: "80%",
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NewJournalEntries;
