import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Landing.module.scss'

import { fetchLandingContent } from '../actions/landing'
import Display from './Display'

export default function Landing() {
  const dispatch = useDispatch()
  const landing = useSelector((state) => state.landing)

  useEffect(() => dispatch(fetchLandingContent()), [])

  return (
    <>
      <div className={styles.displayContainer}>
        <Display
          imageUrl={landing.imageUrl}
          captionText={landing.captionText}
        />
      </div>
    </>
  )
}
