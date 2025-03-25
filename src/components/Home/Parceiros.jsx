import { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Container principal
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  font-weight: bold;
`;

// Título centralizado no topo
const Title = styled.h2`
  background-color: #333333b5;
  color: #fff;
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
  padding: 10px 190px;
  border-radius: 90px;
  backdrop-filter: blur(5px);
  text-shadow: 0 0 2px #000, 0 0 4px #000, 0 0 6px #000;
  opacity: 0; /* Começa invisível */
`;

// Subcontainer para AGM e Vassouras Tec lado a lado
const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  max-width: 1200px;
  gap: 20px;

  @media (min-width: 769px) {
    flex-direction: column;
    width: 500px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 300px;
  }
`;

// Estilo dos cards
const Card = styled.div`
  background-color: #333333b5;
  border-radius: 90px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex: 1;
  backdrop-filter: blur(5px);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  opacity: 0; /* Começa invisível */
  transform: translateY(50px); /* Move para baixo inicialmente */

  @media (min-width: 320px) {
    width: 50%;
    padding: 19%;
  }
  @media (min-width: 375px) {
    width: 70%;
    padding: 13%;
    margin-left: -5%;
  }
  @media (min-width: 425px) and (max-width: 768px) {
    width: 90%;
    padding: 13%;
    margin-left: -15%;
  }

  @media (min-width: 768px) {
  display: flex;
  flex-direction: column;
    width: 90%;
    padding: 13%;
    margin-left: -15%;
  }
`;

const Parceiros = () => {
  useEffect(() => {
    // GSAP animação para o título
    gsap.fromTo(
      "h2", // Seleciona o Title
      { opacity: 0, y: 50 }, // Estado inicial
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "h2",
          start: "top 90%", // Quando 90% do elemento está visível
        },
      }
    );

    // GSAP animação para os cards
    gsap.fromTo(
      ".card", // Seleciona todos os Cards
      { opacity: 0, y: 50 }, // Estado inicial
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2, // Anima um card de cada vez
        scrollTrigger: {
          trigger: ".card",
          start: "top 85%", // Quando 85% do elemento está visível
        },
      }
    );
  }, []);

  return (
    <Container>
      <Title>Parceiros</Title>

      <RowContainer>
        {/* Card AGM */}
        <Card className="card">
          <div
            style={{
              backgroundImage:
                "url('https://github.com/Kapitour/Imgs-Padr-o/blob/main/home/agm.png?raw=true')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "200px",
              height: "200px",
              marginBottom: "20px",
            }}
          />
          <div style={{ color: "#fff", fontSize: "18px", lineHeight: "1.5", marginBottom: "20px", maxWidth: "400px" }}>
            Parceria com a AGM Associação dos Guias de Turismo de Maricá. Deseja
            fazer excursões, trilhas, escaladas, canoagem e muito mais com um
            profissional do ramo de forma segura? Entre em contato e não se
            esqueça de dizer que buscou por meio da Kapitour!
          </div>
          <a
            href="https://wa.me/5521971292030?text=Ol%C3%A1%20vim%20pela%20Kapitour%20e%20gostaria%20de%20contratar%20um%20guia%20de%20turismo!"
            style={{
              backgroundColor: "rgba(201, 52, 52, 0.884)",
              color: "#fff",
              textAlign: "center",
              textDecoration: "none",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "5px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.5)",
              transition: "transform 0.3s ease, letterSpacing 0.3s ease",
            }}
          >
            Guias de Turismo
          </a>
        </Card>

        {/* Card Vassouras Tec */}
        <Card className="card">
          <img
            src="https://github.com/Kapitour/Imgs-Padr-o/blob/main/VassourasT%C3%A9c.png?raw=true"
            alt="Vassouras Tec"
            style={{ width: "80%", marginBottom: "20px" }}
          />
          <div style={{ color: "#fff", fontSize: "18px", lineHeight: "1.5", marginBottom: "20px", maxWidth: "400px" }}>
            Vassouras Tec, incubadora tecnológica da Univassouras, nós somos
            encubados e temos o seu auxilio em nosso projeto com inovação e
            suporte jurídico e documental.
          </div>
        </Card>
      </RowContainer>
    </Container>
  );
};

export default Parceiros;
