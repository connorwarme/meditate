import { View, Text, FlatList, Pressable, Image } from "react-native";
import React from "react";
import { GalleryPreview } from "@/constants/models/Affirmations";
import { Link } from "expo-router";

interface AffirmationsGalleryProps {
  title: string;
  previews: GalleryPreview[];
}

const AffirmationsGallery = ({ title, previews }: AffirmationsGalleryProps) => {
  return (
    <View className="my-5">
      <View className="mb-2">
        <Text className="text-zinc-100 font-bold text-xl">{title}</Text>
      </View>
      <View>
        <FlatList
          data={previews}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Link href={`/affirmations/${item.id}`} asChild>
              <Pressable>
                <View className="h-36 w-32 rounded-md mr-4">
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    className="h-full w-full rounded-sm"
                  />
                </View>
              </Pressable>
            </Link>
          )}
        />
      </View>
    </View>
  );
};

export default AffirmationsGallery;
