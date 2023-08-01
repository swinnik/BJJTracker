import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import EntriesContext from "../EntriesContext";
import { ScrollView } from "react-native";

const SkillsList = () => {
  const { entries, setEntries, skills } = useContext(EntriesContext);
  const [filter, setFilter] = useState([]);

  const handleSkillPress = (skill) => {
    setFilter((prevSkills) => {
      if (prevSkills.includes(skill)) {
        return prevSkills.filter((s) => s !== skill);
      } else {
        return [...prevSkills, skill];
      }
    });
    console.log(skill, filter);
  };

  return (
    <View>
      <Text style={styles.boldText}>Filter</Text>
      <View style={{ backgroundColor: "grey" }}>
        {filter.map((skill, index) => (
          <TouchableOpacity key={index} onPress={() => handleSkillPress(skill)}>
            <Text>{skill}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.boldText}>SkillsList</Text>
      {skills.map((skill, index) => (
        <TouchableOpacity
          key={skill.skill}
          onPress={() => handleSkillPress(skill)}
        >
          <Text>{skill}</Text>
        </TouchableOpacity>
      ))}
      <ScrollView style={styles.scrollView}>
        {entries
          .filter((entry) =>
            filter.every((skill) => entry.newSkills.includes(skill))
          )
          .map((entry, index) => (
            <View key={entry.index} style={styles.entry}>
              <View style={styles.entryTop}>
                <Text>{entry.title}</Text>
                <Text>{entry.formattedDate}</Text>
              </View>
              <Text>{entry.text}</Text>
              <View style={styles.entryTop}>
                {entry.newSkills.map((skill, index) => (
                  <View key={index}>
                    <Text onPress={() => handleSkillPress(skill)}>{skill}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 100,
  },
  entryTop: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "blue",
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  entry: {
    borderWidth: 1,
    borderColor: "black",
    display: "flex",
    padding: 10,
    margin: 10,
  },
});

export default SkillsList;
