import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import EntriesContext from "../EntriesContext";
import { ScrollView } from "react-native";

const SkillsList = ({ navigation }) => {
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
      <View style={styles.filterBlock}>
        <View>
          <Text style={styles.boldText}>SkillsList</Text>
          <ScrollView style={styles.skillList}>
            {skills
              .sort()
              .filter((skill) => {
                return skill !== "";
              })
              .map((skill, index) => (
                <TouchableOpacity
                  key={skill.skill}
                  onPress={() => handleSkillPress(skill)}
                >
                  <Text>{skill}</Text>
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>
        <View>
          <Text style={styles.boldText}>Filter</Text>
          <ScrollView style={styles.skillList}>
            {filter.map((skill, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleSkillPress(skill)}
              >
                <Text>{skill}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {entries
          .filter((entry) =>
            filter.every(
              (skill) => entry.skills.includes(skill) && skills !== ""
            )
          )
          .map((entry, index) => (
            <TouchableOpacity
              key={entry.index}
              onPress={() =>
                navigation.navigate("Entry", {
                  entry: entry,
                  setFilter: setFilter,
                })
              }
            >
              <View style={styles.entry}>
                <View style={styles.entryTop}>
                  <Text>{entry.title}</Text>
                  <Text>{entry.formattedDate}</Text>
                </View>
                {/* <Text>{entry.text}</Text> */}
                <View style={styles.entryTop}>
                  {entry.skills.map((skill, index) => (
                    <View key={index}>
                      <Text onPress={() => handleSkillPress(skill)}>
                        {/* {skill} */}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  filterBlock: {
    marginBottom: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    maxHeight: 180,
    backgroundColor: "lightgreen",
  },
  skillList: {
    backgroundColor: "lightgreen",
    width: 170,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5,
    margin: 2,
    borderRadius: 10,
  },

  scrollView: {
    // marginHorizontal: 20,
    // borderRadius: 10,
    backgroundColor: "lightblue",
    padding: 10,
  },
  entryTop: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 18,
    margin: 5,
  },
  entry: {
    display: "flex",
    padding: 10,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
});

export default SkillsList;
