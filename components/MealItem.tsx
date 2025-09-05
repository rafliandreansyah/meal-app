import Meal from "@/models/meal";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function MealItem({ meal }: { meal: Meal }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressContainer : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />
          </View>
          <Text style={styles.title}>{meal.title}</Text>
          <View style={styles.explainContainer}>
            <Text style={styles.explainText}>{meal.duration}m</Text>
            <Text style={styles.explainText}>{meal.affordability}</Text>
            <Text style={styles.explainText}>{meal.complexity}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    margin: 16,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  pressContainer: {
    opacity: 0.8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
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
