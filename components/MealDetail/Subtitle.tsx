import { StyleSheet, Text, View } from "react-native";

export default function Subtitle({ subtitle }: { subtitle: string }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontWeight: "bold",
    fontSize: 18,
    margin: 8,
    textAlign: "center",
    color: "#552a10ff",
  },
  subtitleContainer: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    marginHorizontal: 24,
    padding: 4,
    marginBottom: 8,
  },
});
