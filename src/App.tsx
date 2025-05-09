import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Team } from "./components/Team";
import { Promo } from "./components/Promo";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className='relative'>
      <Navbar />

      <Hero />

      <Promo />

      <About />

      <Team />

      <Footer />
    </div>
  );
}

export default App;
