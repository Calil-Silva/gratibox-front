import styled from "styled-components";

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
  padding: 1rem;
  background-color: #6d7ce4;
`;

const Header = styled.div`
  h1 {
    font-size: 2rem;
    color: #fff;
  }
  h2 {
    font-size: 1rem;
    color: #fff;
  }
`;

const Content = styled.div`
  button:first-child {
    height: 2rem;
    width: 5rem;
    color: #fff;
    background-color: #8c97ea;
    border-radius: 5px;
    border: none;
  }
  button:last-child {
    border: none;
    background-color: none;
    color: #fff;
  }
`;
