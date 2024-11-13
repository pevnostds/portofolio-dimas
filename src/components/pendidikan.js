import { Row, Col, Card,Container } from "react-bootstrap";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const PendidikanComponent = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
      }, []);
    
      return (
        <section className="menu" id="pendidikan">
          <h2 className="text-center mb-4" style={{ color: 'white', fontWeight: 'bold' }}>
            PENDIDIKAN
          </h2>
          <Container className="container mx-auto">
            <Row className="g-5 justify-content-center text-center">
              <Col md={4} >
                <Card style={{ width: '100%',color:'white' }} data-aos="fade-right">
                  <Card.Body className="column">
                    <Card.Title style={{ color:'white' }}>Sekolah Dasar</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">SDN 157 Kota Jambi</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} >
                <Card style={{ width: '100%',color:'white' }} data-aos="fade-right">
                  <Card.Body className="column">
                    <Card.Title style={{ color:'white' }}>Sekolah Menengah Pertama</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">SMPN 25 Kota Jambi</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} >
                <Card style={{ width: '100%',color:'white' }} data-aos="fade-right">
                  <Card.Body className="column">
                    <Card.Title style={{ color:'white' }}>Sekolah Menengah Atas</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">SMAN 13 Kota Jambi</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
             
            </Row>
          </Container>
        </section>
      )
}