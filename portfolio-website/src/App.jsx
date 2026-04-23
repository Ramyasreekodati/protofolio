import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimationFrame, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiPieChart, FiCpu, FiEye, FiTrendingUp, FiSettings, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { SiPython, SiMysql, SiPostgresql, SiFlask, SiFastapi, SiGooglecloud, SiTensorflow, SiKeras, SiPandas, SiNumpy, SiScikitlearn, SiOpencv, SiPlotly, SiApachespark } from 'react-icons/si';
import { FaAws, FaDatabase, FaLinkedin, FaGithub, FaMedium, FaEnvelope } from 'react-icons/fa';
import { blogsData } from './blogsData';

const HeroHeader = () => {
  return (
    <section className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 py-24 md:py-32 lg:px-24 relative overflow-hidden">
      {/* Background Particles Placeholder */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-highlight rounded-full opacity-30"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
            }}
            animate={{
              y: [null, -500],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="w-full lg:w-[60%] z-10 flex flex-col items-center lg:items-start text-center lg:text-left max-w-[700px] mx-auto lg:mx-0">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-textLight tracking-tight"
        >
          RAMYA SREE KODATI
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl font-semibold text-highlight mb-6 h-10"
        >
          <TypeAnimation
            sequence={[
              "Statistics & Business Graduate",
              2000,
              "Solving Problems with Analytical Thinking",
              2000,
              "Continuous Learner & Growing Professional",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg md:text-xl leading-[1.7] text-gray-300 mb-8 max-w-[600px]"
        >
          I use analytical thinking and data to understand problems and find practical solutions. A motivated graduate focused on continuous learning and growth.
        </motion.p>

        {/* Highlights */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10 w-full"
        >
          {["Statistical Analysis", "Problem Solving", "Data Handling", "Logical Thinking", "Business Perspective"].map((badge, idx) => (
            <span key={idx} className="px-4 py-2 rounded-full border border-accent/50 bg-accent/10 text-sm md:text-base text-textLight glow-accent">
              {badge}
            </span>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full lg:w-auto"
        >
          <a href="#projects" className="w-full sm:w-auto px-8 py-3 bg-primary text-textLight font-semibold rounded-lg hover:bg-accent transition-all duration-300 hover:-translate-y-1 glow-accent-hover cursor-pointer text-center">
            View Projects
          </a>
          <a href={`${import.meta.env.BASE_URL}Ramya_Sree_Kodati_Resume.pdf`} download="Ramya_Sree_Kodati_Resume.pdf" className="w-full sm:w-auto px-8 py-3 border border-highlight text-highlight font-semibold rounded-lg hover:bg-highlight/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer text-center">
            Download Resume
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex gap-6 mt-12"
        >
          {[
            { icon: <FaEnvelope />, label: "Email", link: "mailto:kodatiramyasri@gmail.com" },
            { icon: <FaLinkedin />, label: "LinkedIn", link: "https://www.linkedin.com/in/ramyask2025" },
            { icon: <FaGithub />, label: "GitHub", link: "https://github.com/Ramyasreekodati" },
            { icon: <FaMedium />, label: "Medium", link: "https://medium.com/@ramyasreekodati" },
          ].map((social, i) => (
            <a key={i} href={social.link} title={social.label} target="_blank" rel="noreferrer" className="text-3xl md:text-4xl text-gray-400 opacity-70 hover:text-highlight hover:opacity-100 hover:scale-125 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(44,120,115,0.8)]">
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>

      <div className="w-full lg:w-[40%] flex flex-col justify-center items-center relative mt-16 lg:mt-0 gap-6">
        {/* Profile Image Container */}
        <div className="relative w-full max-w-[280px] md:max-w-[350px] lg:max-w-[400px] aspect-[4/5] flex justify-center items-center">
          {/* Subtle background glow for the image */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full h-full rounded-[3rem] bg-gradient-to-br from-primary/50 to-accent/50 blur-2xl absolute"
          />
          
          {/* Actual Image */}
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Ramya Sree Kodati"
            className="w-full h-full object-cover object-top rounded-[3rem] shadow-2xl relative z-10 border border-accent/30 glow-accent"
          />
        </div>

        {/* Name and Education under image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center z-10"
        >
          <h3 className="text-3xl font-bold text-textLight">Ramya Sree Kodati</h3>
          <p className="text-highlight font-medium text-lg mt-2 tracking-wide">BSc Statistics & MBA in Data Science</p>
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const leftVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const rightVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 flex justify-center items-center relative overflow-hidden bg-gradient-to-b from-darkBg to-primary/5">
      <motion.div 
        className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left Column */}
        <motion.div variants={leftVariants} className="flex flex-col justify-start lg:justify-center max-w-[600px] mx-auto lg:mx-0 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-textLight leading-[1.2] mb-8">
            I enjoy solving problems using data and analytical thinking.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-[1.8] font-light">
            With a background in <span className="text-highlight font-medium">Statistics</span> and business studies, I am focused on using analytical reasoning to understand real-world challenges. I believe in the power of data to find practical solutions and am constantly learning new methods to improve my impact.
          </p>
        </motion.div>

        {/* Divider for mobile, hidden on desktop */}
        <div className="block lg:hidden w-16 h-[2px] bg-accent/30 mx-auto rounded-full" />

        {/* Right Column */}
        <motion.div variants={rightVariants} className="flex flex-col justify-center space-y-10 lg:border-l lg:border-accent/30 lg:pl-16 max-w-[600px] mx-auto lg:mx-0 text-center lg:text-left">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-semibold text-textLight mb-3">Analytical Approach</h3>
            <p className="text-base md:text-lg text-gray-300 font-light leading-[1.7]">
              I approach challenges with a grounded perspective, combining statistical foundations with practical logic to understand and address complex problems.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-semibold text-textLight mb-4">Core Foundations</h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {["Statistical Analysis", "Data Reasoning", "Python Basics", "Business Foundations"].map((skill, index) => (
                <span key={index} className="px-4 py-2 rounded-lg border border-accent/40 bg-accent/10 text-highlight font-medium text-sm md:text-base tracking-wide">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-semibold text-textLight mb-3">Business Edge</h3>
            <p className="text-base md:text-lg text-gray-300 font-light leading-[1.7]">
              Currently pursuing an <span className="text-highlight font-medium">MBA</span> in Data Science, I combine technical expertise with business strategy to deliver impactful, scalable solutions.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const ExpertiseCard = ({ title, desc, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="h-full"
      style={{ perspective: 1000 }}
    >
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4 + (index % 3), repeat: Infinity, ease: "easeInOut" }}
        className="h-full"
      >
        <motion.div
          whileHover={{ 
            scale: 1.05,
            rotateX: 5,
            rotateY: -5,
            boxShadow: "0px 0px 30px rgba(44, 120, 115, 0.8)"
          }}
          className="glass-card h-full rounded-2xl p-8 flex flex-col justify-center items-center text-center border border-accent/40 bg-white/5 backdrop-blur-xl relative overflow-hidden group transition-colors duration-300 hover:bg-white/10"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.span 
            className="text-6xl mb-6 group-hover:-translate-y-2 transition-transform duration-300 block"
            style={{ translateZ: "50px" }}
          >
            {icon}
          </motion.span>
          
          <motion.h3 
            className="text-2xl font-semibold text-textLight leading-tight group-hover:-translate-y-1 transition-transform duration-300"
            style={{ translateZ: "30px" }}
          >
            {title}
          </motion.h3>

          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 w-full pt-0 group-hover:pt-4">
            <div className="overflow-hidden">
              <p className="text-sm text-gray-300" style={{ translateZ: "20px" }}>
                {desc}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const CoreExpertise = () => {
  const cards = [
    { title: "Analytical Thinking", desc: "Using logic and data to break down complex problems", icon: <FiPieChart /> },
    { title: "Data Foundations", desc: "Understanding distributions, patterns, and statistical reasoning", icon: <FiCpu /> },
    { title: "Machine Learning", desc: "Applying foundational algorithms to find practical solutions", icon: <FiEye /> },
    { title: "Problem Solving", desc: "Translating real-world challenges into data-driven insights", icon: <FiTrendingUp /> },
    { title: "Technical Skills", desc: "Using Python and SQL to process and analyze information", icon: <FiSettings /> },
  ];

  return (
    <section className="py-32 px-6 md:px-10 relative bg-darkBg/95">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-textLight">Core Expertise</h2>
          <div className="w-24 h-1 bg-highlight/50 rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-10">
          {cards.map((card, i) => (
            <ExpertiseCard key={i} title={card.title} desc={card.desc} icon={card.icon} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative rounded-3xl overflow-hidden border border-white/5 bg-darkBg shadow-xl hover:shadow-[0_0_40px_rgba(44,120,115,0.3)] hover:border-accent/40 transition-all duration-500 flex flex-col justify-end transform hover:scale-[1.03]"
      style={{ minHeight: "450px" }}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={project.image.startsWith('http') ? project.image : `${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}`} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.08]"
        />
        {/* Base Gradient for Title Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#021c1e] via-[#021c1e]/60 to-transparent opacity-90" />
        
        {/* Hover Dark Overlay */}
        <div className="absolute inset-0 bg-[#021c1e]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end h-full w-full">
        {/* Title and Links (Always Visible) */}
        <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight drop-shadow-md">
            {project.title}
          </h3>
          
          <div className="flex flex-wrap gap-4 relative z-20">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer" 
              className="px-5 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm flex items-center gap-2 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              🐙 GitHub
            </a>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer" 
                className="px-5 py-2.5 rounded-xl bg-primary/80 backdrop-blur-md border border-accent/40 text-white font-medium text-sm flex items-center gap-2 hover:bg-primary hover:border-highlight hover:text-highlight transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(111,185,143,0.5)]"
              >
                🌐 Live App
              </a>
            )}
          </div>
        </div>

        {/* Expandable Revealed Content */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
          <div className="overflow-hidden">
            <div className="pt-6 space-y-4 border-t border-accent/20 mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <p className="text-sm text-gray-300">
                <span className="block text-white font-semibold mb-1 uppercase text-[10px] tracking-wider opacity-60">Problem</span>
                {project.problem}
              </p>
              <p className="text-sm text-gray-300">
                <span className="block text-white font-semibold mb-1 uppercase text-[10px] tracking-wider opacity-60">Solution</span>
                {project.solution}
              </p>
              <p className="text-sm text-gray-300">
                <span className="block text-white font-semibold mb-1 uppercase text-[10px] tracking-wider opacity-60">Impact</span>
                <span dangerouslySetInnerHTML={{ __html: project.impact }} />
              </p>
              
              <div className="pt-4 flex flex-wrap gap-3">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xl px-3 py-2 rounded-lg bg-accent/10 border border-accent/30 text-highlight transition-all duration-300 hover:scale-125 hover:bg-highlight hover:text-darkBg shadow-[0_0_15px_rgba(111,185,143,0)] group-hover:shadow-[0_0_15px_rgba(111,185,143,0.3)]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Agentic Honey-Pot for Scam Detection & Intelligence Extraction",
      image: "/images/scam.png",
      problem: "Detecting sophisticated scam intent and extracting malicious data (UPI, Banks, URLs) in real-time.",
      solution: "Built an autonomous Gemini Pro agent with a FastAPI backend, IMAP integration, and a premium Streamlit dashboard.",
      impact: 'Achieved <span class="text-highlight font-bold">real-time threat intelligence</span> with automated webhook reporting and cloud scalability via Docker.',
      tags: [<SiFastapi />, <SiGooglecloud />, <SiPython />, <FaGithub />],
      github: "https://github.com/Ramyasreekodati/spam-detection",
      link: "https://spam-detection-agent.streamlit.app/"
    },
    {
      title: "Binance Trade Analytics Dashboard",
      image: "/images/binance.png",
      problem: "Analyzing high-frequency trading data to evaluate portfolio performance and detect anomalies.",
      solution: "Built an automated data pipeline and metrics engine (Sharpe Ratio, Drawdown) to process complex market data.",
      impact: 'Uncovered strategic insights, evaluating portfolios with up to <span class="text-highlight font-bold">+$71K PnL</span>.',
      tags: [<SiPython />, <SiFastapi />, <SiPandas />, <SiPlotly />],
      github: "https://github.com/Ramyasreekodati/binance-trade-analysis.git",
      link: "https://binanace-trade-analysis.streamlit.app/"
    },
    {
      title: "AI Education Loan Underwriting",
      image: "/images/loan.png",
      problem: "Assessing career trajectory and financial risk for education loan underwriting.",
      solution: "Developed an end-to-end ML pipeline featuring a dual-model system for placement prediction and salary forecasting.",
      impact: 'Achieved <span class="text-highlight font-bold">86% accuracy</span> in placement prediction and an <span class="text-highlight font-bold">R² 0.989</span> for salary forecasting.',
      tags: [<SiPython />, <SiScikitlearn />, <SiNumpy />, <SiPandas />],
      github: "https://github.com/Ramyasreekodati/Career-Success-Risk-Modeling.git",
      link: "https://career-success-risk-modelinggit-njveqfuhy6xv5r2yvxm87w.streamlit.app/"
    },
    {
      title: "AI Proctored Interview System",
      image: "/images/interview.png",
      problem: "Ensuring academic and interview integrity in remote environments.",
      solution: "Created an AI-driven interview platform combining NLP and Computer Vision with gaze tracking and a 100-point penalty system.",
      impact: 'Achieved <span class="text-highlight font-bold">~100% detection accuracy</span> for unauthorized cheating behaviors.',
      tags: [<SiFastapi />, <SiOpencv />, <SiTensorflow />, <SiKeras />],
      github: "https://github.com/Ramyasreekodati/AI-Autonomous-Interview-System.git",
      link: "https://ai-interview-room.streamlit.app/"
    },
    {
      title: "Wine Quality Prediction",
      image: "/images/wine.png",
      problem: "Predicting wine quality accurately based on complex physicochemical properties like pH and acidity.",
      solution: "Designed an end-to-end ML pipeline with a fine-tuned Elastic Net model, deployed via a Flask API on Render.",
      impact: 'Delivered real-time predictions through an interactive web app, balancing <span class="text-highlight font-bold">L1/L2 regularization</span> for optimal accuracy.',
      tags: [<SiPython />, <SiFlask />, <SiScikitlearn />],
      github: "#",
      link: null
    },
    {
      title: "Flight Price Prediction",
      image: "/images/flight.png",
      problem: "Forecasting flight ticket prices based on dynamic temporal features, stops, and airlines.",
      solution: "Engineered complex features and deployed a fine-tuned Random Forest model (n_estimators=540) via Flask on AWS/Render.",
      impact: 'Achieved an <span class="text-highlight font-bold">R² of 0.823</span> and a highly precise <span class="text-highlight font-bold">MAPE of 13.82%</span>.',
      tags: [<SiPython />, <SiFlask />, <FaAws />],
      github: "#",
      link: null
    },
    {
      title: "Plant Disease Detection",
      image: "/images/plant.png",
      problem: "Detecting and classifying agricultural diseases in Pepper Bell plants using image analysis.",
      solution: "Developed and trained a robust CNN-based image classification model applying advanced data augmentation.",
      impact: 'Reached <span class="text-highlight font-bold">72.8% accuracy</span> over 12 epochs, with a strategic roadmap for ResNet integration.',
      tags: [<SiTensorflow />, <SiKeras />, <SiOpencv />],
      github: "#",
      link: null
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 md:px-10 lg:px-20 bg-darkBg/90 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-textLight">Featured Projects</h2>
          <div className="w-24 h-1 bg-highlight/50 rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((proj, i) => (
            <ProjectCard key={i} project={proj} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const OrbitNode = ({ cat, x, y, isHovered, onHover, onLeave, isAnyHovered, index }) => {
  return (
    <motion.div
      style={{ x, y, zIndex: isHovered ? 100 : 10 }}
      className="absolute top-1/2 left-1/2 w-0 h-0 flex items-center justify-center"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <motion.div
        animate={{ 
          y: isHovered ? 0 : [0, -8, 0],
          scale: isHovered ? 1.1 : 1,
          opacity: isAnyHovered && !isHovered ? 0.3 : 1
        }}
        transition={{ 
          y: { duration: 4 + (index % 3), repeat: Infinity, ease: "easeInOut", delay: index * 0.2 },
          scale: { duration: 0.3 },
          opacity: { duration: 0.3 }
        }}
        className="relative flex flex-col items-center"
      >
        {/* Node */}
        <div className={`cursor-default px-5 py-2.5 md:px-6 md:py-3 rounded-[2rem] border backdrop-blur-xl transition-all duration-300 text-center whitespace-nowrap ${isHovered ? 'bg-accent/20 border-highlight shadow-[0_0_25px_rgba(111,185,143,0.4)]' : 'bg-darkBg/80 border-white/10 shadow-lg'}`}>
          <span className={`text-xs md:text-sm font-semibold tracking-wide transition-colors ${isHovered ? 'text-highlight' : 'text-gray-300'}`}>{cat.title}</span>
        </div>

        {/* Subskills Dropdown */}
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-5 w-[260px] md:w-[300px] bg-darkBg/95 backdrop-blur-3xl border border-accent/40 rounded-xl p-5 shadow-2xl z-50 pointer-events-none"
          >
            <ul className="flex flex-col gap-3">
              {cat.subSkills.map((sub, i) => (
                <li key={i} className="text-xs md:text-sm text-gray-300 flex items-start gap-3 whitespace-normal">
                  <span className="text-highlight/70 mt-[4px] text-[10px]">■</span>
                  <span className="leading-relaxed text-left">{sub}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const categories = [
    {
      title: "Machine Learning Systems",
      subSkills: ["Supervised Learning", "Ensemble Models", "Model Evaluation", "Feature Engineering", "Hyperparameter Tuning"]
    },
    {
      title: "Data Processing & Analysis",
      subSkills: ["Data Cleaning & Preprocessing", "Exploratory Data Analysis (EDA)", "Data Transformation & Feature Creation", "Handling Missing Data & Outliers", "Data Mining Techniques"]
    },
    {
      title: "Visualization & Communication",
      subSkills: ["Data Visualization (Matplotlib, Seaborn, Plotly)", "Dashboarding (Tableau, Power BI)", "Storytelling with Data", "Business Insight Generation", "Reporting & Presentation"]
    },
    {
      title: "Backend & Deployment",
      subSkills: ["API Development (Flask, FastAPI)", "Model Deployment (Web Apps / APIs)", "ML Pipeline Design", "Backend Integration", "Basic Cloud Deployment (AWS / Render)"]
    },
    {
      title: "Statistical Modeling & Methods",
      subSkills: ["Descriptive & Inferential Statistics", "Hypothesis Testing", "Probability Distributions", "Regression Analysis", "Risk Modeling & Forecasting"]
    }
  ];

  const tools = [
    { name: "Python", icon: <SiPython /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "NumPy", icon: <SiNumpy /> },
    { name: "Pandas", icon: <SiPandas /> },
    { name: "SciPy", icon: <SiPython /> },
    { name: "Scikit-learn", icon: <SiScikitlearn /> },
    { name: "XGBoost", icon: <SiPython /> },
    { name: "TensorFlow", icon: <SiTensorflow /> },
    { name: "Keras", icon: <SiKeras /> },
    { name: "NLTK", icon: <SiPython /> },
    { name: "OpenCV", icon: <SiOpencv /> },
    { name: "Matplotlib", icon: <SiPython /> },
    { name: "Seaborn", icon: <SiPython /> },
    { name: "Plotly", icon: <SiPlotly /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Flask", icon: <SiFlask /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "PySpark", icon: <SiApachespark /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Google Cloud", icon: <SiGooglecloud /> }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Base rotation angle
  const rotation = useMotionValue(0);
  const speed = 0.0003; // Very slow and calm

  useAnimationFrame((time, delta) => {
    if (hoveredIndex === null) {
      rotation.set(rotation.get() + delta * speed);
    }
  });

  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 100 };
  const parallaxX = useSpring(mouseX, springConfig);
  const parallaxY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.03; 
    const y = (e.clientY - rect.top - rect.height / 2) * 0.03;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Compact responsive radius
  const [radius, setRadius] = useState(200);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) setRadius(110);
      else if (window.innerWidth < 768) setRadius(140);
      else if (window.innerWidth < 1024) setRadius(190);
      else setRadius(240);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      className="py-32 px-6 overflow-hidden bg-darkBg relative" 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-textLight">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-highlight/50 rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Compact System */}
        <motion.div 
          className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] flex items-center justify-center my-10"
          style={{ x: parallaxX, y: parallaxY }}
        >
          {/* Orbital Tracks for Realism */}
          <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03] shadow-[inset_0_0_50px_rgba(255,255,255,0.01)] pointer-events-none" style={{ width: radius * 2, height: radius * 2 }} />
          <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.02] pointer-events-none" style={{ width: radius * 2.5, height: radius * 2.5 }} />
          <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05] pointer-events-none" style={{ width: radius * 1.5, height: radius * 1.5 }} />

          {/* Energy Tethers */}
          <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center" style={{ zIndex: 0 }}>
            {categories.map((_, i) => {
              const baseAngle = (i * (2 * Math.PI)) / categories.length - Math.PI / 2;
              const angle = useTransform(rotation, (r) => (r + baseAngle) * (180 / Math.PI));
              return (
                <motion.div 
                  key={i} 
                  className="absolute top-1/2 left-1/2 h-[1px] origin-left bg-gradient-to-r from-highlight/50 to-transparent"
                  style={{
                    width: radius,
                    rotate: angle,
                  }}
                />
              );
            })}
          </div>

          {/* Volumetric Center Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20 pointer-events-none">
            {/* Solid glowing center */}
            <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-highlight shadow-[0_0_40px_rgba(111,185,143,1)] z-10" />
            {/* Energy aura */}
            <div className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent/40 blur-md animate-[pulse_3s_ease-in-out_infinite]" />
            {/* Rotating structural rings */}
            <div className="absolute w-20 h-20 md:w-28 md:h-28 rounded-full border border-highlight/10 animate-[spin_10s_linear_infinite]" />
            <div className="absolute w-28 h-28 md:w-40 md:h-40 rounded-full border border-dashed border-accent/20 animate-[spin_15s_linear_infinite_reverse]" />
          </div>
          
          {/* Skill Nodes */}
          {categories.map((cat, i) => {
            const baseAngle = (i * (2 * Math.PI)) / categories.length - Math.PI / 2;
            const x = useTransform(rotation, (r) => Math.cos(r + baseAngle) * radius);
            const y = useTransform(rotation, (r) => Math.sin(r + baseAngle) * radius);

            return (
              <OrbitNode 
                key={i} 
                cat={cat} 
                x={x} 
                y={y} 
                index={i}
                isHovered={hoveredIndex === i}
                onHover={() => setHoveredIndex(i)}
                onLeave={() => setHoveredIndex(null)}
                isAnyHovered={hoveredIndex !== null}
              />
            );
          })}
        </motion.div>

        {/* Tools Grid */}
        <div className="mt-24 md:mt-32 w-full max-w-6xl mx-auto overflow-hidden relative">
          <h3 className="text-sm font-bold text-gray-500 mb-8 uppercase tracking-widest text-center">Tools</h3>
          
          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-darkBg to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-darkBg to-transparent z-10"></div>

          <div className="flex overflow-hidden group">
            <motion.div 
              animate={{ x: ["0%", "-33.33%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex gap-10 md:gap-16 whitespace-nowrap group-hover:pause"
            >
              {[...tools, ...tools, ...tools].map((tool, i) => (
                <div key={i} className="flex flex-col items-center justify-center group/item relative cursor-default pt-2 pb-12 px-2">
                  <span className="text-3xl md:text-4xl text-gray-500 group-hover/item:text-highlight group-hover/item:-translate-y-2 transition-all duration-300 ease-out">
                    {tool.icon}
                  </span>
                  {/* Tooltip */}
                  <span className="absolute bottom-0 opacity-0 group-hover/item:opacity-100 text-xs text-textLight font-mono bg-darkBg/90 border border-accent/40 px-3 py-1.5 rounded-lg shadow-[0_0_15px_rgba(111,185,143,0.2)] transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {tool.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BlogCard = ({ blog, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group flex flex-col bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(44,120,115,0.3)] hover:border-accent/40 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] h-full"
    >
      <div className="relative h-48 overflow-hidden border-b border-white/5">
        <img 
          src={blog.image} 
          alt={blog.title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-darkBg/30 group-hover:bg-transparent transition-colors duration-500" />
      </div>
      <div className="p-6 flex flex-col flex-grow relative">
        <h3 className="text-xl font-bold text-textLight mb-3 line-clamp-2 leading-tight group-hover:text-highlight transition-colors duration-300">{blog.title}</h3>
        <p className="text-sm text-gray-400 mb-6 flex-grow leading-relaxed">{blog.insight}</p>
        
        <div className="pt-4 border-t border-white/5">
          <a 
            href={blog.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-highlight/10 text-highlight font-semibold text-sm hover:bg-highlight hover:text-darkBg transition-all duration-300 group/btn"
          >
            Read Article
            <span className="transform transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const BlogSection = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 800 : 350; // Scroll by roughly 2 cards
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-32 bg-[#011415] relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 md:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-textLight">Publications</h2>
            <div className="w-16 h-1 bg-highlight/50 rounded-full mt-4" />
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-highlight hover:text-darkBg hover:border-highlight transition-all duration-300"
            >
              <FiChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-highlight hover:text-darkBg hover:border-highlight transition-all duration-300"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </motion.div>
      </div>

      <div className="relative group mt-8">
        {/* Gradients to fade edges */}
        <div className="absolute top-0 left-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#011415] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#011415] to-transparent z-10 pointer-events-none" />

        {/* Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 md:gap-8 overflow-x-auto pb-12 pt-4 px-6 md:px-20 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
          {blogsData.map((blog, i) => (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.1, 0.8) }}
              key={i}
              className="w-[85vw] sm:w-[350px] md:w-[400px] shrink-0 snap-center group/card flex flex-col bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(44,120,115,0.3)] hover:border-accent/40 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] h-[450px]"
            >
              <div className="relative h-56 overflow-hidden border-b border-white/5 shrink-0">
                <img 
                  src={blog.image.startsWith('http') ? blog.image : `${import.meta.env.BASE_URL}${blog.image.replace(/^\//, '')}`} 
                  alt={blog.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover/card:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-darkBg/30 group-hover/card:bg-transparent transition-colors duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow relative">
                <h3 className="text-xl font-bold text-textLight mb-3 line-clamp-2 leading-tight group-hover/card:text-highlight transition-colors duration-300">{blog.title}</h3>
                <p className="text-sm text-gray-400 mb-6 flex-grow leading-relaxed">{blog.insight}</p>
                
                <div className="pt-4 border-t border-white/5 mt-auto">
                  <a 
                    href={blog.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-highlight/10 text-highlight font-semibold text-sm hover:bg-highlight hover:text-darkBg transition-all duration-300 group/btn"
                  >
                    Read Article
                    <span className="transform transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CareerSection = () => {
  return (
    <section className="py-24 px-6 md:px-10 lg:px-20 bg-darkBg/95 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold text-textLight mb-8">Career Objective</h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light italic">
            "A motivated and adaptable graduate with a strong background in Statistics and business studies. Interested in using problem-solving and analytical thinking to handle real-world challenges while continuously learning and growing."
          </p>
          <div className="w-24 h-1 bg-highlight/30 rounded-full mx-auto mt-10" />
        </motion.div>
      </div>
    </section>
  );
};

const EducationSection = () => {
  const education = [
    {
      degree: "MBA in Data Science",
      institution: "Manipal University, Jaipur",
      period: "2024 - 2026",
      details: "Pursuing advanced studies in Data Science and Business Analytics."
    },
    {
      degree: "B.Sc. in Mathematics, Statistics & Computer Science",
      institution: "Hindu Degree College for Women, Hyderabad",
      period: "2021 - 2024",
      details: "Graduated with 87%"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Narayana Junior College, Hyderabad",
      period: "2019 - 2021",
      details: "Graduated with 93%"
    },
    {
      degree: "SSC",
      institution: "Sri Sai Chaitanya Techno High School, Hyderabad",
      period: "2018 - 2019",
      details: "Graduated with 87%"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-10 lg:px-20 bg-darkBg relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-textLight">Education</h2>
          <div className="w-16 h-1 bg-highlight/50 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12 pb-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-highlight shadow-[0_0_10px_rgba(111,185,143,0.8)]" />
              
              <div className="bg-white/[0.02] border border-white/5 p-6 rounded-xl hover:border-highlight/30 hover:bg-white/[0.04] transition-all duration-300">
                <span className="text-xs font-mono text-highlight tracking-wider mb-2 block">{edu.period}</span>
                <h3 className="text-xl font-bold text-textLight mb-1">{edu.degree}</h3>
                <h4 className="text-sm font-semibold text-gray-300 mb-3">{edu.institution}</h4>
                <p className="text-sm text-gray-500">{edu.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CertificationsSection = () => {
  const certs = [
    { 
      title: "Google Data Analytics", 
      issuer: "Google",
      description: "Professional certification covering data cleaning, analysis, and visualization using modern data tools.",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/DYVJKSUXR4QD?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof"
    },
    { 
      title: "Artificial Intelligence", 
      issuer: "Nirmaan Organization",
      description: "Specialized training in AI methodologies, machine learning, and practical problem-solving.",
      link: null
    },
    { 
      title: "Prompting Essentials", 
      issuer: "Google",
      description: "Advanced prompt engineering techniques for effectively interacting with and optimizing Large Language Models.",
      link: "https://coursera.org/share/0497a8e5becafa31b257e17f7c157849"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-10 lg:px-20 bg-[#011415] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-textLight">Certifications</h2>
          <div className="w-16 h-1 bg-highlight/50 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((cert, i) => {
            const CardWrapper = cert.link ? motion.a : motion.div;
            return (
              <CardWrapper
                {...(cert.link ? { href: cert.link, target: "_blank", rel: "noreferrer" } : {})}
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`bg-white/[0.03] border border-white/10 px-8 py-8 rounded-2xl flex flex-col min-w-[250px] transition-all duration-300 group ${cert.link ? 'cursor-pointer hover:scale-[1.03] hover:bg-white/[0.05] hover:border-highlight/50 hover:shadow-[0_0_30px_rgba(44,120,115,0.2)]' : ''}`}
              >
                <div className={`w-14 h-14 rounded-full bg-highlight/10 flex items-center justify-center mb-6 text-highlight text-2xl transition-transform duration-300 ${cert.link ? 'group-hover:scale-110' : ''}`}>
                  🏆
                </div>
                <h3 className={`text-xl font-bold text-textLight mb-2 transition-colors ${cert.link ? 'group-hover:text-highlight' : ''}`}>{cert.title}</h3>
                <p className="text-xs text-highlight uppercase tracking-widest font-mono mb-4">{cert.issuer}</p>
                <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-grow">{cert.description}</p>
                
                {cert.link && (
                  <div className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-gray-500 group-hover:text-white transition-colors">
                    View Credential <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                )}
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-32 px-6 md:px-10 lg:px-20 relative overflow-hidden flex items-center justify-center bg-darkBg">
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-highlight rounded-full blur-[120px]"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto bg-white/[0.02] backdrop-blur-xl border border-white/10 p-12 md:p-24 rounded-[3rem] shadow-[0_0_50px_rgba(44,120,115,0.15)] overflow-hidden group"
      >
        {/* Subtle hover gleam */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          Let’s solve problems <br className="hidden md:block" /> with data, together.
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Interested in finding practical solutions using analytical thinking? I am actively seeking roles where I can apply my foundation in Statistics and business to drive real-world impact while continuing to grow.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="mailto:kodatiramyasri@gmail.com"
            className="px-8 py-4 rounded-full bg-highlight text-darkBg font-bold text-lg hover:bg-white hover:shadow-[0_0_25px_rgba(111,185,143,0.6)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center"
          >
            Contact Me
          </a>
          <a 
            href={`${import.meta.env.BASE_URL}Ramya_Sree_Kodati_Resume.pdf`}
            download="Ramya_Sree_Kodati_Resume.pdf"
            className="px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-bold text-lg hover:bg-white/10 hover:border-highlight/50 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-3"
          >
            View Resume <FiEye size={20} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-white/5 bg-[#011415]">
      <div className="flex flex-wrap justify-center gap-8 mb-6 px-4">
        <a href="mailto:kodatiramyasri@gmail.com" className="text-gray-400 hover:text-highlight transition-colors flex items-center gap-2"><FaEnvelope /> Email</a>
        <a href="https://www.linkedin.com/in/ramyask2025" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-highlight transition-colors flex items-center gap-2"><FaLinkedin /> LinkedIn</a>
        <a href="https://github.com/Ramyasreekodati" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-highlight transition-colors flex items-center gap-2"><FaGithub /> GitHub</a>
        <a href="https://medium.com/@ramyasreekodati" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-highlight transition-colors flex items-center gap-2"><FaMedium /> Medium</a>
      </div>
      <p className="text-sm text-gray-500 font-mono">© 2026 Ramya Sree Kodati. Designed & Engineered with React.</p>
    </footer>
  );
};

function App() {
  return (
    <div className="bg-darkBg min-h-screen text-textLight font-sans selection:bg-highlight selection:text-darkBg">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-darkBg to-darkBg"></div>
      </div>
      
      <div className="relative z-10">
        <HeroHeader />
        <AboutSection />
        <CoreExpertise />
        <SkillsSection />
        <ProjectsSection />
        <BlogSection />
        <CareerSection />
        <EducationSection />
        <CertificationsSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
