import React from "react";
import Head from "./Head";
import foto from "./img/contato.jpg";

const Contato = () => {
  return (
    <>
      <Head title="Contato"/>
      <section className="contato container animation">
        <div className="contato__image">
          <img src={foto} />
        </div>

        <div className="contato__text">
          <h1>Entre em contato</h1>
          <ul>
            <li>contato@origamid.com</li>
            <li>9999-9999</li>
            <li>Rua ali perto, 555</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Contato;
