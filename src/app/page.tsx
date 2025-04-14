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
import BackgroundImg from "/public/Background.jpg";
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
            <ul className="flex gap-8 md:gap-12 justify-end text-lg md:text-xl font-medium">
              <li><a href="#about" className="hover:text-yellow-600 dark:hover:text-yellow-400">About</a></li>
              <li><a href="#projects" className="hover:text-yellow-600 dark:hover:text-yellow-400">Projects</a></li>
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
        <section id="projects" className="space-y-16">
          <h2 className="text-8xl font-bold border-b-2 border-yellow-300 dark:border-yellow-700 pb-4">Projects</h2>
          <div className="grid grid-cols-1 gap-16">
            {[{
              title: "AI-Powered Log Analysis Dashboard",
              description: "Built with scikit-learn, Dash, Plotly, and pandas. Full pipeline from log ingestion to interactive dashboard for anomaly detection and clustering.",
              link: "https://github.com/thao-1/AI-Powered-Log-Analysis-Dashboard-Project.git",
              image: LogBotImg
            }, {
              title: "RAG Chatbot for Patient Info",
              description: "RAG model with LangChain, FAISS, OpenAI, and FastAPI. Real-time QA with medical documents and full-stack deployment.",
              link: "https://github.com/thao-1/RAG-Chatbot-for-Patient-Info.git",
              image: RagImg
            }, {
              title: "Telco Customer Churn Prediction",
              description: "End-to-end ML pipeline using Random Forest + FastAPI REST API. Robust deployment-ready solution with modular design and logging.",
              link: "https://github.com/thao-1/Telco-Customer-Churn.git",
              image: ChurnImg
            }, {
              title: "Multi-Agent System with AutoGen",
              description: "Natural language to SQL app using GPT, OpenAI API, and custom metrics. Supports MySQL, SQLite, PostgreSQL with 100% execution accuracy.",
              link: "https://github.com/thao-1/Build-a-multi-agent-system-with-Autogen-.git",
              image: AutoGenImg
            }].map((project, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-12 items-center bg-yellow-50 dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="max-w-[200px] mx-auto">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={200} 
                    height={120} 
                    className="rounded-xl object-cover shadow-sm" 
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-4xl font-bold text-yellow-500 dark:text-yellow-400">{project.title}</h3>
                  <p className="text-2xl leading-relaxed">{project.description}</p>
                  <a href={project.link} target="_blank" className="text-yellow-600 dark:text-yellow-400 hover:underline font-medium text-xl inline-block">View on GitHub →</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-8">
          <h2 className="text-6xl font-semibold border-b-2 border-yellow-300 dark:border-yellow-700 pb-4">Technical Skills</h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
            <p className="text-3xl leading-relaxed">Python, Java, SQL, scikit-learn, TensorFlow, Keras, Pandas, NumPy, FastAPI, Dash, LangChain, Docker, Tableau, Power BI, Git, AWS, Azure, GCP</p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-8">
          <h2 className="text-6xl font-semibold border-b-2 border-yellow-300 dark:border-yellow-700 pb-4">Experience</h2>
          <ul className="list-disc ml-8 space-y-6">
            <li className="text-3xl leading-relaxed"><strong>Sales Rep – CIR Realty</strong>: Used Skyslope, social media analytics, Canva, Excel.</li>
            <li className="text-3xl leading-relaxed"><strong>Business Development – OneTrust / Tugboat Logic</strong>: Used Salesforce, Salesloft, Outreach, ZoomInfo, LinkedIn Navigator, Vidyard.</li>
            <li className="text-3xl leading-relaxed"><strong>Front Desk – Amsterdam Inn</strong>: Managed bookings with Skytouch PMS. Promoted loyalty program through customer engagement.</li>
          </ul>
        </section>

        {/* Education & Certs Section */}
        <section className="space-y-8">
          <h2 className="text-6xl font-semibold border-b-2 border-yellow-300 dark:border-yellow-700 pb-4">Education & Certifications</h2>
          <ul className="list-disc ml-8 space-y-4">
            <li className="text-3xl leading-relaxed">B.Sc. in Computer Science – Western Governors University</li>
            <li className="text-3xl leading-relaxed">Diploma in Hotel & Restaurant Management – NBCC</li>
            <li className="text-3xl leading-relaxed">Applied Data Science Lab – WorldQuant</li>
            <li className="text-3xl leading-relaxed">Deep Learning for Computer Vision – WorldQuant</li>
            <li className="text-3xl leading-relaxed">Prompt Engineering (ZTM + Udemy), Python ML Bootcamp, Tech Sales – Uvaro</li>
          </ul>
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
