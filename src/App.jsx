import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Breed from "./pages/Breed";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breeds/:breedName" element={<Breed />} />
        <Route path="/*" element={<div>404 not found</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
