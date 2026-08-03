import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import inlight from "../../Assets/Projects/inlight.png";
import cartify from "../../Assets/Projects/cartify.png";
import fluxcircle from "../../Assets/Projects/fluxcircle.png";
import nutriplan from "../../Assets/Projects/nutriplan.png";
import contacthub from "../../Assets/Projects/contacthub.png";
import ux from "../../Assets/Projects/ux.png";
import afaq from "../../Assets/Projects/afaq.png";

function Projects() {
  const prjects =[
    {
    imgPath:afaq,
    isBlog:false,
    title:"Afaq Group",
    description:"A high-performance website built for an exhibition and event management company. Features dynamic Sanity CMS content management, deep-linked multi-tab service displays, and a secure contact system with Server Actions with Zod validation, Resend email dispatch and custom domain email integration and Google Analytics tracking.",
    techStack:"Next.js, TypeScript, Sanity, Tailwind CSS, Shadcn",
    demoLink:"https://www.afaqegypt.com/",
    githubLink:""
    },
    {
    imgPath:inlight,
    isBlog:false,
    title:"In Light",
    description:"Engineered a production-grade market research platform powering MENA's first proprietary online consumer panel. Built from the ground up, the platform streamlines the complete lifecycle of consumer research, seamlessly connecting panelist onboarding, dynamic survey distribution, automated incentive tracking, and enterprise analytics.The architecture features four dedicated role-based portals for Admins, Clients, Consumer Respondents, and Medical Respondents, each equipped with tailored workflows and strict authentication access controls",
    techStack:"Next.js, TypeScript, Convex, Clerk, Tailwind CSS, Shadcn, Zod ",
    demoLink:"https://www.in-light.tech/",
    githubLink:""
    },
    {
    imgPath:cartify,
    isBlog:false,
    title:"Cartify",
    description:"Full-stack e-commerce platform with product browsing, filtering, cart, wishlist, and checkout.",
    techStack:"Next.js, TypeScript, Tailwind CSS, Shadcn, Zod, Auth.js, Redux Toolkit ",
    demoLink:"https://cartify-v2.vercel.app/",
    githubLink:""
    },
    {
    imgPath:fluxcircle,
    isBlog:false,
    title:"Flux Circle",
    description:"Social platform supporting post creation, likes, comments/replies, and real-time notifications.",
    techStack:"React.js, Javascript, Tailwind CSS, TanStack Query v5, Zod, HeroUI, Axios ",
    demoLink:"https://flux-circle-social-app-agw5.vercel.app",
    githubLink:"https://github.com/nouralain/FluxCircle-social-app"
    },
    {
    imgPath:nutriplan,
    isBlog:false,
    title:"Nutriplan",
    description:"Vanilla JS application for logging meals, tracking daily calorie intake, and visualizing weekly nutrition data — built with OOP principles for clean, maintainable architecture.",
    techStack:" Javascript, Bootstrap, OOP ",
    demoLink:"https://nutri-plan-rust.vercel.app",
    githubLink:"https://github.com/nouralain/NutriPlan"
    },
    {
    imgPath:contacthub,
    isBlog:false,
    title:"ContactHub ",
    description:"CRUD contact manager with Favorites and Emergency categories, supporting 1,000+ contacts.",
    techStack:"Javascript, Bootstrap",
    demoLink:"https://contact-hub-mu.vercel.app/",
    githubLink:"https://github.com/nouralain/ContactHub"
    },
    {
    imgPath:ux,
    isBlog:false,
    title:"UX Blog ",
    description:"Blog Website about tech, design, and culture.",
    techStack:"HTML,CSS",
    demoLink:"https://nouralain.github.io/The-UX-review-Blog-/",
    githubLink:"https://github.com/nouralain/The-UX-review-Blog-"
    },
  ]
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         {prjects.map((project,idx)=> <Col md={4} className="project-card">
  <ProjectCard
  key={idx}
    imgPath={project.imgPath}
    isBlog={project.isBlog}
    title={project.title}
    description={project.description}
    techStack={project.techStack}
    demoLink={project.demoLink}
    ghLink={project.githubLink}
  />
</Col>)}

     
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
