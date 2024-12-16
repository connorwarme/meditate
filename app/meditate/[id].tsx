import { View, Text, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import meditationImages from "@/constants/meditation-images";
import Gradient from "@/components/Gradient";
import { useLocalSearchParams } from "expo-router";
import Button from "@/components/Button";
import BackButton from "@/components/BackButton";
import { Audio } from "expo-av";
import { MEDITATION_DATA, AUDIO_FILES } from "@/constants/MeditationData";

const Meditation = () => {
  const [isMeditating, setIsMeditating] = useState(false);
  const [meditationTime, setMeditationTime] = useState(0);
  const [audio, setAudio] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { id } = useLocalSearchParams();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (meditationTime === 0) {
      setIsMeditating(false);
      return;
    }
    if (isMeditating) {
      timer = setTimeout(() => {
        setMeditationTime((prev) => prev - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [isMeditating, meditationTime]);

  // on unmount, unload the audio
  useEffect(() => {
    return () => {
      audio?.unloadAsync();
      // could I create a way to fade out the audio?
    };
  }, [audio]);

  const formattedTimeMinutes = Math.floor(meditationTime / 60)
    .toString()
    .padStart(2, "0");
  const formattedTimeSeconds = (meditationTime % 60)
    .toString()
    .padStart(2, "0");

  const initializeAudio = async () => {
    // find the audio file name from the MEDITATION_DATA array
    const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;
    // use it as the key to the audio file in the AUDIO_FILES object
    const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[audioFileName]);
    setAudio(sound);
    return sound;
  };
  const toggleSound = async () => {
    // make sure we have the audio object
    const sound = audio ? audio : await initializeAudio();
    // check audio status
    const status = await sound?.getStatusAsync();
    // if the audio is playing, pause it and vice versa
    if (status?.isLoaded && !isPlaying) {
      await sound?.playAsync();
      setIsPlaying(true);
    } else {
      await sound?.pauseAsync();
      setIsPlaying(false);
    }
  };

  const toggleMeditation = async () => {
    if (meditationTime === 0) {
      setMeditationTime(60);
    }
    setIsMeditating(!isMeditating);

    await toggleSound();
  };

  return (
    <View className="flex-1">
      <ImageBackground
        source={meditationImages[Number(id) - 1]}
        resizeMode="cover"
        className="flex-1"
      >
        <Gradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          gradientStyle={{ flex: 1, height: "100%" }}
        >
          <BackButton />
          <View className="flex-1 justify-center px-4 items-center">
            <View className="w-48 h-48 bg-slate-600/80 rounded-full flex justify-center items-center">
              <Text className="text-yellow-600 text-3xl">
                {formattedTimeMinutes}:{formattedTimeSeconds}
              </Text>
            </View>
          </View>
          <View className="px-8 py-8">
            <Button title={"Start Meditation"} onPress={toggleMeditation} />
          </View>
        </Gradient>
      </ImageBackground>
    </View>
  );
};

export default Meditation;
