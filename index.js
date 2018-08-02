const express = require('express');
const {
    ApolloServer,
    gql
} = require('apollo-server-express');
const typeDefs = require('./schema')

const candidates = [{
        memberId: '12345',
        name: 'Dalia De Felipe',
        image: 'pic.jpeg',
        suitable: 'true',
    },
    {
        memberId: '67890',
        name: 'José Almaraz',
        image: 'pic.jpeg',
        suitable: 'false',
    }
];

const resolvers = {
    Query: {
        candidates: () => candidates,
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const app = express();
server.applyMiddleware({
    app
});

app.listen({
        port: 4000
    }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);