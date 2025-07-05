"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Video {
  title: string;
  url: string;
}

interface Chapter {
  id: number;
  name: string;
  videos: Video[];
}

interface Module {
  id: number;
  name: string;
  chapters: Chapter[];
}

const modules: Module[] = [
  {
    id: 1,
    name: "Modul 1: Langkah Awal Belajar Logika Dengan Python",
    chapters: [
      {
        id: 1,
        name: "Bab 1: Kenalan dengan pyhton yuk",
        videos: [
          {
            title: "Bab 1",
            url: "https://www.youtube.com/embed/rfgujF01D58?si=w15ooVfXw7_Z6hUJ",
          },
        ],
      },
      {
        id: 2,
        name: "Bab 2: Variabel dan angka",
        videos: [
          {
            title: "Bab 2",
            url: "https://www.youtube.com/embed/lsyuoCsS1iQ?si=Aun4A0GJQ1PdygDh",
          },
        ],
      },
      {
        id: 3,
        name: "Bab 3: if,elif dan else",
        videos: [
          {
            title: "Bab 3",
            url: "https://www.youtube.com/embed/DqzQA_c78sg?si=bCF97HlCDQo2pmUO",
          },
        ],
      },
      {
        id: 4,
        name: "Bab 4: Looping",
        videos: [
          {
            title: "Bab 4",
            url: "https://www.youtube.com/embed/8uZDt0cVYKs?si=vrMakJ_HeGxI3yum",
          },
        ],
      },
      {
        id: 5,
        name: "Bab 5: Fungsi",
        videos: [
          {
            title: "Bab 5",
            url: "https://www.youtube.com/embed/DuUvMgYQSCQ?si=TMnQ3mmtXslA-PtN",
          },
        ],
      },
      {
        id: 6,
        name: "Bab 6: Array",
        videos: [
          {
            title: "Bab 6",
            url: "https://www.youtube.com/embed/vl7YQ5VXNXM?si=n1Vy3TfGy2uQh69t",
          },
        ],
      },
      {
        id: 7,
        name: "Bab 7: Mini Proyek",
        videos: [
          {
            title: "Bab 7",
            url: "https://www.youtube.com/embed/tBaoARmGvlM?si=a6e6yUmiPVmOPKOj",
          },
        ],
      },
    ],
  },
];

const VideoSection = () => {
  const [openModule, setOpenModule] = useState<number | null>(null);
  const [openChapter, setOpenChapter] = useState<number | null>(null);

  const toggleModule = (id: number) => {
    setOpenModule(openModule === id ? null : id);
    setOpenChapter(null); // reset chapter saat ganti modul
  };

  const toggleChapter = (id: number) => {
    setOpenChapter(openChapter === id ? null : id);
  };

  return (
    <section className='bg-gray-50 py-16 px-4 sm:px-8 lg:px-16' id='videos'>
      <div className='max-w-6xl mx-auto'>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800'
        >
          Video <span className='text-[#18cb96]'>Pembelajaran</span>
        </motion.h2>

        <div className='space-y-6'>
          {modules.map((module) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: module.id * 0.1 }}
              className='bg-white shadow-md rounded-xl p-6'
            >
              <button
                onClick={() => toggleModule(module.id)}
                className='w-full text-left text-2xl font-semibold text-gray-800 flex justify-between items-center'
              >
                {module.name}
                <span className='text-[#18cb96]'>
                  {openModule === module.id ? "−" : "+"}
                </span>
              </button>

              {openModule === module.id && (
                <div className='mt-4 space-y-4'>
                  {module.chapters.map((chapter) => (
                    <div
                      key={chapter.id}
                      className={`bg-gray-50 rounded p-4 border ${
                        openChapter === chapter.id
                          ? "border-[#14b386]"
                          : "border-gray-200"
                      }`}
                    >
                      <button
                        onClick={() => toggleChapter(chapter.id)}
                        className='w-full text-left text-xl font-medium text-gray-700 flex justify-between items-center'
                      >
                        {chapter.name}
                        <span className='text-[#18cb96]'>
                          {openChapter === chapter.id ? "−" : "+"}
                        </span>
                      </button>

                      {openChapter === chapter.id && (
                        <div className='mt-3 space-y-4'>
                          {chapter.videos.map((video, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.1 * index }}
                              className='space-y-2'
                            >
                              <p className='font-medium text-gray-600'>
                                {video.title}
                              </p>
                              <div className='aspect-video rounded overflow-hidden'>
                                <iframe
                                  src={video.url}
                                  title={video.title}
                                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                  allowFullScreen
                                  className='w-full h-full'
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
