import { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContainerPainel = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 60px 20px;
  background: #f5f5f518;
`;

const Card = styled.div`
  width: 320px;
  height: 450px;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  background: #fff;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  opacity: 0;
  transform: translateY(50px);

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    width: 280px;
    height: 420px;
  }
`;

const ImgCard = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Cover = styled.div`
  position: absolute;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.4);
  transition: right 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 15px;

  ${Card}:hover & {
    right: 0;
  }
`;

const Titulo = styled.h1`
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const Details = styled.p`
  font-size: 18px;
  color: #fff;
  background: #c83349;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 500;
`;

const Painel = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const cards = [
    {
      img: "https://github.com/Kapitour/Imgs-Padr-o/blob/main/home/Painel/belezas.jpeg?raw=true",
      title: "Belezas",
      details: ["Praias", "Cachoeiras", "Trilhas"],
    },
    {
      img: "https://github.com/Kapitour/Imgs-Padr-o/blob/main/home/Painel/desenvolvimento.jpeg?raw=true",
      title: "Desenvolvimento",
      details: ["Centros de Esportes", "Grandes Escolas", "Galpão Tecnológico"],
    },
    {
      img: "https://github.com/Kapitour/Imgs-Padr-o/blob/main/home/Painel/historia.png?raw=true",
      title: "História",
      details: ["Museus", "Igrejas", "Centros Culturais"],
    },
  ];

  return (
    <ContainerPainel>
      {cards.map((card, index) => (
        <Card key={index} ref={(el) => (cardsRef.current[index] = el)}>
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
