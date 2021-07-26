import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  GestureResponderEvent,
} from "react-native";
// colors
import { Colors } from "./../components/Colors";

const { gray1, gray2, white, black } = Colors;

interface ButtonProps {
  style?: any;
  children: React.ReactNode;
  buttonHandler: (event: GestureResponderEvent) => void;
}

const MediumButton = (props: ButtonProps): JSX.Element => {
  return (
    <TouchableOpacity
      style={[props.style, styles.button]}
      onPress={props.buttonHandler}
    >
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: white,
    padding: 15,
    borderRadius: 15,
    marginTop: 5,
  },
  text: {
    fontSize: 15,
    textAlign: "center",
    letterSpacing: 3,
  },
});

export default MediumButton;
