import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProfilePageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg6.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="photo-container">
            <img alt="..." src={require("assets/img/sam.png")}></img>
          </div>
          <h3 className="title">Abiokorigho Samuel</h3>
          <p className="category">Software Engineer---3years</p>
          <div className="content">
            <div className="social-description">
              <h2>40</h2>
              <p>Repository On Github</p>
            </div>
            <div className="social-description">
              <h2>14</h2>
              <p>Project On Heroku Platform</p>
            </div>
            <div className="social-description">
              <h2>14</h2>
              <p>Project On LinkedIn</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
