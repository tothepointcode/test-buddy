import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

// components
import StyledText from "./../components/StyledText";
import StyledButton from "./../components/StyledButton";

// UPDATES
import * as Updates from "expo-updates";

// colors
import { Colors } from "./../components/Colors";

import { useFonts, Italianno_400Regular } from "@expo-google-fonts/italianno";
import { Lobster_400Regular } from "@expo-google-fonts/lobster";

import AppLoading from "expo-app-loading";

const { white } = Colors;

const FontShowcase = (): JSX.Element => {
  const [updateChecking, setUpdateChecking] = useState(false);
  let [fontsLoaded] = useFonts({
    Italianno_400Regular,
    Lobster_400Regular,
  });

  // auto stuff
  useEffect(() => {
    reactToUpdates();
  }, []);

  const reactToUpdates = async () => {
    Updates.addListener((event) => {
      if (event.type === Updates.UpdateEventType.UPDATE_AVAILABLE) {
        alert("An update is available. Restart your app to see it.");
        Updates.reloadAsync();
      }
    });
  };
  // auto ends

  // manual stuff
  const triggerUpdateCheck = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        alert("An update is available. Restart your app to see it.");
        // await Updates.reloadAsync();
      } else {
        alert("No update is available");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  // manual stuff ends

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

        <StyledButton
          title="Check for Updates"
          activity={updateChecking}
          onPress={async () => {
            setUpdateChecking(true);
            await triggerUpdateCheck();
            setUpdateChecking(false);
          }}
        />
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
