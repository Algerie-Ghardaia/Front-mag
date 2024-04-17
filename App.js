import { StyleSheet, Text, View } from "react-native";
import StackNavigation from "./navigation/StackNavigation.js";

export default function App() {
  return (
    <>
      <StackNavigation options={{ headerShown: false }} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});