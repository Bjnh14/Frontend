import { callAPIWithToken } from './axiosConfig'

export const loginUser = (userData) => {
  const {email, password} = userData;
  return callAPIWithToken({
    url: '/auth/log-in',
    method: 'POST',
    data: {
      email: email,
      password: password
    }
  })
}

// export const getNewProducts = () => {
//   return callAPIWithToken({
//     url: '/products/new-collection',
//     method: 'GET',
//   })
// }

// export const searchProducts = (value) => {
//   return callAPIWithToken({
//     url: `/products/${value}`,
//     method: 'GET'
//   })
// }