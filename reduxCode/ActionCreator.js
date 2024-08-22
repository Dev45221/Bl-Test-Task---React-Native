import { Add_Cart, Get_Cart, Register_User, Remove_Cart, Sign_In, Splash_Visible,  } from "./ActionType"

export const RegisterUser = (email, password) => {
    return {
        type: Register_User,
        email: email,
        password: password
    }
}

export const SignIn = (data) => {
    return {
        type: Sign_In,
        isSignIn: data
    }
}

export const SplashVisible = (data) => {
    return {
        type: Splash_Visible,
        visible: data
    }
}

export const AddCart = (item)=> {
    return {
        type: Add_Cart,
        item: item
    }
}

export const RemoveCart = (item)=> {
    return {
        type: Remove_Cart,
        item: item
    }
}