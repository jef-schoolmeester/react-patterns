import React, { useEffect, useRef, useState } from 'react'

import { BreedPage } from './utils/types'
import { CachedCatNinja } from './utils/CachedCatNinja'

import BreedPageComponent from './components/BreedPage'

const Proxy = () => {
  const cachedCatNinja = useRef(new CachedCatNinja())

  const [pageData, setPageData] = useState<BreedPage>()

  const fetchCatBreedPage = async (pageId: number) => {
    setPageData(undefined)
    const breedPage = await cachedCatNinja.current.getBreedPage(pageId)
    setPageData(breedPage)
  }

  useEffect(() => {
    fetchCatBreedPage(1)
  }, [])

  return (
    <main>
      <h1>Proxy pattern</h1>
      {pageData ? (
        <BreedPageComponent {...pageData} goToPage={fetchCatBreedPage} />
      ) : (
        <h3>Loading....</h3>
      )}
    </main>
  )
}

export default Proxy
