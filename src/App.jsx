import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ProjectPage from "./components/ProjectPage.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--ink)] overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:rounded-md focus:bg-[var(--ink)] focus:px-4 focus:py-2 focus:text-[var(--bg)]"
      >
        Skip to content
      </a>
      <Navbar />

      <main id="main-content" className="w-full">
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
