import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; // Importando o Leaflet para usar os ícones
const MapWrapper = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
    flex-direction: column;
  }
`;

const Info = styled.dialog`
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #c93434;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 5px;
  }
`;


const Mapa = () => {
  const position = [-22.9191, -42.8183]; // Coordenadas do centro do mapa (Maricá)

  // Ícone personalizado para os marcadores
  const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    // URL do ícone padrão
    iconSize: [30, 30], // Tamanho do ícone
    iconAnchor: [15, 30], // Posição do ponto de ancoragem do ícone
    popupAnchor: [0, -30], // Posição do popup em relação ao ícone
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png", // Sombra do ícone
    shadowSize: [50, 50], // Tamanho da sombra
    shadowAnchor: [15, 40], // Posição da sombra
  });

  return (
    <MapWrapper>
      <MapContainer
        center={position} // Define o centro do mapa
        zoom={13} // Define o nível de zoom
        style={{ height: "80%", width: "100%" }} // O mapa vai preencher o contêiner
      >
        {/* TileLayer para carregar o mapa */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Marcadores para os pontos turísticos com ícones personalizados */}

        <Marker
          position={[-22.974536969598535, -43.017053628267924]}
          icon={customIcon}
        >
          <Popup>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#4CAF50",
                textAlign: "center",
              }}
            >
              Pedra do Elefante
            </div>
            <div style={{ textAlign: "center" }}>
              Formação rochosa icônica com vista panorâmica da região.
            </div>
          </Popup>
        </Marker>

        <Marker
          position={[-22.926533871836227, -42.827067804518265]}
          icon={customIcon}
        >
          <Popup>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#2196F3",
                textAlign: "center",
              }}
            >
              Lagoa de Araçatiba
            </div>
            <div style={{ textAlign: "center" }}>
              Lagoa tranquila, ideal para passeios e esportes aquáticos.
            </div>
          </Popup>
        </Marker>

        <Marker
          position={[-22.969558816257624, -43.01291555528647]}
          icon={customIcon}
        >
          <Popup>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#2196F3",
                textAlign: "center",
              }}
            >
              Praia do Recanto
            </div>
            <div style={{ textAlign: "center" }}>
              Praia calma, perfeita para relaxar em meio à natureza.
            </div>
          </Popup>
        </Marker>

        <Marker
          position={[-22.95572392526742, -42.69803563809938]}
          icon={customIcon}
        >
          <Popup>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#2196F3",
                textAlign: "center",
              }}
            >
              Praia de Ponta Negra
            </div>
            <div style={{ textAlign: "center" }}>
              Praia famosa pelas águas cristalinas e surf.
            </div>
          </Popup>
        </Marker>

        <Marker
          position={[-22.869725512148065, -42.689864502670126]}
          icon={customIcon}
        >
          <Popup>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#FF9800",
                textAlign: "center",
              }}
            >
              Cachoeira do Espraiado
            </div>
            <div style={{ textAlign: "center" }}>
              Queda dágua refrescante em meio à mata.
            </div>
          </Popup>
        </Marker>

        <Marker
          position={[-22.870429425545957, -42.736939788479134]}
          icon={customIcon}
        >
          <Popup>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#FF9800",
                textAlign: "center",
              }}
            >
              Cachoeira do Silvado
            </div>
            <div style={{ textAlign: "center" }}>
              Cachoeira ideal para trilhas e banhos.
            </div>
          </Popup>
        </Marker>

        <Marker
          position={[-22.955982759124026, -42.738763716689164]}
          icon={customIcon}
        >
          <Popup>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#673AB7",
                textAlign: "center",
              }}
            >
              Museu Casa Dary Ribeiro
            </div>
            <div style={{ textAlign: "center" }}>
              Espaço cultural com exposições locais.
            </div>
          </Popup>
        </Marker>

        <Marker
          position={[-22.920186989166687, -42.8285400482948]}
          icon={customIcon}
        >
          <Popup>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#673AB7",
                textAlign: "center",
              }}
            >
              Aeroporto Municipal de Maricá
            </div>
            <div style={{ textAlign: "center" }}>
              Ponto estratégico para acesso à cidade.
            </div>
          </Popup>
        </Marker>

        <Marker
          position={[-22.951270071257103, -42.68225087753188]}
          icon={customIcon}
        >
          <Popup>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#2196F3",
                textAlign: "center",
              }}
            >
              Gruta da Sacristia
            </div>
            <div style={{ textAlign: "center" }}>
              Formação natural que atrai aventureiros.
            </div>
          </Popup>
        </Marker>

        <Marker
          position={[-22.92864264082387, -42.86690140050551]}
          icon={customIcon}
        >
          <Popup>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#2196F3",
                textAlign: "center",
              }}
            >
              Orla do Marine
            </div>
            <div style={{ textAlign: "center" }}>
              Área costeira com quiosques e lazer.
            </div>
          </Popup>
        </Marker>

        <Marker
          position={[-22.909669487695428, -42.84080887203334]}
          icon={customIcon}
        >
          <Popup>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#2196F3",
                textAlign: "center",
              }}
            >
              Orla de Itapeba
            </div>
            <div style={{ textAlign: "center" }}>
              Local de encontro para caminhadas e esportes.
            </div>
          </Popup>
        </Marker>

        <Marker
          position={[-22.960258656690115, -42.69318008983935]}
          icon={customIcon}
        >
          <Popup>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#2196F3",
                textAlign: "center",
              }}
            >
              Farol de Ponta Negra
            </div>
            <div style={{ textAlign: "center" }}>
              Ponto histórico com vista deslumbrante.
            </div>
          </Popup>
        </Marker>

        <Marker
          position={[-22.89078053665991, -42.94697509102659]}
          icon={customIcon}
        >
          <Popup>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#4CAF50",
                textAlign: "center",
              }}
            >
              Gruta do Spar
            </div>
            <div style={{ textAlign: "center" }}>
              Atrativo natural para exploração e fotos.
            </div>
          </Popup>
        </Marker>

        <Marker
          position={[-22.888299582775076, -42.865962387868464]}
          icon={customIcon}
        >
          <Popup>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#4CAF50",
                textAlign: "center",
              }}
            >
              Serra do Camburi
            </div>
            <div style={{ textAlign: "center" }}>
              Área montanhosa com trilhas e natureza.
            </div>
          </Popup>
        </Marker>

        <Marker
          position={[-22.92405948250837, -42.96926005363002]}
          icon={customIcon}
        >
          <Popup>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#4CAF50",
                textAlign: "center",
              }}
            >
              Caminhos de Darwin
            </div>
            <div style={{ textAlign: "center" }}>
              Trilha que refaz os passos do cientista.
            </div>
          </Popup>
        </Marker>

        <Marker
          position={[-22.91848901397328, -42.81978695463338]}
          icon={customIcon}
        >
          <Popup>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#673AB7",
                textAlign: "center",
              }}
            >
              Paróquia Nossa Senhora do Amparo
            </div>
            <div style={{ textAlign: "center" }}>
              Igreja histórica no coração da cidade.
            </div>
          </Popup>
        </Marker>

        <Marker
          position={[-22.90789319065405, -42.944942234385856]}
          icon={customIcon}
        >
          <Popup>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#673AB7",
                textAlign: "center",
              }}
            >
              Galpão Técnológico de Maricá
            </div>
            <div style={{ textAlign: "center" }}>
              Um espaço inovador dedicado à pesquisa, desenvolvimento e inovação
              tecnológica. O local abriga iniciativas de startups, eventos de
              tecnologia e oferece suporte para projetos voltados à
              sustentabilidade e transformação digital.
            </div>
          </Popup>
        </Marker>

        <Marker
          position={[-22.919800579739878, -42.81791999102584]}
          icon={customIcon}
        >
          <Popup>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#673AB7",
                textAlign: "center",
              }}
            >
              Praça de Maricá (Orlando de Barros Pimentel)
            </div>
            <div style={{ textAlign: "center" }}>
              Ponto central para eventos e encontros.
            </div>
          </Popup>
        </Marker>

        <Marker
          position={[-22.945658801630724, -42.74713983150347]}
          icon={customIcon}
        >
          <Popup>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#673AB7",
                textAlign: "center",
              }}
            >
              Castelo Shiachticas
            </div>
            <div style={{ textAlign: "center" }}>
              Construção única com arquitetura encantadora.
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </MapWrapper>
  );
};

export default Mapa;

