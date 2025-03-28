"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { handleClientScriptLoad } from "next/script";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "NovaWare Shop",
    description:
      "NovaWare is a stylish e-commerce fashion platform built with the MERN stack, offering a seamless shopping experience with secure authentication and smooth product management.",
    stack: [
      { name: "ReactJS" },
      { name: "Javascript" },
      { name: "NodeJs/ExpressJs" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/novaware.png",
    live: "https://novaware-rho.vercel.app/",
    github: "https://github.com/ntchung02/Novaware",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Ogani",
    description:
      "Ogani is a user-friendly e-commerce platform for selling food, built with ReactJS and Laravel. It offers smooth navigation, secure transactions, and efficient product management.",
    stack: [
      { name: "Html/Css" },
      { name: "ReactJs" },
      { name: "Laravel" },
      { name: "MySql" },
    ],
    image: "/assets/work/ogani.png",
    live: "",
    github: "https://github.com/ntchung02/Ogani-laravel",
  },
  {
    num: "03",
    category: "frontend",
    title: "ZeelGram",
    description:
      "ZeelGram is a dynamic social platform for web and mobile, built with ReactJS, React Native, and Java Spring. It enables seamless interactions, real-time updates, and secure data management.",
    stack: [
      { name: "ReactJs" },
      { name: "ReactNative" },
      { name: "JavaSpring" },
      { name: "SqlServer" },
    ],
    image: "/assets/work/zeelgram.png",
    live: "",
    github: "https://github.com/ntchung02/Zeelgram",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (Swiper) => {
    const currentIndex = Swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline hover:text-accent duration-500">
                {project.num}
              </div>
              {/* title */}
              <div className="text-3xl leading-none font-extrabold text">
                {project.title}
              </div>
              {/* category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* description */}
              <p className="text-white/60 ">{project.description}</p>
              {/* stacks */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-lg text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className=" flex items-center gap-4 ">
                {/* live btn */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent hover:rotate-45 duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* git btn */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent hover:animate-spin duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Link</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide className="w-full" key={index}>
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider btn */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
