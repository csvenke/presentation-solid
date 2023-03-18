import gql from "graphql-tag";

export const typeDefs = gql`
  schema {
    query: Query
  }

  type Query {
    products: [Product!]!
    productsById(ids: [ID!]!): [Product!]!
    availableShippingMethods(productIds: [ID!]!): [ShippingMethod!]!
    shippingCostSummary(
      productIds: [ID!]!
      shippingMethodId: ShippingMethodId!
    ): ShippingCostSummary
    availableshippingCostSummaries(productIds: [ID!]!): [ShippingCostSummary!]!
  }

  type ShippingCostSummary {
    shippingMethodId: ShippingMethodId!
    totalCost: Float!
    products: [ProductShippingCostSummary!]!
  }

  type ProductShippingCostSummary {
    productId: ID!
    baseCost: Float!
    weightCost: Float!
    perishableCost: Float!
    fragilityCost: Float!
    methodCost: Float!
  }

  type Product {
    id: ID!
    name: String!
    weight: Int!
    size: ProductSize!
    shape: ProductShape!
    isFragile: Boolean!
    isPerishable: Boolean!
  }

  type ShippingMethod {
    id: ShippingMethodId!
    modifier: Float!
    minimumCost: Float!
  }

  enum ProductSize {
    Small
    Medium
    Large
  }

  enum ProductShape {
    Rectangular
    Cylindrical
    Irregular
  }

  enum ShippingMethodId {
    GroundShipping
    ExpeditedGroundShipping
    TwoDayAirShipping
    NextDayAirShipping
    InternationalAirShipping
    InternationalSeaShipping
    FreightShipping
  }
`;
