import api from "./axios"

export const userRegisterApi = (data) => {
    return api.post('/auth/regular-user/register', data)
}

export const professionalRegisterApi = (data) => {
    return api.post('/auth/professional-user/register', data)
}

export const loginApi = (data) => {
    return api.post('/auth/login', data)
}

export const logoutApi = () => {
    return api.post('/auth/logout')
}

export const refreshTokenApi = (data) => {
    return api.post('/auth/refresh-token', data)
}