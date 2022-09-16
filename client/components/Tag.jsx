import React from 'react'
import { useSelector } from 'react-redux'
import Display from './Display'
import styles from './Tagged.module.scss'
import { selectImages } from '../reducers/tagged'

function Tag() {
  const images = useSelector(selectImages)

  return (
    <div className={styles.displayContainer}>
      {images.map((image) => (
        <Display
          key={`${image.imageId}${image.captionId}`}
          imageUrl={image.imageUrl}
          captionText={image.captionText}
        />
      ))}
    </div>
  )
}

export default Tag
