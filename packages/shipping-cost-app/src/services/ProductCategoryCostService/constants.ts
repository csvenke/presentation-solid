import { LargeCylindricalProductCategoryCostPlugin } from "./plugins/LargeCylindricalProductCategoryCostPlugin";
import { LargeIrregularProductCategoryCostPlugin } from "./plugins/LargeIrregularProductCategoryCostPlugin";
import { LargeRectangularProductCategoryCostPlugin } from "./plugins/LargeRectangularProductCategoryCostPlugin";
import { MediumCylindricalProductCategoryCostPlugin } from "./plugins/MediumCylindricalProductCategoryCostPlugin";
import { MediumIrregularProductCategoryCostPlugin } from "./plugins/MediumIrregularProductCategoryCostPlugin";
import { MediumRectangularProductCategoryCostPlugin } from "./plugins/MediumRectangularProductCategoryCostPlugin";
import { SmallCylindricalProductCategoryCostPlugin } from "./plugins/SmallCylindricalProductCostCalculatorPlugin";
import { SmallIrregularProductCategoryCostPlugin } from "./plugins/SmallIrregularProductCategoryCostPlugin";
import { SmallRectangularProductCategoryCostPlugin } from "./plugins/SmallRectangularProductCategoryCostPlugin";
import { ProductCategoryCostPlugin } from "./ProductCategoryCostPlugin";

export const ALL_PRODUCT_CATEGORY_COST_PLUGINS: ProductCategoryCostPlugin[] = [
  new LargeCylindricalProductCategoryCostPlugin(),
  new LargeIrregularProductCategoryCostPlugin(),
  new LargeRectangularProductCategoryCostPlugin(),
  new MediumCylindricalProductCategoryCostPlugin(),
  new MediumIrregularProductCategoryCostPlugin(),
  new MediumRectangularProductCategoryCostPlugin(),
  new SmallCylindricalProductCategoryCostPlugin(),
  new SmallIrregularProductCategoryCostPlugin(),
  new SmallRectangularProductCategoryCostPlugin(),
];
