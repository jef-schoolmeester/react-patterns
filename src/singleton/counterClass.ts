let instance: CounterClass
let count = 0

class CounterClass {
  constructor() {
    if (instance)
      throw new Error('Cannot create more than one instance of this class')
  }
  instance = this

  increment() {
    count++
  }

  getCount() {
    return count
  }
}

const counterClass = new CounterClass()

export { counterClass }
