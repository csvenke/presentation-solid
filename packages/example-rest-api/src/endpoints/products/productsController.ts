import { Controller, Get, Inject, Param } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import {
  GetAllProductsUseCase,
  GetProductsByIdsUseCase,
} from "@presentation/shipping-cost-app";
import { Product } from "../../models";
import {
  GET_ALL_PRODUCTS_USE_CASE,
  GET_PRODUCTS_BY_IDS_USE_CASE,
} from "../../tokens";

@Controller()
export class ProductsController {
  constructor(
    @Inject(GET_ALL_PRODUCTS_USE_CASE)
    private readonly getAllProductsUseCase: GetAllProductsUseCase,
    @Inject(GET_PRODUCTS_BY_IDS_USE_CASE)
    private readonly getProductsByIdsUseCase: GetProductsByIdsUseCase,
  ) {}

  @ApiOkResponse({
    type: Product,
    isArray: true,
  })
  @Get("products")
  public getProducts(): Promise<Product[]> {
    return this.getAllProductsUseCase.execute();
  }

  @ApiOkResponse({
    type: Product,
    isArray: true,
  })
  @Get("products/:id")
  public getProductById(@Param("id") id: string): Promise<Product[]> {
    return this.getProductsByIdsUseCase.execute([id]);
  }
}
