import { Module } from "@nestjs/common";
import {
  createShippingCostUseCases,
  ShippingCostUseCases,
} from "@presentation/shipping-cost-app";
import { AvailableShippingMethodsController } from "./endpoints/availableShippingMethods/availableShippingMethodsController";
import { ProductsController } from "./endpoints/products/productsController";
import { ShippingCostSummaryController } from "./endpoints/shippingCostSummary/shippingCostSummaryController";
import {
  GET_ALL_PRODUCTS_USE_CASE,
  GET_AVAILABLE_SHIPPING_COST_SUMMARIES_USE_CASE,
  GET_AVAILABLE_SHIPPING_METHODS_USE_CASE,
  GET_PRODUCTS_BY_IDS_USE_CASE,
  GET_SHIPPING_COST_SUMMARY_USE_CASE,
  SHIPPING_COST_USE_CASES,
} from "./tokens";

@Module({
  controllers: [
    ProductsController,
    AvailableShippingMethodsController,
    ShippingCostSummaryController,
  ],
  providers: [
    {
      provide: SHIPPING_COST_USE_CASES,
      useFactory: createShippingCostUseCases,
    },
    {
      provide: GET_ALL_PRODUCTS_USE_CASE,
      useFactory(usecases: ShippingCostUseCases) {
        return usecases.getAllProductsUseCase;
      },
      inject: [SHIPPING_COST_USE_CASES],
    },
    {
      provide: GET_PRODUCTS_BY_IDS_USE_CASE,
      useFactory(usecases: ShippingCostUseCases) {
        return usecases.getProductsByIdUseCase;
      },
      inject: [SHIPPING_COST_USE_CASES],
    },
    {
      provide: GET_SHIPPING_COST_SUMMARY_USE_CASE,
      useFactory(usecases: ShippingCostUseCases) {
        return usecases.getShippingCostSummaryUseCase;
      },
      inject: [SHIPPING_COST_USE_CASES],
    },
    {
      provide: GET_AVAILABLE_SHIPPING_METHODS_USE_CASE,
      useFactory(usecases: ShippingCostUseCases) {
        return usecases.getAvailableShippingMethodsUseCase;
      },
      inject: [SHIPPING_COST_USE_CASES],
    },
    {
      provide: GET_AVAILABLE_SHIPPING_COST_SUMMARIES_USE_CASE,
      useFactory(usecases: ShippingCostUseCases) {
        return usecases.getAvailableShippingCostSummariesUseCase;
      },
      inject: [SHIPPING_COST_USE_CASES],
    },
  ],
})
export class AppModule {}
