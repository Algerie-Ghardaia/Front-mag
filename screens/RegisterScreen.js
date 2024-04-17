import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import {
  MaterialIcons,
  EvilIcons,
  Feather,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import Message from "../components/Message";

const RegisterScreen = ({ navigation }) => {
  //--------------------------------------------USE_STATE------------------------------------------------//
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [color, setColor] = useState("#43B72A");
  const [seePassword, setSeePassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  //-----------------------------------------------------------------------------------------------------//
  const handleEye = () => {
    setSeePassword(!seePassword);
  };

  const handlRegister = async () => {
    const user = {
      // name: userName,
      // email: email,
      // password: password,
      // phone: phone,
      // confirmPassword: confirmPassword
      name: "djani",
      email: "djani.mohammed.amine@gmail.com",
      password: "hamahP@i7",
      phone: "0665134058",
      confirmPassword: "hamahP@i7",
    };

    if (
      user.email &&
      user.password &&
      user.phone &&
      user.name &&
      user.confirmPassword
    ) {
      // console.log(user);
      if (errorMessage !== null) {
        setErrorMessage(null);
      }
      if (user.confirmPassword !== user.password) {
        setErrorMessage("Mots de passe ne sont pas identiques 🧐🧐🧐");
      } else {
        try {
          const { data } = await axios.post(`http://localhost:3000//Register`, user);
          console.log("MOI JE SUIS DATA : " + data);
          setUserName("");
          setEmail("");
          setConfirmPassword("");
          setPhone("");
          setPassword("");

          Alert.alert(
            "Inscriptions réussies",
            "Vous vous êtes bien inscrit 😇😇😇"
          );
        } catch (error) {
          Alert.alert(
            "Erreur d'enregistrement 🥺🥺🥺",
            "une erreur s'est produite lors de l'inscription"
          );
          console.log("registrement échoué", error);
        }
      }
    } else {
      setErrorMessage("Merci de compléter tous les champs... 😅😅😅");
    }
  };

  return (
    <KeyboardAwareScrollView
      style={styles.golbal}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <KeyboardAvoidingView>
          <View>
            <Text style={styles.text}>S'inscrire</Text>
          </View>

          <View style={styles.sous_view}>
            <View style={styles.sous_sous_view}>
              <SimpleLineIcons
                style={styles.icon}
                name="user-following"
                size={24}
              />
              <TextInput
                value={userName}
                onChangeText={(text) => {
                  setUserName(text);
                }}
                name="userName"
                placeholder="Nom d'utilisateur..."
                placeholderTextColor="white"
                style={{
                  marginVertical: 10,
                  width: 280,
                  marginLeft: 10,
                  color: "black",
                  fontSize: userName ? 18 : 16,
                  width: 277,
                  backgroundColor: userName ? "white" : color,
                  height: "75%",
                  borderRadius: 5,
                  paddingLeft: 10,
                }}
              />
            </View>

            <View style={styles.sous_sous_view}>
              <MaterialIcons style={styles.icon} name="email" size={24} />
              <TextInput
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                }}
                name="email"
                placeholder="Adresse e-mail..."
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
              <Feather style={styles.icon} name="phone-call" size={24} />
              <TextInput
                value={phone}
                onChangeText={(text) => {
                  setPhone(text);
                }}
                name="phone"
                placeholder="Numero de telephne..."
                placeholderTextColor="white"
                style={{
                  marginVertical: 10,
                  width: 280,
                  marginLeft: 10,
                  color: "black",
                  fontSize: phone ? 18 : 16,
                  width: 277,
                  backgroundColor: phone ? "white" : color,
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

            <View style={styles.sous_sous_view}>
              <MaterialCommunityIcons
                style={styles.icon}
                name="account-lock"
                size={24}
                color="gray"
              />
              <TextInput
                value={confirmPassword}
                onChangeText={(text) => {
                  setConfirmPassword(text);
                }}
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 280,
                  marginLeft: 10,
                  color: "black",
                  fontSize: confirmPassword ? 18 : 16,
                  width: 250,
                  backgroundColor: confirmPassword ? "white" : color,
                  height: "75%",
                  borderRadius: 5,
                  paddingLeft: 10,
                }}
                name="email"
                placeholder="Confirmation mot de passe"
                placeholderTextColor={"white"}
                secureTextEntry={color ? !seePassword : ""}
              />
              <Text style={{ flex: 1, textAlign: "center" }}>
                {confirmPassword ? (
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
            <Message message={errorMessage} color="error" />
            <View style={styles.btn}>
              <TouchableOpacity
                style={styles.btn1}
                onPress={() => {
                  handlRegister();
                }}
              >
                <Text style={styles.se_connecter}>S'inscrire</Text>
              </TouchableOpacity>
            </View>

            <Pressable
              onPress={() => {
                navigation.goBack();
              }}
              style={styles.quetepo}
            >
              <Text style={styles.question}>vous avez un compte ?</Text>
              <Text style={styles.repose}>Se Connecter</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  golbal: {
    backgroundColor: "white",
  },
  container: {
    backgroundColor: "white",
    alignItems: "center",
    padding: 20,
  },

  img: {
    width: 150,
    height: 150,
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#F18D35",
    textAlign: "center",
  },
  view: {
    textAlign: "center",
  },
  sous_view: {
    marginTop: 20,
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
    marginTop: 30,
  },
  btn1: {
    width: 200,
    backgroundColor: "#3ac71a",
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
    justifyContent: "space-between",
    alignContent: "center",
    width: 340,
    padding: 10,
  },
  question: {
    fontSize: 17,
    marginTop: 16,
    width: "55%",
    height: 40,
  },
  repose: {
    fontSize: 18,
    width: "45%",
    marginTop: 16,
    fontWeight: "bold",
    color: "#2cb139",
    paddingLeft: 26,
  },
  oublie: {
    color: "#f17777",
    fontWeight: "600",
  },
});
