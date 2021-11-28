import styled from "styled-components";
import week from "../assets/images/weekplan.jpg";
import month from "../assets/images/monthplan.jpg";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { Body, Header, Submit } from "../styles/SharedStyles";
import { colors } from "../styles/theme";

export default function ChooseNewPlan() {
  const { userData, setChoosedPlan, choosedPlan } = useContext(UserContext);
  const name = userData?.name?.split(" ")[0];
  const navigate = useNavigate();

  const handlePlan = (e) => {
    e.preventDefault();
    const thisPlan = e.target.id;
    setChoosedPlan({ ...choosedPlan, plan: thisPlan });
    navigate("/newplan", { replace: true });
  };

  return (
    <Body>
      <Header>
        <h1>Bom te ver por aqui, {name}.</h1>
        <h2>Você ainda não assinou um plano, que tal começar agora?</h2>
      </Header>
      <Plan>
        <img src={week} alt="weekly plan" />
        <div>
          <h3>
            Você recebe um box por semana. Ideal para quem quer exercer a
            gratidão todos os dias.
          </h3>
          <Submit
            type="submit"
            value="Assinar"
            id="Mensal"
            onClick={(e) => handlePlan(e)}
          />
        </div>
      </Plan>
      <Plan>
        <img src={month} alt="weekly plan" />
        <div>
          <h3>
            Você recebe um box por semana. Ideal para quem quer exercer a
            gratidão todos os dias.
          </h3>
          <Submit
            type="submit"
            value="assinar"
            id="Semanal"
            onClick={(e) => handlePlan(e)}
          />
        </div>
      </Plan>
    </Body>
  );
}

const Plan = styled.div`
  margin: 2rem 0 1rem;
  height: 25rem;
  width: calc(100vw - 1rem);
  background-color: ${colors.moodBeige};
  border-radius: 25px;

  img {
    object-fit: cover;
    height: 55%;
    width: 100%;
    border-radius: 25px;
  }

  div {
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h3 {
    color: ${colors.violet};
    font-size: 18px;
    font-weight: bold;
    width: calc(100% - 2rem);
    margin-left: 1.5rem;
    text-align: left;
    margin-bottom: 2rem;
  }
`;
