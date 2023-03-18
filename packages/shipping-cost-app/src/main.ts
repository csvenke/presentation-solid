import { createMockProductPersistance } from "./persistance/mocks/createMockProductPersistance";
import { createMockShippingMethodPersistance } from "./persistance/mocks/createMockShippingMethodPersistance";
import { ALL_PRODUCT_CATEGORY_COST_PLUGINS } from "./services/ProductCategoryCostService/constants";
import { DefaultProductCategoryCostService } from "./services/ProductCategoryCostService/ProductCategoryCostService";
import { ALL_SHIPPING_METHOD_AVAILABILITY_PLUGINS } from "./services/ShippingMethodAvailabilityService/constants";
import { DefaultShippingMethodAvailabilityService } from "./services/ShippingMethodAvailabilityService/ShippingMethodAvailabilityService";
import { ShippingCostUseCases } from "./usecases";
import { DefaultGetAllProductsUseCase } from "./usecases/GetAllProductsUseCase";
import { DefaultGetAvailableShippingCostSummariesUseCase } from "./usecases/GetAvailableShippingCostSummariesUseCase";
import { DefaultGetAvailableShippingMethodsUseCase } from "./usecases/GetAvailableShippingMethodsUseCase";
import { DefaultGetProductsByIdsUseCase } from "./usecases/GetProductsByIdUseCase";
import { DefaultGetShippingCostSummaryUseCase } from "./usecases/GetShippingCostSummaryUseCase";

export function createShippingCostUseCases(): ShippingCostUseCases {
  const productPersistance = createMockProductPersistance();
  const shippingMethodPersistance = createMockShippingMethodPersistance();

  const shippingMethodAvailabilityService = new DefaultShippingMethodAvailabilityService(
    ALL_SHIPPING_METHOD_AVAILABILITY_PLUGINS
  );
  const productCostCategoryService = new DefaultProductCategoryCostService(
    ALL_PRODUCT_CATEGORY_COST_PLUGINS
  );

  const getAllProductsUseCase = new DefaultGetAllProductsUseCase(productPersistance);

  const getProductsByIdUseCase = new DefaultGetProductsByIdsUseCase(productPersistance);

  const getAvailableShippingMethodsUseCase = new DefaultGetAvailableShippingMethodsUseCase(
    productPersistance,
    shippingMethodPersistance,
    shippingMethodAvailabilityService
  );

  const getShippingCostSummaryUseCase = new DefaultGetShippingCostSummaryUseCase(
    productPersistance,
    shippingMethodPersistance,
    productCostCategoryService,
    shippingMethodAvailabilityService
  );

  const getAvailableShippingCostSummariesUseCase =
    new DefaultGetAvailableShippingCostSummariesUseCase(
      getAvailableShippingMethodsUseCase,
      getShippingCostSummaryUseCase
    );

  return {
    getAllProductsUseCase,
    getAvailableShippingMethodsUseCase,
    getProductsByIdUseCase,
    getShippingCostSummaryUseCase,
    getAvailableShippingCostSummariesUseCase,
  };
}
