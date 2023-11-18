// Gabo =>['G','a','b','o']
export function parseStr(input: string): string[]
export function parseStr(input: string[]): string

export function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('')
  } else {
    return input.split('')
  }
}

console.log(parseStr('Gabo'))
console.log(parseStr(["n", 'o']))

