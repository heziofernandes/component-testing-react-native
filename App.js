import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "./src/pages/SignIn";
import Home from "./src/pages/Home";

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: "Sign In" }}
      />
      <Stack.Screen
        name="App"
        component={Home}
        options={{ title: "Success!" }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
