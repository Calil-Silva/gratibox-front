import week from "../assets/images/weekplan.jpg";
import month from "../assets/images/monthplan.jpg";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { Body, Header, Plan, Submit } from "../styles/SharedStyles";

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
      <Plan max="55%">
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
      </Plan>
      <Plan max="55%">
        <img src={month} alt="weekly plan" />
        <div>
          <h3>
            Você recebe um box por semana. Ideal para quem quer exercer a
            gratidão todos os dias.
          </h3>
          <Submit
            type="submit"
            value="Assinar"
            id="Semanal"
            onClick={(e) => handlePlan(e)}
          />
        </div>
      </Plan>
    </Body>
  );
}
