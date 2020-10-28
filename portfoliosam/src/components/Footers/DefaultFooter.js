/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>Email:  alexzendersamuel33@gmail.com</li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed by{" "}
              Sam
            .09068722097 

          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
