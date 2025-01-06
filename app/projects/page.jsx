"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";

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
    category: "Mobile App",
    title: "WavChat App",
    description:
      "A real-time chat application built with React Native and Firebase. Features include user authentication, instant messaging, image sharing, and push notifications. The app provides a smooth and responsive chat experience with a modern UI design.",
    stack: [{ name: "React Native" }, { name: "Expo" }, { name: "Firebase" }],
    image: "/assets/wavchat.png",
    liveLink: "https://wavchat-app.vercel.app",
    githubLink: "https://github.com/AI-CodMastr/WaveChat.git"
  },
  {
    num: "02",
    category: "Mobile App",
    title: "Shope X",
    description:
      "A feature-rich e-commerce mobile app developed using React Native and Firebase. Includes product catalog, shopping cart, user authentication, order management, and secure payment integration. The app uses JSON Server for efficient data management.",
    stack: [{ name: "React Native" }, { name: "Expo" }, { name: "Firebase" }, {name: "Json Server"}],
    image: "/assets/shopx.png",
    liveLink: "https://shopex-app.vercel.app",
    githubLink: "https://github.com/AI-CodMastr/shop-x.git"
  },
  {
    num: "03",
    category: "Web App",
    title: "OrebiShopping.com",
    description:
      "A modern e-commerce platform built with React.js and Node.js. Features a responsive design, product filtering, user accounts, shopping cart functionality, and secure checkout process. Tailwind CSS ensures a clean and professional user interface.",
    stack: [{ name: "React.js" }, { name: "TailwindCss" }, { name: "Node.js" }],
    image: "/assets/orebishopping.png",
    liveLink: "https://orebishopping-com.vercel.app/",
    githubLink: "https://github.com/AI-CodMastr/orebishopping.com.git"
  },
  {
    num: "04",
    category: "Web App",
    title: "Blood Bank",
    description:
      "A healthcare web application that connects blood donors with recipients. Built with React.js and Firebase, it features real-time blood availability updates, donor registration, emergency requests, and location-based donor matching.",
    stack: [{ name: "React.js" }, { name: "TailwindCss" }, { name: "Firebase" }],
    image: "/assets/bloodbank.png",
    liveLink: "https://smit-healthcare.vercel.app/",
    githubLink: "https://github.com/AI-CodMastr/blood-bank.git"
  },
  {
    num: "05",
    category: "Web App",
    title: "Blog Website",
    description:
      "A dynamic blogging platform with Firebase authentication and real-time database. Users can create, edit, and publish articles with rich text formatting. Features include comment system, user profiles, and content categorization.",
    stack: [{ name: "React.js" }, { name: "TailwindCss" }, { name: "Firebase" }],
    image: "/assets/bblogs.png",
    liveLink: "https://bblogs-tau.vercel.app/",
    githubLink: "https://github.com/AI-CodMastr/login-firebase.git"
  },
  {
    num: "06",
    category: "Web App",
    title: "Ochi.com",
    description:
      "A modern portfolio website built with Next.js and styled with Tailwind CSS. Features smooth animations, responsive design, and optimized performance. Showcases creative work with an elegant and minimalist user interface.",
    stack: [{ name: "Next.js" }, { name: "TailwindCss" }],
    image: "/assets/ochi.png",
    liveLink: "https://ochi-designing-blend.netlify.app/",
    githubLink: "https://github.com/AI-CodMastr/Ochi.design.git"
  },
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setCurrentProject(projects[currentIndex]);
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
                {currentProject.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {currentProject.category}
              </h2>
              <p className="text-white/60">{currentProject.description}</p>
              <ul className="flex gap-4">
                {currentProject.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== currentProject.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={currentProject.liveLink} target="_blank">
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
                <Link href={currentProject.githubLink} target="_blank">
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
              navigation={true}
              modules={[Navigation]}
              className="h-full w-full mb-12 relative group"
              onSlideChange={handleSlideChange}
            >
              <style jsx global>{`
                .swiper {
                  height: 100% !important;
                  padding: 0 !important;
                }
                
                .swiper-slide {
                  height: 100% !important;
                  width: 100% !important;
                }

                .swiper-button-next,
                .swiper-button-prev {
                  background-color: rgba(255, 255, 255, 0.1);
                  width: 50px !important;
                  height: 50px !important;
                  border-radius: 50%;
                  color: #f13024 !important;
                  opacity: 0;
                  transition: opacity 0.3s ease-in-out;
                }

                .swiper-button-next:after,
                .swiper-button-prev:after {
                  font-size: 20px !important;
                }

                .group:hover .swiper-button-next,
                .group:hover .swiper-button-prev {
                  opacity: 1;
                }
              `}</style>
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full h-full">
                    <div className="w-full h-[400px] relative group">
                      <div className="relative w-full h-full overflow-hidden rounded-lg">
                        <Image 
                          src={project.image}
                          fill
                          className="object-cover rounded-lg"
                          alt={project.title}
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center text-white p-6">
                          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                          <p className="text-sm text-center mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {project.stack.map((item, index) => (
                              <span key={index} className="text-sm bg-accent/20 px-2 py-1 rounded">
                                {item.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
