import { View, Text, ScrollView } from "react-native";
import React from "react";
import Gradient from "@/components/Gradient";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import AffirmationsGallery from "@/components/Affirmations";

const Affirmations = () => {
  return (
    <View className="flex-1">
      <Gradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <ScrollView>
          <View className="mb-6">
            <Text className="text-gray-200 text-left text-4xl font-bold mt-2">
              Affirmations
            </Text>
            <Text className="text-indigo-100 text-left mt-2">
              Speak your truth.
            </Text>
          </View>
          <View>
            {AFFIRMATION_GALLERY.map((item) => (
              <AffirmationsGallery
                key={item.title}
                title={item.title}
                previews={item.data}
              />
            ))}
          </View>
        </ScrollView>
      </Gradient>
    </View>
  );
};

export default Affirmations;
