'use client';

import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import ProfileImage from "/public/profile.jpeg";
import LogBotImg from "/public/log-analysis.jpg";
import RagImg from "/public/rag-chatbot.jpg";
import ChurnImg from "/public/churn-predict.jpg";
import AutoGenImg from "/public/autogen-system.jpg";
import SnapChatImg from "/public/SnapchatImg.png";
import AmazonImg from "/public/AmazonImg.png";
import ScheduleWiseImg from "/public/ScheduleWiseImg.png";
import BackgroundImg from "/public/Background.jpg";
import RTCImg from "/public/RTC.png";
import TGImg from "/public/TG.png";
import WomenInTechImg from "/public/womenintech.png";
import ZTMImg from "/public/ZTM.png";
import ADPListImg from "/public/ADPlist.png";
import ProgramEarthImg from "/public/programearth.png";
import DarkModeToggle from "@/components/DarkModeToggle";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Portfolio() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    // Import Bootstrap JS on client side
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/mzzewbae", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const responseData = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Form submission error:", responseData);
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen relative dark:bg-gray-900">
      <DarkModeToggle />

      {/* Background Image Container */}
      <div className="fixed inset-0 z-0">
        <Image
          src={BackgroundImg}
          alt="Background"
          fill
          className="object-cover opacity-100 dark:opacity-10"
          priority
          quality={100}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="fixed inset-0 z-10 bg-gradient-to-b from-yellow-50/80 to-white/80 dark:from-gray-900/90 dark:to-gray-900/95"></div>

      {/* Main Content */}
      <div className="relative z-20 w-[90%] mx-auto px-4 lg:px-8 space-y-16 font-serif text-gray-800 dark:text-gray-100">
        {/* Sticky Navbar */}
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm py-3 border-b border-yellow-200 dark:border-yellow-900">
          <div className="w-[95%] mx-auto px-4">
            <ul className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 justify-center md:justify-end text-sm md:text-base lg:text-lg font-medium">
              <li><a href="#about" className="hover:text-yellow-600 dark:hover:text-yellow-400">About</a></li>
              <li><a href="#projects" className="hover:text-yellow-600 dark:hover:text-yellow-400">Projects</a></li>
              <li><a href="#skills" className="hover:text-yellow-600 dark:hover:text-yellow-400">Skills</a></li>
              <li><a href="#experience" className="hover:text-yellow-600 dark:hover:text-yellow-400">Experience</a></li>
              <li><a href="#education" className="hover:text-yellow-600 dark:hover:text-yellow-400">Education</a></li>
              <li><a href="#communities" className="hover:text-yellow-600 dark:hover:text-yellow-400">Communities</a></li>
              <li><a href="#contact" className="hover:text-yellow-600 dark:hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>
        </nav>

        {/* Intro Section */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] items-center gap-8 md:gap-12 pt-8">
          <div className="relative mx-auto lg:mx-0">
            <div className="absolute -inset-6 bg-gradient-to-r from-yellow-200 to-yellow-400 dark:from-yellow-700 dark:to-yellow-500 rounded-full opacity-10 transform rotate-2"></div>
            <Image
              src="/profile.jpeg"
              alt="Thao Tran"
              width={300}
              height={300}
              className="rounded-full relative z-10 border-4 border-white dark:border-gray-800 shadow-xl aspect-square object-cover"
              onError={(e) => {
                console.error("Image failed to load:", e);
                // Optionally set a fallback image
                // e.currentTarget.src = "/fallback.jpg";
              }}
            />
          </div>
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Thao Tran</h1>
            <div className="space-y-4">
              <p className="text-lg md:text-xl leading-relaxed">
                I'm a recent Computer Science graduate with a strong focus on AI, machine learning, and full-stack software development. Currently, I'm actively seeking a new graduate role or internship where I can apply my skills and continue learning in a real-world environment.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                I'm passionate about solving meaningful problems with technology and love diving into new tools, frameworks, and ideas—I pick up new skills quickly and enjoy the process of learning.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Outside of tech, you'll find me on a road trip, swimming, kayaking, or just exploring something new. I believe that a curious mindset is the key to both personal growth and great engineering.
              </p>
            </div>
            <div className="flex gap-4 flex-wrap justify-center lg:justify-start pt-6">
              <Button className="bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white text-sm md:text-base px-4 py-2" asChild><a href="https://www.linkedin.com/in/thao-tran-/" target="_blank">LinkedIn</a></Button>
              <Button className="bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white text-sm md:text-base px-4 py-2" asChild><a href="https://github.com/thao-1" target="_blank">GitHub</a></Button>
              <Button className="bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white text-sm md:text-base px-4 py-2" asChild><a href="https://medium.com/@tranminhthao5555" target="_blank">Medium</a></Button>
              <Button className="bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white text-sm md:text-base px-4 py-2" asChild><a href="https://www.credly.com/users/thao-tran.6dfe6bb6" target="_blank">Credly</a></Button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">My Projects</h2>
              <a href="https://github.com/thao-1?tab=repositories" target="_blank" className="text-yellow-600 dark:text-yellow-400 hover:underline text-lg flex items-center">
                View all
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[{
                title: "AI-Powered Log Analysis Dashboard",
                description: "Built with scikit-learn, Dash, Plotly, and pandas. Full pipeline from log ingestion to interactive dashboard for anomaly detection and clustering.",
                link: "https://github.com/thao-1/AI-Powered-Log-Analysis-Dashboard-Project.git",
                image: LogBotImg,
                tags: ["Python", "ML", "Dashboard"]
              }, {
                title: "RAG Chatbot for Patient Info",
                description: "RAG model with LangChain, FAISS, OpenAI, and FastAPI. Real-time QA with medical documents and full-stack deployment.",
                link: "https://github.com/thao-1/RAG-Chatbot-for-Patient-Info.git",
                image: RagImg,
                tags: ["LLM", "RAG", "FastAPI"]
              }, {
                title: "Telco Customer Churn Prediction",
                description: "End-to-end ML pipeline using Random Forest + FastAPI REST API. Robust deployment-ready solution with modular design and logging.",
                link: "https://github.com/thao-1/Telco-Customer-Churn.git",
                image: ChurnImg,
                tags: ["ML", "API", "Python"]
              }, {
                title: "Multi-Agent System with AutoGen",
                description: "Natural language to SQL app using GPT, OpenAI API, and custom metrics. Supports MySQL, SQLite, PostgreSQL with 100% execution accuracy.",
                link: "https://github.com/thao-1/Build-a-multi-agent-system-with-Autogen-.git",
                image: AutoGenImg,
                tags: ["LLM", "SQL", "Agents"]
              }, {
                title: "SnapChat Clone",
                description: "Built a Snapchat clone using TypeScript, React (Next.js), and Tailwind CSS, implementing core features like stories, spotlight videos, and lenses.",
                link: "https://github.com/thao-1/SnapChat-Clone.git",
                image: SnapChatImg,
                tags: ["React", "TypeScript", "Next.js"]
              }, {
                title: "Amazon Clone",
                description: "Built an Amazon clone using TypeScript, React (Next.js), and Tailwind CSS, implementing core features like product listings, shopping cart, and checkout.",
                link: "https://github.com/thao-1/Amazon-Clone.git",
                image: AmazonImg,
                tags: ["React", "E-commerce", "Next.js"]
              }].map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100 dark:border-gray-700">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                      priority={index < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{project.description}</p>
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-700 dark:hover:bg-yellow-600 transition-colors duration-300 w-full"
                      >
                        View Project
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Project - ScheduleWise */}
            <div className="mt-16">
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100 dark:border-gray-700 max-w-md mx-auto">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={ScheduleWiseImg}
                    alt="ScheduleWise"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">ScheduleWise</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">AI scheduling app built with React, Supabase, and OpenAI API for productivity optimization. Intelligent calendar management with AI-powered suggestions.</p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium">React</span>
                      <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium">AI</span>
                      <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium">Supabase</span>
                    </div>
                    <a
                      href="https://github.com/thao-1/schedulewise-ai-planner.git"
                      target="_blank"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-700 dark:hover:bg-yellow-600 transition-colors duration-300 w-full"
                    >
                      View Project
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-8">
          <h2 className="text-6xl font-semibold border-b-2 border-yellow-300 dark:border-yellow-700 pb-4">Technical Skills</h2>
          <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Programming Languages */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 pb-2 border-b border-yellow-200 dark:border-yellow-800">Programming</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-yellow-500 mr-3"></div>
                    <span className="text-xl text-gray-800 dark:text-gray-100">Python</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-yellow-500 mr-3"></div>
                    <span className="text-xl text-gray-800 dark:text-gray-100">Java</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-yellow-500 mr-3"></div>
                    <span className="text-xl text-gray-800 dark:text-gray-100">SQL</span>
                  </li>
                </ul>
              </div>

              {/* ML/AI Tools */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 pb-2 border-b border-yellow-200 dark:border-yellow-800">ML/AI</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-yellow-500 mr-3"></div>
                    <span className="text-xl text-gray-800 dark:text-gray-100">scikit-learn</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-yellow-500 mr-3"></div>
                    <span className="text-xl text-gray-800 dark:text-gray-100">TensorFlow</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-yellow-500 mr-3"></div>
                    <span className="text-xl text-gray-800 dark:text-gray-100">Keras</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-yellow-500 mr-3"></div>
                    <span className="text-xl text-gray-800 dark:text-gray-100">Pandas</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-yellow-500 mr-3"></div>
                    <span className="text-xl text-gray-800 dark:text-gray-100">NumPy</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-yellow-500 mr-3"></div>
                    <span className="text-xl text-gray-800 dark:text-gray-100">LangChain</span>
                  </li>
                </ul>
              </div>

              {/* Tools & Platforms */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 pb-2 border-b border-yellow-200 dark:border-yellow-800">Tools & Platforms</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-yellow-500 mr-3"></div>
                        <span className="text-xl text-gray-800 dark:text-gray-100">Docker</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-yellow-500 mr-3"></div>
                        <span className="text-xl text-gray-800 dark:text-gray-100">FastAPI</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-yellow-500 mr-3"></div>
                        <span className="text-xl text-gray-800 dark:text-gray-100">Dash</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-yellow-500 mr-3"></div>
                        <span className="text-xl text-gray-800 dark:text-gray-100">Git</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-yellow-500 mr-3"></div>
                        <span className="text-xl text-gray-800 dark:text-gray-100">AWS</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-yellow-500 mr-3"></div>
                        <span className="text-xl text-gray-800 dark:text-gray-100">Azure</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-yellow-500 mr-3"></div>
                        <span className="text-xl text-gray-800 dark:text-gray-100">GCP</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-yellow-500 mr-3"></div>
                        <span className="text-xl text-gray-800 dark:text-gray-100">Tableau/Power BI</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-8">
          <h2 className="text-6xl font-semibold border-b-2 border-yellow-300 dark:border-yellow-700 pb-4">Experience</h2>
          <div className="space-y-10">
            {/* Experience Item 1 - OEE IntelliSuite (moved to top) */}
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-4">Junior AI/ML Engineer - OEE IntelliSuite</h3>
              <ul className="list-disc ml-8 space-y-2">
                <li className="text-xl text-gray-700 dark:text-gray-300">Built ML models for manufacturing analytics, including outlier detection and predictive analytics</li>
                <li className="text-xl text-gray-700 dark:text-gray-300">Performed data preprocessing and analysis using Python and SQL on high-volume industrial datasets</li>
                <li className="text-xl text-gray-700 dark:text-gray-300">Prototyped custom AI solutions using TensorFlow</li>
                <li className="text-xl text-gray-700 dark:text-gray-300">Contributed to SaaS model deployment workflows</li>
              </ul>
            </div>

            {/* Experience Item 2 - ProgramEarth with updated description */}
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-4">OpenSource Contributor - ProgramEarth</h3>
              <p className="text-xl mb-4 text-gray-700 dark:text-gray-300">Selected for a 10-week open-source fellowship focused on secure, scalable software development.</p>
              <ul className="list-disc ml-8 space-y-2">
                <li className="text-xl text-gray-700 dark:text-gray-300">Built full-stack features using React, Vue, TypeScript, GitHub Actions, CI/CD pipelines, and AWS.</li>
                <li className="text-xl text-gray-700 dark:text-gray-300">Strengthened DevSecOps skills through secure coding, test-driven development, and API authentication with tools like Postman, Auth0, and HashiCorp Vault.</li>
                <li className="text-xl text-gray-700 dark:text-gray-300">Participated in weekly pair programming, technical writing labs, and workshops on cloud, CI/CD, and developer experience.</li>
              </ul>
            </div>

            {/* Experience Item 3 */}
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-4">Software Engineer - Reality AI Lab</h3>
              <p className="text-xl mb-4 text-gray-700 dark:text-gray-300">Volunteering as a Software Developer at Marvel AI contributing to impactful open-source AI tools.</p>
              <ul className="list-disc ml-8 space-y-2">
                <li className="text-xl text-gray-700 dark:text-gray-300">Supporting global education and career development initiatives</li>
                <li className="text-xl text-gray-700 dark:text-gray-300">Full-stack JavaScript development</li>
                <li className="text-xl text-gray-700 dark:text-gray-300">Building accessible AI tools for diverse user groups</li>
              </ul>
            </div>

            {/* Experience Item 4 */}
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-4">Software Engineer / Data Scientist (Virtual Internships) - Forage</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">PwC</h4>
                  <ul className="list-disc ml-8">
                    <li className="text-xl text-gray-700 dark:text-gray-300">Performed predictive modelling and applied responsible AI practices on business cases</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">JPMorgan</h4>
                  <ul className="list-disc ml-8">
                    <li className="text-xl text-gray-700 dark:text-gray-300">Built dashboards using live stock feeds</li>
                    <li className="text-xl text-gray-700 dark:text-gray-300">Simulated financial data pipelines</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Skyscanner</h4>
                  <ul className="list-disc ml-8">
                    <li className="text-xl text-gray-700 dark:text-gray-300">Developed React-based travel app microservices for mobile-first design</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">BCG X</h4>
                  <ul className="list-disc ml-8">
                    <li className="text-xl text-gray-700 dark:text-gray-300">Contributed to GenAI financial chatbot using LLMs and automation logic</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience Item 5 */}
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-4">Business Development – OneTrust</h3>
              <p className="text-xl mb-4 text-gray-700 dark:text-gray-300">Utilized various sales and marketing tools to drive business growth:</p>
              <ul className="list-disc ml-8 space-y-2 grid grid-cols-2 md:grid-cols-3 gap-2">
                <li className="text-xl text-gray-700 dark:text-gray-300">Salesforce</li>
                <li className="text-xl text-gray-700 dark:text-gray-300">Salesloft</li>
                <li className="text-xl text-gray-700 dark:text-gray-300">Outreach</li>
                <li className="text-xl text-gray-700 dark:text-gray-300">ZoomInfo</li>
                <li className="text-xl text-gray-700 dark:text-gray-300">LinkedIn Navigator</li>
                <li className="text-xl text-gray-700 dark:text-gray-300">Vidyard</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education & Certs Section */}
        <section id="education" className="space-y-8">
          <h2 className="text-6xl font-semibold border-b-2 border-yellow-300 dark:border-yellow-700 pb-4">Education & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-6">Education</h3>
              <ul className="space-y-6">
                <li className="border-l-4 border-yellow-400 dark:border-yellow-600 pl-4 py-2">
                  <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">B.Sc. in Computer Science</h4>
                  <p className="text-xl text-gray-700 dark:text-gray-300">Western Governors University</p>
                </li>
                <li className="border-l-4 border-yellow-400 dark:border-yellow-600 pl-4 py-2">
                  <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Artificial Intelligence Analysis, Design and Implementation</h4>
                  <p className="text-xl text-gray-700 dark:text-gray-300">Graduate Certificate - Durham College</p>
                </li>
                <li className="border-l-4 border-yellow-400 dark:border-yellow-600 pl-4 py-2">
                  <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Diploma in Hotel & Restaurant Management</h4>
                  <p className="text-xl text-gray-700 dark:text-gray-300">NBCC</p>
                </li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-6">Certifications</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-yellow-400 dark:bg-yellow-600 mt-1 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Applied Data Science Lab</h4>
                    <p className="text-lg text-gray-700 dark:text-gray-300">WorldQuant</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-yellow-400 dark:bg-yellow-600 mt-1 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Deep Learning for Computer Vision</h4>
                    <p className="text-lg text-gray-700 dark:text-gray-300">WorldQuant</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-yellow-400 dark:bg-yellow-600 mt-1 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Prompt Engineering</h4>
                    <p className="text-lg text-gray-700 dark:text-gray-300">ZTM + Udemy</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-yellow-400 dark:bg-yellow-600 mt-1 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Python ML Bootcamp</h4>
                    <p className="text-lg text-gray-700 dark:text-gray-300">Uvaro</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-yellow-400 dark:bg-yellow-600 mt-1 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Tech Sales</h4>
                    <p className="text-lg text-gray-700 dark:text-gray-300">Uvaro</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-yellow-400 dark:bg-yellow-600 mt-1 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Complete A.I. Machine Learning and Data Science</h4>
                    <p className="text-lg text-gray-700 dark:text-gray-300">Zero to Mastery</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Communities Section */}
          <div id="communities" className="mt-12">
            <h2 className="text-6xl font-semibold border-b-2 border-yellow-300 dark:border-yellow-700 pb-4">Communities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Rewriting the Code */}
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="relative h-48 w-full">
                  <Image
                    src={RTCImg}
                    alt="Rewriting the Code"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Rewriting the Code</h4>
                  <p className="text-lg text-gray-700 dark:text-gray-300">Active member of Rewriting the Code, a national community empowering college and early-career women in tech through mentorship, networking, and professional development.</p>
                </div>
              </div>

              {/* The Tech Girlies */}
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="relative h-48 w-full">
                  <Image
                    src={TGImg}
                    alt="The Tech Girlies"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">The Tech Girlies</h4>
                  <p className="text-lg text-gray-700 dark:text-gray-300">Engaged in The Tech Girlies community, supporting women and non-binary individuals in tech through inclusive dialogue, opportunities, and resource sharing.</p>
                </div>
              </div>

              {/* Women in Tech */}
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="relative h-48 w-full">
                  <Image
                    src={WomenInTechImg}
                    alt="Women in Tech"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Women in Tech®</h4>
                  <p className="text-lg text-gray-700 dark:text-gray-300">Member of Women in Tech® Global Movement, contributing to global efforts to close the gender gap in technology through advocacy and knowledge exchange.</p>
                </div>
              </div>

              {/* Zero to Mastery */}
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="relative h-48 w-full">
                  <Image
                    src={ZTMImg}
                    alt="Zero to Mastery"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Zero to Mastery (ZTM) Community</h4>
                  <p className="text-lg text-gray-700 dark:text-gray-300">Participate in the Zero to Mastery learning community to advance technical skills, collaborate with peers, and stay current with software development trends.</p>
                </div>
              </div>

              {/* ADPList */}
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="relative h-48 w-full">
                  <Image
                    src={ADPListImg}
                    alt="ADPList"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">ADPList</h4>
                  <p className="text-lg text-gray-700 dark:text-gray-300">Regular mentee and community participant on ADPList, receiving guidance and insights from global tech professionals to grow career and leadership capabilities.</p>
                </div>
              </div>

              {/* Program Earth Fellowship */}
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="relative h-48 w-full">
                  <Image
                    src={ProgramEarthImg}
                    alt="Program Earth Fellowship"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Program Earth Fellowship</h4>
                  <p className="text-lg text-gray-700 dark:text-gray-300">Selected as a Program Earth Fellow, joining a global network of early-career professionals committed to using technology for social and environmental impact.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-8 pb-24">
          <h2 className="text-6xl font-semibold border-b-2 border-yellow-300 dark:border-yellow-700 pb-4">Reach Out</h2>
          <p className="text-yellow-600 dark:text-yellow-400 text-3xl">Drop me a line so I can reach out to you!</p>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="border dark:border-gray-700 dark:bg-gray-800 p-6 w-full rounded-lg text-2xl"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border dark:border-gray-700 dark:bg-gray-800 p-6 w-full rounded-lg text-2xl"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="border dark:border-gray-700 dark:bg-gray-800 p-6 w-full rounded-lg text-2xl"
              required
            ></textarea>
            <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white px-12 py-6 rounded-lg text-2xl font-medium tracking-wide">
              Submit
            </button>
            {status && (
              <p className={`pt-4 text-2xl ${
                status === 'Sending...' ? 'text-yellow-600' :
                status.includes('success') ? 'text-green-600' : 'text-red-600'
              } dark:text-opacity-90`}>
                {status}
              </p>
            )}
          </form>
        </section>
      </div>
    </div>
  );
}
