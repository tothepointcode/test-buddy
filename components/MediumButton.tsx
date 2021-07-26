import React, { useRef, useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  Animated,
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
  const bgAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(bgAnim, {
      toValue: 2,
      useNativeDriver: false,
      duration: 2000,
      delay: 2000,
    }).start();
  }, [bgAnim]);

  return (
    <TouchableOpacity
      style={[styles.button, props.style]}
      onPress={props.buttonHandler}
    >
      <Animated.Text
        style={[
          styles.text,
          {
            color: bgAnim.interpolate({
              inputRange: [0, 2],
              outputRange: ["teal", black],
            }),
          },
        ]}
      >
        {props.children}
      </Animated.Text>
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
