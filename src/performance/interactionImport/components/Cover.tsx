import React, {
  createContext,
  createElement,
  useContext,
  useState,
} from 'react'

import style from './style.module.scss'

const CoverContext = createContext<{
  toggleSelector: () => void
  selectCover: (cover: string) => void
}>({
  toggleSelector: () => null,
  selectCover: () => null,
})

export const useCoverContext = () => useContext(CoverContext)

const Cover = () => {
  const [cover, setCover] = useState<string>()
  const [coverSelectorEl, setCoverSelectorEl] = useState<any>()
  const [isCoverSelectorVisible, setCoverSelectorVisible] =
    useState<boolean>(false)

  const toggleSelector = () => {
    setCoverSelectorVisible(!isCoverSelectorVisible)
  }

  const handleOpenSelector = async () => {
    if (!coverSelectorEl) {
      const coverSelector = await import('./CoverSelector')
      const el = createElement(coverSelector.default, null)
      setCoverSelectorEl(el)
    }

    setCoverSelectorVisible(true)
  }

  return (
    <CoverContext.Provider
      value={{
        toggleSelector: toggleSelector,
        selectCover: (cover) => setCover(cover),
      }}
    >
      <div>
        <div className={style.cover}>{cover && <img src={cover} />}</div>
        <button onClick={handleOpenSelector}>Select cover</button>
        <>
          {coverSelectorEl && isCoverSelectorVisible ? coverSelectorEl : null}
        </>
      </div>
    </CoverContext.Provider>
  )
}

export default Cover
