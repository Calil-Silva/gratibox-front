import styled, { keyframes } from "styled-components";
import plan from "../assets/images/plan.jpeg";
import { fadeInUp } from "react-animations";
import { Link } from "react-router-dom";

export default function UserPlan() {
  return (
    <Body>
      <Header>
        <h1>Bom te ver por aqui, @user.</h1>
        <h2>"Agradecer é a arte de atrair coisas boas"</h2>
      </Header>
      <Plan>
        <img src={plan} alt="User Plan" />
        <Data>
          <p>Plano: @tipo_de_plano</p>
          <p>Data da assinatura: dd/mm/aa</p>
          <p>Próximas entregas:</p>
          <div>
            <span>dd/mm/aaa</span>
            <span>dd/mm/aaa</span>
            <span>dd/mm/aaa</span>
          </div>
          <div>
            <p>Chás</p>
            <p>Produtos orgânicos</p>
            <p>Incensos</p>
          </div>
        </Data>
      </Plan>
      <Submit to="/userplan/hating">Avaliar entregas</Submit>
    </Body>
  );
}

const fadeInAnimation = keyframes`${fadeInUp}`;

const Body = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem 1rem 1rem;
  h1 {
    font-size: 26px;
    font-weight: bold;
    color: #fff;
  }
  h2 {
    font-size: 18px;
    font-weight: 300;
    color: #fff;
    margin-top: 1.5rem;
  }
`;

const Plan = styled.div`
  margin: 1.5rem 0 0;
  width: calc(100vw - 1rem);
  background-color: #fff;
  border-radius: 25px;
  user-select: none;
  animation: 1s ${fadeInAnimation};
  height: 22.5rem;
  img {
    object-fit: cover;
    height: 11rem;
    width: 100%;
    border-radius: 25px;
  }
`;

const Data = styled.div`
  height: 5rem;
  color: #4d65a8;
  font-weight: bold;
  margin: 1.5rem 1.5rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    &:last-child {
      flex-direction: initial;
      justify-content: space-between;
      margin-top: 2rem;
      font-weight: initial;
    }

    span {
      margin-left: 2.5rem;
    }
  }
`;

const Submit = styled(Link)`
  height: 3.5rem;
  width: 14rem;
  color: #fff;
  background-color: #8c97ea;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
`;
