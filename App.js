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
import Landing from "./Screens/Landing";
import Entry from "./Screens/Entry";

const Stack = createStackNavigator();

export default function App() {
  return (
    <EntriesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{ title: "Landing Page" }}
          />
          <Stack.Screen
            name="Entry"
            component={Entry}
            options={{ title: "Entry" }}
          />
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
