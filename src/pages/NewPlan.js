import styled, { keyframes } from "styled-components";
import plan from "../assets/images/plan.jpeg";
import Options from "../components/Options";
import { UserContext } from "../contexts/UserContext";
import { useContext, useState, useEffect } from "react";
import { fadeInUp } from "react-animations";
import { useNavigate } from "react-router";
import { getNewPlan, postUserPlan } from "../services/gratibox";

export default function NewPlan() {
  const { choosedPlan, setChoosedPlan, userData } = useContext(UserContext);
  const name = userData?.name?.split(" ")[0];
  const [userAdress, setUserAdress] = useState(false);
  const token = userData?.token;
  const navigate = useNavigate();
  const userOptions = {
    plans: ["Semanal", "Mensal"],
    delivery:
      choosedPlan.plan === "Mensal"
        ? ["Dia 1", "Dia 10", "Dia 20"]
        : ["Segunda", "Quarta", "Sexta"],
    products: ["Chás", "Incensos", "Produtos orgânicos"],
  };
  const labels = ["Plano", "Entrega", "Quero receber"];

  useEffect(() => {
    if (!token) {
      alert("Você precisa estar logado para visualizar esta página");
      navigate("/login", { replace: true });
      return;
    }

    getNewPlan(token)
      .then((res) => {
        if (res.status === 205) {
          alert("Erro de autenticação");
          navigate("/login", { replace: true });
        }
      })
      .catch((err) => {
        alert("Erro desconhecido");
        navigate("/login", { replace: true });
      });
  }, [navigate, token]);

  const handleSubmit = () => {
    postUserPlan(choosedPlan, token)
      .then(() => {
        alert("Sucesso");
        navigate("/user", { replace: true });
      })
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <Body>
      <Header>
        <h1>Bom te ver por aqui, {name}.</h1>
        <h2>"Agradecer é a arte de atrair coisas boas"</h2>
      </Header>
      <Plan userAdress={userAdress}>
        <img src={plan} alt="New plan" />
        <Form>
          {Object.keys(userOptions).map((k, i) => (
            <Options key={i} userOptions={userOptions[k]} labels={labels[i]} />
          ))}
        </Form>
      </Plan>
      <Adress userAdress={userAdress}>
        <img src={plan} alt="New plan" />
        <Form>
          <InputAdressContainer>
            <InputAdress placeholder="Nome completo" type="text" />
            <InputAdress
              placeholder="Endereço de entrega"
              type="text"
              value={choosedPlan.adress.street}
              onChange={(e) =>
                setChoosedPlan({
                  ...choosedPlan,
                  adress: { ...choosedPlan.adress, street: e.target.value },
                })
              }
            />
            <InputAdress
              placeholder="CEP"
              type="text"
              value={choosedPlan.adress.zipCode}
              onChange={(e) =>
                setChoosedPlan({
                  ...choosedPlan,
                  adress: { ...choosedPlan.adress, zipCode: e.target.value },
                })
              }
            />
          </InputAdressContainer>
          <InputAdressContainer>
            <InputAdress
              placeholder="Cidade"
              type="text"
              value={choosedPlan.adress.city}
              onChange={(e) =>
                setChoosedPlan({
                  ...choosedPlan,
                  adress: { ...choosedPlan.adress, city: e.target.value },
                })
              }
            />
            <InputAdress
              placeholder="Estado"
              type="text"
              value={choosedPlan.adress.state}
              onChange={(e) =>
                setChoosedPlan({
                  ...choosedPlan,
                  adress: { ...choosedPlan.adress, state: e.target.value },
                })
              }
            />
          </InputAdressContainer>
        </Form>
      </Adress>
      <GotoAdress
        onClick={() => setUserAdress(!userAdress)}
        userAdress={userAdress}
      >
        Próximo
      </GotoAdress>
      <Submit userAdress={userAdress} onClick={handleSubmit}>
        Finalizar
      </Submit>
      <BacktoPlans
        onClick={() => setUserAdress(!userAdress)}
        userAdress={userAdress}
      >
        Voltar
      </BacktoPlans>
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
  margin: 2rem 1rem 1rem;
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
  margin: 1.5rem 0 1rem;
  width: calc(100vw - 1rem);
  background-color: #fff;
  border-radius: 25px;
  user-select: none;
  animation: 1s ${fadeInAnimation};
  display: ${({ userAdress }) => (userAdress ? "none" : "initial")};

  img {
    object-fit: cover;
    height: 11rem;
    width: 100%;
    border-radius: 25px;
  }
`;

const Adress = styled.div`
  margin: 1.5rem 0 1rem;
  width: calc(100vw - 1rem);
  background-color: #fff;
  border-radius: 25px;
  user-select: none;
  animation: 0.5s ${fadeInAnimation};
  display: ${({ userAdress }) => (userAdress ? "initial" : "none")};

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
  user-select: none;
`;

const InputAdressContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputAdress = styled.input`
  width: 80%;
  height: 3rem;
  margin-bottom: 0.5rem;
  background-color: #e0d1ed9e;
  border-radius: 5px;
  color: #4d65a8;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  user-select: none;
  transition: all 0.5s ease;
  border: none;
  outline: none;
  padding-left: 1rem;

  ::placeholder {
    color: #4d65a8;
  }
`;

const GotoAdress = styled.button`
  height: 2.5rem;
  width: 10rem;
  color: #fff;
  background-color: #8c97ea;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  animation: 4s ${fadeInAnimation};
  display: ${({ userAdress }) => (userAdress ? "none" : "initial")};
`;

const Submit = styled.button`
  height: 2.5rem;
  width: 10rem;
  color: #fff;
  background-color: #8c97ea;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  animation: 4s ${fadeInAnimation};
  display: ${({ userAdress }) => (userAdress ? "initial" : "none")};
`;

const BacktoPlans = styled.button`
  background-color: none;
  color: #fff;
  background-color: transparent;
  margin: 0 0 1.5rem;
  font-weight: bold;
  font-size: 18px;
  animation: 4s ${fadeInAnimation};
  display: ${({ userAdress }) => (userAdress ? "initial" : "none")};
`;
