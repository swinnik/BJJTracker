import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";

const Landing = ({ navigation }) => {
  const bounceValue = useRef(new Animated.Value(1)).current;
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const bounceAnimation = Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(bounceValue, {
            toValue: 1.2,
            duration: 335,
            useNativeDriver: true,
          }),
          Animated.timing(rotateValue, {
            toValue: 1,
            duration: 335,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(bounceValue, {
            toValue: 1,
            duration: 335,
            useNativeDriver: true,
          }),
          Animated.timing(rotateValue, {
            toValue: 0,
            duration: 335,
            useNativeDriver: true,
          }),
        ]),
      ])
    );

    bounceAnimation.start();

    return () => {
      bounceAnimation.stop();
    };
  }, [bounceValue, rotateValue]);

  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={() => navigation.navigate("Main")}>
        <View style={styles.shakaWrap}>
          <Animated.Image
            style={[
              styles.shaka,
              {
                transform: [
                  // { scale: bounceValue },
                  {
                    rotate: rotateValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["-35deg", "-25deg"],
                    }),
                  },
                ],
              },
            ]}
            source={require("../assets/shaka.webp")}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.title}> BJJ Tracker is Loading. OSS!</Text>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginTop: 20,
  },
  page: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "light-grey",
  },
  shakaWrap: {
    overflow: "hidden",
    width: 300,
    height: 300,
    backgroundColor: "purple",
    borderRadius: 150,
  },
  shaka: {
    position: "relative",
    top: "5%",
    left: "14%",
    marginTop: 20,
    overflow: "show",
    width: 200,
    height: 200,
    backgroundColor: "purple",
    borderRadius: 100,
  },
});
