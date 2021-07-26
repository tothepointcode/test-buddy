import React from "react";
import { View, Text, StyleSheet } from "react-native";

// components
import BigText from "./../components/BigText";
import SmallText from "./../components/SmallText";
import MyTextInput from "./../components/MyTextInput";
import ColorModView from "./../components/ColorModView";

// colors
import { Colors } from "./../components/Colors";

interface HomeProps {
  name: string;
}

const { gray1, gray2, white, black } = Colors;

const Home = (props: HomeProps): JSX.Element => {
  return (
    <ColorModView
      color1={gray2}
      color2="teal"
      color3={gray1}
      style={styles.container}
    >
      <BigText
        title="Welcome!"
        style={{ color: black, fontFamily: "sans-serif-medium" }}
      />
      <SmallText title="To My Playground" style={{ color: white }} />
      <MyTextInput
        iconName="sports-club"
        label="Your team"
        placeholder="Eg. FC Barcelona"
      />
      <MyTextInput
        iconName="sports-club"
        label="Your 2nd team"
        placeholder="Eg. Atletico de Madrid"
      />
      <Text style={styles.text}>From Env: {props.name}</Text>
    </ColorModView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 35,
  },
  text: {
    color: white,
  },
});

export default Home;
