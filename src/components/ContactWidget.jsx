import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const WidgetWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #e01010c5;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  cursor: pointer;
  z-index: 1000;
  transition: all 0.3s ease;
  justify-content: space-around;

  &:hover {
    scale: 1.1;
  }
`;

const ContactDetails = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  margin-top: 10px;
  padding: 20px;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 2s ease; /* Transição de 2s */
`;

const Title = styled.h1`
  color: #fff;
  font-size: 1.2rem;
  text-align: center;
`;

const Link = styled.a`
  align-items: center;
  background-color: #fee6e3;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: Inter, sans-serif;
  font-size: 16px;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  touch-action: manipulation;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin: 10px auto; /* Centralização */
  &::after {
    background-color: #111;
    border-radius: 8px;
    content: "";
    display: block;
    height: 48px;
    left: 0;
    width: 100%;
    position: absolute;
    top: -2px;
    transform: translate(8px, 8px);
    transition: transform 0.2s ease-out;
    z-index: -1;
  }

  &:hover::after {
    transform: translate(0, 0);
  }

  &:active {
    background-color: #ffdeda0;
    outline: 0;
  }

  &:hover {
    outline: 0;
  }
`;

// Botão no estilo Button 56
const StyledButton = styled.button`
  align-items: center;
  background-color: #fee6e3;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: Inter, sans-serif;
  font-size: 16px;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  touch-action: manipulation;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin: 10px auto; /* Centralização */

  &::after {
    background-color: #111;
    border-radius: 8px;
    content: "";
    display: block;
    height: 48px;
    left: 0;
    width: 100%;
    position: absolute;
    top: -2px;
    transform: translate(8px, 8px);
    transition: transform 0.2s ease-out;
    z-index: -1;
  }

  &:hover::after {
    transform: translate(0, 0);
  }

  &:active {
    background-color: #ffdeda;
    outline: 0;
  }

  &:hover {
    outline: 0;
  }

  @media (min-width: 768px) {
    padding: 0 40px;
  }
`;
// Reutilizando StyledButton para MessageButton e SubmitButton
const MessageButton = styled(StyledButton)`
  margin-top: 10px;
`;

const SubmitButton = styled(StyledButton)`
  margin: 20px auto 0;
  display: block;
`;

const ContactForm = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 2s ease; /* Transição de 2s */
`;

const Input = styled.input`
  width: ${(props) => props.width || "100%"};
  box-sizing: border-box;
  background-color: #fee6e3;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: Inter, sans-serif;
  font-size: 16px;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  touch-action: manipulation;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &::after {
    background-color: #111;
    border-radius: 8px;
    content: "";
    display: block;
    height: 48px;
    left: 0;
    width: 100%;
    position: absolute;
    top: -2px;
    transform: translate(8px, 8px);
    transition: transform 0.2s ease-out;
    z-index: -1;
  }
`;

const TextArea = styled.textarea`
  width: ${(props) => props.width || "100%"};
  margin: 5px 0;
  padding: 70px;
  box-sizing: border-box;
  box-sizing: border-box;
  background-color: #fee6e3;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: Inter, sans-serif;
  font-size: 16px;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  touch-action: manipulation;
  transition: background-color 0.3s ease, transform 0.3s ease;
`;

const ContactWidget = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const widgetRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setShowDetails(false);
        setShowForm(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <WidgetWrapper ref={widgetRef} onClick={() => setShowDetails(!showDetails)}>
      <Title>Contato</Title>
      <ContactDetails show={showDetails && !showForm}>
        <div>
          <Link href="tel:+5521983581550">Telefone: (21) 98358-1550</Link>
        </div>
        <div>
          <Link href="mailto:plataformadigitalkapitour@gmail.com">
            Email: plataformadigitalkapitour@gmail.com
          </Link>
        </div>
        <div>
          <Link
            href="https://www.instagram.com/kapi.tour"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram: @kapi.tour
          </Link>
        </div>
        <MessageButton
          onClick={(e) => {
            e.stopPropagation();
            setShowForm(true);
          }}
        >
          Enviar Mensagem
        </MessageButton>
      </ContactDetails>
      <ContactForm show={showForm}>
        <form>
          <div>
            <label>Nome</label>
            <Input type="text" name="nome" width="100%" />
          </div>
          <div>
            <label>Email</label>
            <Input type="email" name="email" width="100%" />
          </div>
          <div>
            <label>Mensagem</label>
            <TextArea name="mensagem" width="100%" />
          </div>
          <SubmitButton type="submit">Enviar</SubmitButton>
        </form>
      </ContactForm>
    </WidgetWrapper>
  );
};

export default ContactWidget;
