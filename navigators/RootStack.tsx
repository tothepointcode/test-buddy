import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./../screens/Home";
import Dashboard from "./../screens/Dashboard";

const Stack = createStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Dashboard" component={Dashboard}/>
        </Stack.Navigator>
    )
}

export default RootStack;