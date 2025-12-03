import './App.css'
import ProjectList from './components/ProjectList'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Contact from './components/contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-[#13110E] text-[#E5E1D8] font-sans overflow-x-hidden">
      <Navbar />

      <main className="w-full pt-20 md:pt-24">
        <div className="px-4 md:px-8 pb-10 space-y-16">
          <section id="home">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="projects">
            <ProjectList title="Featured Projects" />
          </section>

          <section id="contact">
            <Contact />
          </section>
          <section id="footer">
            <Footer />
          </section>
        </div>
      </main>
    </div>
  );
}
export default App;
