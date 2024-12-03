import styled from "styled-components";

const Container = styled.div`
  background-image: url("./src/assets/araçariba.jpg");
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
  background-image: url("./src/assets/araçariba.jpg");
  background-size: cover; /* Imagem ajustada ao tamanho */
  background-repeat: no-repeat;
  background-position: center;
  margin: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 100%;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgb(0, 0, 0);
  position: relative; /* Necessário para o posicionamento absoluto dos elementos internos */
`;

const Text = styled.div`
  background-color: rgba(0, 0, 0, 0.253); /* Transparencia */
  color: #fff;
  font-weight: 200;
  font-size: 35px;
  line-height: 1.5;
  text-align: left; /* Alinhado à esquerda */
  max-width: 400px;
  position: absolute; /* Posicionamento absoluto */
  top: 20px; /* Distância do topo */
  left: 20px; /* Distância da esquerda */
  text-shadow: 0px 4px 15px rgb(0, 0, 0);
  border-radius: 10px;
  padding: 10px;
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
  position: absolute; /* Posicionamento absoluto */
  bottom: 20px; /* Distância da parte inferior */
  right: 20px; /* Distância da parte direita */

  &:hover {
    letter-spacing: 1px;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
    transform: scale(1.1);
  }
`;

const Guia = () => {
  return (
    <Container>
      <SubContainer>
        <Text>
          Veja guias para aproveitar paisagens, restaurantes e experiências
          únicas
        </Text>
        <Btn href="#">Guias</Btn>
      </SubContainer>
    </Container>
  );
};

export default Guia;
