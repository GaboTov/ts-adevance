import { User, ROLES } from './01.enum'


const currentUser: User = {
  user: "Gabo",
  role: ROLES.ADMIN
}

export const checkAdinRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true
  }
  return false
}
console.log(checkAdinRole())
const checkRole = (...role: string[]): boolean => {
  return role.includes(currentUser.role)
}


console.log(checkRole(ROLES.SELLER, ROLES.CUSTOMER))
