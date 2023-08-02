// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button, View } from "react-native";
import NewJournalEntry from "./Screens/NewJournalEntry";
import SkillsList from "./Screens/SkillsList";
import MainScreen from "./Screens/Main";
import { EntriesProvider } from "./EntriesContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <EntriesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{ title: "Main Page" }}
          />
          <Stack.Screen
            name="NewJournalEntry"
            component={NewJournalEntry}
            options={{ title: "New Journal Entries" }}
          />
          <Stack.Screen
            name="SkillsList"
            component={SkillsList}
            options={{ title: "Skills List" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </EntriesProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
