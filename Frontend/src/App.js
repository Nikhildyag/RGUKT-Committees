import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Home";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
    </Routes>
  </BrowserRouter>
);

export default App;
