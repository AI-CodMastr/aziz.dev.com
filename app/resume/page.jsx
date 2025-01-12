"use client";

import { 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaNodeJs
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SiReactnative, SiNativewind, SiFirebase, SiGit, SiGithub, SiClerk, SiExpo } from "react-icons/si";
import { BiLogoReact } from "react-icons/bi";

import { easeIn, motion } from "framer-motion";


// about data
const about = {
  title: "About me",
  description:
    "I am a passionate Software Developer specializing in creating modern web and mobile applications. With expertise in React, React Native, and Next.js, I focus on delivering high-quality, user-centric solutions. My journey in tech is driven by continuous learning and staying updated with the latest technologies to build innovative digital experiences.",
  info: [
    {
      fieldName: "Name ",
      fieldValue: "Farhan Aziz",
    },
    {
      fieldName: "Phone ",
      fieldValue: "(+92) 370 576 3177",
    },
    {
      fieldName: "State ",
      fieldValue: "Pakistan",
    },
    {
      fieldName: "Email ",
      fieldValue: "mraziz459@gmail.com",
    },
    {
      fieldName: "City ",
      fieldValue: "Karachi",
    },
    {
      fieldName: "Languages ",
      fieldValue: "English, Urdu, Sindhi"
    }
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "My educational journey reflects a blend of formal academics and professional certifications, focusing on software development and modern technologies. Each program has contributed to my comprehensive understanding of web and mobile development.",
  items: [
    {
      Institution: "Degree Collage UK",
      degree: "Intermediate",
      duration: "2022 - 2023",
    },
    {
      Institution: "DeepLearning.AI",
      degree: "Certified Prompt Engineer",
      duration: "2022 - 2023",
    },
    {
      Institution: "PIAIC",
      degree: "Frontend Development",
      duration: "2023",
    },
    {
      Institution: "Saylani Mass IT Training",
      degree: "Web & Mobile App Development",
      duration: "2024 - present",
    },
  ],
};


const skills = {
  title: "My skills",
  description:
    "I have developed a strong foundation in modern web and mobile development technologies. My expertise includes frontend frameworks like React.js and Next.js, mobile development with React Native, and UI styling with Tailwind CSS. I'm proficient in building responsive, user-friendly applications with clean code and optimal performance.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html5",
    },
    {
      icon: <FaCss3 />,
      name: "Css3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <BiLogoReact />,
      name: "React Native",
    },
    {
      icon: <SiTailwindcss />,
      name: "NativeWind",
    },
    {
      icon: <SiGit />,
      name: "Git",
    },
    {
      icon: <SiGithub />,
      name: "GitHub",
    },
    {
      icon: <SiClerk />,
      name: "Clerk",
    },
    {
      icon: <SiExpo />,
      name: "Expo",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },

    
  ],
};


const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: easeIn },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto mt-32">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content  */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                {/* <ScrollArea className="h-[400px]"> */}
                <ul className="grid grid-cols-1 lg:grid-cols-2 flex-wrap gap-[30px]">
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.Institution}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                {/* </ScrollArea> */}
              </div>
            </TabsContent>
            {/* skills  */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                 <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return  <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                            {skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                           <p className="capitalize">{skill.name}</p> 
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider> 
                      </li> 
                  })}
                </ul> 
              </div>
            </TabsContent>
            <TabsContent value="about"
            className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="fle
                       items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
              
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
