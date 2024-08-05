import { LoginAction, LogoutAction } from "../../Types/Types"

export const login = (value: string): LoginAction => {
    return {
        type: "User_Login",
        payload: value
    }
}
export const logout = (): LogoutAction => {
    return {
        type: "User_logout",

    }
}