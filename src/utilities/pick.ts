function pick<T extends { [K: string]: any }>(obj: T, prop: keyof T) {
  return obj[prop]
}

export default pick
