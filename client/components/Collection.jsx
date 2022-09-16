import React, { useEffect } from 'react'
import { fetchCollection } from '../actions/collection'
import { useDispatch, useSelector } from 'react-redux'

export default function Collection() {
  const dispatch = useDispatch()
  const collection = useSelector((s) => s.collection)

  useEffect(() => {
    dispatch(fetchCollection())
  }, [])

  return (
    <>
      <h1>COLLECTION PAGE :D</h1>
      <ul>
        {collection.map((image) => (
          <li key={image.id}>
            <img src={image.image_url} alt='my collection' />
          </li>
        ))}
      </ul>
    </>
  )
}
