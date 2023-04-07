import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SinglePage from "./pages/SinglePage";

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" component={<AboutPage />} />
          <Route path="/singleshow/:id" element={<SinglePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
