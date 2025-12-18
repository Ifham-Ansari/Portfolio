import { project_box } from "../main.js";

export default () => {
  class ProjectShowCase {
    constructor(name, url, project, year, description, link) {
      this.name = name;
      this.url = url;
      this.project = project;
      this.year = year;
      this.description = description;
      this.link = link;
    }

    exec() {
      // console.log(this.url);

      let html = `
            <div class="swiper-slide shadow-[0px_0px_20px_2.5px_rgba(0,_0,_0,_0.1)] min-w-[650px] max-md:min-w-[100%]">
              <section class="rounded-md overflow-hidden bg-black_two_clr w-full h-full relative ">
                <div class="absolute left-0 top-0 h-full w-full bg-black/30"></div>   
                <div class="grid gap-5 sm:p-10 p-5 z-10 relative">
                  <h1 class="font_xl poppins-bold ">${this.name}</h1>
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

  // MERN Stack Projects
  new ProjectShowCase(
    "Brand Wings - Marketing Agency",
    "/assets/img/image.png",
    "client",
    "2025",
    "A comprehensive marketing agency platform built with MERN stack. Features include campaign management, client portfolio, analytics dashboard, and real-time collaboration tools for marketing teams.",
    "#"
  ).exec();

  new ProjectShowCase(
    "Doctor AI – Medical Chatbot for Diagnosis & Doctor Recommendation",
    "/assets/img/image-copy.png",
    "Personal",
    "2025",
    "Doctor AI is an intelligent healthcare chatbot designed to assist users in preliminary medical diagnosis & recommend suitable doctors based on their symptoms. The chatbot uses OpenAI’s models to interpret user-reported symptoms and determine the appropriate medical specialization. It then matches the identified specialization with the nearest available doctor.",
    "#"
  ).exec();

  new ProjectShowCase(
    "Cybersecurity Monitoring and Analytics Dashboard",
    "/assets/img/SOC.png",
    "Client",
    "2025",
    "Built a SIEM platform to collect, process, and visualize system and network logs for proactive security monitoring. Features include real-time log ingestion, threat detection using correlation rules, interactive dashboards for visualizing security events, and alerting mechanisms for incident response.",
    "#"
  ).exec();

  new ProjectShowCase(
    "RAG-Based Semantic QA Dashboard",
    "/assets/img/rag.png",
    "Client",
    "2025",
    "An intelligent document assistant that lets users upload and preview files, then ask smart questions using semantic (RAG-based) search. It automatically generates concise summaries and key points, allows PDF downloads of results, and supports light/dark mode for a comfortable reading experience.",
    "#"
  ).exec();
  

  // Frontend Projects
  new ProjectShowCase(
    "Seo Jetz - Digital Marketing",
    "/assets/img/setjetz.png",
    "client",
    "2024",
    "SEO services website built with modern frontend technologies. Features include service showcase, case studies, SEO tools, client testimonials, and lead generation forms with analytics integration.",
    "#"
  ).exec();

  new ProjectShowCase(
    "E-commerce Platform",
    "public/assets/img/e-commerce.png",
    "client",
    "2025",
    "Full-featured e-commerce solution. Includes product catalog, shopping cart, secure payment integration, order management, customer reviews, and admin dashboard.",
    "#"
  ).exec();


};
