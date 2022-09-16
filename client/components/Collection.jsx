import React, { useEffect } from 'react'
import { fetchCollection } from '../actions/collection'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Collection.module.scss'

export default function Collection() {
  const dispatch = useDispatch()
  const collection = useSelector((s) => s.collection)

  useEffect(() => {
    dispatch(fetchCollection())
  }, [])

  return (
    <>
      {' '}
      <div className={styles.background}>
        <h1 className={styles.title}>
          {' '}
          🍌🍌🍌🍌🍌🍌🍌🎀 𝒲𝑒𝓁𝒸☯𝓂𝑒 𝒯☯ 🍌🍌🍌🍌🍌🍌🍌 𝒯𝒽𝑒 𝒞💙𝓁𝓁𝑒𝒸𝓉𝒾❀𝓃 𝒫𝒶𝑔𝑒
          🎀🍌🍌🍌🍌🍌🍌🍌{' '}
        </h1>
        <ul>
          {collection.map((image) => (
            <li key={image.id}>
              <img
                className={styles.image}
                src={image.image_url}
                alt='my collection'
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
