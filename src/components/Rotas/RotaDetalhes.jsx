import styled from "styled-components";
import { useState } from "react";

const MainContent = styled.main`
  padding-top: 80px;
  margin: 0 auto;
  width: 100%;
`;

const Container = styled.div`
  padding: 20px;
  background: #1a1a1d; /* Fundo principal */
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3); /* Sombra mais intensa */
  color: white; /* Texto claro */
`;

const VoltarButton = styled.button`
  background: #c3073f; /* Vermelho pastel */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background: #950740; /* Vermelho escuro no hover */
  }
`;

const GpsButton = styled.a`
  display: inline-block;
  background: #c3073f; /* Vermelho pastel */
  color: white;
  text-decoration: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;

  &:hover {
    background: #950740; /* Vermelho escuro no hover */
  }
`;

const PointContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  margin-bottom: 15px;
  background: #333; /* Fundo dos pontos mais escuro */
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
`;

const ProgressBar = styled.div`
  height: 10px;
  background: #3e3e3e; /* Fundo da barra de progresso */
  border-radius: 5px;
  margin: 15px 0;
  overflow: hidden;

  div {
    height: 100%;
    width: ${({ progress }) => progress}%;
    background: #c3073f; /* Cor do progresso */
    transition: width 0.3s ease;
  }
`;

const PointText = styled.span`
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  color: ${({ completed }) => (completed ? "#ccc" : "white")}; /* Texto claro */
`;

const RotaDetalhes = ({ rota, voltar }) => {
  const [pontos, setPontos] = useState(rota.pontos);

  const handleCheckboxChange = (index) => {
    const updatedPoints = pontos.map((ponto, i) =>
      i === index ? { ...ponto, completed: !ponto.completed } : ponto
    );
    setPontos(updatedPoints);
  };

  const calculateProgress = () => {
    const completed = pontos.filter((p) => p.completed).length;
    return (completed / pontos.length) * 100;
  };

  return (
    <MainContent>
      <VoltarButton onClick={voltar}>Voltar</VoltarButton>
      <Container>
        <h2>{rota.nome}</h2>
        <p>{rota.detalhes}</p>

        <ProgressBar progress={calculateProgress()}>
          <div />
        </ProgressBar>

        {pontos.map((ponto, index) => (
          <PointContainer key={index}>
            <div>
              <input
                type="checkbox"
                checked={ponto.completed || false}
                onChange={() => handleCheckboxChange(index)}
              />
              <PointText completed={ponto.completed}>{ponto.nome}</PointText>
            </div>
            <p>{ponto.detalhes}</p>
            <GpsButton
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                ponto.endereco
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Iniciar Rota
            </GpsButton>
          </PointContainer>
        ))}
      </Container>
    </MainContent>
  );
};

export default RotaDetalhes;
