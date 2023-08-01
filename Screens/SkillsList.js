import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import EntriesContext from "../EntriesContext";
import { ScrollView } from "react-native";

const SkillsList = () => {
  const { entries, setEntries, skills } = useContext(EntriesContext);
  const [filter, setFilter] = useState([]);

  return (
    <View>
      <Text style={styles.boldText}>Filter</Text>
      <View style={{ backgroundColor: " grey" }}>
        {filter.map((skill, index) => (
          <Text key={skill.index}>{skill}</Text>
        ))}
      </View>
      <Text style={styles.boldText}>SkillsList</Text>
      {skills.map((skill, index) => (
        <TouchableOpacity
          key={skill.skill}
          onPress={() => {
            setFilter((prevSkills) => {
              if (prevSkills.includes(skill)) {
                return prevSkills.filter((s) => s !== skill);
              }
              if (!prevSkills.includes(skill)) {
                return [...prevSkills, skill];
              }
            });
            console.log(skill, filter);
          }}
        >
          <Text>{skill}</Text>
        </TouchableOpacity>
      ))}
      <ScrollView style={styles.scrollView}>
        {entries
          .filter(
            (entry) => filter.every((skill) => entry.newSkills.includes(skill))
            // entry.newSkills.every((skill) => filter.includes(skill))
          )

          //   filter.newSkills.includes(entry))
          .map((entry, index) => (
            <View key={entry.index} style={styles.entry}>
              <Text>{entry.title}</Text>
              <Text>{entry.text}</Text>
              <Text>{entry.formattedDate}</Text>
              {entry.newSkills.map((skill, index) => (
                <View key={skill.index}>
                  <Text>{skill}</Text>
                </View>
              ))}
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
  boldText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  entry: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 10,
  },
});

export default SkillsList;
