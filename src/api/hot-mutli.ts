import { http } from '@/utils/http'
export const hotApi = () => {
  return http<string>({
    url: '/home/hot/mutli',
    method: 'GET',
  })
}
