import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { selectImages } from '../reducers/tagged'
import { fetchImages, fetchImagesByTag } from '../actions/tagged'
import Display from './Display'
import styles from './Tagged.module.scss'

export default function Tagged() {
  const images = useSelector(selectImages)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [tag, setTag] = useState('')

  useEffect(() => dispatch(fetchImages()), [])

  function handleSubmit(e) {
    e.preventDefault()
    console.log(tag)
    console.log(e.target.value)
    dispatch(fetchImagesByTag(tag))
    navigate(`/tagged/${tag}`)
    setTag('')
  }

  function handleChange(e) {
    setTag(...tag, e.target.value)
  }

  return (
    <>
      <h1>TAGGED PAGE :D</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='tag'>Search for an image by keyword:</label>
        <input
          name='tag'
          id='tag'
          type='text'
          // value={tag}
          onChange={handleChange}
        />
        <input type='submit' />
      </form>
      <div className={styles.displayContainer}>
        {images.map((image) => (
          <Display
            key={`${image.imageId}${image.captionId}`}
            imageUrl={image.imageUrl}
            captionText={image.captionText}
          />
        ))}
      </div>
    </>
  )
}
