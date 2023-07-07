import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import community from "../media/community.png";

const Info = () => {
  return (
    <div className="info">
      <Container>
        <Row className="justify-content-md-center">
          <Col className="infoBlocks" xs={6}>
            <br />
            <h1>Get Answers from Geeta, Quran, Bible!</h1>
            <br />
            <p>
              At DharmaGPT, we understand that every spiritual journey is
              unique, and we honor the importance of connecting with divine
              knowledge in a way that resonates with each individual. Our
              website serves as a trusted companion, utilizing advanced
              artificial intelligence to engage in meaningful conversations and
              offer thoughtful interpretations based on revered scriptures.{" "}
              <br />
              <br />
              No matter the nature of your inquiries, be it existential,
              ethical, or philosophical, DharmaGPT is your gateway to
              understanding. By posing your questions, you invite the profound
              wisdom of diverse religious texts to enlighten your path. Our
              AI-powered chatbot draws from an extensive knowledge base,
              spanning sacred scriptures from around the world, to offer
              responses rooted in the richness and diversity of spiritual
              teachings
            </p>
            <br/>
            <hr/>
          </Col>
        </Row>
      </Container>
      <hr />
    </div>
  );
};

export default Info;
