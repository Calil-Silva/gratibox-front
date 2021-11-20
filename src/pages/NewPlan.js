import styled from "styled-components";
import plan from "../assets/images/plan.jpeg";
import { useState } from "react";
import Options from "../components/Options";

export default function NewPlan() {
  const [showContent, setShowContent] = useState(false);

  return (
    <Body>
      <Header>
        <h1>Bom te ver por aqui, @User.</h1>
        <h2>"Agradecer é a arte de atrair coisas boas"</h2>
      </Header>
      <Plan>
        <img src={plan} alt="New plan" />
        <Form>
          <Options showContent={showContent} setShowContent={setShowContent} />
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
