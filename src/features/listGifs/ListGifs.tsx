import { Container, Row } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectGifs } from '../search/searchSlice'
import { Gif } from '../../app/types'
import { Item } from './Gif'
import { showModal } from '../modal/modalSlice'

type propsList = {
  gifs: Gif[]
}

export const ListaGifs = () => {
  const stateSearchGifs = useAppSelector(selectGifs)
  const dispatch = useAppDispatch()

  return (
    <Row xs={2} md={4} className='g-4'>
      {stateSearchGifs.gifs.map((gif, index) => (
        <a key={gif.id} onClick={() => dispatch(showModal({ gif, index }))}>
          <Item gif={gif}></Item>
        </a>
      ))}
    </Row>
  )
}
