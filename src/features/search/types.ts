export type SearchState = {
  loading: boolean
  error: string | null
  query: string | null
  gifs: Gif[]
}

export type Gif = {
  id: string
  title: string
  images: {
    original: {
      url: string
    }
  }
}
