import type { ShippingCostUseCases } from "@presentation/shipping-cost-app";
import { createShippingCostUseCases } from "@presentation/shipping-cost-app";
import { createRequestHandler } from "@remix-run/express";
import compression from "compression";
import express from "express";
import morgan from "morgan";
import path from "path";

runServer();

function runServer() {
  const usecases = createShippingCostUseCases();
  const server = createServer(usecases);
  const port = process.env.PORT || 3001;

  server.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
  });
}

function createServer(usecases: ShippingCostUseCases) {
  const BUILD_DIR = path.join(process.cwd(), "build");
  const app = express();

  app.use(compression());
  app.disable("x-powered-by");
  app.use("/build", express.static("public/build", { immutable: true, maxAge: "1y" }));
  app.use(express.static("public", { maxAge: "1h" }));
  app.use(morgan("tiny"));
  app.all("*", (req, res, next) => {
    if (process.env.NODE_ENV === "development") {
      purgeRequireCache(BUILD_DIR);
    }

    return createRequestHandler({
      build: require(BUILD_DIR),
      mode: process.env.NODE_ENV,
      getLoadContext() {
        return { usecases };
      },
    })(req, res, next);
  });

  return app;
}

function purgeRequireCache(builDir: string) {
  for (const key in require.cache) {
    if (key.startsWith(builDir)) {
      delete require.cache[key];
    }
  }
}
