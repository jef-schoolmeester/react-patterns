export type CatBreed = {
  breed: string
  country: string
  origin: string
  coat: string
  pattern: string
}

export type BreedPage = {
  current_page: number
  data: Array<CatBreed>
}

export interface CatNinjaInterface {
  getBreedPage: (page: number) => Promise<BreedPage>
}
