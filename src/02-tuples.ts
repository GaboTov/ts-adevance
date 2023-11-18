const prices: (number | string)[] = [1, 2, 3, 4, "ass"]

prices.push(1)
prices.push("something")

//las tuplas dicen cuantos elementos y de que tipo el cada elemento tiene un array
let user: [string, number, boolean]

user = ["Gabo", 12, true]
const [username, age] = user

console.log(username)
console.log(age)

