import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postNewUser } from "../services/gratibox";
import { submitStyle } from "../styles/sharedStyles";

export default function Register() {
  const navigate = useNavigate();
  const [newUserData, setNewUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });

  const registerNewUser = () => {
    postNewUser(newUserData)
      .then((res) => {
        alert(res.data.message);
        navigate("/login");
      })
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <Body>
      <Header>
        <h1>Bem vindo ao GratiBox</h1>
      </Header>
      <Form>
        <input
          type="text"
          placeholder="Nome"
          value={newUserData.name}
          onChange={(e) =>
            setNewUserData({ ...newUserData, name: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          value={newUserData.email}
          onChange={(e) =>
            setNewUserData({ ...newUserData, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Senha"
          value={newUserData.password}
          onChange={(e) =>
            setNewUserData({ ...newUserData, password: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Confirmar senha"
          value={newUserData.confirmedPassword}
          onChange={(e) =>
            setNewUserData({
              ...newUserData,
              confirmedPassword: e.target.value,
            })
          }
        />
      </Form>
      <Submit onClick={registerNewUser}>Cadastrar</Submit>
    </Body>
  );
}

const Body = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 7rem 2rem 1rem;
  h1 {
    font-size: 28px;
    font-weight: bold;
    color: #fff;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 0;
  input {
    height: 4rem;
    width: calc(100vw - 4rem);
    border-radius: 10px;
    border: 1px solid #604848;
    margin-bottom: 0.5rem;
    padding-left: 0.8rem;
    font-size: 24px;
    font-weight: bold;

    ::placeholder {
      font-size: 24px;
      font-weight: bold;
      color: #60484866;
    }
  }
`;

const Submit = styled.button`
  ${submitStyle}
`;
