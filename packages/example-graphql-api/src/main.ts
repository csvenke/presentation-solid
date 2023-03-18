import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { createShippingCostUseCases } from "@presentation/shipping-cost-app";
import { createResolversFromUsecases } from "./resolvers";
import { typeDefs } from "./typeDefs";

async function main() {
  const usecases = createShippingCostUseCases();
  const resolvers = createResolversFromUsecases(usecases);
  const server = new ApolloServer<{}>({
    typeDefs,
    resolvers,
  });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at ${url}`);
}

main();
