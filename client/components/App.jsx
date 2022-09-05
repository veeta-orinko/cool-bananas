import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './Navbar'

import Landing from './Landing'
import Dashboard from './Dashboard'
import Collection from './Collection'
import Tagged from './Tagged'
import Create from './Create'
import Upload from './Upload'
import NotFound from './NotFound'

export default function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/tagged' element={<Tagged />} />
        <Route path='/create' element={<Create />} />
        <Route path='/create/upload' element={<Upload />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  )
}
