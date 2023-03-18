import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import {
  GetAllProductsUseCase,
  GetProductsByIdsUseCase,
} from "@presentation/shipping-cost-app";
import request from "supertest";
import { afterEach, beforeEach, describe, test } from "vitest";
import {
  GET_ALL_PRODUCTS_USE_CASE,
  GET_PRODUCTS_BY_IDS_USE_CASE,
} from "../../tokens";
import { ProductsController } from "./productsController";

declare module "vitest" {
  export interface TestContext {
    app?: INestApplication;
  }
}

describe("when empty", () => {
  beforeEach(async (context) => {
    const emptyGetAllProductsUseCase: GetAllProductsUseCase = {
      execute: () => Promise.resolve([]),
    };
    const emptyGetProductsByIdUseCase: GetProductsByIdsUseCase = {
      execute: () => Promise.resolve([]),
    };

    const moduleRef = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        {
          provide: GET_ALL_PRODUCTS_USE_CASE,
          useValue: emptyGetAllProductsUseCase,
        },
        {
          provide: GET_PRODUCTS_BY_IDS_USE_CASE,
          useValue: emptyGetProductsByIdUseCase,
        },
      ],
    }).compile();

    const app = moduleRef.createNestApplication();
    await app.init();

    context.app = app;
  });

  test("should return an empty array and status code 200 when getting products", ({
    app,
  }) => {
    return request(app.getHttpServer()).get("/products").expect(200).expect([]);
  });

  test("should return an empty array when retrieving product with ID 1", ({
    app,
  }) => {
    return request(app.getHttpServer())
      .get("/products/1")
      .expect(200)
      .expect([]);
  });

  afterEach(async ({ app }) => {
    await app.close();
  });
});

describe("when throwing", () => {
  beforeEach(async (context) => {
    const throwingGetAllProductsUseCase: GetAllProductsUseCase = {
      execute: () => Promise.reject("Something went wrong!"),
    };
    const throwingGetProductsByIdUseCase: GetProductsByIdsUseCase = {
      execute: () => Promise.reject("Something went wrong!"),
    };

    const moduleRef = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        {
          provide: GET_ALL_PRODUCTS_USE_CASE,
          useValue: throwingGetAllProductsUseCase,
        },
        {
          provide: GET_PRODUCTS_BY_IDS_USE_CASE,
          useValue: throwingGetProductsByIdUseCase,
        },
      ],
    }).compile();

    const app = moduleRef.createNestApplication();
    await app.init();

    context.app = app;
  });

  test("should fail", ({ app }) => {
    return request(app.getHttpServer()).get("/products").expect({
      statusCode: 500,
      message: "Internal server error",
    });
  });

  test("should fail two", ({ app }) => {
    return request(app.getHttpServer()).get("/products/1").expect({
      statusCode: 500,
      message: "Internal server error",
    });
  });

  afterEach(async ({ app }) => {
    await app.close();
  });
});
