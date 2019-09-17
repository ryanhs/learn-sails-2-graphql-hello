/**
 * GraphqlController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var Promise = require('bluebird');
const graphqlHTTP = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = `
  type Query {
    hello: String!
    helloName(name: String): String!
  }

  schema {
    query: Query
  }
`

const resolvers = {
  Query: {
    hello: async () => Promise.resolve('hello world!'),

    helloName: async (parent, {name = "ryan"}) => Promise.resolve(`hello ${name}!`)
                                                         .tap(response => console.log({response})),
  }
}

const serve = graphqlHTTP({
  schema: makeExecutableSchema({
    typeDefs,
    resolvers,
  }),

  graphiql: sails.config.environment === 'development',
  pretty: sails.config.environment === 'development',
})


module.exports = {
  serve: async (req, res) => {
    // log request here?
    // console.log({query: req.body['query']})

    // serve graphql request
    return serve(req, res)
  }

};
