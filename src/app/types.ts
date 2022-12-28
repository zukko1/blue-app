export type SearchState = {
  loading: boolean
  error: string | null
  query: string | null
  gifs: Gif[],
  pagination: CammelPaginatorState
}

export type ModalState = {
  gif: Gif
  showModal: boolean
  index: number
}

export type CammelPaginatorState = Pick<PaginatorState, 'count' | 'offset'> & { totalCount: number }

export type PaginatorState = {
  total_count: number
  count: number
  offset: number
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
