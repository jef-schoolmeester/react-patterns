import { CatNinja } from './CatNinja'
import { BreedPage, CatNinjaInterface } from './types'

class CachedCatNinja implements CatNinjaInterface {
  #catNinja: CatNinja
  #breedPages: Record<number, BreedPage>

  constructor() {
    this.#catNinja = new CatNinja()
    this.#breedPages = {}
  }

  async getBreedPage(page: number): Promise<BreedPage> {
    if (this.#breedPages[page]) return this.#breedPages[page]
    const breedPage = await this.#catNinja.getBreedPage(page)
    this.#breedPages[page] = breedPage
    return breedPage
  }
}

export { CachedCatNinja }
