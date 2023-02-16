import React from 'react'
import LazyImage from './LazyImage'

import style from './style.module.scss'

const images = ['1', '2', '3', '4', '5', '6']

const Gallery = () => {
  return (
    <div className={style.galleryContainer}>
      {images.map((image) => (
        <LazyImage key={image} imgUrl={image} />
      ))}
    </div>
  )
}

export default Gallery
