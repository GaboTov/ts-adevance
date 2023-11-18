import { BaseModel } from "../base.model"

export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "custmer"

}

export interface User extends BaseModel {
  user: string
  role: ROLES
}


