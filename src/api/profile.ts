import { http } from '../utils/http'
export const profileApi = () => {
  return http<string>({
    url: '/member/profile',
    method: 'GET',
  })
}
