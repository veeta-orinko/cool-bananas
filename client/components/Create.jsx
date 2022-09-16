import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getExternalImages, addImgCaptionUrl } from '../apis/create'

export default function Create() {
  const authNum = useSelector((state) => state.user.auth0Id)
  const [images, setImages] = useState(null)
  const [form, setForm] = useState({ name: '' })
  const [index, setIndex] = useState(0)
  const { name } = form
  const { tags } = form
  let display = null
  if (images) {
    display = images[index].images.original.url
  }

  function onSubmit(e) {
    e.preventDefault()
    const sendObject = {
      imageUrl: display,
      captionText: form.name,
      tags: form.tags,
      authId: authNum,
    }
    console.log(sendObject)
    addImgCaptionUrl(sendObject)
  }

  function handleChange(evt) {
    evt.preventDefault()
    setForm({ ...form, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
    getExternalImages()
      .then((images) => {
        setImages(images)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  function nextImg() {
    if (index === 25) {
      setIndex(0)
    }
    setIndex(index + 1)
  }

  return (
    <>
      <h1>CREATE PAGE :D</h1>
      <button onClick={nextImg} value='Next'>
        New Image
      </button>
      <br></br>
      {images && (
        <>
          {' '}
          <img src={display} alt='lorem' />
          <form>
            <label htmlFor='createTd'>{name}</label>
            <br></br>
            <input
              type='text'
              id='createTd'
              name='name'
              value={name}
              onChange={handleChange}
            ></input>
            <label htmlFor='createTd'>Tags:</label>
            <input
              type='text'
              id='createTagTd'
              name='tags'
              value={tags}
              onChange={handleChange}
            ></input>
            <button onClick={onSubmit}>Save Caption</button>
          </form>
        </>
      )}

      <Link to='/create/upload'>Upload</Link>
    </>
  )
}
