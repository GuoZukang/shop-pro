import { http } from '@/utils/http'
import type { hotType } from './types/hot'
export const preferenceApi = (preference: hotType) => {
  return http<string>({
    url: '/hot/preference',
    method: 'GET',
    data: preference,
  })
}
export const inVogueApi = (inVogue: hotType) => {
  return http<string>({
    url: '/hot/inVogue',
    method: 'GET',
    data: inVogue,
  })
}
export const oneStopApi = (oneStop: hotType) => {
  return http<string>({
    url: '/hot/oneStop',
    method: 'GET',
    data: oneStop,
  })
}
export const newsApi = (news: hotType) => {
  return http<string>({
    url: '/hot/new',
    method: 'GET',
    data: news,
  })
}
