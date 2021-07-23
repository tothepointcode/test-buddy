import React from "react";
import { View, Text, StyleSheet } from "react-native";

// components
import BigText from "./../components/BigText";
import MyTextInput from "./../components/MyTextInput";

interface HomeProps {
  name: string;
}

const Home = (props: HomeProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <BigText title="Welcome!" style={{ color: "black", fontWeight: 'bold' }} />
      <Text style={styles.text}>Enter your team {props.name}</Text>
      <MyTextInput label="Your team" placeholder="Eg. FC Barcelona"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9CA3AF",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 35
  },
  text: {
    color: "#fff",
  },
});

export default Home;
