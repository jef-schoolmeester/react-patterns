import React from 'react'

import { CatBreed } from '../utils/types'

type Props = {
  current_page: number
  data: Array<CatBreed>
  goToPage: (pageId: number) => void
}

const BreedPage: React.FC<Props> = ({ data, current_page, goToPage }) => {
  return (
    <div>
      {current_page > 1 ? (
        <button onClick={() => goToPage(current_page - 1)}>Previous</button>
      ) : null}
      <button onClick={() => goToPage(current_page + 1)}>Next</button>
      <h3>{current_page}</h3>
      <ul>
        {data.map((breed) => (
          <li key={breed.breed}>{breed.breed}</li>
        ))}
      </ul>
    </div>
  )
}

export default BreedPage
