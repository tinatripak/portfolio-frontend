import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import "./styles/index.scss";

const Header = lazy(() => import("./components/Header/Header"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Home = lazy(() => import("./pages/Home/Home"));
const Skills = lazy(() => import("./pages/Skills/Skills"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Resume = lazy(() => import("./pages/Resume/Resume"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </Suspense>
  </Router>
);
export default App;
