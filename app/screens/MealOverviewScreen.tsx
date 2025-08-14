import { StyleSheet, Text, View } from "react-native";

export default function MealOverviewScreen() {
  return (
    <View style={styles.container}>
      <Text>Meal Overview Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
