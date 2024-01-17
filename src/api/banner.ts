import { http } from '@/utils/http'
import type { bannerType } from './types/bannerType'
export const bannerApi = (banner: bannerType) => {
  return http<string>({
    url: '/home/banner',
    method: 'GET',
    data: banner,
  })
}
