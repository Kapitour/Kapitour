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
  overflow-x: hidden; /* Evita rolagem lateral */
`;

const PainelImg2 = styled.div`
  position: relative;
  background-image: url("https://github.com/Kapitour/Imgs-Padr-o/blob/main/home/KapitourMarica.png?raw=true");
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 1;
  width: 50%;
  height: 70%;
  opacity: 0;

  @media (max-width: 768px) {
    width: 90%;
    max-width: 400px;
    right: auto;
    left: auto;
  }

  @media (min-width: 1920px) {
    width: 800px;
  }
`;

const BackgroundEffect = () => {
  const painelImg2Ref = useRef(null);

  useEffect(() => {
    gsap.to(painelImg2Ref.current, {
      opacity: 1,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: painelImg2Ref.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <PainelImg>
      <PainelImg2 ref={painelImg2Ref} />
    </PainelImg>
  );
};

export default BackgroundEffect;
