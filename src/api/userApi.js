import { callAPIWithToken } from './axiosConfig'

export const loginUser = () => {
  return callAPIWithToken({
    url: '/auth/log-in',
    method: 'POST',
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