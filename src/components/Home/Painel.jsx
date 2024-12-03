import { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContainerPainel = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap; /* Caso tenha muitos cards */
`;

const Card = styled.div`
  width: 320px;
  height: 500px;
  border-top-right-radius: 120px;
  border-bottom-left-radius: 120px;
  border-bottom-right-radius: 30px;
  border-top-left-radius: 30px;
  overflow: hidden;
  border: 8px solid #e94747;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: background-color 0.5s ease, transform 0.5s ease;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3));
  opacity: 0; /* Inicialmente invisível */
  transform: translateY(50px); /* Move para baixo */
  &:hover {
    transform: scale(1.05); /* Pequeno efeito de zoom para chamar atenção */
  }

  &:hover ${() => Cover} {
    right: 0;
  }
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  right: -100%;
  position: absolute;
  background-color: rgba(199, 30, 30, 0.418);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: right 0.5s ease;
`;

const ImgCard = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Titulo = styled.h1`
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 500;
  padding: 30px;
`;

const Details = styled.p`
  text-transform: capitalize;
  font-size: 17px;
  font-weight: 300;
  padding: 0 30px;
`;

const Painel = () => {
  const cardsRef = useRef([]); // Usaremos referências para os cards

  useEffect(() => {
    // Registra o plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animação para os cards
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 }, // Estado inicial
      {
        opacity: 1,
        y: 0, // Estado final
        duration: 1,
        stagger: 0.2, // Intervalo entre as animações
        scrollTrigger: {
          trigger: cardsRef.current, // Inicia ao atingir os cards
          start: "top 80%", // Quando 80% do viewport alcançar o topo do elemento
        },
      }
    );
  }, []);

  return (
    <ContainerPainel>
      {[
        {
          img: "https://github.com/Kapitour/Imgs-Padr-o/blob/main/home/Painel/belezas.jpeg?raw=true",
          title: "Belezas",
          details: ["Praias", "Cachoeiras", "Trilhas"],
        },
        {
          img: "https://github.com/Kapitour/Imgs-Padr-o/blob/main/home/Painel/desenvolvimento.jpeg?raw=true",
          title: "Desenvolvimento",
          details: [
            "Centros de Esportes",
            "Grandes Escolas",
            "Galpão Tecnológico",
          ],
        },
        {
          img: "https://github.com/Kapitour/Imgs-Padr-o/blob/main/home/Painel/historia.png?raw=true",
          title: "História",
          details: ["Museus", "Igrejas", "Centros Culturais"],
        },
      ].map((card, index) => (
        <Card
          key={index}
          ref={(el) => (cardsRef.current[index] = el)} // Adiciona a referência
        >
          <ImgCard src={card.img} alt={card.title} />
          <Cover>
            <Titulo>{card.title}</Titulo>
            {card.details.map((detail, i) => (
              <Details key={i}>- {detail}</Details>
            ))}
          </Cover>
        </Card>
      ))}
    </ContainerPainel>
  );
};

export default Painel;
