import React from "react";

export const TableOfContentsSlide = () => (
  <section>
    <section>
      <ol>
        <li>Bakgrunn</li>
        <li className="fragment principle">Single responsibility principle</li>
        <li className="fragment principle">Open-closed principle</li>
        <li className="fragment principle">Liskov substitution principle</li>
        <li className="fragment principle">Interface segregation principle</li>
        <li className="fragment principle">Dependency inversion principle</li>
        <li className="fragment">
          DEMO: Shipping cost APP
          <ul>
            <li className="fragment">
              ... som et <strong>GraphQL API</strong> (apollo-server)
            </li>
            <li className="fragment">
              ... som et <strong>REST API</strong> (nestjs)
            </li>
            <li className="fragment">
              ... som en <strong>WEB APP</strong> (remix, react)
            </li>
            <li className="fragment">... med litt Clean Architecture</li>
          </ul>
        </li>
      </ol>
    </section>
  </section>
);
