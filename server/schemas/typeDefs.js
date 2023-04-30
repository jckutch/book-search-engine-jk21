const { gql } = require('apollo-server-express');

// typeDefs
const typeDefs = gql`
    type Book {
        bookId: String
        authors: [String]!
        description: String
        title: String
        image: String
        link: String
    }
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]!
      }
    type Query {
        me: User
    }
    type Auth {
    token: ID!
    user: User
    }
    input SavedBookInput {
        authors: [String]
        description: String
        bookId: String
        image: String
        forSale: String
        link: String
        title: String
    }
    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveBook(bookData: BookInput!): User
        removeBook(bookId: String!): User
}
`;

module.exports = typeDefs;