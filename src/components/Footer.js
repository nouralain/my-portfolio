import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Nour Al-Ein Raafat</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} NA</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/nouralain"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/nour-el-ain-ahmed-22b545378"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
                           <a
                             href="mailto:nourealainahmed1@gmail.com"
                             style={{ color: "white" }}
                             rel="noreferrer"
                           
                           >
                             <BiLogoGmail />
                           </a>
                         </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
