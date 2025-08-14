import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

export default function CategoryGridTile({
  title,
  color,
  onPress,
}: {
  title: string;
  color: string;
  onPress?: () => void;
}) {
  // This component is used to display a grid tile for each category
  // It can be used in a FlatList or any other list component
  // The Pressable component is used to make the tile clickable
  // The View component is used to wrap the Text component
  // The Text component is used to display the title of the category
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    padding: 16,
  },
  title: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    padding: 8,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
