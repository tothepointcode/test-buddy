import React from "react";
import { StyleSheet } from "react-native";

// components
import BigText from "./../components/BigText";
import ColorModView from "./../components/ColorModView";
import HomeCarousel from "./../components/HomeCarousel";

// colors
import { Colors } from "./../components/Colors";

interface DashboardProps {}

const { gray1, gray2, black } = Colors;

const Dashboard = (props: DashboardProps): JSX.Element => {
  const data = [
    {
      title: "Item 1",
      text: "Text 1",
    },
    {
      title: "Item 2",
      text: "Text 2",
    },
    {
      title: "Item 3",
      text: "Text 3",
    },
    {
      title: "Item 4",
      text: "Text 4",
    },
    {
      title: "Item 5",
      text: "Text 5",
    },
  ];

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
      <HomeCarousel dataItems={data}/>
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
