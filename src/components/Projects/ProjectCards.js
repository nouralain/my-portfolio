import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
 <Card className="project-card-view" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
  <Card.Img variant="top" src={props.imgPath} alt="card-img" />
  <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
    <div>
      <Card.Title style={{ fontWeight: "bold" }}>{props.title}</Card.Title>
      
      <Card.Text style={{ textAlign: "justify", fontSize: "0.95em", opacity: 0.85, marginBottom: "15px" }}>
        {props.description}
      </Card.Text>

      {/* Modern Badge-style Tech Stack Render */}
      {props.techStack && (
        <div style={{ marginBottom: "20px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {props.techStack.split(",").map((tech, index) => (
            <span
              key={index}
              style={{
                backgroundColor: "rgba(143, 64, 241, 0.15)", // Subtle purple tint matching your theme
                color: "#8f40f1",
                padding: "4px 10px",
                borderRadius: "15px",
                fontSize: "0.75em",
                fontWeight: "600",
                letterSpacing: "0.5px"
              }}
            >
              {tech.trim()}
            </span>
          ))}
        </div>
      )}
    </div>

    {/* Buttons wrapper pushed down cleanly */}
    <div style={{ marginTop: "auto", display: "flex", gap: "10px" }}>
      {props.ghLink && (
        <Button variant="primary" href={props.ghLink} target="_blank" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
      )}

      {!props.isBlog && props.demoLink && (
        <Button
          variant="primary"
          href={props.demoLink}
          target="_blank"
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <CgWebsite /> &nbsp;
          {"Demo"}
        </Button>
      )}
    </div>
  </Card.Body>
</Card>
  );
}
export default ProjectCards;
