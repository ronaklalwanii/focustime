import { useState } from "react";

import { Platform, StatusBar, StyleSheet, SafeAreaView } from "react-native";

import { PaperProvider } from "react-native-paper";

import Timer from "./src/features/Timer";
import Focus from "./src/features/Focus";
import FocusHistory from "./src/features/FocusHistory";

import { colors } from "./src/utils/colors";

const App = () => {
  const [history, setHistory] = useState([]);
  const [currentSubject, setCurrentSubject] = useState(null);

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        {currentSubject ? (
          <Timer
            onTimerEnd={(subject) => {
              setHistory([...history, subject]);
            }}
            focusSubject={currentSubject}
            clearSubject={() => setCurrentSubject(null)}
          />
        ) : (
          <>
            <Focus setCurrentSubject={setCurrentSubject} />
            <FocusHistory history={history} />
          </>
        )}
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
  },
});

export default App;
