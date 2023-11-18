import { ProductDTO } from "./product.dto"
import { Product } from "./product.model"
const product: Product[] = []

export const addProduct = (data: ProductDTO) => {
  const pushData: Product = {
    ...data,
    id: "randomId",
    category: {
      id: "randomId",
      createdAt: new Date() ,
      updatedAt: new Date(),
      name: "nombre random"
    },
      createdAt: new Date() ,
      updatedAt: new Date(),

  }
  product.push(pushData)
}