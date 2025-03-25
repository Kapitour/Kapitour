import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useState } from "react";
import PontosMapa from "./PontosMapa"; // Importando os pontos turísticos

const MapWrapper = styled.div`
  height: calc(100vh - 70px); /* Subtraia a altura do Header */
  width: 100%;
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  padding: 0 40px;
  box-sizing: border-box;
  margin-top: 70px; /* Espaço para evitar sobreposição */
  
  /* Media Queries */
  @media (max-width: 768px) {
    padding: 0 10px;
    flex-direction: column;
    margin-top: 20px; /* Ajuste para evitar sobreposição */
  }

  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: -50px;
    left: 10px;
    right: 10px;
    top: 20px;
    width: 130vw;
    margin-top: -20rem;
    z-index: 1;
  }

  @media (min-width: 375px) {
    align-items: center;
    justify-content: center;
    margin-left: -60px;
    left: 20px;
    right: 20px;
    width: 130vw;
    padding: 20px;
    margin-top: -20rem;
  }

  @media (min-width: 768px) {
    width: 100%;
    height: calc(100vh - 70px); /* Restabelece as dimensões para dispositivos maiores */
    margin-top: 70px;
  }
`;


const Container = styled.div`
  height: 80%;
  width: 30%;
  background-color: rgba(201, 52, 52, 0.733);
  border-radius: 15px;
  padding: 20px;
  overflow-y: auto;
  color: white;
  @media (min-width: 320px) {
    display: flex;
    margin-top: 1rem;
    gap:2rem;
    width:250px;
    height: 500px;
    
  }
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const Mapa = () => {
  const position = [-22.9191, -42.8183]; // Centro do mapa
  const [selectedPoint, setSelectedPoint] = useState(null); // Estado para o ponto selecionado

  // Ícone personalizado
  const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [10, 10],
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
        style={{ height: "80%", width: "65%",}}
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
