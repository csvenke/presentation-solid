import { expect, test } from "vitest";
import { ShippingMethodId } from "../../../entities/ShippingMethod";
import { createRandomProduct } from "../../../persistance/mocks/createMockProductPersistance";
import { ShippingMethodAvailabilityPlugin } from "../ShippingMethodAvailabilityPlugin";
import { makeGetAvailableShippingMethods } from "./getAvailableShippingMethods";

test("should return empty when empty plugins", () => {
  const getAvailableShippingStrategies = makeGetAvailableShippingMethods([]);
  const product = createRandomProduct();
  expect(getAvailableShippingStrategies([product])).toEqual([]);
});

test("should return only available plugins", () => {
  const getAvailableShippingStrategies = makeGetAvailableShippingMethods([
    createUnavailablePlugin(),
    createAvailablePlugin(),
    createUnavailablePlugin(),
    createUnavailablePlugin(),
  ]);
  const product = createRandomProduct();
  expect(getAvailableShippingStrategies([product])).toEqual([ShippingMethodId.GroundShipping]);
});

function createAvailablePlugin(): ShippingMethodAvailabilityPlugin {
  return {
    getId() {
      return ShippingMethodId.GroundShipping;
    },
    isAvailable() {
      return true;
    },
  };
}

function createUnavailablePlugin(): ShippingMethodAvailabilityPlugin {
  return {
    getId() {
      return ShippingMethodId.FreightShipping;
    },
    isAvailable() {
      return false;
    },
  };
}
