const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const apolloSchema = require("./schema/apollo");
var graphqlHTTP = require("express-graphql");
const expressResolver = require("./schema/express/resolvers");
const expressSchema = require("./schema/express");
const { readFileSync } = require("fs");
const marked = require("marked");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(
  "/graphql-apollo",
  bodyParser.json(),
  graphqlExpress({ schema: apolloSchema })
);

var root = {
  hello: () => {
    return "Hello world!";
  }
};
app.use(
  "/graphql-express",
  graphqlHTTP({
    schema: expressSchema,
    rootValue: expressResolver,
    graphiql: true
  })
);
app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql"
  })
);

app.use("/", (req, res) => {
  res.type("html");
  res.end(marked(readFileSync("./README.md", "utf-8")));
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Books are on ${PORT}.`);
});
