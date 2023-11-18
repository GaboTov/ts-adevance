export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "custmer"

}

export type User = {
  user: string
  role: ROLES
}

const gaboUser: User = {
  user: "Gabo Tovar",
  role: ROLES.ADMIN
}
