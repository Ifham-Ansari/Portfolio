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
    name: "BrandWings – Digital Marketing & Development Agency",
    url: "/assets/img/brandwings.png",
    type: "Client",
    year: "2024",
    description: "BrandWings is a full-service digital agency offering web development, branding, marketing, SEO, and AI chatbot solutions. It helps businesses grow online through innovative design and modern technologies. The platform serves global clients with customized digital strategies and focuses on increasing visibility and engagement.",
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
    description: "A scalable suite of AI-powered WhatsApp chatbots for industries like men’s fashion, aesthetic and dental clinics, and real estate. It automates customer conversations, lead qualification, appointment scheduling, inquiries, and follow-ups boosting response speed, reducing workload, and driving higher conversions through 24/7 intelligent engagement.",
    link: "https://github.com/Ifham-Ansari"
  },
  {
    name: "1and5tech - Elite PC Hardware & Gaming Store",
    url: "/assets/img/e-commerce.png",
    type: "Client",
    year: "2025",
    description: "UK-based ecommerce store offering high-performance PC components and gaming accessories. It provides graphics cards, motherboards, RAM, cooling systems, and peripherals for gamers and PC builders. The platform focuses on quality hardware, competitive pricing, promotions, and secure GBP checkout for a reliable UK shopping experience.",
    link: "https://stage.1and5tech.com/"
  },
  {
    name: "AI LMS - Job Focused AI Training System",
    url: "/assets/img/ai_lms.png",
    type: "Office",
    year: "2025",
    description: "An AI-powered platform that helps employees discover and learn AI tools relevant to their job roles. Users input their job description via audio, and the system recommends the best AI tools, provides tutorials and blogs in seconds, and generates quizzes to test understanding. Upon passing, users receive certifications, enabling quick upskilling in AI tools without prior knowledge.",
    link: "https://ailms.thebotss.com/"
  },
  {
    name: "RAG-Based Semantic QA Dashboard",
    url: "/assets/img/raq_qa_img.png",
    type: "Personal",
    year: "2025",
    description: "An intelligent document assistant that enables users to upload and preview files, then ask smart, context-aware questions using semantic (RAG-based) search. It automatically generates concise summaries, extracts key points, and allows users to download results as PDFs. With support for light/dark mode, it offers a seamless and comfortable reading experience for efficient document analysis.",
    link: "https://rag-based-document-chatbot-summarizer-6opr.onrender.com/"
  },
  {
    name: "Doctor AI - Patient Diagnosis & Doctor Recommendation",
    url: "/assets/img/doctor_ai.png",
    type: "Personal(FYP)",
    year: "2025",
    description: "Doctor AI is an intelligent healthcare chatbot designed to assist users in preliminary medical diagnosis & recommend suitable doctors based on their symptoms. The chatbot uses OpenAI’s models to interpret user-reported symptoms and determine the appropriate medical specialization. It then matches the identified specialization with the nearest available doctor.",
    link: "https://doctor-ai-gold.vercel.app/"
  },
  {
    name: "Gavora – Smart Wellbeing Survey Bot",
    url: "/assets/img/gavoraa.png",
    type: "Client(NGO)",
    year: "2024",
    description: "Gavora is an AI-powered Telegram bot conducting confidential surveys for migrant women, assessing wellbeing, legal awareness, and social integration. It uses adaptive questions, allows skipping sensitive topics, and provides personalized summaries with support resources built with Telegram Bot API, n8n, and Google Sheets, prioritizing privacy and accessibility.",
    link: "https://github.com/Ifham-Ansari"
  },
  {
    name: "CyberShield SIEM Analytics & Dashboard",
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
                      <div class="grid">
                        <span class="uppercase text-text_two_clr">project</span>
                        <span class="md:capitalize montserrat_regular uppercase">${this.project}</span>
                      </div>
                      <div class="grid">
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
