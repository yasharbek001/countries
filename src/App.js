import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import {Main} from "./pages/Main/Main";
import {Detail} from "./pages/Detail/Detail"

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:name" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
