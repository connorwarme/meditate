import { Stack } from "expo-router";
import { MeditationDurationProvider } from "@/context/meditationDuration";
import "../assets/styles/global.css";

export default function RootLayout() {
  return (
    <MeditationDurationProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="meditate/[id]" options={{ headerShown: false }} />
        <Stack.Screen
          name="(modal)/adjust-duration"
          options={{ headerShown: false, presentation: "modal" }}
        />
      </Stack>
    </MeditationDurationProvider>
  );
}
