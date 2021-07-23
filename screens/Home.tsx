import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface HomeProps {
  name: string;
}

const Home = (props: HomeProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#112233",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});

export default Home;
