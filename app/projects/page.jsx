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
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At reprehenderit culpa voluptatem, ad exercitationem tenetur porro ab dolorem dicta quibusdam.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/thumb8.png",
  },
  {
    num: "02",
    category: "E-commerce",
    title: "project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At reprehenderit culpa voluptatem, ad exercitationem tenetur porro ab dolorem dicta quibusdam.",
    stack: [{ name: "Next.js" }, { name: "TailwindCss" }, { name: "Node.js" }],
    image: "/assets/thumb3.png",
  },
  {
    num: "03",
    category: "full-stack",
    title: "project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At reprehenderit culpa voluptatem, ad exercitationem tenetur porro ab dolorem dicta quibusdam.",
    stack: [
      { name: "Next.js" },
      { name: "TailwindCss" },
      { name: "Typescript" },
    ],
    image: "/assets/thumb6.png",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
  //get current slide index
  const currentIndex = swiper.activeIndex;
  // update project state based on current slide index 
  setProject(projects[currentIndex])
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href="/">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href="https://github.com/Farhan-Zafar-Aziz">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
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
          onSlideChange={handleSlideChange}>
          {projects.map((project, index) => {
          return <SwiperSlide key={index} className="w-full">
            <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
            {/* overlay  */}
            <div></div>
            {/* image  */}
            <div className="relative w-full h-full rounded-lg">
              <Image 
              src={project.image}
              fill
              className="object-cover rounded-lg"
              alt="Image"/>
            </div>
            </div>
          </SwiperSlide>
          })}
          </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
