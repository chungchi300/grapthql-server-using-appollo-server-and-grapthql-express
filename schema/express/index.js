const type = require("../type");
// Define your types here.
var { buildSchema } = require("graphql");
module.exports = buildSchema(type);
