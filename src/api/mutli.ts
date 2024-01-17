import { http } from '@/utils/http'
export const mutliApi = () => {
  return http<string>({
    url: '/home/category/mutli',
    method: 'GET',
  })
}
