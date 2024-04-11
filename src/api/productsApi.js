import { callAPIWithToken } from './axiosConfig'

export const getProducts = () => {
  return callAPIWithToken({
    url: '/products',
    method: 'GET',
  })
}

export const getNewProducts = () => {
  return callAPIWithToken({
    url: '/products/new-collection',
    method: 'GET',
  })
}

export const searchProducts = (value) => {
  return callAPIWithToken({
    url: `/products/${value}`,
    method: 'GET'
  })
}