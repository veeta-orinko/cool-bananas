import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectImages } from '../reducers/tagged'
import { fetchImages } from '../actions/tagged'
import Display from './Display'
import styles from './Tagged.module.scss'

export default function Tagged() {
  const images = useSelector(selectImages)
  const dispatch = useDispatch()

  useEffect(() => dispatch(fetchImages()), [])

  return (
    <>
      <h1>TAGGED PAGE :D</h1>

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
