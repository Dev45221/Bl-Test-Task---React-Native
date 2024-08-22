import { View, Text, Image } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { SplashVisible } from '../reduxCode/ActionCreator';
import BottomTabs from '../screens/HomeScreen';

const Stack = createNativeStackNavigator()

const SplashScreen = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        setTimeout(() => {
            dispatch(SplashVisible(false))
        }, 4000);
    })
    return (
        <View style={{ flex: 1, backgroundColor: '#44029f', justifyContent: 'center', alignItems: 'center' }} >
            {/* <Text style={{ fontSize: 25, color: 'red' }} >Jay Guru Dev</Text> */}
            <Image source={require('../images/logo.png')} />
        </View>
    )
}

const StartNavigation = () => {
    const splashVisible = useSelector(state => state.visible)
    const isSignIn = useSelector(state => state.isSignIn)
    if (splashVisible) {
    return <SplashScreen />
    } else {
        return (
            <NavigationContainer>
                {
                    !isSignIn ?
                    <Stack.Navigator initialRouteName="Login" >
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                    <Stack.Screen name="Forget Password" component={ForgotPasswordScreen} />
                    {/* <Stack.Screen name="TabHome" component={HomeScreen} options={{
                        headerShown: false
                    }} /> */}
                </Stack.Navigator>
                : <BottomTabs />
                }
            </NavigationContainer>
        )
    }
}

export default StartNavigation