import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import buddhaReading from "../media/buddhaReading.jpg";
import gitaReading from "../media/gitaReading.jpg"
import quranReading from "../media/quranReading.jpg"
import bibleReading from "../media/bibleReading.jpg"
import { Link } from "react-router-dom";

const Choices = () => {
  return (
    <div className="testView" id="choices">
      <Container>
        <div className="text-center contains">
        <h2><u>Chose From The Following Choices</u></h2>
        </div>
        <br /><br /><br />
        <Row>
            
          <Col className="border d-flex align-items-center justify-content-center">
            <h2>Gita</h2>
            <Link to="/gita">
            <img src={gitaReading} className="choiceImg" alt="reading" />
            </Link>
          </Col>
          <Col className="border d-flex align-items-center justify-content-center">
            <h2>Quran</h2>
            <Link to="/quran">
            <img src={quranReading} className="choiceImg" alt="reading" />
            </Link>
          </Col>
          <Col className="border d-flex align-items-center justify-content-center">
            <h2>Bible</h2>
            <Link to="/bible">
            <img src={bibleReading} className="choiceImg" alt="reading" />
            </Link>
          </Col>
          <Col className="border d-flex align-items-center justify-content-center">
            <h2>Tripitaka</h2>
            <Link to="/tripitaka">
            <img src={buddhaReading} className="choiceImg" alt="reading" />
            </Link>
          </Col>
          
        </Row>
        <hr/>
      </Container>
    </div>
  );
};

export default Choices;
