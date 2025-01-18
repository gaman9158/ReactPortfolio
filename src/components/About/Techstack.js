import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { FaLeaf } from "react-icons/fa";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
      <img src="https://img.icons8.com/officel/80/spring-logo.png" alt="spring-logo"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <DiJava /> */}
        <img width="48" height="48" src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <FaLeaf /> */}
        <img width="48" height="48" src="https://img.icons8.com/color/48/thymeleaf.png" alt="thymeleaf"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <DiJavascript1 /> */}
        <img width="48" height="48" src="https://img.icons8.com/fluency/48/javascript.png" alt="javascript"/>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        {/* <DiNodejs /> */}
        <img width="48" height="48" src="https://img.icons8.com/color/48/nodejs.png" alt="nodejs"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <DiReact /> */}
        <img width="100" height="100" src="https://img.icons8.com/plasticine/100/react.png" alt="react"/>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        {/* <SiPostgresql /> */}
        <img width="48" height="48" src="https://img.icons8.com/color/48/postgreesql.png" alt="postgreesql"/>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
      <img width="50" height="50" src="https://img.icons8.com/external-tal-revivo-duo-tal-revivo/50/external-structured-query-language-a-standard-computer-language-in-server-database-duo-tal-revivo.png" alt="external-structured-query-language-a-standard-computer-language-in-server-database-duo-tal-revivo"/>
      </Col>
      
    </Row>
  );
}

export default Techstack;
