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

    input createLogInput {
        severity: String, 
        component: String, 
        context: String, 
        message: String, 
        tag: String
    }

    type Mutation {
        createLog(audit : createLogInput): Audit
    }

`

module.exports = { typeDefs }