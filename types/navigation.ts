// types/navigation.ts
export type RootStackParamList = {
  MealsCategories: undefined; // tidak ada parameter
  MealOverview: { categoryId: string }; // dengan parameter
  MealDetail: { mealId: string }; // dengan parameter
};
