import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

export default function IconButton({
  icon,
  color,
  onPress,
}: {
  icon: IoniconName;
  color?: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      style={({ pressed }) => (pressed ? styles.pressed : null)}
      onPress={onPress}
    >
      <Ionicons name={"star"} size={24} color={color ?? "black"} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
