const {
    gql
} = require('apollo-server');

const typeDefs = gql `
  type Query {
    candidates: [Candidate],
    candidate: Candidate
    }

    type Candidate {
        memberid: Int
        name: String
        image: String
        suitable: Boolean
    }
`;

module.exports = typeDefs