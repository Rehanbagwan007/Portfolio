import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';

import.meta.env.VITE_EMAILJS_API;
console.log(import.meta.env.VITE_EMAILJS_API1);

export const Contact = () => {
  const [formData, setformData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let error = {};

    if (!formData.name) error.name = 'Name Is Required';
    if (!formData.email) {
      error.email = 'Email Is Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      error.email = 'Email Is Invalid';
    }

    if (!formData.message) error.message = 'Message is Required';
    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_API1,
          import.meta.env.VITE_EMAILJS_API2,
          formData,
          import.meta.env.VITE_EMAILJS_API3
        )
        .then((res) => {
          toast.success('Message sent successfully');
          setformData({
            name: '',
            email: '',
            message: '',
          });
        })
        .catch((err) => {
          console.log(err);
          toast.error('Failed', err);
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div className="p-4 lg:w-3/4" id="#contact">
      <Toaster />
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
        Let's Connect
      </h2>
      <motion.form
        initial={{ opacity: 20 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        onSubmit={handleSubmit}
      >
        <div className="mb-1 flex flex-row items-center space-x-4">
          <div className="lg:w-1/2">
            <input
              type="text"
              className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              name="name"
            />
            {errors.name && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-sm text-rose-800"
              >
                {errors?.name}
              </motion.p>
            )}
          </div>
          <div className="lg:w-1/2">
            <input
              type="email"
              className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
              onChange={handleChange}
              placeholder="Enter Your Email"
              value={formData.email}
              name="email"
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-sm text-rose-800"
              >
                {errors?.email}
              </motion.p>
            )}
          </div>
        </div>

        {/* ✅ FIXED: Now message box takes full width on all screens */}
        <div className="w-full">
          <textarea
            type="text"
            className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            placeholder="Enter Your Message"
            value={formData.message}
            name="message"
            rows="6"
            onChange={handleChange}
          />
          {errors.message && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-sm text-rose-800"
            >
              {errors?.message}
            </motion.p>
          )}
        </div>

        <button
          className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${
            isending ? 'cursor-not-allowed' : ''
          }`}
          disabled={isending}
        >
          <div className="flex items-center justify-center gap-2">
            {isending ? 'Sending' : 'Send'}
            <FiSend />
          </div>
        </button>
      </motion.form>
    </div>
  );
};
