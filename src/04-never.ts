const withoutEnd = () => {
  while (true) {
    console.log('aprender')
  }
}

const fail = (message: string) => {
  throw new Error(message)
}

const example = (input: unknown) => {

  if (typeof input === 'string') {
    return 'es un strig'
  } else if (Array.isArray(input)) {
    return 'es un array'
  }
  else {
    return fail("no es")

  }
}

console.log(example('hola'))
console.log(example([1, 1, 11, 1]))
console.log(example(123123))// aca se detiene 
console.log(example('fallo?'))
