import { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaMapMarkedAlt,
  FaStore,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const widgetRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Logo to="/"></Logo>
      <FloatingMenuWrapper>
        {isMenuOpen && <Backdrop onClick={toggleMenu} />}

        <MainFab onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes aria-label="Fechar menu" />
          ) : (
            <FaBars aria-label="Abrir menu" />
          )}
        </MainFab>

        {isMenuOpen && (
          <>
            <FabIcon
              to="/rotas"
              isOpen={isMenuOpen}
              index={0}
              onClick={toggleMenu}
            >
              <FaMapMarkedAlt aria-label="Rotas turísticas" />
            </FabIcon>
            <FabIcon
              to="/loja"
              isOpen={isMenuOpen}
              index={1}
              onClick={toggleMenu}
            >
              <FaStore aria-label="Loja" />
            </FabIcon>
            <FabIcon
              to="/login"
              isOpen={isMenuOpen}
              index={2}
              onClick={toggleMenu}
            >
              <FaUser aria-label="Área de login" />
            </FabIcon>
            <FabIcon
              as="button"
              isOpen={isMenuOpen}
              index={3}
              onClick={() => setShowForm(true)}
            >
              <FaEnvelope aria-label="Enviar mensagem" />
            </FabIcon>
          </>
        )}
      </FloatingMenuWrapper>

      <PopupOverlay show={showForm} onClick={() => setShowForm(false)}>
        <ContactForm show={showForm} onClick={(e) => e.stopPropagation()}>
          <Title>Contato</Title>
          <ContactDetails show>
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
          </ContactDetails>

          <form>
            <div>
              <label>Nome</label>
              <Input type="text" name="nome" required />
            </div>
            <div>
              <label>Email</label>
              <Input type="email" name="email" required />
            </div>
            <div>
              <label>Mensagem</label>
              <TextArea name="mensagem" required />
            </div>
            <SubmitButton type="submit">Enviar</SubmitButton>
          </form>
        </ContactForm>
      </PopupOverlay>
    </>
  );
};

export default Header;

// Estilo do Header

const Logo = styled(Link)`
  position: fixed; /* Fixando a logo na tela */
  top: 20px;
  left: 20px;
  width: 100px;
  height: 50px;
  background-image: url("https://raw.githubusercontent.com/Kapitour/Imgs-Padr-o/main/home/KapitourHeader.png");
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  z-index: 1000; /* Garantindo que a logo fique acima de outros elementos */
  transition: transform 0.3s ease;

  @media (max-width: 425px) {
    width: 80px;
    height: 40px;
  }

  @media (min-width: 426px) and (max-width: 767px) {
    width: 90px;
    height: 45px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100px;
    height: 50px;
  }

  @media (min-width: 1024px) {
    margin-left: 20px;
  }
`;

const FloatingMenuWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
`;

const MainFab = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #c93434;
  color: white;
  font-size: 24px;
  border: none;
  cursor: pointer;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
`;

const FabIcon = styled(Link)`
  position: absolute;
  bottom: ${({ isOpen, index }) => (isOpen ? `${70 + index * 60}px` : "0px")};
  left: 0;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: ${({ isOpen }) =>
    isOpen ? "scale(1) translateY(0)" : "scale(0.5) translateY(20px)"};
  transition: bottom 0.4s ease-out, opacity 0.3s ease-out,
    transform 0.3s ease-out;
  transition-delay: ${({ index }) => `${index * 0.1}s`};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};

  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #791919;
  color: white;
  font-size: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    background-color: #a72a2a;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
  backdrop-filter: blur(2px);
`;

const PopupOverlay = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo esmaecido */
  justify-content: center;
  align-items: center;
  z-index: 1100;
`;

// Estilo do Widget de Contato
const WidgetWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1100;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
`;

const ContactDetails = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  color: #333;

  a {
    display: block;
    margin-bottom: 8px;
    text-decoration: none;
    color: #007bff;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const MessageButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

// Estilo do Formulário de Contato
const ContactForm = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 400px;
  max-width: 100%;
  z-index: 1200;

  form {
    display: flex;
    flex-direction: column;
  }

  div {
    margin-bottom: 15px;
  }

  label {
    font-size: 14px;
    margin-bottom: 5px;
    color: #333;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 14px;
    outline: none;

    &:focus {
      border-color: #007bff;
    }
  }
`;

const Input = styled.input`
  width: ${({ width }) => width || "100%"};
`;

const TextArea = styled.textarea`
  width: ${({ width }) => width || "100%"};
  height: 100px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  background-color: #28a745;
  color: #fff;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;
