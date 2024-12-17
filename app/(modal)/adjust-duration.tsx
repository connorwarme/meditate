import { View, Text } from "react-native";
import React, { useContext } from "react";
import Gradient from "@/components/Gradient";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import { useRouter } from "expo-router";
import { MeditationDurationContext } from "@/context/meditationDuration";

// create context
// create provider
// share duration, setDuration

const AdjustDuration = () => {
  const router = useRouter();
  const { setDuration } = useContext(MeditationDurationContext);
  const setMeditationTime = (time: number) => {
    // implement this function
    setDuration(time);
    router.back();
  };
  return (
    <View className="flex-1">
      <Gradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className="flex">
          <BackButton />
        </View>
        <View className="h-2/5 justify-center">
          <View className="">
            <Text className="text-white font-bold text-3xl text-center mb-12">
              Adjust Meditation Duration
            </Text>
            <View className="flex-1 gap-6">
              <Button title="1 minute" onPress={() => setMeditationTime(60)} />
              <Button
                title="5 minutes"
                onPress={() => setMeditationTime(5 * 60)}
              />
              <Button
                title="10 minutes"
                onPress={() => setMeditationTime(10 * 60)}
              />
              <Button
                title="15 minutes"
                onPress={() => setMeditationTime(15 * 60)}
              />
            </View>
          </View>
        </View>
      </Gradient>
    </View>
  );
};

export default AdjustDuration;
