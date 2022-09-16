import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { selectImages } from '../reducers/tagged'
import { fetchImages, fetchImagesByTag } from '../actions/tagged'
import Display from './Display'
import styles from './Tagged.module.scss'

export default function Tagged() {
  const images = useSelector(selectImages)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [tag, setTag] = useState({ tag: '' })
  const { tag: tagParam } = useParams()

  useEffect(() => {
    tagParam === undefined
      ? dispatch(fetchImages())
      : dispatch(fetchImagesByTag(tagParam))
  }, [])
  // useEffect(() => images === undefined && navigate('/tagged'), [loaded])

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(fetchImagesByTag(tag.tag))
    setTag({ tag: '' })
    navigate(`/tagged/${tag.tag}`)
  }

  function handleChange(e) {
    const newTag = { ...tag, tag: e.target.value }
    setTag(newTag)
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
          value={tag.tag}
          onChange={handleChange}
        />
        <input type='submit' />
      </form>
      <div className={styles.displayContainer}>
        {images.length !== 0 ? (
          images.map((image) => (
            <Display
              key={`${image.imageId}${image.captionId}`}
              imageUrl={image.imageUrl}
              captionText={image.captionText}
            />
          ))
        ) : (
          <p>Sorry, there are no images with this tag. Try agin.</p>
        )}
      </div>
    </>
  )
}
