const { gql } = require('apollo-server-express')

const typeDefs = gql`

    type Audit {
        id: String
        createdAt: String
        severity: String
        component: String
        context: String
        message: String
        tags: [String]
    }

    type Query {
        getLogs(page : Int, size: Int) : [Audit]

        getSingleLog(id : String) : Audit
    }

    type Mutation {
        createLog(
            severity: String, 
            component: String, 
            context: String, 
            message: String, 
            tag: String
            ): Audit
    }

`

module.exports = { typeDefs }