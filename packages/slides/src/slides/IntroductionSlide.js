import React from "react";

export const IntroductionSlide = () => (
  <section>
    <section>
      <h2>
        Hva er egentlig <span className="red">SOLID</span>?
      </h2>
      <ul>
        <li className="fragment">
          Et sett med prinsipper som hjelper deg skrive fleksibel kode som er enkel å forstå, endre
          og vedlikeholde
        </li>
        <li className="fragment">
          <div className="flex gap-8">
            <div>
              Ble introdusert av utvikleren <span className="red">Robert C. Martin</span> i 2000
              <ul>
                <li className="fragment">Agile Manifesto</li>
                <li className="fragment">Clean Code</li>
                <li className="fragment">Clean Architecture</li>
              </ul>
            </div>
            <img src="https://cleancoders.com/images/portraits/robert-martin.jpg" alt="" />
          </div>
        </li>
      </ul>
    </section>
    <section>
      <h3>Litt historie</h3>
      <ul className="unstyled-list">
        <li className="fragment">
          <span>1945</span> - Første programmerbare datamaskin
        </li>
        <li className="fragment">
          <span>1958</span> - Functional programming
        </li>
        <li className="fragment">
          <span>1966</span> - Object oriented programming
        </li>
        <li className="fragment">
          <span>1968</span> - Structured programming
        </li>
        <li className="fragment">
          <span>2000</span> - SOLID prinsippene
        </li>
      </ul>
    </section>

    <section>
      All programmering kan brytes ned til if statements og loops
      <div className="fragment">... og det har vært sånn siden 1968</div>
    </section>
    <section data-background-image="/images/car-mechanic.jpg"></section>
  </section>
);
