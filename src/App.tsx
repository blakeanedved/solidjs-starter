import { Component, lazy } from "solid-js";
import { Router, Routes, Route } from "solid-app-router";

const Home = lazy(() => import("./views/Home"));
const About = lazy(() => import("./views/About"));

const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
