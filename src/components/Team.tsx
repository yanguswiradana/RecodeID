import { motion } from "framer-motion";

export const Team = () => {
  const teamMembers = [
    {
      name: "I Gede Gandhi Waisnawa",
      role: "Perancang video dan pemateri video",
      image: "gandhi.png",
      social: {
        instagram: "https://www.instagram.com/gandhiwaisnawa_/",
        github: "https://github.com/gandhibuahaha",
      },
    },
    {
      name: "I Wayan Agus Wiradana",
      role: "Developer dan laporan",
      image: "/gw.png",
      social: {
        instagram: "https://www.instagram.com/_wynaw_/",
        github: "https://github.com/yanguswiradana",
      },
    },
    {
      name: "Ir. I Nyoman Tri Anindia Putra, S.Kom., M.Cs.",
      role: "Dosen Pembimbing",
      image: "/paktrian.jpg",
      social: {
        instagram: "https://www.instagram.com/triansvr/",
        github: "#",
      },
    },
    {
      name: "I Kadek Budiarsa",
      role: "Perancangan materi dan manual book",
      image: "/budi.png",
      social: {
        instagram: "https://www.instagram.com/_dek_udi_/",
        github: "https://github.com/Budi05986",
      },
    },
    {
      name: "I Wayan Jhonatan Kevin Marandita",
      role: "Perancang video dan editor video",
      image: "/jhon.png",
      social: {
        instagram: "https://www.instagram.com/jhonatan.303/",
        github: "https://github.com/dhsau",
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

        <div className='grid sm:grid-cols-2 lg:grid-cols-5 gap-8'>
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
                    href={member.social.instagram}
                    className='text-gray-400 hover:text-[#18cb96] transition-colors'
                    aria-label='Instagram'
                    target='_blank'
                  >
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path d='M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.328 3.608 1.302.975.975 1.24 2.242 1.302 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.328 2.633-1.302 3.608-.975.975-2.242 1.24-3.608 1.302-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.328-3.608-1.302-.975-.975-1.24-2.242-1.302-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.328-2.633 1.302-3.608.975-.975 2.242-1.24 3.608-1.302C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.07 5.773.127 4.652.348 3.678 1.322 2.704 2.296 2.483 3.417 2.426 4.696.07 8.332 0 8.741 0 12s.013 3.668.07 4.948c.057 1.279.278 2.4 1.252 3.374.974.974 2.095 1.195 3.374 1.252 1.28.057 1.689.07 4.948.07s3.668-.013 4.948-.07c1.279-.057 2.4-.278 3.374-1.252.974-.974 1.195-2.095 1.252-3.374.057-1.28.07-1.689.07-4.948s-.013-3.668-.07-4.948c-.057-1.279-.278-2.4-1.252-3.374-.974-.974-2.095-1.195-3.374-1.252C15.668.013 15.259 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z' />
                    </svg>
                  </a>
                  <a
                    href={member.social.github}
                    className='text-gray-400 hover:text-[#18cb96] transition-colors'
                    aria-label='GitHub'
                    target='_blank'
                  >
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M12 2C6.477 2 2 6.478 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.341-3.369-1.341-.454-1.153-1.11-1.46-1.11-1.46-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.112-4.555-4.945 0-1.092.39-1.985 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.908-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.698 1.028 1.59 1.028 2.683 0 3.842-2.338 4.688-4.566 4.937.359.309.678.918.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.58.688.482A10.012 10.012 0 0022 12c0-5.523-4.477-10-10-10z'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
