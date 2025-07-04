import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Team } from "./components/Team";
import { Promo } from "./components/Promo";
import { Footer } from "./components/Footer";
import VideoSection from "./components/VideoSection";
import BookSection from "./components/BookSection";
import ContactSection from "./components/Contact";

function App() {
  return (
    <div className='relative'>
      <Navbar />

      <Hero />

      <Promo />

      <BookSection />

      <About />

      <Team />

      <ContactSection />

      <VideoSection />

      <Footer />
    </div>
  );
}

export default App;
