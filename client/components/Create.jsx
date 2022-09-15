import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getExternalImages, addImgCaptionUrl } from '../apis/create'

export default function Create() {
  const [images, setImages] = useState(null)
  const [form, setForm] = useState({ name: '' })
  const [index, setIndex] = useState(0)
  const { name } = form
  let display = null
  if (images) {
    display = images[index].images.original.url
  }
  function onSubmit(e) {
    e.preventDefault()

    const sendObject = {
      imageUrl: display,
      captionText: form.name,
      tags: 'placeholder',
    }
    addImgCaptionUrl(sendObject)
    console.log(sendObject)
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

  function nextImg() {
    setIndex(index + 1)
  }

  return (
    <>
      <h1>CREATE PAGE :D</h1>
      {images && (
        <>
          {' '}
          <img src={display} alt='lorem' />
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
            <button onClick={onSubmit}>Add Caption</button>
          </form>
        </>
      )}
      <button onClick={nextImg} value='Next'>
        New Image
      </button>
      <Link to='/create/upload'>Upload</Link>
    </>
  )
}
