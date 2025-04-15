import { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PainelWrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
`;

const PainelImage = styled.div`
  background-image: url("https://github.com/Kapitour/Imgs-Padr-o/blob/main/home/KapitourMarica.png?raw=true");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  max-width: 800px;
  aspect-ratio: 4 / 3; /* Mantém a proporção */
  opacity: 0;
  transform: scale(0.95);
  filter: blur(4px);
  transition: all 0.6s ease;

  @media (max-width: 768px) {
    aspect-ratio: 1 / 1;
    background-size: contain;
  }

  @media (max-width: 480px) {
    aspect-ratio: 1 / 1;
    max-width: 90%;
  }
`;

const Backgroundeffect = () => {
  const painelRef = useRef(null);

  useEffect(() => {
    if (painelRef.current) {
      gsap.to(painelRef.current, {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: painelRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  return (
    <PainelWrapper>
      <PainelImage ref={painelRef} />
    </PainelWrapper>
  );
};

export default Backgroundeffect;
