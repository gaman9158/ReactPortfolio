import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        {/* <SiVisualstudiocode /> */}
        <img width="48" height="48" src="https://img.icons8.com/color/48/visual-studio-code-2019.png" alt="visual-studio-code-2019"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <SiPostman /> */}
        <img width="64" height="64" src="https://img.icons8.com/dusk/64/postman-api.png" alt="postman-api"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <SiSlack /> */}
        <img width="50" height="50" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-slack-replace-email-text-messaging-and-instant-messaging-for-your-team-logo-shadow-tal-revivo.png" alt="external-slack-replace-email-text-messaging-and-instant-messaging-for-your-team-logo-shadow-tal-revivo"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <SiVercel /> */}
        <img width="80" height="80" src="https://img.icons8.com/officel/80/java-eclipse.png" alt="java-eclipse"/>
      </Col>
    </Row>
  );
}

export default Toolstack;
