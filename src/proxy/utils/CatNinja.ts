import { BreedPage, CatNinjaInterface } from './types'

class CatNinja implements CatNinjaInterface {
  async getBreedPage(page: number): Promise<BreedPage> {
    const response = await fetch(`https://catfact.ninja/breeds?page=${page}`)
    return await response.json()
  }
}

export { CatNinja }
