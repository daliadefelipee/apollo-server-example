const express = require('express');
const {
    ApolloServer,
    gql
} = require('apollo-server-express');
const typeDefs = require('./schema')
const faker = require('faker')
faker.seed(123)

const mocks = {
    Candidate: () => ({
        memberid: faker.random.number(),
        name: faker.name.findName(),
        image: faker.image.avatar(),
        suitable: faker.random.boolean,
    }),
};

const server = new ApolloServer({
    typeDefs,
    mocks,
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