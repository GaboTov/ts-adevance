export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10,
) => {
  return {

    id,
    stock,
    isNew
  }
}


console.log(createProduct(1, true, 10))
console.log(createProduct(2, true, 10))
console.log(createProduct(3, false))
console.log(createProduct(5))
