import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Search } from './features/search/Search'
import { ListaGifs } from './features/listGifs/ListGifs'
import { Card, Container } from 'react-bootstrap'
import Paginator from './features/paginator/Paginator'
import ModalTab from './features/modal/ModalTab'

function App() {
  return (
    <Container>
      <Card className='mb-2 mt-2'>
        <Card.Header>Search</Card.Header>
        <Card.Body>
          <Search></Search>
        </Card.Body>
      </Card>

      <Card className='mb-2'>
        <Card.Header>
          <Paginator />
        </Card.Header>
        <Card.Body>
          <ListaGifs></ListaGifs>
        </Card.Body>
        <Card.Footer>
          <Paginator />
        </Card.Footer>
      </Card>
      <ModalTab></ModalTab>
    </Container>
  )
}

export default App
