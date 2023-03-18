import { faker } from "@faker-js/faker";
import { Product, ProductShape, ProductSize } from "../../entities/Product";
import { InMemoryPersistance } from "../InMemoryPersistance";

export const createRandomProduct = (override: Partial<Product> = {}): Product => ({
  id: faker.database.mongodbObjectId(),
  name: faker.commerce.productName(),
  weight: faker.datatype.number({ min: 5, max: 50 }),
  size: faker.helpers.arrayElement([ProductSize.Small, ProductSize.Medium, ProductSize.Large]),
  shape: faker.helpers.arrayElement([
    ProductShape.Rectangular,
    ProductShape.Cylindrical,
    ProductShape.Irregular,
  ]),
  isFragile: faker.datatype.boolean(),
  isPerishable: faker.datatype.boolean(),
  ...override,
});

const PRODUCTS = Array.from({ length: 100 }).map((_, index) =>
  createRandomProduct({
    id: String(index + 1),
  })
);

export function createMockProductPersistance() {
  const persistance = new InMemoryPersistance<Product>();
  PRODUCTS.forEach((product) => {
    persistance.create(product);
  });
  persistance.initialize();
  return persistance;
}
