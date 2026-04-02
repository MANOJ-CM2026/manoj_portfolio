"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LatestWork = () => {
  const [workData, setWorkData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/work-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setWorkData(data?.workData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32 ">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16"
            >
              <h2>Projects</h2>
              <p className="text-xl text-orange-500">( 04 )</p>
            </motion.div>
            {workData && workData.length > 0 && (
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15 }
                  }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12"
              >
                {workData.map((value: any, index: any) => {
                  return (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="group flex flex-col p-6 md:p-8 bg-white rounded-lg shadow-sm border border-transparent hover:border-primary hover:shadow-md transition-all cursor-pointer"
                    >
                      <div className="flex flex-col gap-1 xl:gap-2">
                        <div className="flex items-center justify-between">
                          <Link href={`${value.slug}`}>
                            <h5 className="group-hover:text-primary transition-colors text-lg md:text-xl font-medium">{value?.title}</h5>
                          </Link>
                          <Image
                            src={getImgPath("/images/icon/right-arrow-icon.svg")}
                            alt="right-arrow-icon"
                            width={24}
                            height={24}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </div>
                        <p className="text-gray-500 text-sm md:text-base">Category: {value?.client}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
