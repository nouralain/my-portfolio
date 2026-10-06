import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
           <h1 style={{ fontSize: "2.6em" }}>
  LET ME <span className="purple"> INTRODUCE </span> MYSELF
</h1>
<p className="home-about-body">
  I’m a Full-Stack Developer who loves transforming ideas into 
  complete, production-ready web products. I specialize in building 
  highly interactive interfaces backed by modern serverless architectures and efficient data layers.
  <br />
  <br />
  I’m proficient in
  <i>
    <b className="purple">
      {" "}
      JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, MongoDB, GraphQL, and Redis{" "}
    </b>
  </i>
  — leveraging the full-stack power of these technologies to build seamless, end-to-end applications.
  <br />
  <br />
  My key areas of interest include optimizing state management and real-time data flow with 
  <i>
    <b className="purple">
      {" "}
      TanStack Query and Redux Toolkit{" "}
    </b>
  </i>
  and crafting clean, responsive UIs using
  <i>
    <b className="purple">
      {" "}
      Tailwind CSS, shadcn/ui, and Bootstrap.{" "}
    </b>
  </i>
  <br />
  <br />
  Whenever possible, I love shipping fast, modern web applications, taking advantage of the 
  <b className="purple"> Next.js App Router </b> to integrate robust <b className="purple">OAuth2</b> authentication, dynamic database schemas, <b className="purple">Docker</b> containerization, reliable <b className="purple">CI/CD</b> pipelines, and testing with <b className="purple">Vitest</b>.
</p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
