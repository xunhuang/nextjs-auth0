import { postgraphile } from 'postgraphile';

const pgConfig = process.env.DATABASE_URL;

export default postgraphile(
  pgConfig,
  "public",
  {
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
    graphqlRoute: "/api/graphql",
    graphiqlRoute: "/api/graphiql",

    // pgSettings: (req: any) => {
    //   const settings = {};
    //   console.log(req.user.permissions);
    //   // console.log(req);
    //   if (req.user) {
    //     // this directly does "set Role xxxx" in Postgres SQL. this works
    //     settings["role"] = req.user.permissions[0];
    //     // following didn't work 
    //     // settings["role"] = req.user.permissions;
    //     // settings["role"] = req.user.permissions.join(" ");
    //     // settings["user_name"] = req.user.sub;
    //     settings["user.user_id"] = req.user.sub;
    //   }
    //   console.dir(settings);
    //   return settings;
    // },
  }
);
