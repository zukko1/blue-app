import axios, { AxiosResponse } from 'axios'
import { Gif, PaginatorState } from '../../app/types'

const fetchSearchGifs = (
  query: string | null,
  offset: number,
): Promise<AxiosResponse<{ data: Gif[], pagination: PaginatorState }>> => {
  const apiKey = 'pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa'
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&offset=${offset}`
  const result = axios.get(endpoint)
  return result
}

export default fetchSearchGifs
