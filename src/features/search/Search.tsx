import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { ListaGifs } from '../listGifs/ListGifs'
import { Button, Form } from 'react-bootstrap'

import { fetchSearch, selectGifs, setQuery } from './searchSlice'

export const Search = () => {
  const dispatch = useAppDispatch()
  const [query, setqueryString] = useState('')

  return (
    <Form>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Control
          type='text'
          value={query}
          onChange={(e) => {
            setqueryString(e.target.value)
          }}
          placeholder='ie. Cars'
        />
        <Form.Text className='text-muted'>{}</Form.Text>
      </Form.Group>
      <Button
        onClick={() => {
          dispatch(fetchSearch({ query, offset: 0 }))
          dispatch(setQuery(query))
        }}
      >
        Submit
      </Button>
    </Form>
  )
}

export default Search
