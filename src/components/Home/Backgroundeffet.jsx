import { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const PainelImg = styled.div`
  position: relative;
  width: 100%;
  height: 60em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PainelImg2 = styled.div`
  position: relative;
  background-image: url("https://github.com/Kapitour/Imgs-Padr-o/blob/main/home/KapitourMarica.png?raw=true");
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 1;
  width: 50%;
  height: 70%;
  opacity: 0; /* Inicialmente invisível */
  @media (min-width: 320px) and (max-width: 375px){
    width:400px;
    right: 4px;
    left: 4px;
  }
    @media (min-width: 376px) and (max-width: 425px){
    width:400px;
    right: 4px;
    left: 4px;
  }
    @media (min-width: 426px) and (max-width: 768px){
    width: 400px;
    right: 4px;
    left: 4px;
  }
    @media (min-width: 1920px){
    width: 800px;
  }
`;

const Backgroundeffect = () => {
  const painelImg2Ref = useRef(null); // Referência para o PainelImg2

  useEffect(() => {
    // Animação com GSAP
    gsap.to(painelImg2Ref.current, {
      opacity: 1, // Transição para 1
      duration: 2, // Duração da animação em segundos
      ease: "power2.out", // Suavidade na animação
      scrollTrigger: {
        trigger: painelImg2Ref.current, // Inicia ao atingir o elemento
        start: "top 80%", // Quando 80% do viewport atingir o elemento
      },
    });
  }, []);

  return (
    <PainelImg>
      <PainelImg2 ref={painelImg2Ref} />
    </PainelImg>
  );
};

export default Backgroundeffect;
