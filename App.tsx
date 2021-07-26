import { StatusBar } from "expo-status-bar";
import React from "react";

// env
import { APP_NAME } from "react-native-dotenv";
import { NavigationContainer } from '@react-navigation/native';

// screens
import RootStack from "./navigators/RootStack";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <RootStack />
    </NavigationContainer>
  );
}
