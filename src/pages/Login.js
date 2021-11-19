import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { postLogin } from "../services/gratibox";
import { UserContext } from "../contexts/UserContext";
import { storeUserData } from "../services/loginPersistence";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmitLogin = () => {
    postLogin(credentials)
      .then((res) => {
        setUserData({ ...userData, ...res.data });
        storeUserData(res.data);
        navigate("/user");
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
          placeholder="Email"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Senha"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
      </Form>
      <Submit onClick={handleSubmitLogin}>Login</Submit>
      <Links to="/register">Ainda não sou grato</Links>
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
  height: 3.5rem;
  width: 14rem;
  color: #fff;
  background-color: #8c97ea;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
`;

const Links = styled(Link)`
  border: none;
  background-color: none;
  color: #fff;
  background-color: transparent;
  margin: 2rem 0 1.5rem;
  font-weight: bold;
  font-size: 18px;
`;
