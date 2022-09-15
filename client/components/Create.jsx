import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getExternalImages } from '../apis/create'

export default function Create() {
  // const variable = getExternalImages()
  // console.log(variable)
  const [image, setImage] = useState()

  useEffect(() => {
    getExternalImages()
      .then((image) => {
        console.log('image: ', image)
        setImage(image)
      })
      .catch((err) => {
        console.error(err.message)
      })
  })

  return (
    <>
      {/* <img src='https://placekeanu.com/200/150' alt='' /> */}
      <img src={image} alt='lorem' />
      <h1>CREATE PAGE :D</h1>
      <Link to='/create/upload'>Upload</Link>
    </>
  )
}
