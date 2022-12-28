import { Button } from 'react-bootstrap'
import Pagination from 'react-bootstrap/Pagination'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchSearch, selectGifs, selectTotal } from '../search/searchSlice'
import { selectPaginator, setPage } from './paginatorSlice'

const Paginator = () => {
  const dispatch = useAppDispatch()
  const {
    pagination: { count, offset },
    query,
  } = useAppSelector(selectGifs)

  const totalCount = useAppSelector(selectTotal)

  const handlePrevious = () => {
    if (offset >= 50) {
      const offsetNew = offset - count
      dispatch(fetchSearch({ query, offset: offsetNew }))
      dispatch(setPage({ count, offset: offsetNew, totalCount }))
    }
  }

  const handleNext = () => {
    if (offset < Math.ceil(totalCount / count)) {
      const offsetNew = offset + count
      console.log(offsetNew)
      dispatch(setPage({ totalCount, count, offset: offsetNew }))
      dispatch(fetchSearch({ query, offset: offsetNew }))
    }
  }
  return (
    <Pagination>
      <Pagination.Item disabled={offset === 1} onClick={handlePrevious}>
        Anterior
      </Pagination.Item>
      <Pagination.Item disabled={offset === Math.ceil(totalCount / count)} onClick={handleNext}>
        Siguiente
      </Pagination.Item>
    </Pagination>
  )
}

export default Paginator
