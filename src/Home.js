import React from "react";
import { Link } from "react-router-dom";
import Head from "./Head";

const Home = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((response) => response.json())
      .then((json) => setProdutos(json));
  }, []);

  return (
    <>
      <Head title="Home" />
      <section className="produto container animation">
        {produtos &&
          produtos.map(({ id, fotos, nome }) => (
            <div key={id} className="produto__item">
              <Link to={`produto/${id}`}>
                <img src={fotos[0].src} />
              </Link>
              <h3>
                <Link to={`produto/${id}`}>{nome}</Link>
              </h3>
            </div>
          ))}
      </section>
    </>
  );
};

export default Home;
