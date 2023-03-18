import { GetAllProductsUseCase } from "./GetAllProductsUseCase";
import { GetAvailableShippingCostSummariesUseCase } from "./GetAvailableShippingCostSummariesUseCase";
import { GetAvailableShippingMethodsUseCase } from "./GetAvailableShippingMethodsUseCase";
import { GetProductsByIdsUseCase } from "./GetProductsByIdUseCase";
import { GetShippingCostSummaryUseCase } from "./GetShippingCostSummaryUseCase";

export {
  GetAllProductsUseCase,
  GetAvailableShippingMethodsUseCase,
  GetProductsByIdsUseCase,
  GetShippingCostSummaryUseCase,
  GetAvailableShippingCostSummariesUseCase,
};

export interface ShippingCostUseCases {
  getAllProductsUseCase: GetAllProductsUseCase;
  getAvailableShippingMethodsUseCase: GetAvailableShippingMethodsUseCase;
  getProductsByIdUseCase: GetProductsByIdsUseCase;
  getShippingCostSummaryUseCase: GetShippingCostSummaryUseCase;
  getAvailableShippingCostSummariesUseCase: GetAvailableShippingCostSummariesUseCase;
}
