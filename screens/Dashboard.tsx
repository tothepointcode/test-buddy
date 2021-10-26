import React from "react";
import { StyleSheet, View } from "react-native";

// components
import ColorModView from "./../components/ColorModView";
import HomeCarousel from "./../components/HomeCarousel";

// colors
import { Colors } from "./../components/Colors";

interface DashboardProps {}

const { gray1, gray2 } = Colors;

const Dashboard = (props: DashboardProps): JSX.Element => {
  const data = [
    {
      title: "Item 1",
      text: "Text 1",
      img: "https://images.unsplash.com/photo-1601404294583-bb2f4510c357?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    },
    {
      title: "Item 2",
      text: "Text 2",
      img: "https://images.unsplash.com/photo-1600411832986-5a4477b64a1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      title: "Item 3",
      text: "Text 3",
      img: "https://images.unsplash.com/photo-1605529000799-f28efe8a6dd0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
  ];

  return (
    <ColorModView
      color1={gray2}
      color2="teal"
      color3={gray1}
      style={styles.container}
      aniDuration={1000}
    >
      <View style={styles.carouView}>
        <HomeCarousel type="default" dataItems={data} />
      </View>
    </ColorModView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray1,
    justifyContent: "center",
    alignItems: "center",
  },
  carouView: {
    marginTop: 25,
  },
});

export default Dashboard;
