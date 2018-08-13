module.exports = `
type Book {
  id: ID!
  title: String!
  author: String!
  isbn: String
  url: String
}

type Query {
  allBooks(filter: bookFilter): [Book!]!
}

input bookFilter {
  id: ID
  title: String
  author: String
  isbn: String
  url: String
}

type Mutation {
  createBook(title: String!, author: String!): Book
}
`;
