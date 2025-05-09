import { motion } from "framer-motion";

export const About = () => {
  const features = [
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M13 10V3L4 14h7v7l9-11h-7z'
          />
        </svg>
      ),
      title: "Fast Performance",
      description: "Our solutions are optimized for speed and efficiency.",
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
          />
        </svg>
      ),
      title: "Secure Solutions",
      description: "Security is our top priority in every project.",
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
      title: "Overdeable",
      description: "Our solutions are designed to be easily scalable.",
    },
  ];

  return (
    <section id='about' className='py-20 bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'
          >
            About <span className='text-[#18cb96]'>Our Company</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-lg text-gray-600'
          >
            We're a passionate team dedicated to creating innovative digital
            solutions that help businesses thrive in the modern world.
          </motion.p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all'
            >
              <div className='w-14 h-14 bg-[#18cb96]/10 rounded-full flex items-center justify-center text-[#18cb96] mb-4'>
                {feature.icon}
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                {feature.title}
              </h3>
              <p className='text-gray-600'>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='mt-16 bg-gradient-to-r from-[#18cb96] to-[#0ea5e9] rounded-2xl p-8 md:p-12 text-white'
        >
          <div className='max-w-2xl mx-auto text-center'>
            <h3 className='text-2xl sm:text-3xl font-bold mb-4'>
              Ready to transform your business?
            </h3>
            <p className='text-white/90 mb-6'>
              Let's create something amazing together. Our team is ready to
              bring your vision to life.
            </p>
            <button
              onClick={() => {
                const teamSection = document.getElementById("team");
                if (teamSection) {
                  teamSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className='px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-all'
            >
              Meet Our Team
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
