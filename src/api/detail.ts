import { http } from '../utils/http'
import type { detailType } from './types/detailType'
export const detailApi = (detail: detailType) => {
  return http<string>({
    url: '/goods',
    method: 'GET',
    data: detail,
  })
}
