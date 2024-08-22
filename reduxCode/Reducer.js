import { Add_Cart, Get_Cart, Register_User, Remove_Cart, Sign_In, Splash_Visible,  } from "./ActionType";

const initialState = {
    isSignIn: false,
    email: null,
    password: null,
    visible: true,
    cart: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Register_User: return {
            ...state,
            email: action.email,
            password: action.password
        }
        case Sign_In: return {
            ...state,
            isSignIn: action.isSignIn,
        }
        case Splash_Visible: return {
            ...state,
            visible: action.visible
        }
        case Add_Cart: return {
            ...state,
            cart: [...state.cart, action.item]
        }
        case Remove_Cart: return {
            ...state,
            cart: [...action.item]
        }
        default: return state
    }
}