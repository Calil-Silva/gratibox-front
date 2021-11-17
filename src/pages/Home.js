import styled from "styled-components";
import homeContentBackGround from "../assets/images/homePage.webp";

export default function Home() {
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
        <button>Quero começar</button>
        <button>Já sou grato</button>
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
    color: #fff;
  }
  h2 {
    font-size: 18px;
    font-weight: 300;
    color: #fff;
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
  background-color: #4d65a8;
  button:first-child {
    height: 3rem;
    width: 14rem;
    color: #fff;
    background-color: #8c97ea;
    border-radius: 10px;
    border: none;
    font-weight: bold;
    font-size: 18px;
  }
  button:last-child {
    border: none;
    background-color: none;
    color: #fff;
    background-color: transparent;
    margin: 1rem 0 2.5rem;
    font-weight: bold;
    font-size: 18px;
  }
`;
