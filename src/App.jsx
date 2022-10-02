import Header from "./components/Header";
import {
  BrowserRouter,
  Route,
  Routes,
  // useSearchParams,
} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:str" element={<div>axxaax</div>} />
        <Route path="/*" element={<div>404 not found</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
