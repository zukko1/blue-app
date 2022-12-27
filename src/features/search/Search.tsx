import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { ListaGifs } from '../listGifs/ListGifs'

import { fetchSearch, selectGifs } from './searchSlice'

export const Search = () => {
  const gifs = useAppSelector(selectGifs);
  const dispatch = useAppDispatch()
  const [queryString, setqueryString] = useState('')

  return (
    <div>
      <input
        type='text'
        value={queryString}
        onChange={(e) => {
          setqueryString(e.target.value)
        }}
      ></input>
      <button onClick={() => dispatch(fetchSearch(queryString))}>buscar</button>
      <div><ListaGifs gifs={gifs}></ListaGifs></div>
    </div>
  )
}

export default Search
