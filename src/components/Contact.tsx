// components/ContactSection.tsx
"use client";
import React, { useState, useEffect } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Reset form when component mounts (page loads)
  useEffect(() => {
    const resetForm = () => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    };

    resetForm();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id='Kontak' className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
            Kontak <span className='text-[#18cb96]'>kami</span>
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Mau collab? gas aja! Kami selalu terbuka untuk kolaborasi, baik itu
          </p>
        </div>

        <div className='flex flex-col lg:flex-row gap-10'>
          {/* Contact Information */}
          <div className='lg:w-1/3 bg-white p-8 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold text-gray-800 mb-6'>
              Info kontak
            </h3>

            <div className='space-y-5'>
              <div className='flex items-start gap-4'>
                <div className='p-2 bg-[#18cb96]/10 rounded-full'>
                  {/* Email Icon */}
                  <svg
                    className='w-6 h-6 text-[#18cb96]'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <div>
                  <h4 className='font-medium text-gray-700'>Email</h4>
                  <p className='text-gray-500'>recodeid.info@gmail.com</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='p-2 bg-[#18cb96]/10 rounded-full'>
                  {/* Phone Icon */}
                  <svg
                    className='w-6 h-6 text-[#18cb96]'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                    />
                  </svg>
                </div>
                <div>
                  <h4 className='font-medium text-gray-700'>Tlp</h4>
                  <p className='text-gray-500'>+62 821-4642-6515</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='p-2 bg-[#18cb96]/10 rounded-full'>
                  {/* Location Icon */}
                  <svg
                    className='w-6 h-6 text-[#18cb96]'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                </div>
                <div>
                  <h4 className='font-medium text-gray-700'>Lokasi</h4>
                  <p className='text-gray-500'>Gianyar, Bali</p>
                </div>
              </div>
            </div>

            <div className='mt-8'>
              <h4 className='font-medium text-gray-700 mb-4'>Follow gess</h4>
              <div className='flex gap-4'>
                {[
                  {
                    name: "github",
                    url: "https://github.com/yanguswiradana/RecodeID",
                  },
                  {
                    name: "instagram",
                    url: "https://www.instagram.com/recode.id/",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className='p-2 bg-gray-100 hover:bg-[#18cb96]/10 rounded-full transition-colors'
                    aria-label={social.name}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <svg
                      className='w-5 h-5 text-gray-600 hover:text-[#18cb96]'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      {social.name === "github" ? (
                        <path d='M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z' />
                      ) : (
                        <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' />
                      )}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form with Formspree */}
          <div className='lg:w-2/3 bg-white p-8 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold text-gray-800 mb-6'>
              Kirim pesan
            </h3>
            <form
              action='https://formspree.io/f/mblyrall'
              method='POST'
              className='space-y-6'
            >
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#18cb96]'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#18cb96]'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Subjek
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#18cb96]'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Pesan
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#18cb96]'
                ></textarea>
              </div>

              <button
                type='submit'
                className='px-6 py-3 bg-[#18cb96] text-white font-medium rounded-md hover:bg-[#b01919] transition-colors focus:outline-none focus:ring-2 focus:ring-[#18cb96] focus:ring-offset-2'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
