import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

interface InputProps {
  placeholder: string;
  label: string;
  inputStyle?: any;
  labelStyle?: any;
}

const MyTextInput: React.FC<InputProps> = (props): JSX.Element => {
  const { label, labelStyle, inputStyle } = props;

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <TextInput
        {...props}
        placeholderTextColor="#919191"
        style={[styles.input, inputStyle]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    marginVertical: 15,
  },
  input: {
    color: "#fff",
    fontSize: 14,
    padding: 15,
    backgroundColor: "#111",
    borderRadius: 15,
    marginTop: 5,
  },
  label: {
    color: "#111",
    fontSize: 13,
  },
});

export default MyTextInput;
