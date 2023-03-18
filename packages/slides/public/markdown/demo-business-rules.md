```ts
interface Product {
  id: string;
  name: string;
  weight: number;
  size: ProductSize;
  shape: ProductShape;
  isFragile: boolean;
  isPerishable: boolean;
}

enum ProductSize {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

enum ProductShape {
  Rectangular = "rectangular",
  Cylindrical = "cylindrical",
  Irregular = "irregular",
}
```

---

Produkter blir delt inn i disse kategoriene...

- **Small** and **rectangular** products
- **Small** and **cylindrical** products
- **Small** and **irregular** products
- **Medium** and **rectangular** products
- **Medium** and **cylindrical** products
- **Medium** and **irregular** products
- **Large** and **rectangular** products
- **Large** and **cylindrical** products
- **Large** and **irregular** products

---

Det er egen kalkulering av...

- base cost
- weight cost
- shipping method cost
- fragility cost
- perishable cost

... per produkt kategori

---

```ts
interface ShippingMethod {
  id: ShippingMethodId;
  minimumCost: number;
  modifier: number;
}

enum ShippingMethodId {
  GroundShipping = "GroundShipping",
  ExpeditedGroundShipping = "ExpeditedGroundShipping",
  TwoDayAirShipping = "TwoDayAirShipping",
  NextDayAirShipping = "NextDayAirShipping",
  InternationalAirShipping = "InternationalAirShipping",
  InternationalSeaShipping = "InternationalSeaShipping",
  FreightShipping = "FreightShipping",
}
```

---

- Product shape
- Product size
- Product weight
- Product fragility
- Product perishibility

... påvirker hvilke **shipping methods** som er tilgjengelig og ikke

---

## Funksjonalitet

Det skal være mulig å:

- ... velge n antall produkter, få vite hvilke **shipping methods** som er tilgjengelige for valgte produkter
- ... regne ut shipping kostnad for produkter og vise en detaljert utregning uten skjulte kostnader
