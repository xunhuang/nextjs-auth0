import express from 'express';
import next from 'next';

const port = process.env.PORT || 3000;
const app = next({ dev: true });
const handle = app.getRequestHandler();

/*
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

function postgraphile_component() {
  // const pgConfig = {
  //   host: process.env.PGHOST || "localhost",
  //   user: process.env.PGUSER || "johndoe",
  //   database: process.env.PGDATABASE || "mydb",
  //   password: process.env.PGPASSWORD || "randompassword",
  // };
  const pgConfig = process.env.DATABASE_URL;
  console.dir(pgConfig)

  return postgraphile(pgConfig, "public", {
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
    exportGqlSchemaPath: "./schema.graphql",

    pgSettings: (req: any) => {
      const settings = {};
      console.log(req.user.permissions);
      // console.log(req);
      if (req.user) {
        // this directly does "set Role xxxx" in Postgres SQL. this works
        settings["role"] = req.user.permissions[0];
        // following didn't work 
        // settings["role"] = req.user.permissions;
        // settings["role"] = req.user.permissions.join(" ");
        // settings["user_name"] = req.user.sub;
        settings["user.user_id"] = req.user.sub;

      }
      console.dir(settings);
      return settings;
    },
  });
}

*/ 
app.prepare().then(() => {
  const server = express();

  // server.use("/graphql", checkJwt);
  // server.use(postgraphile_component());

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  })
}).catch(err => {
  console.log('Error:::::', err);
});
