function delay<T>(fn: (resolve: (value: unknown) => void) => void, time = 0) {
  return new Promise<T>((resolve) => {
    const timer = setTimeout(() => {
      clearTimeout(timer)
      fn(resolve)
    }, time)
  })
}

export default delay
