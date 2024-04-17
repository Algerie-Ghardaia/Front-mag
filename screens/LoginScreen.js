import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {
  MaterialIcons,
  EvilIcons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LottieView from "lottie-react-native";

const LoginScreen = ({ navigation }) => {
  //--------------------------------------------USE_STATE------------------------------------------------//
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [color, setColor] = useState("#43B72A");
  const [seePassword, setSeePassword] = useState(false);

  //-----------------------------------------------------------------------------------------------------//
  const handleEye = () => {
    setSeePassword(!seePassword);
  };

  return (
    <KeyboardAwareScrollView
      style={styles.golbal}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.img}>
          <LottieView
            style={{
              width: 180,
              height: 180,
            }}
            source={require("../assets/Animation.json")}
            autoPlay
            loop
          />
        </View>
        <KeyboardAvoidingView>
          <View>
            <Text style={styles.text}>Connectez-vous à votre compte</Text>
          </View>
          <View style={styles.sous_view}>
            <View style={styles.sous_sous_view}>
              <MaterialIcons style={styles.icon} name="email" size={24} />
              <TextInput
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                }}
                name="email"
                placeholder="Adresse e-mail ou numéro de tél."
                placeholderTextColor="white"
                style={{
                  marginVertical: 10,
                  width: 280,
                  marginLeft: 10,
                  color: "black",
                  fontSize: email ? 18 : 16,
                  width: 277,
                  backgroundColor: email ? "white" : color,
                  height: "75%",
                  borderRadius: 5,
                  paddingLeft: 10,
                }}
              />
            </View>

            <View style={styles.sous_sous_view}>
              <MaterialCommunityIcons
                style={styles.icon}
                name="account-lock"
                size={24}
                color="gray"
              />
              <TextInput
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                }}
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 280,
                  marginLeft: 10,
                  color: "black",
                  fontSize: password ? 18 : 16,
                  width: 250,
                  backgroundColor: password ? "white" : color,
                  height: "75%",
                  borderRadius: 5,
                  paddingLeft: 10,
                }}
                name="email"
                placeholder="Mot de passe"
                placeholderTextColor={"white"}
                secureTextEntry={color ? !seePassword : ""}
              />
              <Text style={{ flex: 1, textAlign: "center" }}>
                {password ? (
                  seePassword ? (
                    <EvilIcons
                      name="eye"
                      size={29}
                      color="white"
                      onPress={handleEye}
                      style={{ paddingRight: 25 }}
                    />
                  ) : (
                    <Feather
                      name="eye-off"
                      size={17}
                      color="white"
                      onPress={handleEye}
                    />
                  )
                ) : (
                  ""
                )}
              </Text>
            </View>
            <View style={styles.para}>
              <Text>Rester connecté</Text>
              <Text style={styles.oublie}>Mot de passe oublié</Text>
            </View>

            <View style={styles.btn}>
              <TouchableOpacity
                style={styles.btn1}
                onPress={() => {
                  alert("fdcv");
                }}
              >
                <Text style={styles.se_connecter}>Se Connecter</Text>
              </TouchableOpacity>
            </View>
            <Pressable
              onPress={() => {
                navigation.navigate("Register");
              }}
              style={styles.quetepo}
            >
              <Text style={styles.question}>vous n'avez pas de compte ?</Text>
              <Text style={styles.repose}>S'inscrire</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  golbal: {
    backgroundColor: "white",
  },
  container: {
    backgroundColor: "white",
    alignItems: "center",
    marginTop: 50,
    
  },

  img: {
    width: 190,
    height: 190,
    marginTop: 30,
    marginBottom: 30,
    
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 12,
    color: "#041e42",
    textAlign: "center",
  },
  view: {
    textAlign: "center",
  },
  sous_view: {
    marginTop: 30,
  },
  sous_sous_view: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#43B72A",
    borderRadius: 5,
    marginTop: 20,
  },
  icon: {
    marginLeft: 8,
    color: "white",
  },
  para: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    marginTop: 60,
  },
  btn1: {
    width: 200,
    backgroundColor: "#43B72A",
    borderRadius: 4,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 14,
  },
  se_connecter: {
    textAlign: "center",
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
  quetepo: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    width: 350,
    marginTop: 10,
  },
  question: {
    fontSize: 17,
    marginTop: 16,
    width: "66%",
    height: 40,
    marginLeft: 8,
  },
  repose: {
    fontSize: 18,
    width: "34%",
    marginTop: 16,
    fontWeight: "bold",
    color: "#2cb139",
    paddingLeft: 30,
  },
  oublie: {
    color: "#f17777",
    fontWeight: "600",
  },
});
