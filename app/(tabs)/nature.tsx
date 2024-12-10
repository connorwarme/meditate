import { View, Text, FlatList, ImageBackground, Pressable } from "react-native";
import React from "react";
import Gradient from "@/components/Gradient";
import { MEDITATION_DATA } from "@/constants/MeditationData";
import meditationImages from "@/constants/meditation-images";

const Nature = () => {
  return (
    <View className="flex-1">
      <Gradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className="mb-6">
          <Text className="text-gray-200 text-left text-4xl font-bold mt-2">
            Nature Meditations
          </Text>
          <Text className="text-indigo-100 text-left mt-2">
            Connect with nature and find peace within.
          </Text>
        </View>
        <View>
          <FlatList
            data={MEDITATION_DATA}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            className="mb-20"
            renderItem={({ item }) => (
              <Pressable className="my-3 h-48 rounded-md overflow-hidden">
                <ImageBackground
                  source={meditationImages[item.id - 1]}
                  className="flex-1 rounded-xl justify-center"
                >
                  <Gradient
                    colors={["transparent", "rgba(0,0,0,0.7)"]}
                    gradientStyle={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    containerStyle="justify-center"
                  >
                    <Text className="text-gray-100 text-3xl text-center font-bold">
                      {item.title}
                    </Text>
                  </Gradient>
                </ImageBackground>
              </Pressable>
            )}
          />
        </View>
      </Gradient>
    </View>
  );
};

export default Nature;
