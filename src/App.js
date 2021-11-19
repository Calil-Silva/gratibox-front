import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./components/GlobalStyles";
import { UserContext } from "./contexts/UserContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import User from "./pages/User";
import { getUserData } from "./services/loginPersistence";

export default function App() {
  const [userData, setUserData] = useState(getUserData());

  return (
    <BrowserRouter>
      <GlobalStyles />
      <UserContext.Provider value={{ userData, setUserData }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
