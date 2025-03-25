import styled from "styled-components";

// Estilo para o container principal do footer
const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #333333c8;
  text-align: center;
  margin-top: 220px;
  backdrop-filter: blur(7px);

  @media (min-width: 320px) {
    height: 43px;
  } 
`;

// Estilo para o texto do copyright
const Copyright = styled.div`
  text-align: center;
  margin-top: -10px;
  font-size: 14px;
  color:rgb(255, 255, 255);
`;

const Footer = () => {
  return (
    <FooterContainer>

      <Copyright>
        <p>&copy; 2024 Kapitour. Todos os direitos reservados.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
