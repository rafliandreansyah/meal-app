import IconButton from "@/components/IconButton";
import List from "@/components/MealDetail/List";
import Subtitle from "@/components/MealDetail/Subtitle";
import MealDetails from "@/components/MealDetails";
import { MEALS } from "@/data/data-dummy";
import { RootStackParamList } from "@/types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "MealDetail">;

export default function MealDetailScreen({ route, navigation }: Props) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  function onHeaderPressHandler() {
    console.log("Pressed!");
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="star"
          onPress={onHeaderPressHandler}
          color="#464242ff"
        />
      ),
    });
  }, [navigation, selectedMeal]);
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal?.duration!}
        affordability={selectedMeal?.affordability!}
        complexity={selectedMeal?.complexity!}
      />
      <Subtitle subtitle="Ingredients" />
      {/* {selectedMeal?.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))} */}
      <List data={selectedMeal?.ingredients!} />
      <Subtitle subtitle="Steps" />
      {/* {selectedMeal?.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))} */}
      <List data={selectedMeal?.steps!} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 18,
    margin: 8,
    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    marginHorizontal: 24,
    padding: 4,
    marginBottom: 8,
  },
});
