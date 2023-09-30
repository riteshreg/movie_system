// npm install @apollo/server express graphql cors body-parser
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import pkg from "body-parser";
const { json } = pkg;
import { typeDefs, resolvers } from "./graphql/schema.js";
import { connectToMongoDB } from "./mongodb/connection.js";

interface MyContext {
  token?: String;
}

const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();
app.use(
  "/graphql",
  cors<cors.CorsRequest>(),
  json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  })
);

connectToMongoDB()
  .then(async (response) => {
    console.log("successfully connected");
    await new Promise<void>((resolve) =>
      httpServer.listen({ port: 4000 }, resolve)
    );
    console.log(`🚀 Server ready at http://localhost:4000/graphql`);
  })
  .catch((e) => {
    console.log("unalbe to connect to mongodb");
  });
