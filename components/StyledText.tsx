import React from "react";
import { Text, StyleSheet } from "react-native";

import AppLoading from "expo-app-loading";
import { useFonts, Italianno_400Regular } from "@expo-google-fonts/italianno";

const StyledText = ({ title }) => {
  let [fontsLoaded] = useFonts({
    Italianno_400Regular,
  });
  if (!fontsLoaded) return <AppLoading />;
  return <Text style={[styles.text]}>{title}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Italianno_400Regular",
  },
});

export default StyledText;
