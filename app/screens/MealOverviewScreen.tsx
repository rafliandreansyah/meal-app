import MealItem from "@/components/MealItem";
import { CATEGORIES, MEALS } from "@/data/data-dummy";
import Meal from "@/models/meal";
import { RootStackParamList } from "@/types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "MealOverview">;

export default function MealOverviewScreen({ route, navigation }: Props) {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === catId)?.title;
    navigation.setOptions({
      title: categoryTitle ?? "Meal Overview",
    });
  }, [catId, navigation]);

  function onMealClick(mealId: string) {
    navigation.navigate("MealDetail", { mealId: mealId });
  }

  return (
    <View style={[styles.container]}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(item) => renderedMealItem(item.item, onMealClick)}
      />
    </View>
  );
}

function renderedMealItem(
  itemData: Meal,
  onMealClick: (mealId: string) => void
) {
  return <MealItem meal={itemData} onClick={(mealId) => onMealClick(mealId)} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
