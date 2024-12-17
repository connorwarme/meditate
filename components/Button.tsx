import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  textStyles?: string;
  containerStyles?: string;
}
const Button = ({
  title,
  onPress,
  disabled = false,
  textStyles = "",
  containerStyles = "",
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`bg-white rounded-xl p-2 px-4 min-h-16 flex justify-center items-center disabled:opacity-75 ${containerStyles}`}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text className={`font-semibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
