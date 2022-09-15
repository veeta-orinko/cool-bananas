import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Landing.module.scss'
import { fetchDashboardContent } from '../actions/dashboard'
import Display from './Display'

export default function Dashboard() {
  const dispatch = useDispatch()
  const images = useSelector((state) => state.dashboard)
  const [selectedIndex, setSelectedIndex] = useState(0)
  useEffect(() => {
    dispatch(fetchDashboardContent())
  }, [])

  function addIndex() {
    if (images[selectedIndex] < images.length) {
      setSelectedIndex[selectedIndex]++
    } else if (images[selectedIndex] == images.length) {
      setSelectedIndex[selectedIndex] = 0
    }
  }

  function decreaseIndex() {
    if (images[selectedIndex] > 0) {
      setSelectedIndex[selectedIndex]--
    } else if (images[selectedIndex] == 0) {
      setSelectedIndex[selectedIndex] = images.length
    }
  }

  return (
    <>
      <div className={styles.displayContainer}>
        <Display
          imageUrl={images[selectedIndex].imageUrl}
          captionText={images[selectedIndex].images}
        />
        <button onClick={addIndex}>{'->'}</button>
        <button onClick={decreaseIndex}>{'<-'}</button>
      </div>
    </>
  )
}

//get all the images in a random order - DONE (line 9)
// then add a state that keeps track of the current selected index. It starts out as [0].
//clicking on right button goes up, clicking button left goes down.
//add buttons to incr/decr selected index/prevent 0 (i.e. length of array)
