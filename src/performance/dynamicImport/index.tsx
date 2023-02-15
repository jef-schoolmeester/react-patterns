import React, { lazy, Suspense } from 'react'

const LazyGallery = lazy(() => import('./components/Gallery'))

const DynamicImport = () => {
  return (
    <main>
      <h1>Dynamic import</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <LazyGallery />
      </Suspense>
    </main>
  )
}

export default DynamicImport
