import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #1a1a1d; /* Fundo principal */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const FormBox = styled.div`
  background-color: #333; /* Fundo escuro */
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 300px;
  position: relative;
  overflow: visible;
`;

const Logo = styled.div`
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  background-image: url("https://github.com/Kapitour/Imgs-Padr-o/blob/main/login/LoginLogo.png?raw=true");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 200px;
  height: 200px;
  z-index: 1;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: white; /* Texto claro */
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: none;
  background-color: #4e4e50; /* Fundo escuro para inputs */
  color: white;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 2px solid #c3073f; /* Destaque ao focar */
  }
`;

const Button = styled.button`
  background-color: #c3073f; /* Vermelho pastel */
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background-color: #950740; /* Vermelho mais escuro */
  }
`;

const Link = styled.a`
  display: block;
  margin-top: 15px;
  color: rgba(255, 94, 94, 0.884); /* Vermelho pastel */
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;

  &:hover {
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  }
`;

const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: #c3073f; /* Vermelho pastel */
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background-color: #950740; /* Vermelho mais escuro */
  }
`;

const Register = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <BackButton onClick={() => navigate("/login")}>
        &lt;
      </BackButton>
      <FormBox>
        <Logo />
        <form>
          <Label>Nome:</Label>
          <Input type="text" required />
          <Label>Email:</Label>
          <Input type="email" required />
          <Label>Senha:</Label>
          <Input type="password" required />
          <Label>Data de Nascimento:</Label>
          <Input type="date" required />
          <Button type="submit">Cadastrar</Button>
          <Link href="/login">Já possui uma conta? Faça login</Link>
        </form>
      </FormBox>
    </Container>
  );
};

export default Register;
