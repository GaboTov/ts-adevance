import { SignatureDeclaration } from "typescript"
import { Category } from "../category/category.models"
import { BaseModel } from "../base.model"
export type Sizes = 'S' | 'M' | 'L' | 'XL'
//}

export interface Product extends BaseModel {// se pude extender
  id: string,
  title: string,
  stock: number,
  category: Category
  size?: SignatureDeclaration
  image: string,
  description: string,
  price: number,
  inNew: boolean,
  tags: string[]

}


export interface ProductDTO extends Omit<Product, 'id' | 'createdAt' | 'updateAt' | 'category'> {
  categoryId: string
}
