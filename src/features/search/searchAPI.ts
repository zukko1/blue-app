import axios, { AxiosResponse } from 'axios'
import { Gif } from './types'

const fetchSearchGifs = (query: string): Promise<AxiosResponse<{ data: Gif[] }>> => {
  const apiKey = 'pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa'
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}`
  const result = axios.get(endpoint)
  return result
}

export default fetchSearchGifs
