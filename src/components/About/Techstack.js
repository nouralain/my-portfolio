import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs, SiSolidity } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import postgresql from "../../Assets/TechIcons/postgresql.svg";
import auth from "../../Assets/TechIcons/auth.svg";
import prisma from "../../Assets/TechIcons/prisma.svg";
import convex from "../../Assets/TechIcons/convex.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import clerk from "../../Assets/TechIcons/clerk.svg";
import sanity from "../../Assets/TechIcons/sanity.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import bootstrap from "../../Assets/TechIcons/bootstrap.svg";
import shadcn from "../../Assets/TechIcons/shadcn.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import tanstack from "../../Assets/TechIcons/tanstack.svg";
import zod from "../../Assets/TechIcons/zod.svg";

function Techstack() {
  const iconImgStyle = {
  width: "30px",    
  height: "30px",    
  objectFit: "contain", 
  marginBottom: "10px"
};
  return (
   <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  
  <Col xs={4} md={2} className="tech-icons">
    <img src={Javascript} alt="javascript" style={iconImgStyle} />
    <div className="tech-icons-text">Javascript</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <img src={Typescript} alt="typescript" style={iconImgStyle} />
    <div className="tech-icons-text">Typescript</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <img src={ReactIcon} alt="react" style={iconImgStyle} />
    <div className="tech-icons-text">React.Js</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <img src={Redux} alt="redux" style={iconImgStyle} />
    <div className="tech-icons-text">Redux</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <img src={tanstack} alt="TanStack Query" style={iconImgStyle} />
    <div className="tech-icons-text">TanStack Query</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiNextdotjs style={{ fontSize: "50px", marginBottom: "10px" }} />
    <div className="tech-icons-text">Next.js</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <img src={postgresql} alt="Postgresql" style={iconImgStyle} />
    <div className="tech-icons-text">Postgresql</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <img src={convex} alt="Convex" style={iconImgStyle} />
    <div className="tech-icons-text">Convex</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <img src={prisma} alt="Prisma" style={iconImgStyle} />
    <div className="tech-icons-text">Prisma</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <img src={auth} alt="Auth.js" style={iconImgStyle} />
    <div className="tech-icons-text">Auth.js</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <img src={clerk} alt="Clerk" style={iconImgStyle} />
    <div className="tech-icons-text">Clerk</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <img src={sanity} alt="Sanity" style={iconImgStyle} />
    <div className="tech-icons-text">Sanity</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <img src={Tailwind} alt="tailwind" style={iconImgStyle} />
    <div className="tech-icons-text">Tailwind CSS</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <img src={bootstrap} alt="Bootstrap" style={iconImgStyle} />
    <div className="tech-icons-text">Bootstrap</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <img src={MUI} alt="mui" style={iconImgStyle} />
    <div className="tech-icons-text">Material UI</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <img src={shadcn} alt="ShadCn" style={iconImgStyle} />
    <div className="tech-icons-text">ShadCn</div>
  </Col>
 
  <Col xs={4} md={2} className="tech-icons">
    <img src={zod} alt="Zod" style={iconImgStyle} />
    <div className="tech-icons-text">Zod</div>
  </Col>
</Row>
  );
}

export default Techstack;
