import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { colors } from "../config/theme";
import { Picker } from '@react-native-picker/picker';
import InputField from "../components/InputField";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomButton from "../components/CustomButton";
import { RadioButton } from "react-native-paper";
import { APPNAME } from "../constants/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../reduxCode/ActionCreator";

const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [mobile, setMobile] = useState()
  const [pass, setPass] = useState()
  const [state, setSelectedState] = useState("Select State")
  const [city, setCity] = useState("Select City")
  const [gender, setGender] = useState()
  const [pin, setPin] = useState()

  const RegisterData = async () => {
    try {
      if (name != null && email != null && mobile != null && pass != null && gender != null && city != "Select City" && state != "Select State" && pin != null) {
        dispatch(RegisterUser(email, pass))
        const userData = {
          name: name,
          email: email,
          mobile: mobile,
          password: pass,
          gender: gender,
          city: city,
          state: state,
          pincode: pin
        }
        const jsonVal = JSON.stringify(userData)
        await AsyncStorage.setItem("UserData", jsonVal, () => {
          console.log("Registration Successfull")
          Alert.alert(APPNAME, "Registration Successfull ✔")
          navigation.goBack()
        })
      } else {
        Alert.alert(APPNAME, "All fields are required!")
      }
    } catch (error) {
      console.log(`Something went wrong ${error}`)
      Alert.alert(APPNAME, `Something went wrong ${error}`)
    }
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.light.primary,
        flex: 1,
        justifyContent: "center",
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 25 }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../images/login.png")}
            style={{
              height: 200,
              width: 200,
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
          Register
        </Text>

        <InputField
          label={"Full Name"}
          values={name}
          setText={setName}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
        />

        <InputField
          label={"Email ID"}
          values={email}
          setText={setEmail}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          keyboardType="email-address"
        />

        <InputField
          label={"Mobile Number"}
          values={mobile}
          setText={setMobile}
          icon={
            <MaterialIcons
              name="phone"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          keyboardType="number-pad"
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
        />

        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }} >
          <Picker
            onValueChange={(val) => setSelectedState(val)}
            style={{
              width: 50,
              marginRight: 20,
            }}
          >
            <Picker.Item label="Select State" value="Select State" />
            <Picker.Item label="Madhya Pradesh" value="Madhya Pradesh" />
            <Picker.Item label="Gujarat" value="Gujarat" />
            <Picker.Item label="Maharashtra" value="Maharashtra" />
          </Picker>
          <Text style={{
            fontSize: 16,
            color: 'black'
          }} >{state}</Text>
        </View>
        <Text style={{
          height: 1,
          backgroundColor: 'grey',
          marginBottom: 15,
        }} />

        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }} >
          <Picker
            onValueChange={(val) => setCity(val)}
            style={{
              width: 50,
              marginRight: 20,
            }}
          >
            <Picker.Item label="Select City" value="Select City" />
            <Picker.Item label="Indore" value="Indore" />
            <Picker.Item label="Ahemdabad" value="Ahemdabad" />
            <Picker.Item label="Pune" value="Pune" />
          </Picker>
          <Text style={{
            fontSize: 18,
            color: 'black'
          }} >{city}</Text>
        </View>
        <Text style={{
          height: 1,
          backgroundColor: 'grey',
          marginBottom: 30,
        }} />

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginBottom: 20
        }} >
          <RadioButton
            color={colors.light.accent}
            value='male'
            onPress={() => setGender('male')}
            uncheckedColor='black'
            status={gender == 'male' ? 'checked' : 'unchecked'}
          ></RadioButton>
          <Text style={{
            fontSize: 18,
            color: gender == 'male' ? colors.light.accent : 'black'
          }} >Male</Text>

          <RadioButton
            color={colors.light.accent}
            value='female'
            onPress={() => setGender('female')}
            uncheckedColor='black'
            status={gender == 'female' ? 'checked' : 'unchecked'}
          ></RadioButton>
          <Text style={{
            fontSize: 18,
            color: gender == 'female' ? colors.light.accent : 'black'
          }} >Female</Text>

          <RadioButton
            color={colors.light.accent}
            value='other'
            onPress={() => setGender('other')}
            uncheckedColor='black'
            status={gender == 'other' ? 'checked' : 'unchecked'}
          ></RadioButton>
          <Text style={{
            fontSize: 18,
            color: gender == 'other' ? colors.light.accent : 'black'
          }} >Other</Text>
        </View>

        <InputField
          label={"Pin Code"}
          values={pin}
          setText={setPin}
          icon={
            <Ionicons
              name="location"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          keyboardType="numeric"
        />

        <CustomButton label={"Register"} onPress={RegisterData} />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text style={{ color: colors.light.tint }}>Already registered? </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ color: colors.light.accent, fontWeight: "700" }}>
              {" "}
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
