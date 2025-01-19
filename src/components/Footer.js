import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";
import navIcon6 from "../assets/img/nav-icon6.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <p></p>
            <div className="social-icon">
              <a href="https://www.codechef.com/users/sparsh_22" target="_blank"><img src={navIcon1} alt="" /></a>
              <a href="mailto:sparshbansal2003@gmail.com" target="_blank"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/_sparsh22/" target="_blank"><img src={navIcon3} alt="" /></a>
              <a href="https://leetcode.com/u/_sparsh22/" target="_blank"><img src={navIcon4} alt="" /></a>
              <a href="https://www.linkedin.com/in/sparsh22/" target="_blank"><img src={navIcon5} alt="" /></a>
              <a href="https://wa.me/+917240231141" target="_blank"><img src={navIcon6} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
