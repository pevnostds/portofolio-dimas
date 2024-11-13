import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faPhp,
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const SkillComponent = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
      }, []);
  return (
    <section className="skills-section" id="skills">
      <h2
        className="text-center mb-3"
        style={{ color: "white", fontWeight: "bold" }}
      >
        SKILLS
      </h2>
      <Container>
        <Row className="g-4 justify-content-center text-center">
          <Col md={4} data-aos="fade-up">
            <Card className="skill-card">
              <Card.Body className="card-body">
                <Card.Title>
                  <h5>
                    <FontAwesomeIcon icon={faJs} className="fa-icon me-2" />
                    Programming Languages
                  </h5>
                </Card.Title>
                <Card.Text>
                  <h5>
                    JavaScript <FontAwesomeIcon icon={faJs} className="fa-icon" />
                  </h5>
                  <h5>
                    PHP <FontAwesomeIcon icon={faPhp} className="fa-icon" />
                  </h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} data-aos="fade-up">
            <Card className="skill-card">
              <Card.Body>
                <Card.Title>
                  <h5>
                    <FontAwesomeIcon icon={faReact} className="fa-icon me-2" />
                    Web Development
                  </h5>
                </Card.Title>
                <Card.Text>
                  <h5>
                    React <FontAwesomeIcon icon={faReact} className="fa-icon" />
                  </h5>
                  <h5>
                    Node.js <FontAwesomeIcon icon={faNodeJs} className="fa-icon" />
                  </h5>
                  <h5>
                    HTML <FontAwesomeIcon icon={faHtml5} className="fa-icon" /> / CSS{" "}
                    <FontAwesomeIcon icon={faCss3Alt} className="fa-icon" />
                  </h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} data-aos="fade-up">
            <Card className="skill-card">
              <Card.Body>
                <Card.Title>
                  <h5>
                    <FontAwesomeIcon icon={faDatabase} className="fa-icon me-2" />
                    Database
                  </h5>
                </Card.Title>
                <Card.Text>
                  <h5>
                    MySQL <FontAwesomeIcon icon={faDatabase} className="fa-icon" />
                  </h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} data-aos="fade-up">
            <Card className="skill-card">
              <Card.Body>
                <Card.Title>
                  <h5>
                    <FontAwesomeIcon icon={faGitAlt} className="fa-icon me-2" />
                    Tools & Technologies
                  </h5>
                </Card.Title>
                <Card.Text>
                  <h5>
                    Git <FontAwesomeIcon icon={faGitAlt} className="fa-icon" />
                  </h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
