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

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "NovaWare Shop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, architecto? Repellendus consequatur at nobis. Itaque, impedit.",
    stack: [
      { name: "Html/Css" },
      { name: "Javascript" },
      { name: "ReactJS" },
      { name: "NodeJs/ExpressJs" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Ogani",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, architecto? Repellendus consequatur at nobis. Itaque, impedit.",
    stack: [
      { name: "Html/Css" },
      { name: "ReactJs" },
      { name: "Laravel" },
      { name: "MySql" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "ZeelGram",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, architecto? Repellendus consequatur at nobis. Itaque, impedit.",
    stack: [
      { name: "Html/Css" },
      { name: "ReactJs" },
      { name: "React Native" },
      { name: "Java Spring" },
      { name: "Sql Server" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div>
              {/* number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* category */}
              <h2 className="text-[42px] font-bold leading-none">{project.category} project</h2>
            </div>
          </div>
          <div className="w-full xl:-[50%]">slider</div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
