import { StatusBar } from "expo-status-bar";
import React from "react";

// env
import { APP_NAME } from "react-native-dotenv";

// screens
import Home from "./screens/Home";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Home name={APP_NAME} />
    </>
  );
}
