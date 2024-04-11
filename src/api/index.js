import { callAPIWithToken } from '../services/config.api'

export const getProducts = () => {
  return callAPIWithToken({
    url: '/products',
    method: 'GET',
  })
}
