import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import halfway from "../assets/projects/halfway.png";
import whatspoppin from "../assets/projects/wplogo.png";
import resume_realm from "../assets/projects/resume_realm.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={halfway}
              isBlog={false}
              title="Half-Way"
              hasDemo={false}
              description="An Android app developed in Java using Android Studio and Google Maps API that helps users find halfway points between two locations, making it easier to plan meetups and gatherings."
              ghLink="https://github.com/lankalapalljn/HalfWayApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whatspoppin}
              isBlog={false}
              hasDemo={false}
              title="What's Poppin"
              description="A social media mobile app developed in React.js using Supabase and Mapbox API allowing users to create and join events happening around them, fostering community engagement and real-world interactions."
              ghLink="https://github.com/lankalapallijayanth/happening-now"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume_realm}
              isBlog={false}
              hasDemo={true}
              demoLink="https://jayanthresumerealm.lovable.app"
              title="Resume Realm"
              description="A Mario Inspired and themed game for a fun way to explore my resume and skills. Built entirely using Typescript."
              ghLink="https://github.com/lankalapallijayanth/resume-realm-adventure"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  )
}

export default Projects