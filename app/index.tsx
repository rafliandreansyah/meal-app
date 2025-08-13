import { StyleSheet } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";

export default function Index() {
  return <CategoryScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
