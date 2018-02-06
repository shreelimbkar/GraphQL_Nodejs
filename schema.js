export default `

type Cat {
    _id: String!
    name: String!
}

type query {
    allCats: [Cat!]!
}

type Mutation: {
    createCat(name: String!): Cat!
}

`