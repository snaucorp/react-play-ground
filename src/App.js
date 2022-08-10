import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./modules/Home";
import About from "./modules/About";
import Privacy from "./modules/Privacy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="privacy" element={<Privacy />} />
      </Route>
    </Routes>
  );
}

export default App;
