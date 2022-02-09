import React from "react";
import { useParams } from "react-router-dom";
import Head from "./Head";

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const {id} = useParams()

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
      .then((response) => response.json())
      .then((json) => setProduto(json));
  }, [id]);

  if (produto === null) return null;
  return (
    <>
    <Head title={produto.nome}/>
      <section className="single-produto container animation">
        <div className="single-produto__image">
          {produto.fotos.map((foto, index) => (
            <img key={index} src={foto.src} />
          ))}
        </div>

        <div className="single-produto__info">
          <h2>{produto.nome}</h2>
          <span>R$ {produto.preco}</span>
          <p>{produto.descricao}</p>
        </div>
      </section>
    </>
  );
};

export default Produto;
