import { motion } from "framer-motion";

export const Promo = () => {
  return (
    <section id='promo' className='py-20 bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center mb-12'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'
          >
            Our <span className='text-[#18cb96]'>Kisah</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-lg text-gray-600'
          >
            Berawal dari mahasaiswa-mahasiswa semester 2 yang bunging dengan
            arah hidup kemana tapi masih mau berdampak untuk sesama, dengan
            platform pembajaran ini setidaknya kami bisa sedikit berguna dan
            membantu perkebangan SDM Indonesia kedepannya.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-xl'
        >
          <div className='relative pt-[56.25%]'>
            {" "}
            {/* 16:9 Aspect Ratio */}
            <iframe
              className='absolute top-0 left-0 w-full h-full'
              src='https://www.youtube.com/embed/g9FArxZG7oE?si=fZazX4axtHAf-NeO'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='mt-12 text-center'
        >
          <h3 className='text-xl font-semibold text-gray-900 mb-4'>
            sudah siap mangasah logika kamu?
          </h3>
          <button
            onClick={() => {
              const aboutSection = document.getElementById("videos");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className='px-6 py-3 bg-gradient-to-r from-[#18cb96] to-[#0ea5e9] text-white font-medium rounded-lg hover:from-[#14b386] hover:to-[#0d92c7] transition-all shadow-lg'
          >
            Lets go guys!
          </button>
        </motion.div>
      </div>
    </section>
  );
};
