import Meal from "@/models/meal";
import { Text, View } from "react-native";

export default function MealItem({ meal }: { meal: Meal }) {
  return (
    <View>
      <Text>{meal.title}</Text>
    </View>
  );
}
