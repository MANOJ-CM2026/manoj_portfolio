"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [contactData, setContactData] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactData(data?.contactLinks);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  const reset = () => {
    formData.name = "";
    formData.number = "";
    formData.email = "";
    formData.message = "";
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    fetch("https://formsubmit.co/ajax/manojanbu70@gmail.com", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        number: formData.number,
        email: formData.email,
        message: formData.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setSubmitted(data.success);
        reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="no-print">
      <div className="container">
        <div className="pt-16 md:pt-32 pb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16"
          >
            <h2>Contact Me</h2>
            <p className="text-xl text-orange-500">( 06 )</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.form 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-7 sm:gap-12">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="label">
                      Name *
                    </label>
                    <input
                      required
                      className="input transition-colors focus:border-primary focus:outline-none"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="number" className="label">
                      Phone *
                    </label>
                    <input
                      required
                      className="input transition-colors focus:border-primary focus:outline-none"
                      id="number"
                      type="number"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="label">
                    Email *
                  </label>
                  <input
                    required
                    className="input transition-colors focus:border-primary focus:outline-none"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="label">
                    Message *
                  </label>
                  <textarea
                    required
                    className="input transition-colors focus:border-primary focus:outline-none"
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={2}
                  />
                </div>
                {submitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Image
                      src={getImgPath("/images/icon/success-icon.svg")}
                      alt="success-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-secondary">
                      Great!!! Email has been Successfully Sent. We will get in
                      touch asap.
                    </p>
                  </motion.div>
                )}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group"
                >
                  <span className="relative z-10 text-xl font-medium text-primary group-hover:text-white transition-colors duration-300">
                    Send Now
                  </span>
                  <div className="absolute inset-0 bg-primary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0"></div>
                </motion.button>
              </div>
            </motion.form>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col sm:flex-row md:flex-col justify-between gap-5 md:gap-20 items-center md:items-end"
            >
              <div className="flex flex-wrap flex-row md:flex-col items-start md:items-end gap-4 md:gap-6">
                {contactData?.socialLinks?.map((value: any, index: any) => {
                  return (
                    <motion.div key={index} whileHover={{ x: -10 }} transition={{ duration: 0.2 }}>
                      <Link
                        className="text-base sm:text-lg font-normal text-secondary hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={value?.href || "#!"}
                      >
                        {value?.title}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              <div className="flex flex-wrap justify-center gap-5 lg:gap-11 items-end">
                {contactData?.contactInfo?.map((value: any, index: any) => {
                  return (
                    <div key={index}>
                      <Link
                        href={value?.link || "#!"}
                        className="text-base lg:text-lg text-black font-normal border-b border-black pb-3 hover:text-primary hover:border-primary transition-colors"
                      >
                        {value?.label}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
