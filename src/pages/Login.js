import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { postLogin } from "../services/gratibox";
import { UserContext } from "../contexts/UserContext";
import { storeUserData } from "../services/loginPersistence";
import {
  Input,
  Form,
  Header,
  Body,
  Links,
  Submit,
  Marginer,
} from "../styles/SharedStyles";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmitLogin = (e) => {
    e.preventDefault();
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
        <Input
          type="text"
          placeholder="Email"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <Input
          type="password"
          placeholder="Senha"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <Marginer vertical="3rem" />
        <Submit
          type="submit"
          value="Login"
          onClick={(e) => handleSubmitLogin(e)}
        />
        <Links to="/register">Ainda não sou grato</Links>
      </Form>
    </Body>
  );
}
