import styled from "styled-components";
import { Link } from "react-router-dom";

// Estilo para o contêiner principal
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #1a1a1d;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const SubContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const LogoSection = styled.div`
  background-color: rgba(201, 52, 52, 0.733);
  background: linear-gradient(
    to right,
    rgba(201, 52, 52, 0.733) 0%,
    rgb(201, 52, 52, 0.733) 25%,
    rgb(201, 52, 52, 0.733) 85%,
    rgba(201, 52, 52, 0) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const Logo = styled.div`
  background-image: url("https://github.com/Kapitour/Imgs-Padr-o/blob/main/login/LoginLogo.png?raw=true");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 80%;
  height: 50%;
`;

const FormSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const FormBox = styled.div`
  background-color: #333;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 300px;
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
  background-color: rgba(201, 52, 52, 0.884);
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Cadastro = styled(Link)`
  display: block;
  margin-top: 15px;
  color: rgba(255, 94, 94, 0.884);
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;

  &:hover {
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background-color: #fff;
  }

  span {
    margin: 0 10px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const IconButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: rgba(201, 52, 52, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  color: #fff;
  font-size: 18px;

  &:hover {
    transform: scale(1.1);
    background-color: rgba(201, 52, 52, 1);
  }
`;

const BackButton = styled(Link)`
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

const Login = ({ showPainel = true }) => {
  return (
    <Container>
      <BackButton to="/">&lt;</BackButton>
      <SubContainer>
        <LogoSection>
          <Logo />
        </LogoSection>
        <FormSection>
          <FormBox>
            <form>
              <Label>Email:</Label>
              <Input type="email" required />
              <Label>Senha:</Label>
              <Input type="password" required />
              <Button type="submit">Login</Button>
              <Cadastro to="/register">Cadastrar-se</Cadastro>
            </form>

            <Divider>
              <span>Login Por:</span>
            </Divider>

            <SocialIcons>
              <IconButton>G</IconButton>
              <IconButton>F</IconButton>
              <IconButton>T</IconButton>
            </SocialIcons>
          </FormBox>
        </FormSection>
      </SubContainer>
    </Container>
  );
};

export default Login;
