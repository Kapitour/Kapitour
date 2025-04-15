import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useState } from "react";
import PontosMapa from "./PontosMapa"; // Importando os pontos turísticos

const MapWrapper = styled.div`
  height: 60rem; /* Ajuste a altura para ser maior no site normal */
  width: 100%;
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  padding: 0 50px;
  padding-top: 70px;
  box-sizing: border-box;
  margin-top: 70px; /* Espaço para evitar sobreposição com o Header */
  position: relative; /* Garantir que o mapa não sobreponha o Header */
  z-index: 0;

  /* Media Queries */
  @media (max-width: 768px) {
    padding: 0 10px;
    flex-direction: column;
    margin-top: 20px; /* Ajuste para evitar sobreposição */
    width: 100%; /* Garantir que o mapa ocupe toda a largura disponível */
    height: 40rem; /* Ajuste a altura do mapa para o mobile */
  }

  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza verticalmente no mobile */
    justify-content: center;
    margin-left: 0;
    left: 0;
    right: 0;
    top: 0;
    width: 100%; /* Ajuste para o mapa preencher toda a largura */
    height: 40rem; /* Ajuste a altura do mapa para o mobile */
  }

  @media (min-width: 375px) {
    align-items: center;
    justify-content: center;
    margin-left: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding: 20px;
    height: 50rem; /* Ajuste a altura do mapa para o mobile */
  }

  @media (min-width: 768px) {
    width: 100%;
    height: calc(100vh - 70px); /* Ajuste para dispositivos maiores */
  }
`;

const Container = styled.div`
  height: 80%;
  width: 35%; /* Aumente a largura do container para a janela de informações */
  background-color: rgba(201, 52, 52, 0.733);
  border-radius: 15px;
  padding: 20px;
  overflow-y: auto;
  color: white;

  @media (min-width: 320px) {
    display: flex;
    margin-top: 1rem;
    gap: 2rem;
    width: 280px; /* Aumente a largura no mobile */
    height: 400px; /* Aumente a altura no mobile */
  }

  @media (min-width: 768px) {
    width: 40%; /* Aumente a largura no site */
    height: 60%; /* Ajuste a altura da janela de informações */
  }
`;

const Mapa = () => {
  const position = [-22.9191, -42.8183]; // Centro do mapa
  const [selectedPoint, setSelectedPoint] = useState(null); // Estado para o ponto selecionado

  // Ícone personalizado
  const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [30, 30], // Aumente o tamanho do ícone
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    shadowSize: [50, 50],
    shadowAnchor: [15, 40],
  });

  return (
    <MapWrapper>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "80%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Gerando marcadores dinamicamente */}
        {PontosMapa.map((ponto, index) => (
          <Marker
            key={index}
            position={ponto.position}
            icon={customIcon}
            eventHandlers={{
              click: () => setSelectedPoint(ponto), // Atualiza o estado com o ponto clicado
            }}
          >
            <Popup>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: ponto.color,
                  textAlign: "center",
                }}
              >
                {ponto.title}
              </div>
              <div style={{ textAlign: "center" }}>{ponto.description}</div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Container exibindo detalhes do ponto clicado */}
      <Container>
        {selectedPoint ? (
          <>
            <Title>{selectedPoint.title}</Title>
            <Description>{selectedPoint.description}</Description>
          </>
        ) : (
          <p>Selecione um ponto no mapa para ver os detalhes.</p>
        )}
      </Container>
    </MapWrapper>
  );
};

export default Mapa;
