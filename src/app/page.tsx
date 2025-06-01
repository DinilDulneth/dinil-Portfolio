"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import { useRef, useState } from "react";
import React from "react";
import "./globals.css";
import { Button } from "../components/ui/button";
import {
  Card,
  CardHeader as CardHeaderComponent,
  CardTitle,
  CardContent
} from "../components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Sun,
  Moon,
  Cloud,
  Wrench,
  HardDrive
} from "lucide-react";

import { Badge } from "../components/ui/badge/badge";
import Image from "next/image";
import profilePic from "../public/Image/profilePic.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import resumePDF from "../public/Image/profilePic.png";

export default function Home() {
  const [imageLoading, setImageLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  interface Project {
    title: string;
    type: string;
    status: string;
    description: string;
    technologies: string[];
    gradient: string;
    details: string[];
    implementation?: string[];
    challengesSolved?: string[];
    githubUrl?: string;
    demoUrl?: string;
    lastUpdated: string;
  }
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [showResume, setShowResume] = useState(false);

  // const { ref: scrollRef, inView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });

  // Reference for scroll tracking (Hero Section)
  const scrollRef = useRef(null);
  // Reference for About Section visibility
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const inView = useInView(aboutRef, { margin: "-100px" });
  // const inViewnew = useInView(skillsRef, { margin: "-100px" });
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  // Variants for skill cards (staggered animation)
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  // Scroll progress for Hero Section animations
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"]
  });

  // Transform scroll progress into animations
  const blur = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["blur(0px)", "blur(1px)"]
  );
  // const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  // const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);

  const projects = [
    {
      title: "Food Ordering System",
      type: "Web Application",
      status: "Completed",
      description:
        "A full-stack PHP-based food ordering platform designed for restaurant customers and admins with session management, admin control panel, user registration/login, food menu browsing, cart, order placing, and admin order management.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      gradient: "from-blue-500 to-purple-500",
      details: [
        "User chat system for real-time communication",
        "Clean and intuitive dashboard for admins and users",
        "Well-integrated order flow from browsing to delivery"
      ],
      implementation: [
        "Implemented secure user authentication and session management",
        "Developed real-time chat feature using AJAX and WebSockets",
        "Created responsive admin dashboard with data visualization",
        "Integrated secure payment gateway for online transactions"
      ],
      challengesSolved: [
        "Optimized database queries for faster menu loading times",
        "Implemented caching system to reduce server load",
        "Enhanced security with input validation and SQL injection prevention"
      ],
      githubUrl: "https://github.com/DinilDulneth/Food-Ordering-System",
      demoUrl: "",
      lastUpdated: "2023-12-01"
    },
    {
      title: "Chat Box",
      type: "Chat System",
      status: "Completed",
      description:
        "A custom-built chat system designed for integration into larger applications like the food ordering system.",
      technologies: ["PHP", "AJAX", "MySQL", "JavaScript"],
      gradient: "from-green-500 to-teal-500",
      details: [
        "Real-time message flow using AJAX",
        "Clean and responsive UI design",
        "Easily integrable with other platforms"
      ],
      implementation: [
        "Built real-time messaging system using AJAX long polling",
        "Implemented message history and chat room features",
        "Created responsive UI with modern CSS frameworks",
        "Added typing indicators and message status updates"
      ],
      challengesSolved: [
        "Optimized message delivery for minimal latency",
        "Implemented efficient message storage system",
        "Added support for emoji and file sharing"
      ],
      githubUrl: "https://github.com/DinilDulneth/Chat-Box",
      demoUrl: "",
      lastUpdated: "2023-11-15"
    },
    {
      title: "E-learn Video Platform",
      type: "Educational Platform",
      status: "Completed",
      description:
        "A platform for uploading, managing, and watching educational videos, with monetized content access for students and content management for teachers.",
      technologies: ["PHP", "MySQL", "JavaScript"],
      gradient: "from-red-500 to-pink-500",
      details: [
        "Supports monetized content access",
        "Distinct user roles for teachers and students",
        "Secure video upload and streaming"
      ],
      implementation: [
        "Built secure video streaming system",
        "Implemented role-based access control",
        "Created payment integration for premium content",
        "Developed content management system for teachers"
      ],
      challengesSolved: [
        "Implemented efficient video streaming with adaptive bitrate",
        "Created secure content protection system",
        "Optimized video storage and delivery"
      ],
      githubUrl: "https://github.com/DinilDulneth/E-learn-Video-Platform",
      demoUrl: "",
      lastUpdated: "2023-10-30"
    },
    {
      title: "Financial Tracker App",
      type: "Mobile Application",
      status: "Completed",
      description:
        "A personal mobile app to track income and expenses with a clean UI and useful features for daily finance tracking.",
      technologies: ["Kotlin", "SQLite"],
      gradient: "from-yellow-500 to-orange-500",
      details: [
        "Intuitive interface for financial management",
        "Local SQLite storage for data persistence",
        "Daily and monthly expense tracking"
      ],
      implementation: [
        "Built native Android app using Kotlin",
        "Implemented local database using SQLite",
        "Created data visualization for expense analysis",
        "Added budget planning and reminder features"
      ],
      challengesSolved: [
        "Optimized app performance for older devices",
        "Implemented secure data storage",
        "Added data backup and restore functionality"
      ],
      githubUrl: "https://github.com/DinilDulneth/Financial-Tracker",
      demoUrl: "",
      lastUpdated: "2023-09-15"
    },
    {
      title: "WorkForce Management System",
      type: "Web Application",
      status: "Completed",
      description:
        "A MERN-based web application to streamline employee-related operations, including task assignment, attendance tracking, and salary management.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      gradient: "from-indigo-500 to-blue-500",
      details: [
        "Admin dashboard with employee data and stats",
        "Role-based access for admins, managers, and employees",
        "Secure authentication and task management"
      ],
      implementation: [
        "Developed full-stack application using MERN stack",
        "Implemented JWT authentication",
        "Created real-time updates using Socket.io",
        "Built comprehensive admin dashboard"
      ],
      challengesSolved: [
        "Optimized database queries for large datasets",
        "Implemented efficient state management",
        "Added automated reporting system"
      ],
      githubUrl: "https://github.com/DinilDulneth/WorkForce-Management",
      demoUrl: "",
      lastUpdated: "2023-12-15"
    },
    {
      title: "Portfolio Website",
      type: "Personal Website",
      status: "Active",
      description:
        "A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS, featuring dark mode, animations, and project showcases.",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "TypeScript",
        "Framer Motion"
      ],
      gradient: "from-purple-500 to-pink-500",
      details: [
        "Responsive design with dark/light mode",
        "Smooth animations and transitions",
        "Project showcase with detailed modals",
        "Interactive UI elements"
      ],
      implementation: [
        "Built with Next.js 13 and React 18",
        "Implemented responsive design using Tailwind CSS",
        "Added animations using Framer Motion",
        "Created reusable components and custom hooks"
      ],
      challengesSolved: [
        "Optimized performance and loading times",
        "Implemented smooth theme switching",
        "Created responsive layouts for all devices"
      ],
      githubUrl: "https://github.com/DinilDulneth/Web-Site",
      demoUrl: "https://dinildulneth.github.io/Web-Site/",
      lastUpdated: "2024-01-15"
    }
  ];

  const skillCards = [
    {
      icon: Code,
      title: "Full-Stack",
      subtitle: "Development",
      iconColor: "text-blue-500",
      details: [
        "React - Next.js - TypeScript",
        "Razor - Blazor",
        "HTML/CSS/Tailwind CSS/Bootstrap"
      ]
    },
    {
      icon: Database,
      title: "System",
      subtitle: "Database",
      iconColor: "text-green-500",
      details: ["MySQL - SQL", "MongoDB", "T-SQL"]
    },
    {
      icon: Globe,
      title: "Web",
      subtitle: "Applications",
      iconColor: "text-purple-500",
      details: ["MERN & MEAN Stack", "Laravel", ".NET"]
    },
    {
      icon: Smartphone,
      title: "Mobile",
      subtitle: "Development",
      iconColor: "text-pink-500",
      details: ["Kotlin", "Flutter"]
    }
  ];

  // Variants for buttons
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 120
      }
    },
    hover: {
      scale: 1,
      // boxShadow: isDarkMode
      //   ? "0 0 15px rgba(255, 255, 255, 0.3)"
      //   : "0 0 15px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.2,
        yoyo: Infinity
      }
    }
  };
  // Add this modal component for the resume
  // Update the ResumeModal component
  const ResumeModal = () => (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black bg-opacity-50 transition-opacity ${
        showResume ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setShowResume(false)}
    >
      <div
        className="relative w-full max-w-4xl h-[90vh] bg-white rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setShowResume(false)}
          className="absolute -top-4 -right-4 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-lg z-10 hover:bg-gray-100 transition-colors"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* PDF Viewer */}
        <object
          data={resumePDF.src}
          type="application/pdf"
          className="w-full h-full rounded-lg"
        >
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-gray-600 mb-4">Unable to display PDF file.</p>
            <a
              href={resumePDF.src}
              download="DinilDulneth_Resume.pdf"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Download Resume
            </a>
          </div>
        </object>

        {/* Download button */}
        <a
          href={resumePDF.src}
          download="DinilDulneth_Resume.pdf"
          className="absolute bottom-4 right-4"
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            variant="outline"
            size="sm"
            className={`gap-2 ${
              isDarkMode
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-white text-gray-800 hover:bg-gray-100"
            }`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Resume
          </Button>
        </a>
      </div>
    </div>
  );

  // Add this function outside your component for the network animation
  const createNetworkBackground = (
    canvas: HTMLCanvasElement,
    isDarkMode: boolean
  ) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Node properties
    const nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    const nodeCount = 50;
    const nodeRadius = 2;
    const connectionDistance = 150;

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      });
    }

    // Animation function
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = isDarkMode
          ? "rgba(255, 255, 255, 0.5)"
          : "rgba(0, 0, 0, 0.3)";
        ctx.fill();
      });

      // Draw connections
      nodes.forEach((nodeA, i) => {
        nodes.slice(i + 1).forEach((nodeB) => {
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = isDarkMode
              ? `rgba(147, 51, 234, ${opacity * 0.2})` // Purple in dark mode
              : `rgba(79, 70, 229, ${opacity * 0.1})`; // Indigo in light mode
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  };
  return (
    <main className={`relative ${isDarkMode ? "dark" : "light"}`}>
      {/* Theme Toggle and Additional Controls */}
      <div className="fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="sm"
          className="bg-opacity-20 backdrop-blur-lg z-5000"
          onClick={() => setShowResume(true)}
        >
          Resume
        </Button>
        <ResumeModal />
        <Button
          variant="outline"
          size="sm"
          className="bg-opacity-20 backdrop-blur-lg"
          onClick={scrollToProjects}
        >
          Projects
        </Button>
      </div>

      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Button
          onClick={toggleTheme}
          variant="outline"
          size="icon"
          className="w-10 h-10 rounded-full bg-opacity-20 backdrop-blur-lg"
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5 text-black" />
          )}
        </Button>
      </div>

      {/* Hero Section with Stars */}
      <motion.section
        ref={scrollRef}
        className="min-h-screen fixed inset-0"
        style={{
          filter: blur // Apply blur transform
          // scale: scale, // Apply scale transform
          // opacity: opacity, // Apply opacity transform
        }}
      >
        <div className={`background`}>
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
          <div id="stars5"></div>
          <div id="stars6"></div>
          <div id="stars7"></div>
          <div className="container mx-auto px-4 py-8 min-h-screen">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              {/* Profile Picture */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-[350px] h-[350px] 
                          sm:w-[400px] sm:h-[400px] 
                          md:w-[500px] md:h-[500px] 
                          lg:w-[600px] lg:h-[600px] 
                          xl:w-[560px] xl:h-[560px]
                          2xl:w-[650px] 2xl:h-[650px]
                          3xl:w-[800px] 3xl:h-[800px]
                          relative mt-20 sm:mt-14"
              >
                {imageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                  </div>
                )}
                <Image
                  src={profilePic} // Replace with actual profilePic
                  alt="Dinil Dulneth"
                  fill
                  className={`object-cover rounded-2xl transition-all duration-700 z-100 ${
                    imageLoading ? "scale-110 blur-lg" : "scale-100 blur-0"
                  }`}
                  priority
                  onLoadingComplete={() => setImageLoading(false)}
                />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left mt-14"
              >
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
                  <span className="titleName">Dinil Dulneth</span>
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  LiyanaArachchi
                </h2>
                <p className="text-xl md:text-2xl mb-6 opacity-80 animate-fade-in-up delay-300 text-white">
                  Software Engineer | Full Stack Developer
                </p>
                <p className="text-lg mb-4 max-w-2xl mx-auto opacity-70 animate-fade-in-up delay-400 text-white">
                  I&apos;m a tech enthusiast passionate about building scalable
                  web apps using modern tools. I enjoy writing clean,
                  maintainable code and creating smooth user experiences.
                </p>
                <p className="text-lg mb-8 max-w-2xl mx-auto opacity-70 animate-fade-in-up delay-600 text-white">
                  Always eager to collaborate, innovate, and push the limits of
                  what’s possible — one project at a time.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Content Section */}
      <div className="relative">
        <div className="h-screen"></div>
        {/* About Section */}
        <motion.section
          ref={aboutRef}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className={`min-h-screen relative z-10 py-16 overflow-hidden ${
            isDarkMode
              ? "text-white bg-gradient-to-b from-[#1b2735] to-[#090a0f]"
              : "text-gray-800 bg-gradient-to-b from-[#D0E8FF] to-white"
          }`}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating Particles */}
            <div
              className="absolute inset-0"
              style={{
                background: isDarkMode
                  ? `
                    radial-gradient(circle at 20% 35%, rgba(76, 29, 149, 0.15) 0%, transparent 50%),
                    radial-gradient(circle at 75% 44%, rgba(30, 64, 175, 0.15) 0%, transparent 50%),
                    radial-gradient(circle at 45% 80%, rgba(88, 28, 135, 0.15) 0%, transparent 50%)
                  `
                  : `
                    radial-gradient(circle at 20% 35%, rgba(219, 234, 254, 0.4) 0%, transparent 50%),
                    radial-gradient(circle at 75% 44%, rgba(199, 210, 254, 0.4) 0%, transparent 50%),
                    radial-gradient(circle at 45% 80%, rgba(224, 231, 255, 0.4) 0%, transparent 50%)
                  `
              }}
            />

            {/* Animated Grid */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(${
                  isDarkMode
                    ? "rgba(255, 255, 255, 0.03)"
                    : "rgba(0, 0, 0, 0.03)"
                } 1px, transparent 1px),
                                linear-gradient(90deg, ${
                                  isDarkMode
                                    ? "rgba(255, 255, 255, 0.03)"
                                    : "rgba(0, 0, 0, 0.03)"
                                } 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
                animation: "moveGrid 15s linear infinite",
                opacity: 0.5
              }}
            />

            {/* Floating Elements */}
            <div className="absolute inset-0">
              {Array.from({ length: 20 }).map((_, index) => (
                <div
                  key={index}
                  className={`absolute rounded-full ${
                    isDarkMode ? "bg-white/5" : "bg-purple-500/5"
                  }`}
                  style={{
                    width: `${Math.random() * 100 + 50}px`,
                    height: `${Math.random() * 100 + 50}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${
                      Math.random() * 10 + 10
                    }s linear infinite`,
                    animationDelay: `-${Math.random() * 10}s`
                  }}
                />
              ))}
            </div>
          </div>
          {/* Add these styles to your global CSS or in a style tag */}
          <style jsx>{`
            @keyframes moveGrid {
              0% {
                transform: translate(0, 0);
              }
              100% {
                transform: translate(50px, 50px);
              }
            }

            @keyframes float {
              0%,
              100% {
                transform: translate(0, 0) rotate(0deg);
              }
              25% {
                transform: translate(10px, -10px) rotate(5deg);
              }
              50% {
                transform: translate(0, -20px) rotate(0deg);
              }
              75% {
                transform: translate(-10px, -10px) rotate(-5deg);
              }
            }
          `}</style>

          {/* Content Container with backdrop blur */}
          <div className="relative z-10">
            <div className="max-w-6xl mx-auto px-4">
              {/* Your existing content */}
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`text-4xl font-bold text-center mb-16 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                About Me
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-6"
                >
                  <p
                    className={`text-lg leading-relaxed ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    I&apos;m a passionate and driven Software Engineering
                    undergraduate from SLIIT, currently interning at Techwire
                    Pvt Ltd. With hands-on experience in web and mobile
                    development, I specialize in creating user-centric solutions
                    using modern technologies.
                  </p>
                  <p
                    className={`text-lg leading-relaxed ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    I&apos;m responsible for maintaining and enhancing systems
                    at Norochcholai Power Plant, blending real-world impact with
                    technical skills. I enjoy solving real problems with code,
                    and I&apos;m always eager to learn, collaborate, and take on
                    challenges that push me forward.
                  </p>
                  <div
                    className={`text-lg leading-relaxed ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    <MapPin className="w-5 h-5 inline mr-2" />
                    <span>Malabe, Sri Lanka</span>
                  </div>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {skillCards.map((item, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={cardVariants}
                    >
                      <Card
                        className={`
                                group relative overflow-hidden 
                                transition-all duration-300 
                                hover:scale-105 hover:shadow-xl
                                ${
                                  isDarkMode
                                    ? "bg-gray-800 border-gray-700 hover:bg-gray-750 text-white"
                                    : "bg-white border-gray-200 hover:bg-gray-50 text-gray-900"
                                }
                              `}
                      >
                        <CardContent className="pt-6 relative z-10">
                          <item.icon
                            className={`w-8 h-8 mx-auto mb-2 transition-colors duration-300 ${item.iconColor}`}
                          />
                          <h3 className="font-semibold text-center mb-1">
                            {item.title}
                          </h3>
                          <p
                            className={`text-sm text-center transition-colors duration-300 ${
                              isDarkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {item.subtitle}
                          </p>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`
                                    absolute inset-0 p-4 
                                    flex flex-col justify-center items-center 
                                    opacity-0 group-hover:opacity-100 
                                    transition-all duration-300 ease-in-out
                                    ${
                                      isDarkMode
                                        ? "bg-gray-900/95"
                                        : "bg-white/95 shadow-lg"
                                    }
                                  `}
                          >
                            <h4
                              className={`font-semibold mb-3 ${
                                isDarkMode ? "text-white" : "text-gray-900"
                              }`}
                            >
                              {`${item.title} Skills`}
                            </h4>
                            <ul
                              className={`text-sm space-y-2 ${
                                isDarkMode ? "text-gray-200" : "text-gray-700"
                              }`}
                            >
                              {item.details.map((skill, i) => (
                                <li
                                  key={i}
                                  className="text-center transition-colors duration-300"
                                >
                                  {skill}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-16"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              <a
                href="mailto:dinildulneth123@gmail.com"
                className="no-underline"
              >
                <motion.div variants={buttonVariants} whileHover="hover">
                  <Button
                    variant="gradient"
                    size="lg"
                    className={`gap-2 transition-all duration-300 ${
                      isDarkMode ? "" : "bg-purple-500 text-white"
                    }`}
                  >
                    <Mail className="w-4 h-4" />
                    Contact Me
                  </Button>
                </motion.div>
              </a>
              <a
                href="https://github.com/DinilDulneth"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
              >
                <motion.div variants={buttonVariants} whileHover="hover">
                  <Button
                    variant="gradient"
                    size="lg"
                    className={`gap-2 transition-all duration-300 ${
                      isDarkMode ? "" : "bg-purple-500 text-white"
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                </motion.div>
              </a>
              <a
                href="https://linkedin.com/in/dinil-dulneth-liyanaarachchi"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
              >
                <motion.div variants={buttonVariants} whileHover="hover">
                  <Button
                    variant="gradient"
                    size="lg"
                    className={`gap-2 transition-all duration-300 ${
                      isDarkMode ? "" : "bg-purple-500 text-white"
                    }`}
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </Button>
                </motion.div>
              </a>
            </motion.div>
          </div>
        </motion.section>
        {/* Skills Section */}
        <motion.section
          ref={skillsRef}
          className={`py-20 px-4 relative overflow-hidden ${
            isDarkMode ? "bg-gray-900" : "bg-white"
          }`}
          style={{
            background: isDarkMode
              ? "linear-gradient(135deg,rgb(30, 36, 44) 0%,rgb(6, 38, 87) 100%)"
              : "linear-gradient(135deg, #ccfbf1 0%, #bfdbfe 100%)",
            position: "relative",
            zIndex: 1
          }}
        >
          {/* Background Elements: Network Lines and Glowing Nodes */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
              pointerEvents: "none",
              background: `
        linear-gradient(45deg, transparent 49%, ${
          isDarkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.05)"
        } 50%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, ${
          isDarkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.05)"
        } 50%, transparent 51%)
      `,
              // backgroundSize: "25px 25px",
              opacity: 0.5,
              animation: "connectLines 10s ease-in-out infinite"
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
              pointerEvents: "none",
              background: `
        radial-gradient(circle at 12% 18%, ${
          isDarkMode ? "rgba(45, 212, 191, 0.4)" : "rgba(45, 212, 191, 0.25)"
        }, transparent 10%),
        radial-gradient(circle at 88% 28%, ${
          isDarkMode ? "rgba(99, 102, 241, 0.35)" : "rgba(59, 130, 246, 0.2)"
        }, transparent 10%),
        radial-gradient(circle at 55% 85%, ${
          isDarkMode ? "rgba(236, 72, 153, 0.3)" : "rgba(236, 72, 153, 0.2)"
        }, transparent 10%),
        radial-gradient(circle at 35% 55%, ${
          isDarkMode ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.15)"
        }, transparent 8%)
      `,
              filter: "blur(8px)",
              opacity: isDarkMode ? 0.45 : 0.3,
              animation: "glowNodes 7s ease-in-out infinite"
            }}
          />
          <style jsx>{`
            @keyframes connectLines {
              0%,
              100% {
                opacity: 0.5;
                transform: translate(0, 0);
              }
              50% {
                opacity: 0.7;
                transform: translate(4px, 4px);
              }
            }
            @keyframes glowNodes {
              0%,
              100% {
                opacity: ${isDarkMode ? 0.45 : 0.3};
                transform: scale(1);
              }
              50% {
                opacity: ${isDarkMode ? 0.6 : 0.4};
                transform: scale(1.08);
              }
            }
          `}</style>
          <div className="max-w-6xl mx-auto">
            <motion.h2
              animate={inView ? { opacity: 1, y: 1, rotate: 0 } : {}}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 150,
                damping: 16
              }}
              className={`text-4xl font-bold text-center mb-16 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
              style={{
                textShadow: isDarkMode
                  ? "0 0 15px rgba(45, 212, 191, 0.5)"
                  : "none"
              }}
            >
              Technical Skills
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Frontend",
                  icon: <Code className="w-6 h-6" />,
                  skills: [
                    { name: "React / Next.js", level: "Advanced" },
                    { name: "TypeScript", level: "Advanced" },
                    { name: "Tailwind CSS", level: "Advanced" },
                    { name: "HTML5 / CSS3", level: "Advanced" },
                    { name: "JavaScript", level: "Advanced" },
                    { name: "Bootstrap", level: "Intermediate" }
                  ],
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  category: "Backend",
                  icon: <Database className="w-6 h-6" />,
                  skills: [
                    { name: "Node.js", level: "Advanced" },
                    { name: "Express.js", level: "Advanced" },
                    { name: "ASP.NET Core", level: "Intermediate" },
                    { name: "Laravel", level: "Intermediate" },
                    { name: "Python", level: "Intermediate" }
                  ],
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  category: "Database",
                  icon: <HardDrive className="w-6 h-6" />,
                  skills: [
                    { name: "MongoDB", level: "Advanced" },
                    { name: "MySQL", level: "Advanced" },
                    { name: "PostgreSQL", level: "Intermediate" },
                    { name: "Redis", level: "Intermediate" }
                  ],
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  category: "DevOps",
                  icon: <Cloud className="w-6 h-6" />,
                  skills: [
                    { name: "Docker", level: "Advanced" },
                    { name: "Git", level: "Advanced" },
                    { name: "CI/CD", level: "Intermediate" },
                    { name: "AWS", level: "Intermediate" }
                  ],
                  gradient: "from-orange-500 to-yellow-500"
                },
                {
                  category: "Mobile",
                  icon: <Smartphone className="w-6 h-6" />,
                  skills: [
                    { name: "React Native", level: "Advanced" },
                    { name: "Flutter", level: "Intermediate" },
                    { name: "Kotlin", level: "Intermediate" }
                  ],
                  gradient: "from-red-500 to-rose-500"
                },
                {
                  category: "Tools & Others",
                  icon: <Wrench className="w-6 h-6" />,
                  skills: [
                    { name: "VS Code", level: "Advanced" },
                    { name: "Figma", level: "Intermediate" },
                    { name: "Postman", level: "Advanced" },
                    { name: "Jira", level: "Intermediate" }
                  ],
                  gradient: "from-indigo-500 to-violet-500"
                }
              ].map((category) => (
                <Card
                  key={category.category}
                  className={`group relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                    isDarkMode
                      ? "bg-gray-900 border-gray-700"
                      : "bg-gray-50 border-gray-200"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-r ${category.gradient} text-white`}
                      >
                        {category.icon}
                      </div>
                      <h3
                        className={`text-xl font-semibold ${
                          isDarkMode ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {category.category}
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className={`p-2 rounded-lg border ${
                            isDarkMode
                              ? "border-gray-700 hover:border-gray-600"
                              : "border-gray-200 hover:border-gray-300"
                          } transition-all duration-300 hover:shadow-md`}
                        >
                          <p
                            className={`text-sm font-medium ${
                              isDarkMode ? "text-white" : "text-gray-800"
                            }`}
                          >
                            {skill.name}
                          </p>
                          <span
                            className={`text-xs ${
                              isDarkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Gradient overlay on hover */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-r ${category.gradient}`}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Featured Projects */}
        <section
          ref={projectsRef}
          className="py-20 px-4 relative overflow-hidden"
          style={{
            background: isDarkMode
              ? "linear-gradient(to left, rgb(10, 22, 49), rgb(32, 43, 66))"
              : "linear-gradient(to left, rgb(199, 206, 224), rgb(163, 192, 255))"
          }}
        >
          {/* Network Background Canvas */}
          <canvas
            className="absolute inset-0 w-full h-full"
            ref={(canvas) => {
              if (canvas) {
                createNetworkBackground(canvas, isDarkMode);
              }
            }}
          />
          {/* Content with relative positioning */}
          <div className="relative z-10 max-w-6xl mx-auto">
            <h2
              className={`text-4xl font-bold text-center mb-16 animate-fadeIn ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className={`group transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-slideUp ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  } overflow-hidden cursor-pointer`}
                >
                  <div
                    className={`h-2 bg-gradient-to-r ${project.gradient}`}
                  ></div>
                  <CardHeaderComponent>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {project.type}
                    </Badge>
                  </CardHeaderComponent>
                  <CardContent>
                    <p
                      className={`mb-4 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className={`text-xs ${
                            isDarkMode
                              ? "bg-gray-700 text-gray-300"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className={`mt-4 px-4 py-2 rounded-lg font-medium transition-colors ${
                        isDarkMode
                          ? "bg-purple-600 hover:bg-purple-700 text-white"
                          : "bg-purple-500 hover:bg-purple-600 text-white"
                      }`}
                    >
                      View Details
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className={`w-full max-w-4xl transform overflow-hidden rounded-2xl transition-all ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div
                className={`px-6 py-4 border-b ${
                  isDarkMode ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3
                      className={`text-2xl font-semibold ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge
                        variant="outline"
                        className={`${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {selectedProject.type}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={`${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {selectedProject.status}
                      </Badge>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className={`p-2 hover:bg-opacity-10 rounded-full transition-colors ${
                      isDarkMode
                        ? "hover:bg-white text-gray-400 hover:text-white"
                        : "hover:bg-gray-900 text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div
                className={`px-6 py-4 max-h-[70vh] overflow-y-auto ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {/* Project Description */}
                <div className="mb-6">
                  <h4
                    className={`text-lg font-semibold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Overview
                  </h4>
                  <p className="leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4
                    className={`text-lg font-semibold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className={`${
                          isDarkMode
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4
                    className={`text-lg font-semibold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Key Features
                  </h4>
                  <div className="grid gap-3">
                    {selectedProject.details.map((detail, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg ${
                          isDarkMode
                            ? "bg-gray-700 hover:bg-gray-600"
                            : "bg-gray-50 hover:bg-gray-100"
                        } transition-colors`}
                      >
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Implementation Details */}
                {selectedProject.implementation && (
                  <div className="mb-6">
                    <h4
                      className={`text-lg font-semibold mb-2 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Implementation Highlights
                    </h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {selectedProject.implementation.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Challenges Solved */}
                {selectedProject.challengesSolved && (
                  <div className="mb-6">
                    <h4
                      className={`text-lg font-semibold mb-2 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Challenges & Solutions
                    </h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {selectedProject.challengesSolved.map(
                        (challenge, index) => (
                          <li key={index}>{challenge}</li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div
                className={`px-6 py-4 border-t ${
                  isDarkMode ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                          isDarkMode
                            ? "bg-gray-700 hover:bg-gray-600 text-white"
                            : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                        }`}
                      >
                        <Github className="w-5 h-5" />
                        View Code
                      </a>
                    )}
                    {selectedProject.demoUrl && (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                          isDarkMode
                            ? "bg-purple-600 hover:bg-purple-700 text-white"
                            : "bg-purple-500 hover:bg-purple-600 text-white"
                        }`}
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      isDarkMode
                        ? "bg-gray-700 hover:bg-gray-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                    }`}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <section
          className={`py-20 px-4 ${
            isDarkMode
              ? "bg-gradient-to-r from-purple-900 to-blue-900"
              : "bg-gradient-to-r from-purple-600 to-blue-600"
          } text-white relative overflow-hidden`}
        >
          {/* Background pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "32px 32px"
              }}
            />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl font-bold mb-8 animate-fadeIn">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              II&apos;m always open to discussing new opportunities,
              collaborations, or just having a chat about technology.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="mailto:dinildulneth123@gmail.com"
                className="no-underline"
              >
                <Button
                  size="lg"
                  className="gap-2 bg-white text-purple-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Mail className="w-4 h-4" />
                  Email Me
                </Button>
              </a>
              <a href="tel:+94717488137" className="no-underline">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  Call Me
                </Button>
              </a>
              <a
                href="https://linkedin.com/in/dinil-dulneth-liyanaarachchi"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className={`w-full py-8 px-4 ${
            isDarkMode ? "bg-gray-900 text-gray-300" : "bg-white text-gray-700"
          } border-t ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}
        >
          <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">
            {/* Social Links */}
            <div className="flex gap-6 mb-4">
              <a
                href="https://github.com/DinilDulneth"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:scale-110 transition-transform ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/dinil-dulneth-liyanaarachchi"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:scale-110 transition-transform ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:dinildulneth123@gmail.com"
                className={`hover:scale-110 transition-transform ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright and Description */}
            <div className="text-center space-y-2">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Dinil Dulneth LiyanaArachchi.
                All rights reserved.
              </p>
              <p
                className={`text-xs ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Built with passion using React and modern web technologies
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
