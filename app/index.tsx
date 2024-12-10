import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import React from "react";
import Gradient from "@/components/Gradient";
import { StatusBar } from "expo-status-bar";
import Button from "@/components/Button";

import beachImage from "@/assets/meditation-images/beach.webp";
import { useRouter } from "expo-router";

const App = () => {
  const router = useRouter();

  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <Gradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <SafeAreaView className="flex-1 px-1 justify-between">
            <View>
              <Text className="text-white text-center text-4xl font-bold mt-2">
                Mindful Meditations
              </Text>
              <Text className="text-white text-center mt-2">
                Simplifying meditation for a healthier and happier life.
              </Text>
            </View>
            <View className="mx-8 my-12">
              <Button
                title="Get Started"
                onPress={() => router.push("/nature")}
              />
            </View>
          </SafeAreaView>
          <StatusBar style="light" />
        </Gradient>
      </ImageBackground>
    </View>
  );
};

export default App;
