// app/index.js
import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/**
 * Three tiny screens: replace the Text with whatever you want.
 */
function Tab1Screen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>Project parking tab 1</Text>
    </View>
  );
}
function Tab2Screen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>Project parking tab 2</Text>
    </View>
  );
}
function Tab3Screen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>Project parking tab 3</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // hide top header
        // add any tabBar options here
      }}
    >
      <Tab.Screen name="Tab1" component={Tab1Screen} options={{ title: "Tab 1" }} />
      <Tab.Screen name="Tab2" component={Tab2Screen} options={{ title: "Tab 2" }} />
      <Tab.Screen name="Tab3" component={Tab3Screen} options={{ title: "Tab 3" }} />
    </Tab.Navigator>
  );
}
