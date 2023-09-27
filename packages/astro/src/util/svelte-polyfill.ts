export const redirect = (path: string) => {
  throw new Error(`Redirect`)
}
export const goto = (path: string) => {
  throw new Error(`Redirect`)
}

export const browser = () => !!globalThis.window
