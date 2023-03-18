export const OpenClosedPrincipleSlide = () => (
  <section>
    <section>
      <h2 className="principle">Open closed principle</h2>
      <div>
        <em>A module should be open for extension but closed for modification.</em>
      </div>
      <aside className="notes">
        <ul>
          <li>Introduser open-closed principle</li>
          <li>
            Forklar at open-closed principles basically er plugin system. Bruk vscode som eksempel.
          </li>
        </ul>
      </aside>
    </section>
    <section data-background-image="/images/plugin-example.png">
      <h2>Plugins</h2>
    </section>
    <section data-markdown="markdown/ocp-example.md"></section>
  </section>
);
