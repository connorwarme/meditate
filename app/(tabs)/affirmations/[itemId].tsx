import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import Gradient from "@/components/Gradient";
import { useLocalSearchParams, router } from "expo-router";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import { GalleryPreview } from "@/constants/models/Affirmations";
import Ionicons from "@expo/vector-icons/Ionicons";
import BackButton from "@/components/BackButton";

const AffirmationPage = () => {
  const { itemId } = useLocalSearchParams();
  const [affirmation, setAffirmation] = useState<GalleryPreview>();
  const [statements, setStatements] = useState<string[]>([]);

  useEffect(() => {
    for (let i = 0; i < AFFIRMATION_GALLERY.length; i++) {
      const affirmationArray = AFFIRMATION_GALLERY[i].data;
      const affirmationItem = affirmationArray.find(
        (item) => item.id === Number(itemId)
      );
      if (affirmationItem) {
        setAffirmation(affirmationItem);

        const sentences = affirmationItem.text.split(".");
        if (sentences[sentences.length - 1] === "") {
          sentences.pop();
        }
        setStatements(sentences);
      }
    }
  }, []);
  return (
    <View className="flex-1">
      <ImageBackground
        source={affirmation?.image}
        resizeMode="cover"
        className="flex-1"
      >
        <Gradient
          colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.8)"]}
          gradientStyle={{ flex: 1, height: "100%" }}
        >
          <View className="flex-1">
            <BackButton />
            {/* <Pressable onPress={() => router.back()} className="mt-6 ml-6">
              <Ionicons
                name="chevron-back-circle-outline"
                size={48}
                color="white"
              />
            </Pressable> */}
          </View>
          <ScrollView className="flex-1 mt-24 px-4">
            <View className="flex-1 h-full justify-center">
              <View className="h-4/5 justify-center">
                {affirmation &&
                  statements.map((sentence, index) => (
                    <Text
                      key={index}
                      className="text-zinc-100 text-center text-2xl font-bold mb-12"
                    >
                      {sentence}.
                    </Text>
                  ))}
              </View>
            </View>
          </ScrollView>
        </Gradient>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPage;
