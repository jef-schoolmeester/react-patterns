import React, { useEffect, useRef, useState } from 'react'

import style from './style.module.scss'

interface Props {
  imgUrl: string
}

const LazyImage: React.FC<Props> = ({ imgUrl }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const [imageUrl, setImageUrl] = useState<string>()

  const callbackFn: IntersectionObserverCallback = async (entries) => {
    if (!entries[0]) return
    const intersectionObservableEntry = entries[0]
    if (intersectionObservableEntry.intersectionRatio === 0) return
    try {
      const image = await import(`../assets/${imgUrl}.jpg`)
      setImageUrl(image.default)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const observedEl = containerRef.current
    const observer = new IntersectionObserver(callbackFn, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    })

    if (observedEl) observer.observe(observedEl)
    return () => {
      if (observedEl) observer.unobserve(observedEl)
    }
  }, [])
  return (
    <div ref={containerRef}>
      {imageUrl ? (
        <div className={style.imageContainer}>
          <img src={imageUrl} />
        </div>
      ) : (
        <div className={style.imageFallback}>Loading</div>
      )}
    </div>
  )
}

export default LazyImage
