import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

// icon
import { Entypo } from "@expo/vector-icons";

interface InputProps {
  placeholder: string;
  label: string;
  iconName: string | any;
  inputStyle?: any;
  labelStyle?: any;
}

const MyTextInput: React.FC<InputProps> = (props): JSX.Element => {
  const { label, labelStyle, inputStyle, iconName } = props;

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <TextInput
        {...props}
        placeholderTextColor="#919191"
        style={[styles.input, inputStyle]}
      />
      <Entypo
        style={styles.inputIcon}
        name={iconName}
        size={24}
        color="#919191"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    marginVertical: 15,
    position: "relative",
  },
  input: {
    color: "#fff",
    fontSize: 14,
    padding: 15,
    backgroundColor: "#111",
    borderRadius: 15,
    marginTop: 5,
    paddingLeft: 50,
  },
  label: {
    color: "#111",
    fontSize: 13,
  },
  inputIcon: {
    position: "absolute",
    top: 40,
    left: 15,
  },
});

export default MyTextInput;
