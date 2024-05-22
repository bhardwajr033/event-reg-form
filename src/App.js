import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultPage from "./DefaultPage";
import RegForm from "./RegForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/form" element={<RegForm />} />
        <Route path="/*" element={<DefaultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
