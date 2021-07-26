import React from "react";
import { StyleSheet } from "react-native";

// components
import BigText from "./../components/BigText";
import ColorModView from "./../components/ColorModView";

// colors
import { Colors } from "./../components/Colors";

interface DashboardProps {}

const { gray1, gray2, black } = Colors;

const Dashboard = (props: DashboardProps): JSX.Element => {
  return (
    <ColorModView
      color1={gray2}
      color2="teal"
      color3={gray1}
      style={styles.container}
    >
      <BigText
        title="Dashboard!"
        style={{ color: black, fontFamily: "sans-serif-medium" }}
      />
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
});

export default Dashboard;
