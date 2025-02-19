const superHeros: string[] = []
// const heroPower: number[] = []
const heroPower: Array<number> = []

type User = {
    name: string
    isActive: boolean
}

const allUsers: User[] = []

const MLModels: number[][] = [
    [255, 255, 255],
    []
]

type Movie = {
    name : string,
    genre : string
}

const movies : Movie[] = []
movies.push({name : "thor", genre : "action"})
console.log(movies)

superHeros.push("spiderman")
heroPower.push(2)

allUsers.push({name: "", isActive: true})