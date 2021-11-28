import styled, { keyframes } from "styled-components";
import img from "../assets/images/plan.jpeg";
import { fadeInUp } from "react-animations";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { colors } from "../styles/theme";
import { Header, SubmitStyle, Body, Marginer } from "../styles/SharedStyles";
import { signoutUser } from "../services/gratibox";
import { removeUserData } from "../services/loginPersistence";

export default function UserPlan() {
  const { userData } = useContext(UserContext);
  const name = userData?.name?.split(" ")[0];
  const navigate = useNavigate();

  const { subPlan, nextDeliveries, products, subDate } = userData.subscription;

  const localeDate = new Date(subDate).toLocaleDateString("pt-br");

  const signout = () => {
    signoutUser(userData.token).then(() => {
      removeUserData();
      navigate("/");
    });
  };

  return (
    <Body>
      <Header>
        <h1>Bom te ver por aqui, {name}</h1>
        <h2>"Agradecer é a arte de atrair coisas boas"</h2>
      </Header>
      <Plan>
        <img src={img} alt="User Plan" />
        <Data>
          <p>Plano: {subPlan}</p>
          <p>Data da assinatura: {localeDate}</p>
          <p>Próximas entregas:</p>
          <div>
            {nextDeliveries.map((d, i) => (
              <span key={i}>{d}</span>
            ))}
          </div>
          <span>Produtos:</span>
          <div>
            {products.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Data>
      </Plan>
      <Marginer vertical="0.5rem" />
      <Submit to="/userplan/hating">Avaliar entregas</Submit>
      <Sigout onClick={signout}>Sair</Sigout>
    </Body>
  );
}

const fadeInAnimation = keyframes`${fadeInUp}`;

const Plan = styled.div`
  margin: 1.5rem 0 0;
  width: calc(100vw - 1rem);
  background-color: ${colors.white};
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
  color: ${colors.violet};
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
      margin-top: 0.5rem;
      font-weight: initial;
      color: ${colors.pink};
    }

    span {
      margin-left: 2.5rem;

      &:last-of-type {
        margin-bottom: 0.5rem;
      }
    }
  }
`;

const Submit = styled(Link)`
  ${SubmitStyle};
`;

const Sigout = styled.button`
  border: none;
  background-color: none;
  color: ${colors.white};
  background-color: transparent;
  margin: 0 0 1.5rem;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
`;
