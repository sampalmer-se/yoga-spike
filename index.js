import { GraphQLServer } from "graphql-yoga";
import { SecretEscapesSchema } from "./schema";
import depthLimit from "graphql-depth-limit";
import { createComplexityLimitRule } from "graphql-validation-complexity";

const server = new GraphQLServer({
  schema: SecretEscapesSchema
});

server.options.validationRules = [
  depthLimit(19),
  createComplexityLimitRule(100)
];

server.start(() => console.log("Server is running on localhost:4000"));
