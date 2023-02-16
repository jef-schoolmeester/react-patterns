import React from 'react'
import { useCoverContext } from './Cover'

import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'

import style from './style.module.scss'

const CoverSelector: React.FC = () => {
  const { selectCover, toggleSelector } = useCoverContext()
  return (
    <section>
      <button onClick={toggleSelector}>Close</button>
      <div className={style.imageSelectorContainer}>
        <div className={style.imageContainer}>
          <img src={img1} onClick={() => selectCover(img1)} />
        </div>
        <div className={style.imageContainer}>
          <img src={img2} onClick={() => selectCover(img2)} />
        </div>
        <div className={style.imageContainer}>
          <img src={img3} onClick={() => selectCover(img3)} />
        </div>
        <div className={style.imageContainer}>
          <img src={img4} onClick={() => selectCover(img4)} />
        </div>
        <div className={style.imageContainer}>
          <img src={img5} onClick={() => selectCover(img5)} />
        </div>
        <div className={style.imageContainer}>
          <img src={img6} onClick={() => selectCover(img6)} />
        </div>
      </div>
    </section>
  )
}

export default CoverSelector
