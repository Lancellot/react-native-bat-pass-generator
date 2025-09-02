import React from "react";
import { Text, Pressable, GestureResponderEvent } from "react-native";
import { styles } from "./BatButtonStyles";

interface BatButtonProps {
  onPress: (event: GestureResponderEvent) => void;
}

export function BatButton({ onPress }: BatButtonProps) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>Activate Bat Signal</Text>
    </Pressable>
  );
}
