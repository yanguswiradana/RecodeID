"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Book {
  title: string;
  description: string;
  link: string; // Google Drive file ID
  image: string;
}

const books: Book[] = [
  {
    title: "Coming Soon",
    description: "",
    image: "/2.png",
    link: "#",
  },
  {
    title: "Modul 1: Langkah Awal Belajar Logika Dengan Python",
    description:
      "Modul ini membahas dasar-dasar logika pemrograman untuk pemula, dan tentu ada tantangannya 😁",
    image: "/module-1cover.png",
    link: "1jFfJxN7p60aeLzNzeVVM0Se1ziQ_FV1r",
  },
  {
    title: "Coming Soon",
    description: "",
    image: "/2.png",
    link: "#",
  },
];

const BookSection = () => {
  const [openDriveId, setOpenDriveId] = useState<string | null>(null);

  const getGoogleViewerLink = (id: string) => {
    const fileUrl = `https://drive.google.com/uc?export=download&id=${id}`;
    return `https://docs.google.com/gview?url=${encodeURIComponent(
      fileUrl
    )}&embedded=true`;
  };

  const getDirectDriveLink = (id: string) => {
    return `https://drive.google.com/file/d/${id}/view`;
  };

  return (
    <section className='bg-white py-16 px-4 sm:px-8 lg:px-16' id='modul'>
      <div className='max-w-6xl mx-auto'>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800'
        >
          Modul <span className='text-[#18cb96]'>Pembelajaran</span>
        </motion.h2>

        <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {books.map((book, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className='bg-gray-50 rounded-xl shadow hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col'
            >
              <img
                src={book.image}
                alt={book.title}
                className='w-full h-48 object-cover'
              />
              <div className='p-6 flex flex-col flex-1'>
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                  {book.title}
                </h3>
                <p className='text-gray-600 mb-4 flex-1'>{book.description}</p>
                <button
                  onClick={() =>
                    book.link !== "#" ? setOpenDriveId(book.link) : null
                  }
                  disabled={book.link === "#"}
                  className={`inline-block text-center px-4 py-2 text-sm font-medium text-white ${
                    book.link === "#"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#18cb96] hover:bg-[#15b688]"
                  } rounded transition mt-auto`}
                >
                  Lihat Modul
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {openDriveId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4'
          >
            <div className='relative bg-white rounded-lg w-full max-w-6xl h-[80vh] overflow-hidden shadow-lg flex flex-col'>
              {/* Header */}
              <div className='flex justify-between items-center px-4 py-2 bg-gray-100 border-b border-gray-200'>
                <a
                  href={getDirectDriveLink(openDriveId)}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm text-blue-600 hover:underline font-medium'
                >
                  Buka di Google Drive ↗
                </a>
                <button
                  onClick={() => setOpenDriveId(null)}
                  className='text-gray-500 hover:text-red-500 text-xl font-bold'
                >
                  ×
                </button>
              </div>

              {/* PDF Preview */}
              <iframe
                src={getGoogleViewerLink(openDriveId)}
                className='w-full flex-1'
                title='Preview PDF'
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BookSection;
