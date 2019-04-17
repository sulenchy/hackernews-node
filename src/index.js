const { GraphQLServer } = require('graphql-yoga')

// 1
const typeDefs = `
type Query {
  info: String!,
  me: String!
}
`

// 2
const resolvers = {
  Query: {
    info: () => "null",
    me:() => `My name is sulenchy`
  }
}

// 3
const server = new GraphQLServer({
  typeDefs,
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))