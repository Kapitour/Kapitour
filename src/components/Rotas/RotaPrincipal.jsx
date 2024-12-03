import { useState } from "react";
import Header from "../Home/Header";
import RotasData from "./RotasData";
import RotaDetalhes from "./RotaDetalhes";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #1a1a1d; /* Fundo principal cinza escuro */
  min-height: 100vh;
  color: #ffffff; /* Texto branco para contraste */
`;

const FilterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Centraliza os filtros */
  gap: 15px; /* Espaço entre os botões */
  margin-bottom: 30px;
`;

const Button = styled.button`
  padding: 15px 30px; /* Botões maiores */
  border: 2px solid #c3073f; /* Vermelho vibrante */
  border-radius: 20px;
  background-color: #1a1a1d; /* Fundo igual ao fundo principal */
  color: #c3073f; /* Texto em vermelho vibrante */
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover,
  &.active {
    background-color: #c3073f; /* Fundo vermelho vibrante */
    color: #ffffff; /* Texto branco */
    transform: scale(1.1); /* Aumenta suavemente */
  }
`;

const RoutesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: #950740; /* Fundo vermelho escuro */
  color: #ffffff; /* Texto branco */
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra escura */
  cursor: pointer;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);
  }

  img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
  }
`;

const MainContent = styled.main`
  padding-top: 80px; /* Altura do Header */
  margin: 0 auto;
  width: 100%;
`;

const Title = styled.h2`
  color: #ffffff; /* Texto branco */
  font-family: "Poppins", sans-serif;
  font-size: 2rem; /* Aumentando o tamanho */
  font-weight: bold; /* Título mais grosso */
  margin-bottom: 20px;
  text-align: center; /* Centralizando o título */
  background-color: #c3073f; /* Fundo vermelho vibrante */
  padding: 20px; /* Espaco interno */
  border-radius: 15px; /* Borda boleada */
`;

const RotaPrincipal = () => {
  const [filter, setFilter] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState(null);

  const filteredRoutes = filter
    ? RotasData.filter((rota) => rota.tipo === filter)
    : RotasData;

  return (
    <Container>
      <Header showPainel={false} />
      {!selectedRoute ? (
        <MainContent>
          <Title>Escolher Guias e Rotas para Fazer</Title>
          <FilterButtons>
            <Button
              onClick={() => {
                setFilter(null);
                setActiveFilter(null);
              }}
              className={!filter ? "active" : ""}
            >
              Todos
            </Button>
            {[
              "Lazer",
              "Aventura",
              "Marítimo",
              "Corporativo",
              "Cultural",
              "Histórico",
              "Religioso",
              "Eventos",
            ].map((tipo) => (
              <Button
                key={tipo}
                onClick={() => {
                  setFilter(tipo);
                  setActiveFilter(tipo);
                }}
                className={filter === tipo ? "active" : ""}
              >
                {tipo}
              </Button>
            ))}
          </FilterButtons>
          <RoutesGrid>
            {filteredRoutes.map((rota) => (
              <Card key={rota.id} onClick={() => setSelectedRoute(rota)}>
                <h3>{rota.nome}</h3>
                <p>{rota.descricaoCurta}</p>
              </Card>
            ))}
          </RoutesGrid>
        </MainContent>
      ) : (
        <RotaDetalhes
          rota={selectedRoute}
          voltar={() => setSelectedRoute(null)}
        />
      )}

    </Container>
  );
};

export default RotaPrincipal;
