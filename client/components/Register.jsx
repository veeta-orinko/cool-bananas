import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addUser } from '../apis/users'
import { setUser } from '../actions/user'

function Register() {
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    name: '',
    email: '',
  })

  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (user.name) navigate('/')
  }, [user])

  const handleChange = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const userInfo = {
      auth0Id: user.auth0Id,
      token: user.token,
      ...form,
    }
    addUser(userInfo, user.token)
      .then(() => dispatch(setUser(userInfo)))
      .catch((err) => setErrorMsg(err.message))
  }

  const hideError = () => {
    setErrorMsg('')
  }

  return (
    <>
      {errorMsg && (
        <div>
          Error: {errorMsg}
          <button onClick={hideError}>Okay</button>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Username: </label>
        <input
          type='text'
          id='name'
          name='name'
          value={form.name}
          onChange={handleChange}
        />
        <label htmlFor='email'>Email: </label>
        <input
          type='text'
          id='email'
          name='email'
          value={form.email}
          onChange={handleChange}
        />
        <button disabled={!(form.name && form.email)}>Save Profile</button>
      </form>
    </>
  )
}

export default Register
