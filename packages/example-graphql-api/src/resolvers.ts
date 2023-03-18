import { ShippingCostUseCases } from "@presentation/shipping-cost-app";
import { Resolvers } from "../@generated/types";

export const createResolversFromUsecases = ({
  getAllProductsUseCase,
  getAvailableShippingMethodsUseCase,
  getProductsByIdUseCase,
  getShippingCostSummaryUseCase,
  getAvailableShippingCostSummariesUseCase,
}: ShippingCostUseCases): Resolvers => ({
  Query: {
    products: () => getAllProductsUseCase.execute(),

    productsById: (_, { ids }) => getProductsByIdUseCase.execute(ids),

    availableShippingMethods: (_, { productIds }) =>
      getAvailableShippingMethodsUseCase.execute(productIds),

    shippingCostSummary: (_, { shippingMethodId, productIds }) =>
      getShippingCostSummaryUseCase.execute(shippingMethodId, productIds),

    availableshippingCostSummaries: (_, { productIds }) =>
      getAvailableShippingCostSummariesUseCase.execute(productIds),
  },
});
