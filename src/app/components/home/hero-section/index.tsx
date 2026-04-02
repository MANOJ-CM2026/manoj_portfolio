"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { motion } from "framer-motion";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 md:gap-7 max-w-2xl"
          >
            <div>
              <div className="flex items-center gap-8">
                <h1>I'm Manoj</h1>
                <motion.div 
                  className="wave cursor-pointer"
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                >
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className=""
                  />
                </motion.div>
              </div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-primary"
              >
                AI Engineer
              </motion.h1>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl text-lg">
              Aspiring AI Developer passionate about machine learning, computer vision, and building intelligent systems. Currently completing my B.Tech in AI & Data Science, eager to leverage hands-on academic projects to solve complex real-world challenges.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex lg:hidden flex-col items-center mt-6"
          >
            <Image
              src={getImgPath("/images/home/banner/banner.jpg")}
              alt="banner-img"
              width={685}
              height={650}
            />
            <div className="flex gap-6 mt-6 z-10 w-full justify-center">
              <a href="https://github.com/MANOJ-CM2026" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:-translate-y-1 transition-all">
                <Image src={getImgPath("/images/icon/github-icon.svg")} alt="github" width={36} height={36} />
              </a>
              <a href="https://www.linkedin.com/in/manoj-a-/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:-translate-y-1 transition-all">
                <Image src={getImgPath("/images/icon/linkedin-icon.svg")} alt="linkedin" width={36} height={36} />
              </a>
              <a href="https://instagram.com/soul__reaperz" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:-translate-y-1 transition-all">
                <Image src={getImgPath("/images/icon/instagram-icon.svg")} alt="instagram" width={36} height={36} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute right-0 top-0 hidden h-full w-1/2 lg:flex lg:flex-col lg:items-end xl:items-center pt-2 pr-12 xl:pt-0 -mt-6 xl:-mt-12"
      >
        <Image
          src={getImgPath("/images/home/banner/banner.jpg")}
          alt="banner-img"
          width={685}
          height={650}
          className="z-1 relative top-0 right-0 object-contain max-h-[75vh] xl:max-h-[75vh]"
        />
        <div className="flex gap-6 mt-6 z-10 mr-12 xl:mr-0">
          <a href="https://github.com/MANOJ-CM2026" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:-translate-y-1 transition-all">
            <Image src={getImgPath("/images/icon/github-icon.svg")} alt="github" width={36} height={36} />
          </a>
          <a href="https://www.linkedin.com/in/manoj-a-/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:-translate-y-1 transition-all">
            <Image src={getImgPath("/images/icon/linkedin-icon.svg")} alt="linkedin" width={36} height={36} />
          </a>
          <a href="https://instagram.com/soul__reaperz" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:-translate-y-1 transition-all">
            <Image src={getImgPath("/images/icon/instagram-icon.svg")} alt="instagram" width={36} height={36} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default index;
