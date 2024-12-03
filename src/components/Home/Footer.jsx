import styled from "styled-components";

// Estilo para o container principal do footer
const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #333333c8;
  text-align: center;
  margin-top: 20px;
  backdrop-filter: blur(7px);
`;

// Estilo para a seção interna dividida em duas colunas
const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  align-items: center;
  font-size: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

// Estilo para cada coluna do footer
const FooterColumn = styled.div`
  color: white;
  h3 {
    margin-bottom: 10px;
    color: #FFF; /* Vermelho pastel */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    background-color: rgba(201, 52, 52, 0.733);
    border-radius: 30px;

  }

  p {
    margin: 5px 0;
    color: white; /* Cor neutra para texto */
  }

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
    }
  }
`;

// Estilo para o formulário
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// Estilo para os inputs e textarea
const Input = styled.input`
  width: 400px;
  height: 35px;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #b9b9b9;
  color: #000000;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #c93434;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Textarea = styled.textarea`
  width: 400px;
  color: #000000;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #b9b9b9;
  &:focus {
    outline: none;
    box-shadow: 0 0 5px #c93434;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Estilo para o botão de envio
const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #c93434; /* Vermelho pastel */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;

  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #a82a2a; /* Vermelho mais escuro no hover */
    transform: scale(1.05);
  }
`;

// Estilo para o texto do copyright
const Copyright = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #dadada;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <h3>Contato</h3>
          <p>
            <a href="tel:+5521983581550">Telefone: 21 98358-1550</a>
          </p>
          <p>
            <a href="mailto:plataformadigitalkapitour@gmail.com">
              Email: plataformadigitalkapitour@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/kapi.tour"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram: @kapi.tour
            </a>
          </p>
        </FooterColumn>

        <FooterColumn>
          <h3>Envie sua mensagem</h3>
          <Form>
            <Input type="text" name="nome" placeholder="Seu nome" required />
            <Input type="email" name="email" placeholder="Seu email" required />
            <Input
              type="tel"
              name="telefone"
              placeholder="Seu telefone"
              required
            />
            <Textarea
              name="mensagem"
              placeholder="Sua mensagem"
              rows="4"
              required
            ></Textarea>
            <SubmitButton type="submit">Enviar</SubmitButton>
          </Form>
        </FooterColumn>
      </FooterContent>

      <Copyright>
        <p>&copy; 2024 Kapitour. Todos os direitos reservados.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
