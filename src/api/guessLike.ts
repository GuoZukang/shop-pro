import { http } from '@/utils/http'
import type { guessLikeType } from './types/guessLikeType'
export const guessLikeApi = (guessLike: guessLikeType) => {
  return http<string>({
    url: '/home/goods/guessLike',
    method: 'GET',
    data: guessLike,
  })
}
