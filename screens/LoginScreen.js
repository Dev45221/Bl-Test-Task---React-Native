import React, { useEffect, useState } from "react";
import { colors } from "../config/theme";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { APPNAME } from "../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { SignIn } from "../reduxCode/ActionCreator";
import BottomTabs from "./HomeScreen";
import { NavigationContainer } from "@react-navigation/native";

const LoginScreen = ({ navigation }) => {
  const isSignIn = useSelector(state => state.isSignIn)
  const dispatch = useDispatch()
  const storedEmail = useSelector(state => state.email)
  const storedPassword = useSelector(state => state.password)
  const [email, setEmail] = useState()
  const [pass, setPass] = useState()
  const [storedData, setStoredData] = useState()

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = async () => {
    try {
      const jsonVal = await AsyncStorage.getItem("UserData")
      setStoredData(JSON.parse(jsonVal))
      console.log(jsonVal)
    } catch (error) {
      console.log(`Something went wrong ${error}`)
      Alert.alert(APPNAME, `Something went wrong ${error}`)
    }
  }

  const Login = () => {
    if (email != null && pass != null) {
      if (email == storedEmail && pass == storedPassword) {
        dispatch(SignIn(true))
        // navigation.navigate("TabHome")
        Alert.alert(APPNAME, "Login Successfull ✔")
      } else {
        Alert.alert(APPNAME, "Email or Password is incorrect ❌")
      }
    } else {
      Alert.alert(APPNAME, "All fields are required!")
    }
  }

  return (
    <View style={{ paddingHorizontal: 25 }}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../images/login.png")}
          style={{
            height: 200,
            width: 300,
            transform: [{ rotate: "-5deg" }],
          }}
        />
      </View>

      <Text
        style={{
          fontSize: 28,
          fontWeight: "500",
          color: colors.light.tint,
          marginBottom: 30,
        }}
      >
        Login
      </Text>

      <InputField
        label={"Email ID"}
        values={email}
        setText={setEmail}
        icon={<MaterialIcons
          name="alternate-email"
          size={20}
          color="#666"
          style={{ marginRight: 5 }}
        />
        }
        keyboardType="email-address"
        selectionColor={colors.light.tint}
      />

      <InputField
        label={"Password"}
        values={pass}
        setText={setPass}
        icon={
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
        }
        inputType="password"
        fieldButtonLabel={"Forgot?"}
        fieldButtonFunction={() => navigation.navigate('Forget Password')}
      />

      <CustomButton label={"Login"} onPress={Login} />

      {/* <CustomButton label={"delete"} onPress={async ()=> {
          try {
            await AsyncStorage.removeItem("UserData", ()=> {
              console.log("Deleted")
              getUserData()
            })
          } catch (error) {
            console.log(error)
          }
        }} /> */}

      <Text
        style={{
          textAlign: "center",
          color: colors.light.tint,
          marginBottom: 30,
        }}
      >
        Or, login with ...
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginBottom: 30,
        }}
      >
        <TouchableOpacity
          onPress={() => { }}
          style={{
            backgroundColor: colors.light.secondary,
            borderRadius: 10,
            paddingHorizontal: 30,
            paddingVertical: 10,
          }}
        >
          <Image
            source={require("../images/google.png")}
            style={{ height: 24, width: 24 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { }}
          style={{
            backgroundColor: colors.light.secondary,
            borderRadius: 10,
            paddingHorizontal: 30,
            paddingVertical: 10,
          }}
        >
          <Image
            source={require("../images/apple.png")}
            style={{ height: 24, width: 24 }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 30,
        }}
      >
        <Text style={{ color: colors.light.tint }}>New to the app? </Text>
        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("Register")}>
          <Text style={{ color: colors.light.accent, fontWeight: "700" }}>
            {" "}
            Register
          </Text>
        </TouchableOpacity>
      </View>

    </View>

  )

};

export default LoginScreen;