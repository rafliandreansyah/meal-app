import Meal from "@/models/meal";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MealDetails from "./MealDetails";

export default function MealItem({
  meal,
  onClick,
}: {
  meal: Meal;
  onClick?: (mealId: string) => void;
}) {
  function handleClick(mealId: string) {
    if (onClick) {
      onClick(mealId);
    }
  }
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressContainer : null)}
        onPress={() => handleClick(meal.id)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />
          </View>
          <Text style={styles.title}>{meal.title}</Text>
          <MealDetails
            duration={meal.duration}
            affordability={meal.affordability}
            complexity={meal.complexity}
          />
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
    opacity: 0.9,
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
