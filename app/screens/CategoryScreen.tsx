import CategoryGridTile from "@/components/CateogryGridTile";
import { CATEGORIES } from "@/data/data-dummy";
import { RootStackParamList } from "@/types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, View } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "MealsCategories">;

export default function CategoryScreen({ navigation }: Props) {
  // This screen displays a list of categories using a FlatList
  // Each category is displayed as a grid tile using the CategoryGridTile component
  // The navigation prop is used to navigate to the MealOverview screen when a category is pressed

  function onItemPress(categoryId: string) {
    navigation.navigate("MealOverview", { categoryId: categoryId });
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        numColumns={2}
        keyExtractor={(categoryItem) => categoryItem.id}
        renderItem={(categoryItem) => {
          return (
            <CategoryGridTile
              title={categoryItem.item.title}
              color={categoryItem.item.color}
              onPress={() => onItemPress(categoryItem.item.id)}
            />
          );
        }}
      />
    </View>
  );
}
