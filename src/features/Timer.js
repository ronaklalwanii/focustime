import { useState } from "react";
import { useKeepAwake } from "expo-keep-awake";
import { View, Text, StyleSheet, Vibration } from "react-native";

import { ProgressBar } from "react-native-paper";

import Timing from "./Timing";
import { Countdown } from "./Countdown";
import { RoundedButton } from "../components/RoundedButton";

import { spacing } from "../utils/sizes";
import { colors } from "../utils/colors";

const secondInMs = 1000;

const vibrationPattern = [
  1 * secondInMs,
  1 * secondInMs,
  1 * secondInMs,
  1 * secondInMs,
  1 * secondInMs,
];

const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();

  const [minutes, setMinutes] = useState(0.1);
  const [progress, setProgress] = useState(1);
  const [isstarted, setIsStarted] = useState(false);

  const handleEnd = (reset) => {
    Vibration.vibrate(vibrationPattern);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
    clearSubject();
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          onEnd={handleEnd}
          minutes={minutes}
          isPaused={!isstarted}
          onProgress={(pr) => setProgress(pr)}
        />
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Focusing On:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.xxl }}>
        <ProgressBar
          progress={progress}
          color={colors.paperColor}
          style={{
            height: spacing.sm,
          }}
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        <RoundedButton
          title={isstarted ? "Pause" : "Start"}
          onPress={() => setIsStarted(isstarted ? false : true)}
        />
      </View>
      <View style={styles.clearWrapper}>
        <RoundedButton size={50} title="-" onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonWrapper: {
    flex: 0.3,
    padding: spacing.xl,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  timingWrapper: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: spacing.xxl,
    justifyContent: "center",
  },
  countdown: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    color: colors.textColor,
  },
  task: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.textColor,
    textTransform: "capitalize",
  },
  clearWrapper: {
    alignItems: "center",
  },
});

export default Timer;
