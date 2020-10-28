import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function ProfilePage() {
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <div className="button-container">
              <Button className="btn-round" color="info" size="sm">
              <NavLink href="https://github.com/alexzender45" >
              <span style = {size4}>Github</span>
                </NavLink>
              </Button>
              <Button
                className="btn-round btn-icon"
                color="info"
                id="tooltip515203352"
                size="lg"
              ><NavLink href="https://www.linkedin.com/in/abiokorigho-samuel-371b08149/" >
                <span style = {size4}><i className="fab fa-linkedin"></i></span>
              </NavLink>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip515203352">
                Check My Project ON linkedin
              </UncontrolledTooltip>
              <Button className="btn-round" color="info" size="sm" id = 'tooltip340339231' >
              <NavLink href="https://drive.google.com/file/d/1DPPlEHf72DONuCfr9ls3PLNN0Ev_8wvm/view?usp=sharing" >
                <span style = {size4}>Resume</span>
                </NavLink>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip340339231">
                View My Resume
              </UncontrolledTooltip>
            </div>
            <h2 className="title">About Me</h2>
            <h5 className="description">
              <b> A Software Engineer, who is dedicated to helping clients accomplish technical goals by developing user
                friendly and forward-thinking apps. Experience working with Javascript Both Front-End And Back-End. With Frameworks Like,
               ReactJs, React-Native And NodeJs.</b>
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <h2 className="title text-center">My Portfolio</h2>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                    <h4><b>Skills</b></h4>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <i className="now-ui-icons design_image"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                    <h4><b>Work</b></h4>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <i className="now-ui-icons location_world"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <h4><b> Projects</b> </h4>
                      <NavLink 
                        className={pills === "8" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("8");
                        }}
                      >
                        <i className="now-ui-icons sport_user-run"></i>
                      </NavLink>
                    </NavItem> 
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections"> 
                    <h2 style = {size1} className= "title" >Technical Skills</h2>
            <h5 className="description" style = {size2}>
            <b>Javascript, Node.js, ReactJS, React-Native, Express, Ejs, HTML5, Material- Css, Sql, MongoDB, Bootstrap,
             Semantic UI, Github, JWT, Express, Flash-connect, body-parser, Method-override, dotenv,
             Heroku, Pivotal-Tracker, CSS, Cpanel, Sequelize, useEffect, useState.</b>
            </h5>
            <h2 style = {size1} className= "title" >Eductation/Cert</h2>
            <h5 className="description" style = {size2}>
            <p  className="title">Uopeople (University Of The People) Studing Computer Science 2020-2022 <a href = 'https://www.uopeople.edu/'> School Site</a></p>
            <p  className="title">Alc (Andela Learning Community) This is a <b>Web Specialist certificate</b> offered by Andela Tech Company
             <a href = 'https://drive.google.com/file/d/1COM_OqQwZyeuikkTfvlbl8t1aagyitVO/view?usp=sharing'> View certificate</a></p>
             <p  className="title">Certificate Of Participation From #BuildforSDG Challenge Sponsor By Andela and Facebook
             <a href = 'https://drive.google.com/file/d/1ed_ZMGE3eYCb9UwfCdBicywu4kG_wCbu/view?usp=sharing'> View certificate</a></p>
             <p  className="title">Certificates Earn From OpenClassrooms</p>
             <ol>
               <b>
               <li>Build Web Project With REST API <a href = 'https://drive.google.com/file/d/1XhguIJE3Hawve_9IP3hYIK9xnJTrvJ-T/view?usp=sharing'>  View Certificate</a></li>
               <li>Fullstack With Nodejs, Express and MongoDB<a href = 'https://drive.google.com/file/d/1B_Ujtd4CMIp6qCoz3wGatHbYL12jQ8nS/view?usp=sharing'>  View Certificate</a></li>
               <li>Build Web Apps With ReactJs<a href = 'https://drive.google.com/file/d/134FoJWx3FxZUMdwaGN33dQBd0fNWuMzS/view?usp=sharing'>  View Certificate</a></li>
               <li>Testing Websites Interface<a href = 'https://drive.google.com/file/d/1_0tjQ7T1w2hvgJy1RKjka7AblEVqv8iI/view?usp=sharing'>  View Certificate</a></li>
               <li>Retrieve Data Using SQL<a href = 'https://drive.google.com/file/d/1dI3eQWRkMoIkhmb476Ra8xWXmWOUIGLy/view?usp=sharing'>  View Certificate</a></li>
               </b>
               </ol>
            </h5>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                    <h2 className="title">Work Experience</h2>
            <h5 className="description" style = {size3}>
            <p className="title">Hng.Tech--Intern  Aug 2018 – April 2019</p>
            <ul>
              <b>
                <li> I work as an Intern in Hng.Tech</li>
              <li>Build a web app for Kids that allow them read stories.</li>
              <li>Built with Nodejs.</li>
              <li>Link to source code<a href="https://github.com/alexzender45/night-stories-backend" > Here</a></li>
              </b>
              </ul>
              <p className="title">Andela Bootcamp--Intern  Dec 2018 – Oct 2019</p>
            <ul>
              <b>
                <li> Participated in Andela Bootcamp Fellowship as an Intern</li>
              <li>Build a backend api for booking Ride with nodejs</li>
              <li>Built with Nodejs.</li>
              <li>Link to source code on github<a href="https://github.com/alexzender45/WayFarer-API" > Source Code</a></li>
              </b>
              </ul>
              <p className="title">Blizz Tech--Front-end Engineer  Nov 2018 – March 2019</p>
            <ul>
              <b>
                <li> Work as a frontend developer freelance </li>
              <li>Build a front-end platform for Voiceer project</li>
              <li>Voiceer is a competition platform </li>
              <li>Link to Voiceer platform<a href="https://alexzender45.github.io/Voiceer1/front%20end/landing-page/landing.html#" > Live Link</a></li>
              </b>
              </ul>
              <p className="title">The Rock Fes--Software Engineer March 2020 </p>
            <ul>
              <b>
                <li> Work as a software developer and maintain Company's site </li>
              <li>Build a networking platform that enables people to raise funds</li>
              <li>Hosce is the name of the platform, it also educate people with business skills</li>
              <li>Link to Hosce  platform<a href="https://www.trfhosce.com" > Live Link</a></li>
              </b>
              </ul>
              <p className="title">SDG-Challenge febuary-August 2020 </p>
            <ul>
              <b>
                <li> Participated in SDG-Chanllenge as an Intern and work as a team </li>
              <li>Build a platform thats helps to improve quality teachers in the society</li>
              <li>Build with NodeJs, ReactJs, MongoDB</li>
              <li>Link to platform source code<a href="https://github.com/alexzender45/team-013-Backend" > Source Code</a></li>
              </b>
              </ul>
            </h5>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills8">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                    <h2>Projects </h2>
                      <Col md="12">
            <h5 className="description">
            <p className="title">Hosce-Platform</p>
            <ul>
              <b>
              <li>A Networking Platform that helps people to generate funds and educate them with business skills</li> 
              <li>Built with NodeJs, ReactJs, SQL, Sequelize</li>
              <li>View live site with source code <a href = 'https://www.trfhosce.com'>Live Site</a> <a href = 'https://github.com/alexzender45/Hosce-Backend'>Source Code</a></li>
              </b>
              </ul>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg3.PNG")}
                        ></img>
                        <p className="title">Team-Work</p>
            <ul>
              <b>
              <li>A Site that allows Team of people to posts Gifts and Articles</li> 
              <li>Built with NodeJs, ReactJs, SQL</li>
              <li>Login with this details Email: admin@gmail.com, Password: alexzender45.</li>
              <li>View live site with source code <a href = 'https://alexzender45.github.io/teamwork-frontend/#/articles'>Live Site</a> <a href = 'https://github.com/alexzender45/teamwork-frontend'>Source Code</a></li>
              </b>
              </ul>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg4.PNG")}
                        ></img>
                         <p className="title">Filter-search</p>
            <ul>
              <b>
              <li>Built with Javascript(ES6), HTML, CSS</li>
              <li>View live app with source code <a href = 'https://fillter-search.herokuapp.com/'>Live App</a> <a href = 'https://github.com/alexzender45/search-filter'>Source Code</a></li>
              </b>
              </ul>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg14.PNG")}
                        ></img>
            <p className="title">CRUD App</p>
            <ul>
              <b>
              <li>A web site that Follows the CRUD functionality, (Create, Read, Update, Destroy)</li>
              <li>Built with Javascript(ES6), HTML, CSS, mongoDB, node, PassportJs, Connect-flash, Methodoverride, express-exession, mongoose, Semantic-Ui</li>
              <li>View live site with source code <a href = 'https://crud-site.herokuapp.com/'>Live Site</a> <a href = 'https://github.com/alexzender45/yelpCamp'>Source Code</a></li>
              </b>
              </ul>
              <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.PNG")}
                        ></img>  
                        <p className="title">Flower site App</p>
            <ul>
              <b>
              <li>A web app that allows you post beautiful flower and update your post </li>
              <li>Built with Javascript(ES6), HTML, CSS, mongoDB, nodeJs ,PassportJs, Connect-flash, Methodoverride, express-exession, mongoose, Semantic-Ui.</li>
              <li>View live site with source code <a href = 'https://blogapp-site.herokuapp.com/'>Live Site</a> <a href = 'https://github.com/alexzender45/BlogApp'>Source Code</a></li>
              </b>
              </ul>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg2.PNG")}
                        ></img>
                        <p className="title">Text-To-Speech </p>
            <ul>
              <b>
              <li>A program that helps to read text.</li>
              <li>Built with Javascript(ES6), HTML, CSS</li>
              <li>View live site with source code <a href = 'https://speech-talk.herokuapp.com/'>Live Site</a> <a href = 'https://github.com/alexzender45/speech-text'>Source Code</a></li>
              </b>
              </ul>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg9.PNG")}
                        ></img>
                        <p className="title">Flex-panel  </p>
            <ul>
              <b>
              <li>Built with Javascript(ES6), HTML, CSS</li>
              <li>View live site with source code <a href = 'https://panel-fliter.herokuapp.com/'>Live Site</a> <a href = 'https://github.com/alexzender45/flex-panels'>Source Code</a></li>
              </b>
              </ul>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg10.PNG")}
                        ></img>
                       </h5>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfilePage;
const size1 = {
  marginLeft: '50px',

}
const size2= {
  fontWeight: '100%'
}
const size3 = {
  fontWeight: '50%'
}
const size4 = {
  color: 'white'
}