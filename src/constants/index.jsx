import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "REHAN BAGWAN",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate full-stack developer, specializing in building modern, scalable, and AI-powered web applications. I love crafting seamless user experiences and bringing innovative ideas to life.",
};

export const BIO = [
  "Rehan Bagwan is a skilled full-stack developer specializing in React, Next.js, Node.js, Express.js, MongoDB, Redux, and Tailwind CSS. Passionate about building scalable applications, he has worked on multiple projects, including AI-powered platforms and real-time web applications.",
  "Currently, Rehan is focused on developing cutting-edge web solutions and exploring AI integrations in full-stack applications. His expertise lies in crafting efficient backend systems and dynamic frontend interfaces.",
  "With a strong foundation in MERN stack development, Rehan continuously enhances his skills to stay ahead in the ever-evolving tech industry."
];

export const PROJECTS = [
  {
    id: 1,
    name: "X Clone (AI-powered)",
    description:
      "A real-time social media platform inspired by Twitter, featuring AI-powered post suggestions and real-time interactions.",
    image: projectImage1,
    githubLink: "https://github.com/Rehanbagwan007/X-Twitter-Clone",
  },
  {
    id: 2,
    name: "AI Code Reviewer",
    description:
      "An AI-driven tool that reviews code for best practices, security vulnerabilities, and performance optimization.",
    image: projectImage2,
    githubLink: "https://github.com/Rehanbagwan007/ExploreAi-Code-Reviwer",
  },
  {
    id: 3,
    name: "AI Chatbot ",
    description:
      "An advanced AI chatbot that interacts intelligently with users, providing insights and automating tasks.",
    image: projectImage3,
    githubLink: "https://github.com/Rehanbagwan007/Explore-Ai-Chatbot",
  },
  {
    id: 4,
    name: "Myntra Clone (HTML, CSS, JS)",
    description:
      "A responsive clone of Myntra built with HTML, CSS, and JavaScript, featuring product filtering and smooth UI interactions.",
    image: projectImage4,
    githubLink: "https://github.com/Rehanbagwan007/Myntra-Basic-Clone",
  },
  {
    id: 5,
    name: "Two Good Co Clone (Scroll Trigger)",
    description:
      "A visually engaging website clone inspired by Two Good Co, implementing smooth scroll animations using GSAP.",
    image: projectImage5,
    githubLink: "https://github.com/Rehanbagwan007/Two-Good-Co",
  },
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "Skilled in building dynamic and interactive user interfaces.",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "Expertise in server-side rendering and SEO-friendly applications.",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "Proficient in backend development and building scalable APIs.",
  },
  {
    icon: <SiExpress className="text-4xl text-gray-400 lg:text-5xl" />,
    name: "Express.js",
    experience: "Experienced in creating robust backend services with Express.",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "Knowledgeable in NoSQL database design and management.",
  },
  {
    icon: <SiRedux className="text-4xl text-purple-500 lg:text-5xl" />,
    name: "Redux",
    experience: "Capable of managing complex application states efficiently.",
  },
  {
    icon: <SiTailwindcss className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "Tailwind CSS",
    experience: "Adept at building modern and responsive UI designs quickly.",
  },
];

export const EXPERIENCES = [
  {
    position: "Full Stack Developer Intern",
    company: "Tech Startup",
    duration: "Jan 2025 - Present",
    description: "Working on developing scalable web applications and APIs using MERN stack.",
  },
  {
    position: "Freelance Developer",
    company: "Self-employed",
    duration: "2024 - Present",
    description: "Built various client projects including e-commerce websites and AI-powered applications.",
  }
];

export const EDUCATION = [
  {
    degree: "Diploma in Automobile Engineering",
    institution: "PVPIT Sangli",
    duration: "2022-23 - 2024-25",
    description: "Studied core automobile concepts and developed a strong foundation in engineering and technology.",
  }
];



export const SOCIAL_MEDIA_LINKS = [
 
  {
    href: "https://discord.com/users/855414160282877954",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
 
  {
    href: "https://x.com/UCanDoIt929229",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Rehanbagwan007",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/rehan-bagwan-00a719244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];


const extra = [
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
 },

 {
  href: "https://x.com/",
  icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
},
]