import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sulvlo from "../../Assets/Projects/sulvlo.png";
import chatify from "../../Assets/Projects/porfolio-airline.png";
import bitsOfCode from "../../Assets/Projects/portfolio.png";

function Projects() {
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="PortfolioAirlines"
              description="Welcome to the PortfolioAirlines dataset analysis project! In this project, we explore a rich dataset containing reviews of airline experiences, covering various aspects such as seat comfort, cabin staff service, ground service, and more. The dataset encompasses reviews from diverse routes, seat types, and traveler types, offering a comprehensive view of customer sentiments."
              ghLink="https://github.com/ChoukriMS/Data_Analysis_Portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description=" This website hehe 😁"
              ghLink="https://github.com/ChoukriMS/ChoukriTech"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sulvlo}
              isBlog={false}
              title="SULVLO"
              description="Sulvlo is a groundbreaking app revolutionizing campus mobility at Université Laval. With electric bikes, students like Alexandra and Francis effortlessly commute between classes. Anabelle monitors real-time usage data, while Sylvain ensures bike stations run smoothly. Sulvlo integrates with tuition for seamless payments, fostering a sustainable and connected campus experience. 🚴‍♂️📲🌐"
              ghLink="https://github.com/ChoukriMS/SULVLO"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
