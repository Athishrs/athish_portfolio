import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ProjectPage from "./components/ProjectPage.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--ink)] overflow-x-hidden">
      <Navbar />

      <main className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Home initialSection="work" />} />
          <Route path="/contact" element={<Home initialSection="footer" />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
