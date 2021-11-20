import styled from "styled-components";
import plan from "../assets/images/plan.jpeg";
import Options from "../components/Options";
// import { UserContext } from "../contexts/UserContext";
// import { useContext, useState } from "react";
import eachDayOfInterval from "date-fns/eachDayOfInterval";
import addDays from "date-fns/addDays";

export default function NewPlan() {
  //   const { choosedPlan, setChoosedPlan } = useContext(UserContext);
  const userOptions = {
    plans: ["Semanal", "Mensal"],
    deliveryMonthly: [1, 10, 20],
    deliveryWeekly: ["segunda", "quarta", "sexta"],
    products: ["Chás", "Incensos", "Produtos orgânicos"],
  };
  const labels = ["Plano", "Entrega", "Entrega", "Quero receber"];

  const days = eachDayOfInterval(
    {
      start: new Date(),
      end: addDays(new Date(), 10),
    },
    { step: 7 }
  );
  console.log(days);

  return (
    <Body>
      <Header>
        <h1>Bom te ver por aqui, @User.</h1>
        <h2>"Agradecer é a arte de atrair coisas boas"</h2>
      </Header>
      <Plan>
        <img src={plan} alt="New plan" />
        <Form>
          {Object.keys(userOptions).map((k, i) => (
            <Options key={i} userOptions={userOptions[k]} labels={labels[i]} />
          ))}
        </Form>
      </Plan>
    </Body>
  );
}

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
  margin: 1.5rem 0 2rem;
  width: calc(100vw - 1rem);
  background-color: #fff;
  border-radius: 25px;

  img {
    object-fit: cover;
    height: 11rem;
    width: 100%;
    border-radius: 25px;
  }
`;

const Form = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0 0.5rem;
  display: relative;
`;
