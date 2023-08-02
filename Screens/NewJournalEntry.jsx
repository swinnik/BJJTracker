import React, { useState, useEffect, useContext, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { Input } from "react-native-elements";
import EntriesContext from "../EntriesContext";

const NewJournalEntries = ({ navigation }) => {
  const { entries, setEntries, skills, setSkills } = useContext(EntriesContext);
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const [title, setTitle] = useState("Journal Title");
  const [text, setText] = useState("");
  const [keywords, setKeywords] = useState("");

  useEffect(() => {
    console.log(entries);
    console.log("SKILLS", skills);
    // titleInputRef.current.focus(); // Focus on the title input when the component mounts
  }, [entries]);

  const submitEntry = () => {
    const newSkills = keywords.replace(/[ ]+/g, "").toLowerCase().split(",");
    const entry = {
      title,
      text,
      skills: newSkills,
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

  const handleKeywordsSubmit = () => {
    Keyboard.dismiss(); // Dismiss the keyboard on "Done" press
    submitEntry();
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.header}>
        <View style={styles.titleInputContainer}>
          <TextInput
            style={styles.titleInput}
            value={title}
            onChangeText={setTitle}
            returnKeyType="next" // Move focus to the next input on "Next" press
          />
        </View>
        <TextInput
          value={formattedDate}
          editable={false} // Disable editing for formattedDate
        />
      </View>
      <TextInput
        style={styles.newEntry}
        multiline
        numberOfLines={10}
        placeholder="Journal Entry"
        value={text}
        onChangeText={setText}
        returnKeyType="next"
        onSubmitEditing={handleKeywordsSubmit} // Move focus to the next input on "Next" press
      />
      <TextInput
        style={styles.keywords}
        numberOfLines={1}
        value={keywords}
        onChangeText={setKeywords}
        placeholder="Skills"
        returnKeyType="done" // Dismiss the keyboard on "Done" press
        onSubmitEditing={handleKeywordsSubmit} // Call the submit function on "Done" press
      />
      <TouchableOpacity style={styles.submit} onPress={submitEntry}>
        <Text style={{ fontSize: 20 }}>Submit Entry</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  titleInputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  titleInput: {
    fontSize: 16,
    padding: 5,
  },
  header: {
    position: "absolute",
    top: 0,
    height: 100,
    width: "100%",
    backgroundColor: "#CBC3E3",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  newEntry: {
    marginTop: 40,
    backgroundColor: "white",
    width: "90%",
    flex: 1,
    maxHeight: 400,
    borderRadius: 14,
    padding: 20,
    paddingTop: 20,
    margin: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  keywords: {
    backgroundColor: "white",
    width: "90%",
    height: 100,
    borderRadius: 14,
    padding: 10,
    margin: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  submit: {
    backgroundColor: "yellow",
    width: "90%",
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
});

export default NewJournalEntries;
