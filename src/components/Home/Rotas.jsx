import styled from "styled-components";

const Container = styled.div`
  background-image: url("https://github.com/Kapitour/Imgs-Padr-o/blob/main/home/ara%C3%A7ariba.jpg?raw=true");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-weight: bold;
  position: relative;
  backdrop-filter: blur(150px); /* Blur mais alto */
  overflow: hidden; /* Garante que nada fora do Container seja exibido */

  /* Transparência nas bordas */
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 8%,
    rgba(0, 0, 0, 1) 92%,
    rgba(0, 0, 0, 0) 100%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 8%,
    rgba(0, 0, 0, 1) 92%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const SubContainer = styled.div`
  background-image: url("https://github.com/Kapitour/Imgs-Padr-o/blob/main/home/ara%C3%A7ariba.jpg?raw=true");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 10%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  width: 100%;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgb(0, 0, 0);
  position: relative;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }
`;

const Text = styled.div`
  background-color: rgba(0, 0, 0, 0.253);
  color: #fff;
  font-weight: 200;
  font-size: 35px;
  line-height: 1.5;
  text-align: left;
  max-width: 400px;
  text-shadow: 0px 4px 15px rgb(0, 0, 0);
  border-radius: 10px;
  padding: 10px;

  @media (max-width: 768px) {
    font-size: 24px;
    max-width: 100%;
  }
`;

const Btn = styled.a`
  background-color: #fff;
  color: rgba(201, 52, 52, 0.884);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  line-height: 45px;
  width: 200px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, letter-spacing 0.3s ease,
    text-shadow 0.3s ease;
  position: absolute;
  bottom: 20px;
  right: 20px;

  &:hover {
    letter-spacing: 1px;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    position: static;
    margin-top: auto;
  }
`;

const Rotas = () => {
  return (
    <Container>
      <SubContainer>
        <Text>
          Veja guias para aproveitar paisagens, restaurantes e experiências
          únicas
        </Text>
        <Btn href="/rotas">Rotas</Btn>
      </SubContainer>
    </Container>
  );
};

export default Rotas;
