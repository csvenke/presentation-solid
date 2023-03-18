import React from "react";

export const DemoBusinessRulesSlide = () => (
  <section>
    <section data-background-image="/images/shipping-boat.jpg">
      <div className="title-background">
        <h2>Shipping cost APP</h2>
        <div>...with AI generated business rules</div>
      </div>
    </section>
    <section data-markdown="markdown/demo-business-rules.md"></section>
    <section data-background-color="aquamarine">
      <div className="flex center">
        <img className="max" src="/images/clean-architecture.webp" alt=""></img>
      </div>
    </section>
  </section>
);

export const GraphqlAPIDemoSlide = () => {
  return (
    <section>
      <section>
        <h2>Shipping cost app</h2>
        <p>... som et GRAPHQL API</p>
      </section>
      <section data-background-iframe="http://localhost:4000" data-background-interactive></section>
    </section>
  );
};

export const RestApiDemoSlide = () => {
  return (
    <section>
      <section>
        <h2>Shipping cost app</h2>
        <p>... som et REST API</p>
      </section>
      <section data-background-iframe="http://localhost:4001" data-background-interactive></section>
    </section>
  );
};

export const RemixAppDemoSlide = () => {
  return (
    <section>
      <section>
        <h2>Shipping cost app</h2>
        <p>... som en remix app</p>
      </section>
      <section data-background-iframe="http://localhost:3001" data-background-interactive></section>
    </section>
  );
};
