import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// colors
import { Colors } from "./../components/Colors";
const { gray1, gray2, white, black } = Colors;

import Home from "./../screens/Home";
import Dashboard from "./../screens/Dashboard";

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: white,
        headerStyle: { backgroundColor: black },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default RootStack;
