import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ProjectPage from "./components/ProjectPage.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <div className="relative min-h-screen bg-[#13110E] text-[#E5E1D8] font-sans overflow-x-hidden">
      <Navbar />

      <main className="w-full pt-20 md:pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Home initialSection="projects" />} />
          <Route path="/contact" element={<Home initialSection="contact" />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
