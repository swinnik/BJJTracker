import React, { useState, useEffect } from "react";
import Voice from "@react-native-voice";
import { View, Text, Button, StyleSheet } from "react-native";
import { request, PERMISSIONS } from "@react-native-community/permissions";

const VoiceToText = () => {
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState("");

  useEffect(() => {
    Voice.onSpeechStart = () => {};

    Voice.onSpeechRecognized = (e) => {
      const recognizedText = e.value;
      setRecognizedText(recognizedText);
    };

    Voice.onSpeechEnd = () => {};

    Voice.onSpeechError = (e) => {
      console.error("Speech recognition error:", e.error);
    };

    return () => {
      Voice.removeAllListeners();
    };
  }, []);

  const startListening = async () => {
    try {
      await Voice.start("en-US"); // Replace 'en-US' with the language code you want to use
      setIsListening(true);
    } catch (error) {
      console.error("Error starting voice recognition:", error);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
      setIsListening(false);
    } catch (error) {
      console.error("Error stopping voice recognition:", error);
    }
  };

  const requestMicrophonePermission = async () => {
    try {
      const granted = await request(PERMISSIONS.ANDROID.RECORD_AUDIO);
      if (granted === "granted") {
        startListening();
      } else {
        console.warn("Microphone permission denied.");
      }
    } catch (error) {
      console.error("Error requesting microphone permission:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title={isListening ? "Stop Listening" : "Start Listening"}
        onPress={isListening ? stopListening : requestMicrophonePermission}
      />
      <Text style={styles.recognizedText}>
        Recognized Text: {recognizedText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  recognizedText: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default VoiceToText;
