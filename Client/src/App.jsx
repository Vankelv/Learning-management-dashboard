import React from "react";
import "react-bootstrap";
import Sidebar from "./components/sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dashboard from "./pages/dashboard";
import "./assets/main.css";
const App = () => {
  return (
    <div>
      <Container>
        <Row className="flex">
          <Col xs lg="6" className="sidebar fixed">
            <Sidebar />
          </Col>
          <Col className="body">
            <Dashboard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
