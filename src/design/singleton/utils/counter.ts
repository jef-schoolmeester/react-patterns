let count = 0

const counter = {
  increment: () => count++,
  getCount: () => count,
  count: count,
}

Object.freeze(counter)

export { counter }
