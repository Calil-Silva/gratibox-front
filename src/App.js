import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./components/GlobalStyles";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
