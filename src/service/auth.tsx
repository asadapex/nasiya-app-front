import { instance } from "../hooks/instance"

export const Login = (data: { login: string, password: string }, setCookies: any) => {

    instance().post("/seller/login-seller", data).then(res => {
        setCookies("token", res.data.token)
        location.pathname = "/"
    })
}