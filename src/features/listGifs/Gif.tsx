import { Gif } from '../search/types'

type propsItem = {
  gif: Gif
}

export const Item = (props: propsItem) => {
  return (
    <li>
      <img src={props.gif.images.original.url}></img>
    </li>
  )
}
