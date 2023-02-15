import React from 'react'

import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'

import style from './style.module.scss'

const Icons = () => {
  return (
    <div className={style.galleryContainer}>
      <div className={style.imageContainer}>
        <img src={img1} />
      </div>
      <div className={style.imageContainer}>
        <img src={img2} />
      </div>
      <div className={style.imageContainer}>
        <img src={img3} />
      </div>
      <div className={style.imageContainer}>
        <img src={img4} />
      </div>
      <div className={style.imageContainer}>
        <img src={img5} />
      </div>
      <div className={style.imageContainer}>
        <img src={img6} />
      </div>
    </div>
  )
}

export default Icons
