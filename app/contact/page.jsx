"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select"

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+92) 370 576 3177",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mraziz459@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Karachi, Pakistan",
  },
];

import { easeIn, motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = {
      firstName: formData.get('firstname'),
      lastName: formData.get('lastname'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message')
    };

    try {
      // Send email using email service (you'll need to set this up)
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        e.target.reset();
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <motion.section 
      initial={{opacity: 0}}
      animate={{opacity: 1, 
        transition: {delay: 2.4, duration: 0.4, ease: easeIn}
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form  */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's connect</h3>
              <p className="text-white/60">
                I'm currently available for freelance work and exciting project collaborations. 
                With expertise in web and mobile development, I can help bring your ideas to life 
                using modern technologies like React, Next.js, and React Native. Whether you have 
                a specific project in mind or just want to explore possibilities, I'm always eager 
                to discuss new opportunities and create innovative solutions together.
              </p>
              {/* input fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="Firstname" required/>
                <Input type="text" name="lastname" placeholder="Lastname" required/>
                <Input type="email" name="email" placeholder="Email address" required/>
                <Input type="tel" name="phone" placeholder="Phone number"/>
              </div>
              <Textarea 
                name="message"
                className="h-[180px]"
                placeholder="Type your message here."
                required
              />
              <Button type="submit" size="md" className="max-w-40 py-4">
                Send message
              </Button>
            </form>
          </div>
          {/* info  */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
} 
  
export default Contact;
















