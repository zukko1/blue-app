import { Container, Row } from 'react-bootstrap'
import { useAppSelector } from '../../app/hooks'
import { selectGifs } from '../search/searchSlice'
import { Gif } from '../search/types'
import { Item } from './Gif'

type propsList = {
  gifs: Gif[]
}

export const ListaGifs = () => {
  const stateSearchGifs = useAppSelector(selectGifs)

  return (
    <Row xs={2} md={4} className='g-4'>
      {stateSearchGifs.gifs.map((gif) => (
        <Item key={gif.id} gif={gif}></Item>
      ))}
    </Row>
  )
}
