export const createProduct = (
  id: string | number,
  isNew: boolean,
  stock?: number,
) => {
  return {

    id,
    stock: stock ?? 10,
    isNew: isNew ?? true
  }
}


console.log(createProduct(1, true, 10))
console.log(createProduct(2, true, 10))
console.log(createProduct(3, false))
