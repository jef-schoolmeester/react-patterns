import React, { useEffect, useState } from 'react'
import { CatFactProps } from '../utils/types'

const withCatFact = (WrappedComponent: React.ComponentType<CatFactProps>) => {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component'

  const ComponentWithCatFact = (props: CatFactProps) => {
    const [catFact, setCatFact] = useState()

    const fetchCatFact = async () => {
      const response = await fetch('https://catfact.ninja/fact')
      const result = await response.json()
      setCatFact(result.fact)
    }

    useEffect(() => {
      fetchCatFact()
    }, [])

    if (!catFact) return <p>Loading...</p>
    return <WrappedComponent {...props} fact={catFact} />
  }

  ComponentWithCatFact.displayName = `withCatFact(${displayName})`
  return ComponentWithCatFact
}

export default withCatFact
