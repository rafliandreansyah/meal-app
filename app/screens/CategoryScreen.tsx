import CategoryGridTile from "@/components/CateogryGridTile";
import { CATEGORIES } from "@/data/data-dummy";
import { FlatList, View } from "react-native";

export default function CategoryScreen() {
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
            />
          );
        }}
      />
    </View>
  );
}
