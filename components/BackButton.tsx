import { View, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const BackButton = () => {
  const router = useRouter();
  return (
    <View className="">
      <Pressable onPress={() => router.back()} className="mt-6 ml-6">
        <Ionicons name="chevron-back-circle-outline" size={48} color="white" />
      </Pressable>
    </View>
  );
};

export default BackButton;
