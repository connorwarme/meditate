import { SafeAreaView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

interface GradientProps {
  colors: [string, string, ...string[]];
  children: any;
  gradientStyle?: any;
  containerStyle?: any;
}

const Gradient = ({
  colors,
  children,
  gradientStyle,
  containerStyle,
}: GradientProps) => {
  return (
    <LinearGradient
      colors={colors}
      style={gradientStyle ? { ...gradientStyle } : { flex: 1 }}
    >
      <SafeAreaView className={`flex-1 px-1 py-4 ${containerStyle}`}>
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Gradient;
