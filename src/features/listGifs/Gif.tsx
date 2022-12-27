import { Col, Card } from 'react-bootstrap';
import { Gif } from '../search/types'

type propsItem = {
  gif: Gif
}


export const Item = (props: propsItem) => {
  return (
    <Col>
      <Card>
        <Card.Img variant='top' src={props.gif.images.original.url} />
        <Card.Body>
          <Card.Title>{props.gif.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  )
}
