import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import homeContentBackGround from "../assets/images/homePage.webp";
import { getUserData } from "../services/loginPersistence";
import { colors } from "../styles/theme";

export default function Home() {
  const isLogged = getUserData();

  if (isLogged) {
    return <Navigate to="/user" replace />;
  }

  return (
    <Body>
      <Header>
        <h1>Bem vindo ao GratiBox</h1>
        <h2>
          Receba em casa um box com chás, produtos organicos, incensos e muito
          mais...
        </h2>
      </Header>
      <Content>
        <Links to="/register">Quero começar</Links>
        <Links to="/login">Já sou grato</Links>
      </Content>
    </Body>
  );
}

const Body = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 2rem 1rem;
  h1 {
    font-size: 28px;
    font-weight: bold;
    color: ${colors.white};
  }
  h2 {
    font-size: 18px;
    font-weight: 300;
    color: ${colors.white};
    margin-top: 3rem;
    text-align: center;
  }
`;

const Content = styled.div`
  background-image: url(${homeContentBackGround});
  background-repeat: no-repeat;
  background-position: top;
  height: 100%;
  width: 100%;
  background-size: 100%, cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: ${colors.violet};
`;

const Links = styled(Link)`
  height: 3rem;
  width: 14rem;
  color: ${colors.white};
  background-color: ${colors.lightViolet};
  border-radius: 10px;
  border: none;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:last-of-type {
    border: none;
    background-color: none;
    color: ${colors.white};
    background-color: transparent;
    margin: 0.5rem 0 1.5rem;
    font-weight: bold;
    font-size: 18px;
  }
`;
