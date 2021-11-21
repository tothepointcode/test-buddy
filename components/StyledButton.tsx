import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  ActivityIndicator,
} from "react-native";

const StyledButton = ({
  title,
  activity,
  style,
  onPress,
}: {
  title: string;
  activity: boolean;
  style?: any;
  onPress: (event: GestureResponderEvent) => void;
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {!activity && <Text style={[styles.text, style]}>{title}</Text>}
      {activity && <ActivityIndicator size="small" color="white" />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#bf026f",
    padding: 10,
    borderRadius: 25,
    width: "60%",
  },
});

export default StyledButton;
