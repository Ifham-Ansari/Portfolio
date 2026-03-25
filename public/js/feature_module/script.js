import { project_box } from "../main.js";

const projectsData = [

  {
    name: "Ez Qanoon – AI Legal Chatbot for Pakistani Laws",
    url: "/assets/img/ez_qanoon.png",
    type: "Office",
    year: "2025",
    description: "Ez Qanoon is an AI-powered legal chatbot built specifically for Pakistani laws. The system is trained on scraped judgments, statutes, and legal documents collected from authentic Pakistani legal sources. It allows users to ask legal questions in natural language and receive accurate, context-aware explanations, summaries, and relevant legal references based on real Pakistani case law.",
    link: "https://ezqanoon.com/"
  },
  {
    name: "IWM CRM - AI powered CRM for Pharma Vendors",
    url: "/assets/img/iwm_crm.png",
    type: "Office",
    year: "2025",
    description: "AI-powered CRM built for pharma vendors, featuring team management, lead tracking, and integrated communication. Includes human and AI-based calling with automatic transcripts and summaries. Enables automated lead engagement using intelligent AI agents with a knowledge base.",
    link: "https://iwmcrm.com/"
  },
  {
    name: "Brand Wings - Marketing Agency",
    url: "/assets/img/brandwings.png",
    type: "Client",
    year: "2024",
    description: "A comprehensive marketing agency platform built with MERN stack. Features include campaign management, client portfolio, analytics dashboard, and real-time collaboration tools for marketing teams.",
    link: "https://brandwings.online/"
  },
  {
    name: "Audifyer – PPT to Interactive Video Generator",
    url: "/assets/img/audifyer.png",
    type: "Office",
    year: "2025",
    description: "Audifyer is an AI-powered platform that transforms PowerPoint presentations into interactive videos. Users can upload a PPT file, and Audifyer generates a video where slides animate sequentially while synchronized audio narrates the content. Each slide's text is read aloud at the precise moment it appears, providing a seamless and engaging presentation experience.",
    link: "https://app.audifyer.com/"
  },
  {
    name: "AI-Powered Industry WhatsApp Chatbot Suite",
    url: "/assets/img/whatsapp.png",
    type: "Clients/Office",
    year: "2024-25",
    description: "A scalable suite of AI-powered WhatsApp chatbots designed for multiple industries including men’s fashion retail, aesthetic clinics, dental clinics, and real estate. The system automates customer conversations, lead qualification, appointment scheduling, product and property inquiries, and follow-ups using intelligent conversation flows. Built to improve response speed, reduce operational workload, and drive higher conversions through 24/7 automated engagement.",
    link: "https://github.com/Ifham-Ansari"
  },
  {
    name: "E-commerce Platform",
    url: "/assets/img/e-commerce.png",
    type: "Client",
    year: "2025",
    description: "Full-featured e-commerce solution. Includes product catalog, shopping cart, secure payment integration, order management, customer reviews, and admin dashboard.",
    link: "https://stage.1and5tech.com/"
  },
  {
    name: "RAG-Based Semantic QA Dashboard",
    url: "/assets/img/raq_qa_img.png",
    type: "Personal",
    year: "2025",
    description: "An intelligent document assistant that lets users upload and preview files, then ask smart questions using semantic (RAG-based) search. It automatically generates concise summaries and key points, allows PDF downloads of results, and supports light/dark mode for a comfortable reading experience.",
    link: "https://rag-based-document-chatbot-summarizer-6opr.onrender.com/"
  },
  {
    name: "Doctor AI – Chatbot that Diagnose Patient & Recommend Doctor",
    url: "/assets/img/doctor_ai.png",
    type: "Personal(FYP)",
    year: "2025",
    description: "Doctor AI is an intelligent healthcare chatbot designed to assist users in preliminary medical diagnosis & recommend suitable doctors based on their symptoms. The chatbot uses OpenAI’s models to interpret user-reported symptoms and determine the appropriate medical specialization. It then matches the identified specialization with the nearest available doctor.",
    link: "https://doctor-ai-gold.vercel.app/"
  },
  {
    name: "Gavora – AI Assisted Diagnostic Telegram Bot for Migrant Women",
    url: "/assets/img/gavoraa.png",
    type: "Client(NGO)",
    year: "2024",
    description: "Gavora is an AI-powered Telegram bot that runs a confidential survey for migrant women, assessing emotional wellbeing, legal awareness, and social integration. It uses adaptive questions, allows users to skip sensitive topics, and generates personalized summaries with recommended support resources. Built with the Telegram Bot API, n8n, and Google Sheets, it prioritizes privacy, consent, and accessibility while helping NGOs deliver targeted support.",
    link: "https://github.com/Ifham-Ansari"
  },
  {
    name: "Cybersecurity Monitoring and Analytics Dashboard",
    url: "/assets/img/siem.png",
    type: "Client",
    year: "2025",
    description: "Built a SIEM platform to collect, process, and visualize system and network logs for proactive security monitoring. Features include real-time log ingestion, threat detection using correlation rules, interactive dashboards for visualizing security events, and alerting mechanisms for incident response.",
    link: "https://github.com/Ifham-Ansari"
  }
];

export default () => {
  class ProjectShowCase {
    constructor(data) {
      this.name = data.name;
      this.url = data.url;
      this.project = data.type;
      this.year = data.year;
      this.description = data.description;
      this.link = data.link;
    }

    exec() {
      const hasValidLink = this.link && this.link !== "#" && this.link.trim() !== "";

      let html = `
            <div class="swiper-slide shadow-[0px_0px_20px_2.5px_rgba(0,_0,_0,_0.1)] min-w-[650px] max-md:min-w-[100%]">
              <section class="rounded-md overflow-hidden bg-black_two_clr w-full h-full relative ">
                <div class="absolute left-0 top-0 h-full w-full bg-black/30"></div>   
                <div class="grid gap-5 sm:p-10 p-5 z-10 relative">
                  <div class="flex justify-between items-center gap-5">
                    <h1 class="font_xl poppins-bold">${this.name}</h1>
                    ${hasValidLink ? `
                    <a href="${this.link}" target="_blank" class="primary-button scale-75 origin-right">
                      <svg viewBox="0 0 24 24" class="primary-button-arr-2"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                      <span class="primary-button-text">View Project</span>
                      <span class="primary-button-circle"></span>
                      <svg viewBox="0 0 24 24" class="primary-button-arr-1"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                    </a>
                    ` : ""}
                  </div>
                  <div style="background-image: url(${this.url}); background-repeat: no-repeat; background-size: cover; background-position: center" class="rounded-lg h-80 max-md:h-60"></div>
                  <div class="md:flex md:justify-between md:gap-10 gap-5 max-md:grid">
                    <div class="md:grid md:gap-2 flex justify-between items-center">
                      <div>
                        <span class="uppercase text-text_two_clr">project</span>
                        <span class="md:capitalize montserrat_regular uppercase">${this.project}</span>
                      </div>
                      <div>
                        <span class="uppercase text-text_two_clr">year</span>
                        <span class="md:capitalize montserrat_regular uppercase">${this.year}</span>
                      </div>
                    </div>
                    <div class="grid gap-2 content-start">
                        <span class="uppercase text-text_two_clr">description</span>
                        <span class="lowercase montserrat_regular text-justify">${this.description}</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            `;

      project_box.insertAdjacentHTML("beforeend", html);
    }
  }

  // Render all projects from data
  projectsData.forEach(project => {
    new ProjectShowCase(project).exec();
  });
};
