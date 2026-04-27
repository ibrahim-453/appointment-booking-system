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

export const googleLoginApi = (data) => {
    return api.post('/auth/regular-user/google', { credential: data })
}

export const logoutApi = () => {
    return api.post('/auth/logout')
}

export const refreshTokenApi = (data) => {
    return api.post('/auth/refresh-token', data)
}

export const getCurrentUserApi = (data) => {
    return api.get('/auth/me', {
        headers: {
            Authorization: `Bearer ${data}`
        }
    })
}
