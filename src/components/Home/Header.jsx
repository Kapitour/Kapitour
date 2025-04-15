import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Função para abrir/fechar o menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fechar o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest(".hamburger-icon")
      ) {
        setIsMenuOpen(false); // Fecha o menu ao clicar fora
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <HeaderMenu>
        {/* Menu hambúrguer no mobile */}
        <HamburgerIcon
          className="hamburger-icon"
          onClick={toggleMenu}
          isOpen={isMenuOpen}
        >
          <div></div>
          <div></div>
          <div></div>
        </HamburgerIcon>

        {/* Logo */}
        <Logo to="/" />

        {/* Botões do Header (desktop) */}
        <div>
          <HeaderBtn to="/rotas">Rotas</HeaderBtn>
          <HeaderBtn to="/loja">Loja</HeaderBtn>
          <LoginBtn to="/login">Login</LoginBtn>
        </div>
      </HeaderMenu>

      {/* Menu mobile */}

      <MobileMenu ref={menuRef} isOpen={isMenuOpen}>
        <MobileMenuItem to="/rotas" onClick={() => setIsMenuOpen(false)}>
          Rotas
        </MobileMenuItem>
        <MobileMenuItem to="/loja" onClick={() => setIsMenuOpen(false)}>
          Loja
        </MobileMenuItem>
        <MobileMenuItem to="/login" onClick={() => setIsMenuOpen(false)}>
          Login
        </MobileMenuItem>
      </MobileMenu>
    </>
  );
};

export default Header;

// Estilo do Header
const HeaderMenu = styled.header`
  background-color: rgba(201, 52, 52, 0.733);
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1em;
  width: 100%;
  z-index: 10;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 1024px) {
    padding: 0.8em 1em;
    flex-direction: row; /* <- Aqui faz a mágica */
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    justify-content: center;
    gap: 40px;
  }
`;

const Logo = styled(Link)`
  background-image: url("https://github.com/Kapitour/Imgs-Padr-o/blob/main/home/KapitourHeader.png?raw=true");
  background-size: contain; /* Mantém a proporção */
  background-repeat: no-repeat;
  width: 100px;
  height: 50px;
  display: block;
  cursor: pointer;
  transition: transform 0.3s ease;

  @media (max-width: 425px) {
    width: 80px;
    height: 40px;
    margin: 0 auto;
  }

  @media (min-width: 426px) and (max-width: 767px) {
    width: 90px;
    height: 45px;
    margin: 0 auto;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100px;
    height: 50px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    margin-left: 20px;
  }
`;

const HeaderBtn = styled(Link)`
  background-color: transparent;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  line-height: 45px;
  max-width: 160px;
  position: relative;
  text-transform: uppercase;
  width: 100%;
  align-items: center;
  vertical-align: center;
  border-radius: 5px;
  margin: 0 10px;
  font-weight: bold;

  &:hover {
    letter-spacing: 3px;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  }

  /* Esconde os botões no mobile */
  @media (max-width: 1024px) {
    display: none;
  }

  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    margin: 0 auto;
    align-items: center;
    margin-right: 10px;
  }
  @media (min-width: 1280px) {
    width: 60px;
    height: 50px;
  }
`;

const LoginBtn = styled(Link)`
  background-color: rgba(121, 25, 25, 0.88);
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  line-height: 45px;
  max-width: 160px;
  padding: 10px;
  text-transform: uppercase;
  border-radius: 10px;
  margin: 0 10px;
  width: 150px;
  font-weight: bold;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, letter-spacing 0.3s ease,
    text-shadow 0.3s ease;

  &:hover {
    letter-spacing: 3px;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
    transform: scale(1.1);
  }

  /* Esconde o botão no mobile */
  @media (max-width: 1024px) {
    display: none;
  }
  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    margin: 0 auto;
    align-items: center;
    margin-right: 750px;
  }
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    margin: 0 auto;
    align-items: center;
    margin-right: 20px;
  }
  @media screen and (min-width: 1440px) and (max-width: 1980px) {
    margin: 0 auto;
    align-items: center;
    margin-right: 20px;
  }
`;

// Estilos do Menu Mobile
const HamburgerIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  cursor: pointer;
  margin-left: 20px;
  z-index: 1100;

  div {
    background-color: white;
    height: 3px;
    width: 100%;
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    div:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    div:nth-child(2) {
      opacity: 0;
    }
    div:nth-child(3) {
      transform: rotate(-45deg) translate(6px, -6px);
    }
  `}

  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  position: fixed; /* Alterado de absolute para fixed */
  top: 70px; /* Mantém o menu fixo abaixo do header */
  left: 0;
  background-color: rgba(201, 52, 52, 0.9);
  width: 250px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  z-index: 1000; /* Garante que fique acima de outros elementos */
  padding: 10px 0;
  transition: transform 0.3s ease;

  /* Ajuste da largura para telas pequenas */
  @media (min-width: 320px) and (max-width: 375px) {
    margin-top: 12px;
    width: 50%;
    left: 0;
    border: none;
  }

  @media (min-width: 376px) and (max-width: 425px) {
    margin-top: 20px;
    width: 50%;
    left: 0;
    border: none;
  }
  @media (min-width: 426px) and (max-width: 768px) {
    margin-top: -10px;
    width: 50%;
    left: 0;
    border: none;
  }
`;

const MobileMenuItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 20px;
  padding: 15px;
  text-transform: uppercase;
  font-weight: bold;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);

  &:hover {
    letter-spacing: 3px;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  }
`;
