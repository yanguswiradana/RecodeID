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
      title: "Belajar Sat Set GPL",
      description: "belajar gak ribet, cuma perlu niat ajah",
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
      title: "Untuk Semua Kalangan",
      description: "aman bos kalo niat anak SD pun bisa",
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
      title: "terjangkau?",
      description: "jangankan terjangkau, gratis brok",
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
            Apa itu <span className='text-[#18cb96]'>Recodeid</span> ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-lg text-gray-600'
          >
            <span className='text-[#18cb96] font-medium'>Recodeid</span> adalah
            platform belajar logika pemrograman berbasis paython yang dirancang
            untuk bisa di pahami oleh semua kalangan, mulai dari anak-anak
            hingga orang dewasa. Dengan pendekatan yang sederhana dan
            interaktif, kami bertujuan untuk membuat pembelajaran pemrograman
            menjadi menyenangkan dan mudah diakses oleh siapa saja. Dan tentunya
            berdampak pada masyarakat, terutama pada pertumbuhan SDM Indonesia
            yang lebih baik di masa depan.
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
              Mau diskusi?
            </h3>
            <p className='text-white/90 mb-6'>
              Kami menyediakan platform untuk berdiskusi dan berbagi ilmu
            </p>

            {/* INI BAGIAN YANG DIUBAH */}
            <a
              href='https://t.me/+6SQt9uV7IFxlNDI1' // <-- Ganti dengan URL channel Telegram Anda
              target='_blank' // <-- Agar link terbuka di tab baru
              rel='noopener noreferrer' // <-- Praktik keamanan untuk link eksternal
              className='px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-all'
            >
              Gaskan
            </a>
            {/* AKHIR BAGIAN YANG DIUBAH */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
