import React from "react";

import Taste from "@/public/Tasty Treat.png";
import Coin from "@/public/CoinChaser.png";
import Project from "@/public/Project Manager.png";
import Resume from "@/public/ResumeBuilder.png";
import Code from "@/public/CodeDeck.png";

import { Cloud, Laptop2 } from "lucide-react";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
   {
    title: "Code Deck",
    description: "Developed a Code Editor app using React and Code Mirror",
    tags: ["React","Code Mirror" , "Rapid API"],
    imageUrl: Code,
    link: "https://code-deck-eta.vercel.app/",
  },
 
  {
    title: "CoinChaser",
    description:
      "Developed a Crypocurrency price tracker app using CoinGecko API",
    tags: ["React.js", "React-Router", "Chart.js", "Material ui", "Firebase"],
    imageUrl: Coin,
    link: "https://coin-chaser-32y4.vercel.app/",
  },
 {
    title: "Tasty Treat",
    description:
      "Developed a high-performance and responsive pizza ordering app, Payment gateway as Razopay",
    tags: ["React", "React-Router", "Redux-Toolkit", "Javascript", "EmailJs"],
    imageUrl: Taste,
    link: "https://tasty-treat-five.vercel.app/",
  },
  {
    title: "ResumeForge",
    description: "Developed a Resume builder app using React and React-Router",
    tags: ["React", , "React-router"],
    imageUrl: Resume,
    link: "https://resume-builder-n6n8.vercel.app",
  },
  {
    title: "Projects Manager",
    description: "Developed a Project Manager app using React and React-Router",
    tags: ["React", , "React-router"],
    imageUrl: Project,
    link: "https://project-manager-dusky.vercel.app/",
  },
   
] as const;

export const skillsData = [
  "React",

  "Tailwind",
  "Java",
  "JavaScript",

  "Firebase",
  "Git",
  "Redux Toolkit",
  "HTML",
  "CSS",
] as const;
