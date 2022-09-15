import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getExternalImages } from '../apis/create'

export default function Create() {
  // const variable = getExternalImages()
  // console.log(variable)
  const [images, setImages] = useState(' ')
  const [form, setForm] = useState({ name: '' })
  const { name } = form

  function onClick(e) {
    e.preventDefault()
    console.log(form.name)

    // const sendObject = {
    //   imageUrl: 'placeholder from create',
    //   captionText: form.name,
    //   tags: place,
    // }
    // dispatch(deleteWombat(wombat))
  }

  // function handleClick(evt) {
  //   evt.preventDefault()
  //   // const action = { type: 'ADD_WOMBAT', payload: form.name }
  //   //dispatch/useDispatch
  //   //name is value of the form
  //   // dispatch(updateWombat(name, wombat))
  //   setForm({ name: '' })
  // }

  function handleChange(evt) {
    evt.preventDefault()
    setForm({ ...form, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
    getExternalImages()
      .then((images) => {
        setImages(images)
        console.log('images:', images)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <>
      <h1>CREATE PAGE :D</h1>
      {images != ' ' ? (
        <img src={images[0].images.original.url} alt='lorem' />
      ) : (
        <p>loading</p>
      )}

      <form>
        <label htmlFor='createid'>{name}</label>
        <br></br>
        <input
          type='text'
          id='createid'
          name='name'
          value={name}
          onChange={handleChange}
        ></input>
        <button onClick={onClick}>Add Caption</button>
      </form>

      <Link to='/create/upload'>Upload</Link>
    </>
  )
}
