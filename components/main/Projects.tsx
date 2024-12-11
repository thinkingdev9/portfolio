import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className="h-full w-full grid grid-cols-3 gap-10 p-10">
                <ProjectCard
                    src="/robby-pic.png"
                    title="🤖 Robby-chatbot"
                    description="Robby-chatbot is an AI-powered chatbot designed to enable users to interact with and analyze data from CSV, PDF, TXT files, and YouTube videos intuitively, featuring conversational memory. Built using Python and Streamlit, it allows local deployment for personalized use and encourages community contributions for further development."
                    link="https://github.com/thinkingdev9/Robby-chatbot"
                />
                <ProjectCard
                    src="/boilerplate.png"
                    title="SaaS Boilerplate"
                    description="The Next.js SaaS Boilerplate is a free, open-source template designed for building scalable SaaS applications with minimal effort, featuring Next.js, Tailwind CSS, and Shadcn UI. It includes essential features like authentication, multi-tenancy, role management, SEO optimization, error reporting, testing, and deployment, making it a robust starting point for SaaS development."
                    link="https://github.com/thinkingdev9/SaaS-Boilerplate"
                />
                <ProjectCard
                    src="/Companion.ai.png"
                    title="Companion.ai"
                    description="Companion.ai is a modern SaaS platform built with Next.js 14, offering AI-powered assistants for various functionalities, integrated with tools like Clerk for authentication, Stripe for subscriptions, and OpenAI for AI features. It utilizes a robust tech stack including React, Prisma, MySQL, Tailwind CSS, and cloud services like Pinecone, Upstash Redis, and Cloudinary, providing a seamless and scalable user experience."
                    link="https://github.com/thinkingdev9/companion-ai"
                />
                <ProjectCard
                    src="/Winnie.png"
                    title="🐱 Winnie - WhatsApp AI Chatbot"
                    description="Winnie is an AI-powered WhatsApp chatbot that leverages OpenAI GPT-3 for conversational responses and integrates with the WhatsApp Business Cloud API. It is built using Node.js, Express, Redis, and Docker, with additional tools like ElasticSearch and Nginx, and includes a CI/CD pipeline via GitHub Actions for seamless deployment."
                    link="https://github.com/thinkingdev9/whatsapp-chatbot"
                />
                <ProjectCard
                    src="/DuHealth.png"
                    title="DuHealth App"
                    description="DuHealth is a React Native-based healthcare frontend UI design that features a splash screen, swipe screens, a home dashboard, and interactive elements like deck cards and charts. It utilizes tools like Async Storage for persistent data, React Chart Kit for visualizations, and React SVG for vector graphics, providing a dynamic and engaging user experience."
                    link="https://github.com/thinkingdev9/DuHealth-App"
                />
                <ProjectCard
                    src="/CliqApp.jpg"
                    title="CliqApp"
                    description="CliqApp is an eCommerce application built using React Native, compatible with both Android and iOS platforms, designed with similarities to the Tata Cliq App for educational purposes. It provides a functional demo and encourages contributions for further development, with a video walkthrough available for reference."
                    link="https://github.com/thinkingdev9/CliqApp"
                />
            </div>
        </div>
    );
};

export default Projects;