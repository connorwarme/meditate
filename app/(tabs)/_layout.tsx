import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import React from "react";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      {/* <Tabs.Screen name="index" options={{ tabBarLabel: "Home" }} /> */}
      <Tabs.Screen
        name="nature"
        options={{
          tabBarLabel: "Meditate",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="meditation" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="affirmations"
        options={{
          tabBarLabel: "Affirmations",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="book-open" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
