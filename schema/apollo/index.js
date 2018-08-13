const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");
const type = require("../type");
// Define your types here.

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({ typeDefs: type, resolvers });
