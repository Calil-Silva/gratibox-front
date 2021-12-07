import styled, { keyframes, css } from "styled-components/macro";
import week from "../assets/images/weekplan.jpg";
import month from "../assets/images/monthplan.jpg";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext, useState, useEffect } from "react";
import { Body, Header, Submit } from "../styles/SharedStyles";
import { colors } from "../styles/theme";
import { fadeInUp, fadeInRight } from "react-animations";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function ChooseNewPlan() {
  const { userData, setChoosedPlan, choosedPlan } = useContext(UserContext);
  const [showMonthlyPlan, setShowMonthlyPlan] = useState(false);
  const [afterLoading, setAfterLoading] = useState(false);
  const name = userData?.name?.split(" ")[0];
  const navigate = useNavigate();

  const handlePlan = (e) => {
    e.preventDefault();
    const thisPlan = e.target.id;
    setChoosedPlan({ ...choosedPlan, plan: thisPlan });
    navigate("/newplan", { replace: true });
  };

  useEffect(() => {
    const changeShowedPLan = setInterval(() => {
      setShowMonthlyPlan(!showMonthlyPlan);
      setAfterLoading(true);
    }, 5000);

    return () => {
      clearInterval(changeShowedPLan);
    };
  }, [showMonthlyPlan]);

  return (
    <Body>
      <Header>
        <h1>Bom te ver por aqui, {name}.</h1>
        <h2>Você ainda não assinou um plano, que tal começar agora?</h2>
      </Header>
      <Loader type="Hearts" color={colors.pink} height={80} width={80} />

      <MonthlyPlan
        showMonthlyPlan={showMonthlyPlan}
        afterLoading={afterLoading}
      >
        <img src={week} alt="weekly plan" />
        <div>
          <h3>
            Você recebe um box por mês. Ideal para quem quer exercer a gratidão
            todos os dias.
          </h3>
          <Submit
            type="submit"
            value="Assinar"
            id="Mensal"
            onClick={(e) => handlePlan(e)}
          />
        </div>
      </MonthlyPlan>
      <WeeklyPlan showMonthlyPlan={showMonthlyPlan} afterLoading={afterLoading}>
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
      </WeeklyPlan>
    </Body>
  );
}

const fadeInAnimation = keyframes`${fadeInUp}`;
const changePlanAnimation = keyframes`${fadeInRight}`;
const loadingAnimation = css`
  animation: 1s ${fadeInAnimation};
`;
const afterLoadingAnimation = css`
  animation: 1s ${changePlanAnimation};
`;

const Plan = css`
  margin: 0.5rem 0 1rem;
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

const MonthlyPlan = styled.div`
  ${Plan}
  ${({ afterLoading }) =>
    afterLoading ? afterLoadingAnimation : loadingAnimation};
  display: ${({ showMonthlyPlan }) => (showMonthlyPlan ? "initial" : "none")};
`;

const WeeklyPlan = styled.div`
  ${Plan}
  ${({ afterLoading }) =>
    afterLoading ? afterLoadingAnimation : loadingAnimation};
  display: ${({ showMonthlyPlan }) => (showMonthlyPlan ? "none" : "initial")};
`;
