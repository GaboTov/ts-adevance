import { Product } from "./product.model"
export interface ProductDTO extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string

}

type example = Pick<Product, 'price' | 'stock'>

export interface UpdateProduct extends Partial<Product>{// haca que todo sea opcional


}

export interface type2 extends Required<ProductDTO>{// hace que tado sea obligatorio

}

type FindProductDTO = Readonly<Partial<Product>>//hace que no se pedan modificar y que sean opcionales