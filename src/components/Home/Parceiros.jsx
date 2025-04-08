import { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  font-weight: bold;
`;

const Title = styled.h2`
  background-color: #333333b5;
  color: #fff;
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
  padding: 10px 20px;
  border-radius: 90px;
  backdrop-filter: blur(5px);
  text-shadow: 0 0 2px #000, 0 0 4px #000, 0 0 6px #000;
  opacity: 0;
  width: 100%;
`;

const RowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  width: 100%;
  max-width: 1200px;
`;

const Card = styled.div`
  background-color: #333333b5;
  border-radius: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100%;
  max-width: 350px;
  backdrop-filter: blur(5px);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  opacity: 0;
  transform: translateY(50px);
`;

const Parceiros = () => {
  useEffect(() => {
    gsap.fromTo(
      "h2",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "h2",
          start: "top 90%",
        },
      }
    );

    gsap.fromTo(
      ".card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".card",
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <Container>
      <Title>Parceiros</Title>
      <RowContainer>
        <Card className="card">
          <div
            style={{
              backgroundImage:
                "url('https://github.com/Kapitour/Imgs-Padr-o/blob/main/home/agm.png?raw=true')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "100px",
              height: "100px",
              marginBottom: "15px",
            }}
          />
          <div style={{ color: "#fff", fontSize: "14px", lineHeight: "1.5", marginBottom: "15px" }}>
            Parceria com a AGM Associação dos Guias de Turismo de Maricá...
          </div>
          <a
            href="https://wa.me/5521971292030?text=Ol%C3%A1%20vim%20pela%20Kapitour%20e%20gostaria%20de%20contratar%20um%20guia%20de%20turismo!"
            style={{
              backgroundColor: "rgba(201, 52, 52, 0.884)",
              color: "#fff",
              textAlign: "center",
              textDecoration: "none",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "8px 16px",
              borderRadius: "5px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.5)",
              transition: "transform 0.3s ease, letterSpacing 0.3s ease",
            }}
          >
            Guias de Turismo
          </a>
        </Card>

        <Card className="card">
          <img
            src="https://github.com/Kapitour/Imgs-Padr-o/blob/main/VassourasT%C3%A9c.png?raw=true"
            alt="Vassouras Tec"
            style={{ width: "90%", marginBottom: "15px" }}
          />
          <div style={{ color: "#fff", fontSize: "14px", lineHeight: "1.5", marginBottom: "15px" }}>
            Vassouras Tec, incubadora tecnológica da Univassouras...
          </div>
        </Card>
      </RowContainer>
    </Container>
  );
};

export default Parceiros;
