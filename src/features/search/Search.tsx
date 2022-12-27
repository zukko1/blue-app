import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { ListaGifs } from '../listGifs/ListGifs'
import { Button, Form } from 'react-bootstrap'

import { fetchSearch, selectGifs } from './searchSlice'

export const Search = () => {
  const dispatch = useAppDispatch()
  const [queryString, setqueryString] = useState('')

  return (
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control
            type='text'
            value={queryString}
            onChange={(e) => {
              setqueryString(e.target.value)
            }}
            placeholder='ie. Cars'
          />
          <Form.Text className='text-muted'>{}</Form.Text>
        </Form.Group>
        <Button onClick={() => dispatch(fetchSearch(queryString))}>Submit</Button>
        
      </Form>
  )
}

export default Search
