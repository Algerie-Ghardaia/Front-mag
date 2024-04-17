import { StyleSheet, Text, View } from "react-native";

function Message({ message, color }) {
  return (
    <View style={styles.errorView}>
      {message !== null && (
        <Text
          style={
            color === "success"
              ? styles.successText
              : color === "error"
              ? styles.errorText
              : null
          }
        >
          {message}
        </Text>
      )}
    </View>
  );
}

export default Message;

const styles = StyleSheet.create({
  errorView: {
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  errorText: {
    color: "#fb0000",
    fontWeight: "bold",
    fontSize: 15,
  },
  successText: {
    color: "#717171",
  },
});
