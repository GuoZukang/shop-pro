import { http } from '../utils/http'
import type { addressAddType } from './types/addressAddType'
export const addressAddApi = (addressAdd: addressAddType) => {
  return http<string>({
    url: '/member/address',
    method: 'POST',
    data: addressAdd,
  })
}
