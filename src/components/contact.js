import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram,faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const ContactComponent = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
      }, []);
  return (
    <section className="contact-section py-5" id="contact">
      <Container>
        <h2
          className="text-center mb-4"
          style={{ color: "white", fontWeight: "bold" }}
        >
          CONTACT ME
        </h2>
        <Row className="justify-content-center">
          <Col md={3} data-aos="fade-up" className="text-center mb-3">
            <div className="contact-info">
              <h5>
                <FontAwesomeIcon icon={faEnvelope} size="2x" className="mb-2" />
                <p>Email</p>
              </h5>
              <p>
                <a href="mailto:dimasjoestar2@gmail.com">
                  dimasjoestar2@gmail.com
                </a>
              </p>
            </div>
          </Col>
          <Col md={3} data-aos="fade-up" className="text-center mb-3">
            <div className="contact-info">
              <h5>
                <FontAwesomeIcon icon={faWhatsapp} size="2x" className="mb-2" />
                <p>Whatsapp</p>
              </h5>
              <p>
                <a href="tel:+6283172552612">+6283172552612</a>
              </p>
            </div>
          </Col>
          <Col md={3} data-aos="fade-up" className="text-center mb-3">
            <div className="contact-info">
              <h5>
                <FontAwesomeIcon icon={faGithub} size="2x" className="mb-2" />
                <p>GitHub</p>
              </h5>
              <p>
                <a
                  href="https://github.com/pevnostds"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/pevnostds
                </a>
              </p>
            </div>
          </Col>
          <Col md={3} data-aos="fade-up" className="text-center mb-3">
            <div className="contact-info">
              <h5>
                <FontAwesomeIcon icon={faInstagram} size="2x" className="mb-2" />
                <p>Instagram</p>
              </h5>
              <p>
              <a
                  href="https://instagram.com/dmspvnost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @dmspvnost
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
