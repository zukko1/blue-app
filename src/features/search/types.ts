export type SearchState = {
  loading: boolean
  error: string | null
  query: string | null
  gifs: Gif[]
}

export type SearchAction =
  | { type: 'searchGifsStart' }
  | { type: 'searchGifsStart'; payload: { data: Gif[] } }
  | { type: 'searchGifsError'; payload: string }

export type Gif = {
  id: string
  images: {
    original: {
      url: string
    }
  }
}
