import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

// components
import StyledText from "./../components/StyledText";

// colors
import { Colors } from "./../components/Colors";

import { useFonts, Italianno_400Regular } from "@expo-google-fonts/italianno";
import { Lobster_400Regular } from "@expo-google-fonts/lobster";

import AppLoading from "expo-app-loading";

const { white } = Colors;

const FontShowcase = (): JSX.Element => {
  let [fontsLoaded] = useFonts({
    Italianno_400Regular,
    Lobster_400Regular,
  });

  if (!fontsLoaded) return <AppLoading />;
  return (
    <View style={styles.background}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={[styles.heading, { fontFamily: "Lobster_400Regular" }]}>
          Fonts Showcase
        </Text>
      </View>

      <View style={{ flex: 2, width: "100%", alignItems: "center" }}>
        <View style={styles.section}>
          <Text style={[styles.text]}>Hello ToThePointCoders</Text>
        </View>
        <View style={styles.section}>
          <Text style={[styles.text]}>Another episode is here!</Text>
        </View>
        <View style={styles.section}>
          <Text style={[styles.text]}>It's all about custom fonts</Text>
        </View>
        <View style={styles.section}>
          <StyledText title="Likes are FREE ;)" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#051c26",
  },
  section: {
    backgroundColor: "rgb(6, 35, 48)",
    width: "90%",
    minHeight: 100,
    justifyContent: "center",
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 20,
    marginBottom: 35,
  },
  text: {
    color: white,
    fontSize: 16,
    textAlign: "center",
  },
  heading: {
    color: "#bf026f",
    fontSize: 40,
  },
});

export default FontShowcase;
