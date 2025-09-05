import MealItem from "@/components/MealItem";
import { MEALS } from "@/data/data-dummy";
import Meal from "@/models/meal";
import { RootStackParamList } from "@/types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, StyleSheet, View } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "MealOverview">;

export default function MealOverviewScreen({ route, navigation }: Props) {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(item) => renderedMealItem(item.item)}
      />
    </View>
  );
}

function renderedMealItem(itemData: Meal) {
  return <MealItem meal={itemData} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
