"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section>
      <div className="relative bg-softGray py-10 md:py-32">
        <div className="absolute top-0 w-full px-9">
          <Image
            src={getImgPath("/images/home/about-me/resume-bg-img.svg")}
            alt="resume-bg-img"
            width={1200}
            height={348}
            className="w-full"
          />
        </div>

        <div className="relative z-10">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-between gap-2 border-b border-black pb-7"
            >
              <h2>About Me</h2>
              <p className="text-xl text-primary">( 01 )</p>
            </motion.div>

            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-[303px] h-[440px] hidden lg:flex"
              >
                <Image
                  src={getImgPath("/images/home/about-me/about-banner-img.svg")}
                  alt="about-banner"
                  width={303}
                  height={440}
                  className="w-full h-full"
                />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:max-w-2xl flex-1"
              >
                <p>
                  I am an enthusiastic aspiring AI Developer currently pursuing a Bachelor of Technology in Artificial Intelligence and Data Science at Nandha Engineering College. I enjoy diving deep into machine learning algorithms, building practical Python projects, and experimenting with data-driven automation pipelines to solve real-world industry challenges.
                </p>

                <div className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-mistGray">
                  {[
                    { count: "B.Tech", label: "AI & Data Science" },
                    { count: "06+", label: "Hardware & AI Projects" },
                    { count: "08+", label: "Tech Certifications" },
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.2 }}
                    >
                      <h3 className="text-primary">{item.count}</h3>
                      <p className="text-base md:text-lg text-black">
                        {item.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex items-center gap-3.5">
                    <Image
                      src={getImgPath("/images/icon/lang-icon.svg")}
                      alt="lang-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-base xl:text-xl text-black">Language</p>
                  </div>
                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                    className="flex flex-wrap justify-center items-center gap-2.5"
                  >
                    {["Tamil", "English", "German (Beginner)"].map((lang) => (
                      <motion.p
                        key={lang}
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          visible: { opacity: 1, scale: 1 }
                        }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white py-2 md:py-3.5 px-4 md:px-5 w-fit rounded-full text-base xl:text-xl cursor-default shadow-sm border border-transparent hover:border-primary transition-colors"
                      >
                        {lang}
                      </motion.p>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
