import { View, Text, StyleSheet, FlatList } from "react-native";

import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

const FocusHistory = ({ history }) => {
  if (!history || !history.length) {
    return null;
  }

  const renderItem = ({ item }) => <Text style={styles.item}>* {item}</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>History</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: fontSizes.lg,
    paddingTop: spacing.md,
    color: colors.textColor,
  },
  item: {
    textAlign: "center",
    fontSize: fontSizes.md,
    paddingTop: spacing.md,
    color: colors.textColor,
  },
});

export default FocusHistory;
