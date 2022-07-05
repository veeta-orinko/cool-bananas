import React from 'react'
import styles from './Display.module.scss'

export default function Display({ imageUrl, captionText }) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={imageUrl} alt={captionText} />
      <p className={styles.caption}>{captionText}</p>
    </div>
  )
}
