import { useState } from "react";

import { View, StyleSheet } from "react-native";

import { TextInput } from "react-native-paper";

import { RoundedButton } from "../components/RoundedButton";

import { spacing } from "../utils/sizes";

const Focus = ({ setCurrentSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.conatiner}>
      <View style={styles.inputConatiner}>
        <TextInput
          value={subject}
          placeholder="Code"
          style={styles.textInput}
          onChangeText={(txt) => setSubject(txt)}
          label="What would you like to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => setCurrentSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    flex: 0.8,
  },
  button: {
    flex: 0.2,
    justifyContent: "center",
  },
  inputConatiner: {
    gap: spacing.lg,
    padding: spacing.lg,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "top",
  },
});

export default Focus;
