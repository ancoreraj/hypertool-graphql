const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const { ApolloServer } = require('apollo-server-express')
const app = express();
const connectDB = require('./config/db')
const { typeDefs } = require('./graphQL/typeDefs')
const { resolvers } = require('./graphQL/resolvers')

dotenv.config({ path: './config/.env' })

let apolloServer = null;
async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    connectDB()
    const PORT = process.env.PORT || 5000
    app.listen(PORT, () => console.log(`Server is running at ${PORT}`))
}
startServer();


