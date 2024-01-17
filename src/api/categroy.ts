import { http } from '../utils/http'
export const categroyApi = () => {
  return http<string>({
    url: '/category/top',
    method: 'GET',
  })
}
