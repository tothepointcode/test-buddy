import React from "react";
import { View, Text, StyleSheet } from "react-native";

// components
import BigText from "./../components/BigText";
import SmallText from "./../components/SmallText";
import MyTextInput from "./../components/MyTextInput";

interface HomeProps {
  name: string;
}

const Home = (props: HomeProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <BigText
        title="Welcome!"
        style={{ color: "black", fontWeight: "bold" }}
      />
      <SmallText title="To My Playground" style={{ color: "white" }} />
      <MyTextInput label="Your team" placeholder="Eg. FC Barcelona" />
      <Text style={styles.text}>From Env: {props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9CA3AF",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 35,
  },
  text: {
    color: "#fff",
  },
});

export default Home;
