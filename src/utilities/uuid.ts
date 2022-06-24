export class uuid {
  static long() {
    return uuid.fromBase('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
  }
  static short() {
    return uuid.fromBase('xxxxxxxx')
  }
  private static fromBase(base: string) {
    return base.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0
      const v = c == 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }
}