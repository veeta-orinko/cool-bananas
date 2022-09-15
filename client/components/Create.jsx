import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getExternalImages } from '../apis/create'

export default function Create() {
  // const variable = getExternalImages()
  // console.log(variable)
  const [images, setImages] = useState()

  useEffect(() => {
    getExternalImages()
      .then((images) => {
        setImages(images)
        console.log('image: ', images[0].url)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <>
      {images[0].url != undefined ? (
        <img src={images[0].url} alt='lorem' />
      ) : (
        <p>loading</p>
      )}

      <img src={images} alt='lorem' />

      <h1>CREATE PAGE :D</h1>
      <Link to='/create/upload'>Upload</Link>
    </>
  )
}
