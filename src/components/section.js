import dimasImage from "../asset/gambar/Dimas.jpg";
import { Row, Col, Container } from "react-bootstrap";

export const SectionComponent = () => {
  return (
    <>
      <section className="about p-5" id="about">
        <Container>
          <Row>
            <Col>
              <div className="about-img">
                <img
                  src={dimasImage}
                  alt="Dimas Surya"
                  style={{ width: "50%", height: "auto" }}
                />
              </div>
            </Col>
            <Col>
              <div className="about-text">
                <h2 style={{ color: "blue", fontWeight: "bold" }}>
                  Tentang Saya
                </h2>
                <h5>Halo Saya Dimas Surya</h5>
                <p>
                  Saya Mahasiswa Universitas Dinamika Bangsa Jambi, Kegiatan
                  Sehari hari saya belajar dan mengerjakan project. saat bosan
                  saya sering bermain PES untuk menghilangkan rasa penat dan
                  letih pada pikiran saya.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <br />
   
    </>
  );
};
