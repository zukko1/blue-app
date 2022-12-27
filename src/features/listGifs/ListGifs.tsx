import { Gif } from '../search/types'
import { Item } from './Gif'

type propsList = {
  gifs: Gif[]
}

export const ListaGifs = (props: propsList) => {
  return (
    <div>
      <h1>Lista de Gifs</h1>
      <ul>
        {props.gifs.map((gif) => (
          <Item key={gif.id} gif={gif}></Item>
        ))}
      </ul>
    </div>
  )
}
