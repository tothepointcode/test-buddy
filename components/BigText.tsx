import React from "react";
import { Text, StyleSheet } from "react-native";

interface TextProps {
  title: string;
  style: any;
}

const BigText: React.FC<TextProps> = ({ title, style }): JSX.Element => {
  return <Text style={[styles.text, style]}>{title}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 24,
  },
});

export default BigText;
