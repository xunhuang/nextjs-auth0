
const express = require("express");
const { postgraphile } = require("postgraphile");

const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
// ...

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-4q8dshdr.us.auth0.com/.well-known/jwks.json`,
  }),
  audience: "ablslsdhwheshss",
  issuer: `https://dev-4q8dshdr.us.auth0.com/`,
  algorithms: ["RS256"],
});

const app = express();

// Apply checkJwt to our graphql endpoint
app.use("/graphql", checkJwt);

console.log(process.env);

const pgConfig = {
  host: process.env.PGHOST || "localhost",
  user: process.env.PGUSER || "johndoe",
  database: process.env.PGDATABASE || "mydb",
  password: process.env.PGPASSWORD || "randompassword",
};

app.use(
  postgraphile(pgConfig, "public", {
    watchPg: true,

    enhanceGraphiql: true,
    graphiql: true,
    subscriptions: true,
    dynamicJson: true,
    setofFunctionsContainNulls: false,
    ignoreRBAC: false,
    showErrorStack: "json",
    extendedErrors: ["hint", "detail", "errcode"],
    // appendPlugins: [require("@graphile-contrib/pg-simplify-inflector")],
    exportGqlSchemaPath: "schema.graphql",

    pgSettings: req => {
      const settings = {};
      console.log(req.user.permissions);
      // if (req.user) {
      //   settings["user.permissions"] = req.user.scopes;
      // }
      return settings;
    },
    // any other PostGraphile options go here
  })
);


app.listen(8080);