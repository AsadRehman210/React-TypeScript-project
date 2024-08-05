import { UserState } from "../../Types/Types.ts";

const initialState: UserState = {
    token: localStorage.getItem("token") || ""
};


export const userReducer = (state = initialState, action: any): UserState => {
    switch (action.type) {
        case "User_Login":
            localStorage.setItem("token", action.payload);
            const Token = localStorage.getItem("token")
            return {
                ...state,
                token: Token
            };
        case "User_logout":
            localStorage.removeItem("token")

            return {
                token: ""
            }



        default:
            return state;
    }
};