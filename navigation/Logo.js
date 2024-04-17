import { StyleSheet, View} from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from '@react-navigation/native';
import pretify from "../utils/pretify";
export default function Logo() {
  const navigation = useNavigation()
  console.log(pretify(navigation));
  return (
    <View style={styles.nav}>
      <LottieView
        style={{
          width: 80,
          height: 80,
        }}
        source={require("../assets/Animation.json")}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({

});
