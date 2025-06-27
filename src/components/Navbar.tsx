import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = ["home", "promo", "about", "team"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "promo", label: "Kisah" },
    { id: "modul", label: "Modul" },
    { id: "about", label: "Tentang Kami" },
    { id: "team", label: "Tim" },
    { id: "videos", label: "Video" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <a
              href='#home'
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              className='flex items-center'
            >
              {/* Replace with your logo image */}
              <img
                src='/logo.png' // Update this path to your logo image
                alt='Company Logo'
                className='h-8 w-auto' // Adjust height as needed
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-[#18cb96]"
                    : "text-gray-700 hover:text-[#18cb96]"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId='activeNavItem'
                    className='absolute left-0 bottom-0 h-0.5 w-full bg-[#18cb96]'
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#18cb96] focus:outline-none'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              {mobileMenuOpen ? (
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.2 }}
        className={`md:hidden overflow-hidden ${
          isScrolled ? "bg-white" : "bg-white/95 backdrop-blur-md"
        }`}
      >
        <div className='px-4 pt-2 pb-6 space-y-1'>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                activeSection === item.id
                  ? "bg-[#18cb96]/10 text-[#18cb96]"
                  : "text-gray-700 hover:bg-gray-50 hover:text-[#18cb96]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </motion.div>
    </header>
  );
};
