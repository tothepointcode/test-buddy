import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// colors
import { Colors } from "./../components/Colors";
const { dark2, white } = Colors;

import Home from "./../screens/Home";
import Dashboard from "./../screens/Dashboard";
import Modal from "./../screens/Modal";

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: white,
        headerStyle: { backgroundColor: dark2 },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen
        name="Modal"
        component={Modal}
        options={{
          presentation: "transparentModal",
          headerShown: false,
          cardOverlayEnabled: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
