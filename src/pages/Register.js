import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postNewUser } from "../services/gratibox";
import {
  Input,
  Form,
  Header,
  Body,
  Links,
  Submit,
  Marginer,
} from "../styles/SharedStyles";

export default function Register() {
  const navigate = useNavigate();
  const VERTICAL = "2rem";
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
        <Input
          type="text"
          placeholder="Nome"
          value={newUserData.name}
          onChange={(e) =>
            setNewUserData({ ...newUserData, name: e.target.value })
          }
        />
        <Input
          type="email"
          placeholder="Email"
          value={newUserData.email}
          onChange={(e) =>
            setNewUserData({ ...newUserData, email: e.target.value })
          }
        />
        <Input
          type="password"
          placeholder="Senha"
          value={newUserData.password}
          onChange={(e) =>
            setNewUserData({ ...newUserData, password: e.target.value })
          }
        />
        <Input
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
        <Marginer vertical={VERTICAL} />
        <Submit type="submit" value="Cadastrar" onClick={registerNewUser} />
        <Links to="/login">Já sou grato</Links>
      </Form>
    </Body>
  );
}
