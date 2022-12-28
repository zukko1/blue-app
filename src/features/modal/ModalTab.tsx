import { Modal, Button } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import CarouselGifs from '../carousel/CarouselGifs'
import { closeModal, selectModal } from './modalSlice'

export default function ModalTab() {
  const dispatch = useAppDispatch()
  const stateModal = useAppSelector(selectModal)

  return (
    <Modal
      show={stateModal.showModal}
      onHide={() => {
        dispatch(closeModal())
      }}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Gifs</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CarouselGifs></CarouselGifs>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            dispatch(closeModal())
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
