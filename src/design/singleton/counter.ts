let count = 0

const counter = {
  increment: () => count++,
  getCount: () => count,
}

Object.freeze(counter)

export { counter }
