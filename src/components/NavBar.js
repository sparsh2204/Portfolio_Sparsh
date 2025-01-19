import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon5 from '../assets/img/nav-icon5.svg';
import navIcon6 from '../assets/img/nav-icon6.svg';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.codechef.com/users/sparsh_22" target="_blank"><img src={navIcon1} alt="" /></a>
              <a href="mailto:sparshbansal2003@gmail.com" target="_blank"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/_sparsh22/" target="_blank"><img src={navIcon3} alt="" /></a>
              <a href="https://leetcode.com/u/_sparsh22/" target="_blank"><img src={navIcon4} alt="" /></a>
              <a href="https://www.linkedin.com/in/sparsh22/" target="_blank"><img src={navIcon5} alt="" /></a>
              <a href="https://wa.me/+917240231141" target="_blank"><img src={navIcon6} alt="" /></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
