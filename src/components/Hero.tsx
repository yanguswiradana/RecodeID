import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Auto-play prevented, trying with muted:", error);
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play();
        }
      });
    }
  }, []);

  return (
    <section id='home' className='relative h-screen w-full overflow-hidden'>
      {/* Video Background */}
      <div className='absolute inset-0 z-0'>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className='w-full h-full object-cover'
          poster='https://via.placeholder.com/1920x1080'
        >
          <source
            src='https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4'
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>

        {/* Video overlay */}
        <div className='absolute inset-0 bg-black/30'></div>
      </div>

      {/* Hero Content */}
      <div className='relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='max-w-4xl mx-auto'
        >
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight'>
            <span className='block'>Recode your mind</span>
            <span className='block bg-gradient-to-r from-[#18cb96] to-[#0ea5e9] bg-clip-text text-transparent'>
              For the better future
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto'
          >
            Mari bersama mengubah cara kita berpikir dan berinteraksi dengan
            dunia. Wujudkan masa depan yang lebih terhubung dan penuh harapan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className='flex flex-col sm:flex-row justify-center gap-4'
          >
            <button
              onClick={() => {
                const promoSection = document.getElementById("promo");
                if (promoSection) {
                  promoSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className='px-8 py-3 bg-gradient-to-r from-[#18cb96] to-[#0ea5e9] text-white font-medium rounded-lg hover:from-[#14b386] hover:to-[#0d92c7] transition-all shadow-lg'
            >
              Sikatt!!
            </button>
            <button
              onClick={() => {
                const aboutSection = document.getElementById("about");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className='px-8 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20'
            >
              Info
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
        >
          <button
            onClick={() => {
              const nextSection = document.getElementById("promo");
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className='flex flex-col items-center text-white hover:text-[#18cb96] transition-colors'
            aria-label='Scroll down'
          >
            <span className='mb-2 text-sm'>Sekroll cuy</span>
            <svg
              className='w-6 h-6 animate-bounce'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 14l-7 7m0 0l-7-7m7 7V3'
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
