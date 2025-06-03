import { ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import Work from "../how-we-work/work";
import Industries from "../../../industries/industries";
import { LampDemo } from "../../lamp/lamp";
import ContactForm from "../../../../components/contactform";

export const BackgroundWrapperByAnima = (): JSX.Element => {
  // Data for the "How we work" section
  const workProcessSteps = [
    {
      title: "Discovery Workshops",
      description:
        "Collaborative sessions focused on clear outcomes (user stories, a project backlog, an architecture diagram, etc.). Active client participation helps set clear requirements, question assumptions, and choose the best technologies.",
    },
    {
      title: "Design & Prototyping",
      description:
        "Focus on design for scale, security, and maintainability first, often building technical prototypes to validate complex components or integrations early.",
    },
    {
      title: "Incremental & Iterative Development with Sprints",
      description:
        "Incremental development led by our Scrum team focuses on delivering business value within agreed technical and quality rules.",
    },
    {
      title: "Continuous Integration & Delivery",
      description:
        "Automated pipelines ensure consistent builds, rigorous automated testing, and reliable deployments, increasing velocity and reducing integration risks.",
    },
    {
      title: "Proactive Quality Assurance",
      description:
        "QA is integrated from the start, including performance testing, security scanning, and adherence to best practices (OWASP, etc.) beyond basic functional checks.",
    },
    {
      title: "Smooth Deployment & Handover",
      description:
        "Easy transition to your chosen platform (AWS, Azure, GCP) with detailed documentation for long-term success.",
    },
  ];

  // Data for the tech stack section
  const techStackCategories = [
    {
      category: "LANGUAGES & FRAMEWORKS",
      technologies:
        "Python (Django, Flask, FastAPI), Node.js (Express.js, NestJS), .NET, React, React Native, Angular, Vue.js, TypeScript",
    },
    {
      category: "DATABASES & STORAGE",
      technologies:
        "PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch, Cassandra, SQL Server, S3, Data Lakes",
    },
    {
      category: "CLOUD & INFRASTRUCTURE",
      technologies:
        "AWS, Azure, GCP, Docker, Kubernetes, Terraform, Serverless Architectures",
    },
    {
      category: "AI/ML & DATA",
      technologies:
        "TensorFlow, PyTorch, scikit-learn, pandas, NumPy, Spark, Airflow, ML Ops platforms",
    },
    {
      category: "APIS & MESSAGING",
      technologies: "REST, GraphQL, gRPC, RabbitMQ, Kafka",
    },
    {
      category: "DEVOPS & QUALITY",
      technologies:
        "Jenkins, GitLab CI, GitHub Actions, Prometheus, Grafana, ELK Stack, Cypress, Selenium, Pytest, SonarQube",
    },
    {
      category: "WAY OF WORKING",
      technologies:
        "Scrum, Kanban, Extreme Programing(XP), custom approach (e.g. hybrid), DevOps, Test-Driven Development (TDD), Behavior-Driven Development (BDD), Product Management, Project management, Waterfall, Prince2 Agile",
    },
  ];

  // Data for web app development services
  const webAppServices = [
    "Custom LMS Development",
    "Scalable eLearning Platforms",
    "Digital Visiting Card Solutions",
    "AI-Powered Learning Recommendations",
    "Mobile Learning Solutions",
    "Contactless Networking Tools",
    "Third-Party Integrations (Zoom, Microsoft Teams, WhatsApp)",
  ];

  // Data for "Why STX Next" section
  const whyStxNextCards = [
    {
      title: "Innovators, Not Just Developers:",
      description:
        "Our team of experts specializes in education technology and digital networking solutions, solving challenges others can't.",
    },
    {
      title: "Specialized Expertise:",
      description:
        "From AI-powered LMS features to contactless Digital Visiting Cards, we deliver niche solutions tailored to your needs",
    },
    {
      title: "Strategic Partnership:",
      description:
        "We provide more than tools—we offer guidance to ensure your learning and networking goals are met.",
    },
    {
      title: "Proven Results",
      description:
        "A track record of empowering organizations with scalable, user-friendly platforms.",
    },
    {
      title: "Strategic Technical Partnership",
      description:
        "We provide more than code; we offer proactive technical guidance, challenge assumptions constructively, and make sure the solution aligns with your long-term business goals.",
    },
    {
      title: "Strategic Partnership:",
      description:
        "We provide more than tools—we offer guidance to ensure your learning and networking goals are met.",
    },
       {
      title: "Proven Problem Solvers",
      description:
        "A track record of successfully untangling complex legacy systems, architecting for massive scale, and delivering innovative features others deemed impossible.",
    },
  ];

  // Data for industries section
  const industries = [
    { name: "Finance", isActive: true },
    { name: "Healthcare", isActive: false },
    { name: "SaaS", isActive: false },
    { name: "eCommerce", isActive: false },
    { name: "Manufacturing", isActive: false },
    { name: "Education", isActive: false },
  ];

  // Data for finance industry features
  const financeFeatures = [
    {
      title: "Spotting fraud before it happens",
      description:
        "With our AI-driven analytics, financial institutions can catch fishy transactions and keep fraudsters at bay.",
    },
    {
      title: "Building safe havens for users",
      description:
        "Develop secure, user-friendly banking platforms that protect every click and keystroke, making customers feel at ease.",
    },
    {
      title: "Smooth sailing between systems",
      description:
        "Set up smooth API integrations so your systems and third-party apps talk without a hitch, making your workflow a walk in the park.",
    },
  ];

  // Data for case studies
  const caseStudies = [
    {
      logo: "/lms_logo.png",
      title: "LMS Elite",
      description:
        "Transforming education for a leading university, we developed a scalable LMS platform for 10,000+ students. Features like AI-powered course recommendations and gamification increased student engagement by 40%.",
      category: "LMS",
      backgroundImage: "./lms.png",
    },
    {
      logo: "/cardo.png",
      title: "Smart Networking with Digital Visiting Cards",
      description:
        "For a growing startup, we created a Digital Visiting Card solution with contactless sharing via QR codes and NFC. This helped their sales team increase lead generation by 25%.",
      category: "digital identity",
      backgroundImage: "/card-img.png",
    },
    
  ];

  // Data for testimonials
  const testimonials = [
    {
      text: "We were able to scale up instantly, adding developers with the specific technical expertise that we needed and then rotating them out when the problem had been solved. At a much smaller firm that would have been very difficult. So far there hasn't been any challenge that STX Next hasn't been able to overcome.",
      name: "Matthew Brooke-Hitching",
      position: "CEO - MEET.MBA",
    },
  ];

  // Data for reviews
  const reviews = [
    {
      rating: "5.0",
      text: "YSB displayed exemplary project management throughout our collaboration.",
      position: "Rajesh Kumar",
      company: "CLOUDCOMPLI",
      verifiedDate: "Verified by Clutch, Jan 17, 2024",
    },
    {
      rating: "5.0",
      text: "Ysb has been a great partner in helping us reach our goals.",
      position: "Pranav",
      company: "REAL ESTATE TECHNOLOGY COMPANY",
      verifiedDate: "Verified by Clutch, Nov 8, 2024",
    },
    {
      rating: "5.0",
      text: "I appreciate the flexibility with which they roll teammates on and off the project.",
      position: "Chief Technology Officer",
      company: "JOHN",
      verifiedDate: "Verified by Clutch, Jan 12, 2023",
    },
    {
      rating: "5.0",
      text: "They're very inquisitive engineers, plugged in designers, and want to know your business in a genuine way.",
      position: "Vinay Sharma",
      company: "ALPHA TECHNOLOGY, MAN GROUP",
      verifiedDate: "Verified by Clutch, Jun 30, 2020",
    },
  ];

  return (
    <div className="relative w-full [background:linear-gradient(180deg,rgba(0,0,0,1)_56%,rgba(244,244,244,1)_100%)]">
      <div className="relative mx-auto max-w-7xl">
        {/* Case studies section */}
        <section className="bg-white p-4 sm:p-8 mt-8 sm:mt-16 rounded-[20px]">
          <h2 className="text-2xl sm:text-3xl md:text-5xl text-[#232323] text-center [font-family:'Figtree',Helvetica] leading-tight sm:leading-[58px] mb-6 sm:mb-12">
            Some of the solutions we've delivered:
            <br className="hidden sm:block" />
          </h2>
          
          <div className="space-y-4 sm:space-y-8">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="bg-white border-[#dcdcdc] rounded-2xl"
              >
                <CardContent className="p-3 sm:p-4 flex flex-col md:flex-row gap-4">
                  <div className="bg-[#f4f4f4] rounded-xl p-4 sm:p-8 flex flex-col justify-between w-full md:w-1/2">
                    <div>
                      <div className="h-10 sm:h-12 md:h-16 mb-4 sm:mb-6 md:mb-12">
                        <img
                          src={study.logo}
                          alt={`${study.title} logo`}
                          className="h-full object-contain"
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl text-[#232323] [font-family:'Inter',Helvetica] leading-tight sm:leading-[34px] mb-2 sm:mb-3 md:mb-4">
                        {study.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-[#6d6c6c] [font-family:'Inter',Helvetica] leading-snug sm:leading-[22px]">
                        {study.description}
                      </p>
                    </div>
                    
                    <Button 
                      className="bg-black text-white rounded-[40px] px-4 sm:px-5 md:px-7 py-2 sm:py-3 md:py-4 text-xs sm:text-sm mt-4 sm:mt-6 md:mt-8 w-fit"
                      onClick={() => window.location.href = '/products'}
                    >
                      Know more
                      <ChevronRightIcon className="h-2 w-2 sm:h-3 sm:w-3 ml-1 sm:ml-2" />
                    </Button>
                  </div>
                  
                  <div
                    className="rounded-xl p-4 flex justify-end items-start w-full md:w-1/2 bg-cover bg-center h-40 sm:h-48 md:h-auto mt-3 md:mt-0"
                    style={{ backgroundImage: `url(${study.backgroundImage})` }}
                  >
                    <span className="text-white text-[8px] sm:text-[10px] font-medium tracking-[1px] leading-3 [font-family:'Inter',Helvetica] px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full border border-white">
                      {study.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Work />
        
        <div className="-z-0">
          <Industries/>
        </div>
        
       

        <section className="relative bg-white rounded-[20px] p-4 sm:p-8 mt-12 sm:mt-20">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
            <div className="w-full md:w-1/2">
              <div className="h-[300px] sm:h-[400px] md:h-[565px] rounded-3xl bg-[url(/main.jpeg)] bg-cover bg-center" />
            </div>

            <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
              <div className="flex items-center">
                <img
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                  alt="Component"
                  src="/component-1-56.svg"
                />
              </div>

              <div className="flex flex-wrap items-center gap-1">
                <span className="text-[#232323] text-lg sm:text-xl md:text-2xl [font-family:'Inter',Helvetica] leading-6 sm:leading-7 md:leading-[34px]">
                  "Building modern learning and
                </span>
                <span className="px-2 sm:px-3 py-0.5 rounded-full border border-[#00b2a9] text-[#232323] text-lg sm:text-xl md:text-2xl [font-family:'Inter',Helvetica] leading-6 sm:leading-7 md:leading-[34px]">
                  networking solutions
                </span>
                <span className="text-[#232323] text-lg sm:text-xl md:text-2xl [font-family:'Inter',Helvetica] leading-6 sm:leading-7 md:leading-[34px]">
                  in 2025 can be
                </span>
                <span className="px-2 sm:px-3 py-0.5 rounded-full border border-[#00b2a9] text-[#232323] text-lg sm:text-xl md:text-2xl [font-family:'Inter',Helvetica] leading-6 sm:leading-7 md:leading-[34px]">
                  tough
                </span>
                <span className="text-[#232323] text-lg sm:text-xl md:text-2xl [font-family:'Inter',Helvetica] leading-6 sm:leading-7 md:leading-[34px]">
                  .
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#232323] [font-family:'Inter',Helvetica] leading-5 sm:leading-[22px]">
                Whether you're managing large-scale training programs, integrating AI into education, or transitioning to digital networking, outdated tools and complex requirements can lead to inefficiencies.
                <br className="hidden sm:block" />
                At our compnay, we create scalable LMS platforms and Digital Visiting Cards that integrate seamlessly into your workflows, ensuring flexibility and growth."
              </p>

              <p className="text-sm sm:text-base text-[#232323] [font-family:'Inter',Helvetica] leading-5 sm:leading-[22px]">
                we excel at creating scalable and maintainable
                solutions, smoothly integrating into
                <br className="hidden sm:block" />
                your existing setup. We design them to handle any complex needs
                and grow with you.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 mt-8 sm:mt-16">
            <div className="w-full md:w-1/2 space-y-6 sm:space-y-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#232323] [font-family:'Figtree',Helvetica] leading-tight sm:leading-[58px]">
                Tell us about your learning
                <br className="hidden sm:block" />
                and networking needs
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-[#232323] [font-family:'Inter',Helvetica] leading-6 sm:leading-7">
                "Our team can deliver tailored solutions in under 2 weeks
                <br className="hidden sm:block" />
                ensuring secure, scalable, and user-friendly platforms.
              </p>

              <Button className="bg-[#00b2a9] text-white rounded-[40px] px-5 sm:px-6 md:px-7 py-3 sm:py-4 text-sm" onClick={() => window.location.href = '/contact'}>
                LET'S TALK
                <ChevronRightIcon className="h-3 w-3 ml-2" />
              </Button>
            </div>

            <div className="w-full md:w-1/2">
            <Card className="bg-[#f2f2f2] border-[#d1d1d1] rounded-3xl h-full">
              <CardContent className="p-0">
                {webAppServices.map((service, index) => (
                  <p key={index} className="px-4 sm:px-7 py-4 sm:py-8 text-[#232323] text-lg sm:text-xl md:text-2xl [font-family:'Inter',Helvetica] leading-6 sm:leading-7 md:leading-[34px]">
                    {service}
                  </p>
                ))}
              </CardContent>
            </Card>
            </div>
          </div>
        </section>

        
      </div>
    </div>
  );
};
