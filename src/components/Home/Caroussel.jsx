import styled from "styled-components";
import { useState, useEffect } from "react";

const CarouselContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 800px;
  height: 300px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const CarouselContent = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${(props) => props.currentIndex * 100}%);
`;

const Slide = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background: rgba(200, 39, 39, 0.8);
  }

  &.prev {
    left: 10px;
  }
  &.next {
    right: 10px;
  }
`;

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <CarouselContainer>
      <Button className="prev" onClick={prevSlide}>◀</Button>
      <CarouselContent currentIndex={currentIndex}>
        {items.map((item, index) => (
          <Slide key={index}>
            <Image src={item} alt={`Slide ${index + 1}`} />
          </Slide>
        ))}
      </CarouselContent>
      <Button className="next" onClick={nextSlide}>▶</Button>
    </CarouselContainer>
  );
};

const images = [
  "https://github.com/Kapitour/Imgs-Padr-o/blob/main/carousel/lagoa.jpg?raw=true",
  "https://github.com/Kapitour/Imgs-Padr-o/blob/main/carousel/praia.jpg?raw=true",
  "https://github.com/Kapitour/Imgs-Padr-o/blob/main/carousel/itaipuacu.jpg?raw=true",
  "https://github.com/Kapitour/Imgs-Padr-o/blob/main/carousel/2.jpg?raw=true",
  "https://github.com/Kapitour/Imgs-Padr-o/blob/main/carousel/1.png?raw=true",
  "https://github.com/Kapitour/Imgs-Padr-o/blob/main/Recanto.jpeg?raw=true",
];

const Caroussel = () => {
  return <Carousel items={images} />;
};

export default Caroussel;
