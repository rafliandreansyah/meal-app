import { StyleSheet, Text, View } from "react-native";

export default function List({ data }: { data: string[] }) {
  return data.map((dataItem) => {
    return (
      <View key={dataItem} style={styles.listItem}>
        <Text style={styles.textItem}>{dataItem}</Text>
      </View>
    );
  });
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    marginHorizontal: 24,
    marginVertical: 4,
    padding: 8,
    backgroundColor: "#e2b497",
    textAlign: "center",
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  textItem: {
    color: "#552a10ff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});
