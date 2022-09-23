import './App.css';
import Home from './home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './about';
import Layout from './layout';
import Skills from './skills';
import Projects from './project';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
