import { http } from '../utils/http'
export const addressApi = () => {
  return http<string>({
    url: '/member/address',
    method: 'GET',
  })
}
