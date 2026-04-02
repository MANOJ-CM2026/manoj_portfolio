"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EducationSkills = () => {
  const [educationData, setEductionData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setEductionData(data?.educationData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="border-t border-softGray overflow-hidden">
        <div className="container relative z-10">
          <Image
            src={getImgPath(
              "/images/home/education-skill/edu-skill-vector.svg"
            )}
            alt="vector"
            width={260}
            height={170}
            className="no-print absolute top-0 left-0 transform -translate-y-1/2"
          />
          <div className="relative z-10 py-16 md:py-32">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16"
            >
              <h2>Education & Skills</h2>
              <p className="text-xl text-orange-500">( 03 )</p>
            </motion.div>
            <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-20">
              <div className="w-full lg:max-w-md flex flex-col gap-0 xl:gap-8">
                {educationData?.education?.map((value: any, index: any) => {
                  return (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="flex items-start gap-6"
                    >
                      <div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black">
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                      </div>
                      <div className="flex-1 flex flex-col gap-2">
                        <h5>{value?.title}</h5>
                        <p className="font-normal">{value?.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <motion.div 
                className="grid grid-cols-2 xs:grid-cols-3 gap-5 xl:gap-7 w-full"
              >
                {educationData?.skills?.map((value: any, index: any) => {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="p-4 xl:p-6 border border-softGray rounded-lg flex flex-col gap-5 sm:gap-10 items-center justify-between bg-white shadow-sm hover:shadow-md hover:border-primary transition-all duration-300"
                    >
                      <div className="flex flex-col items-center gap-5">
                        <div className="flex items-center justify-center gap-3 h-[70px] w-full">
                          {Array.isArray(value?.icons) && value.icons.length > 0 ? (
                            value.icons.map((iconPath: string, idx: number) => (
                              <Image
                                key={idx}
                                src={getImgPath(iconPath)}
                                alt="icon"
                                width={value.icons.length > 1 ? 45 : 70}
                                height={value.icons.length > 1 ? 45 : 70}
                                className="object-contain"
                              />
                            ))
                          ) : value?.icon ? (
                            <Image
                              src={getImgPath(value.icon)}
                              alt="icon"
                              width={70}
                              height={70}
                              className="object-contain"
                            />
                          ) : null}
                        </div>
                        <p className="text-black font-normal text-center">{value?.name}</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            width="9"
                            height="9"
                            viewBox="0 0 9 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="9"
                              height="9"
                              rx="4.5"
                              fill={i < value?.rating ? "#FE4300" : "#C0D8E0"}
                            />
                          </svg>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
