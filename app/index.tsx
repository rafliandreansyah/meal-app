import { RootStackParamList } from "@/types/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import MealOverviewScreen from "./screens/MealOverviewScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Index() {
  return (
    <Stack.Navigator initialRouteName="MealsCategories">
      <Stack.Screen
        name="MealsCategories"
        component={CategoryScreen}
        options={{
          title: "Meal Categories",
        }}
      />
      <Stack.Screen
        name="MealOverview"
        component={MealOverviewScreen}
        options={{
          title: "Meal Overview",
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
