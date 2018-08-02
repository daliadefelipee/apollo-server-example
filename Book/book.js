export const typeDef = `
extend type Query {
    books:[Book]
  }

type Book {
    title: String
    author: String
  }
`;

export const resolvers = {
    Query: {
        books: () => books,
    },
  };