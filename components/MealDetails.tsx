import { StyleSheet, Text, View } from "react-native";

export default function MealDetails({
  duration,
  affordability,
  complexity,
}: {
  duration: number;
  affordability: string;
  complexity: string;
}) {
  return (
    <View style={styles.explainContainer}>
      <Text style={styles.explainText}>{duration}m</Text>
      <Text style={styles.explainText}>{affordability}</Text>
      <Text style={styles.explainText}>{complexity}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  explainContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginBottom: 8,
  },
  explainText: {
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "medium",
  },
});
