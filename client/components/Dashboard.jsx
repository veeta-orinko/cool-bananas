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
    if (selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1)
    } else if (selectedIndex == images.length - 1) {
      setSelectedIndex(0)
    }
  }

  function decreaseIndex() {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1)
    } else if (selectedIndex == 0) {
      setSelectedIndex(images.length - 1)
    }
  }

  return (
    <>
      <div className={styles.displayContainer}>
        <button onClick={decreaseIndex}>{'⫷'}</button>
        <Display
          imageUrl={images[selectedIndex].imageUrl}
          captionText={images[selectedIndex].captionText}
        />
        <button onClick={addIndex}>{'⫸'}</button>
      </div>
    </>
  )
}
