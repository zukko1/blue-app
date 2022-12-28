import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useAppSelector } from '../../app/hooks'
import { selectModal } from '../modal/modalSlice'
import { selectGifs } from '../search/searchSlice'

function CarouselGifs() {
  const searchState = useAppSelector(selectGifs)
  const stateModal = useAppSelector(selectModal)
  const [index, setIndex] = useState(stateModal.index)

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} variant='dark'>
      {searchState.gifs.map((gif) => (
        <Carousel.Item key={gif.id}>
          <img className='d-block w-100' src={gif.images.original.url} alt={gif.id} />
          <Carousel.Caption>
            <h3>{gif.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default CarouselGifs
