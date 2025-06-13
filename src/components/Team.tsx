import { motion } from "framer-motion";

export const Team = () => {
  const teamMembers = [
    {
      name: "Gandhi",
      role: "2401010113",
      image: "gandhi.png",
      social: {
        twitter: "",
        linkedin: "",
      },
    },
    {
      name: "Wiradana",
      role: "2401010112",
      image: "/gw.png",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Jhonatan",
      role: "2401010143",
      image: "/jhon.png",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Budi",
      role: "2401010145",
      image: "/budi.png",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <section id='team' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'
          >
            Tim <span className='text-[#18cb96]'>Kami</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-lg text-gray-600'
          >
            Berisi mahasiswa mahasiswa yang berkomitmen untuk{" "}
            <span className='font-medium'>LULUS</span> dan berdampak bagi sesama
            <br />
            <span className='text-[#18cb96] font-medium'>
              Salam Menjadi Dan Memberi!!!
            </span>
          </motion.p>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all'
            >
              <div className='h-60 overflow-hidden'>
                <img
                  src={member.image}
                  alt={member.name}
                  className='w-full h-full object-cover'
                  loading='lazy'
                />
              </div>
              <div className='p-6 text-center'>
                <h3 className='text-xl font-semibold text-gray-900 mb-1'>
                  {member.name}
                </h3>
                <p className='text-[#18cb96] mb-4'>{member.role}</p>
                <div className='flex justify-center space-x-4'>
                  <a
                    href={member.social.twitter}
                    className='text-gray-400 hover:text-[#18cb96] transition-colors'
                  >
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                    </svg>
                  </a>
                  <a
                    href={member.social.linkedin}
                    className='text-gray-400 hover:text-[#18cb96] transition-colors'
                  >
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='mt-16 text-center'
        >
          <h3 className='text-xl font-semibold text-gray-900 mb-4'>
            Mau gabung?
          </h3>
          <button
            onClick={() => {
              // You can link to a careers page or contact form
              window.location.href = "mailto:careers@yourcompany.com";
            }}
            className='px-6 py-3 bg-[#18cb96] text-white font-medium rounded-lg hover:bg-[#14b386] transition-all'
          >
            Bowleh pakek banget brokk
          </button>
        </motion.div>
      </div>
    </section>
  );
};
