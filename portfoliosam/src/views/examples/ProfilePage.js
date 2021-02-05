import React from "react";

// reactstrap components
import {
  Button,
  Nav,
  TabContent,
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
        <div className="section"  style={{ backgroundColor: 'black', color: 'white'}}>
          <Container>
            <div className="button-container">
            <a href="https://github.com/alexzender45" >
              <Button className="btn-round" color="info" size="sm">
              <span style = {size4}>Github</span>
              </Button>
              </a>
              <a href="https://www.linkedin.com/in/abiokorigho-samuel-371b08149/" >
              <Button
                className="btn-round btn-icon"
                color="info"
                id="tooltip515203352"
                size="lg"
              >
                <span style = {size4}><i className="fab fa-linkedin"></i></span>
                </Button>
              </a>
              <UncontrolledTooltip delay={0} target="tooltip515203352">
                Check My Project ON linkedin
              </UncontrolledTooltip>
              <a href="https://drive.google.com/file/d/1doz5OLDa8oFg7H7P_Eply8RF5qNFY9wJ/view?usp=sharing" >
              <Button className="btn-round" color="info" size="sm" id = 'tooltip340339231' >
                <span style = {size4}>Resume</span>
              </Button>
              </a>
              <UncontrolledTooltip delay={0} target="tooltip340339231">
                View My Resume
              </UncontrolledTooltip>
            </div>
            <h2 className="title" >About Me</h2>
            <h5 className="description" style={{ color: 'white'}}>
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
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections"> 
                    <h2 style = {size1} className= "title" >Technical Skills</h2>
            <h5 className="description" style = {size2} style={{ color: 'white', fontWeight: 80}}>
            <Button className="btn-round" color="danger" size="sm"> Javascript</Button>
            <Button className="btn-round" color="primary" size="sm"> NodeJs</Button>
            <Button className="btn-round" color="secondary" size="sm"> ReactJs</Button>
            <Button className="btn-round" color="info" size="sm">React-Native</Button>
            <Button className="btn-round" color="success" size="sm">Express</Button>
            <Button className="btn-round" color="warning" size="sm">Ejs</Button>
            <Button className="btn-round" color="light" size="sm">HTML5</Button> 
            <Button className="btn-round" color="danger" size="sm">Material-Css</Button>
            <Button className="btn-round" color="primary" size="sm">Sql</Button>
            <Button className="btn-round" color="secondary" size="sm">MongoDB</Button>
            <Button className="btn-round" color="info" size="sm">Bootstrap</Button>
            <Button className="btn-round" color="success" size="sm">Semantic-Ui</Button>
            <Button className="btn-round" color="warning" size="sm">Github</Button>
            <Button className="btn-round" color="light" size="sm">JWT</Button>
            <Button className="btn-round" color="danger" size="sm">Api</Button>
            <Button className="btn-round" color="primary" size="sm">Heroku</Button>
            <Button className="btn-round" color="secondary" size="sm">Pivotal-Tracker</Button>
            <Button className="btn-round" color="info" size="sm">CSS</Button>
            <Button className="btn-round" color="success" size="sm">Cpanel</Button>
            <Button className="btn-round" color="warning" size="sm">Sequelize</Button>
            <Button className="btn-round" color="light" size="sm">useEffect</Button>
            <Button className="btn-round" color="danger" size="sm">useState</Button>
            <Button className="btn-round" color="primary" size="sm">Firebase</Button>
            <Button className="btn-round" color="secondary" size="sm">AWS</Button>
            <Button className="btn-round" color="info" size="sm">PayStack</Button>
            <Button className="btn-round" color="success" size="sm">Postgres</Button>
            </h5>
                    </Row>
                  </Col>
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections"> 
                  <h2 style = {size1} className= "title" >Hackathons/ Internship</h2>
                  <Col md="12">
                  <h5 className="description" style={{ color: 'white', fontWeight: 80}}>
                  <p className="title">MLH-Spring 2021 - Explorer Fellow</p>
                  <ul>
                    <b>
                      <li>The MLH Fellowship is a 12-week internship alternative for aspiring software engineers</li>
                      <li>Work on Real-world Projects</li>
                      <li>Work with new Technologies</li>
                      <li>Collaborate in small groups on a series of short hackathon sprints</li>
                      <li>Read More About MLH(Major League Hacking)<a href = 'https://fellowship.mlh.io/'>Click Here</a></li>
                    </b>
                  </ul>
                  <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/Mlh.PNG")}
                        ></img>
                        <p className="title">Africahacks Hackathon 2020 </p>
                  <ul>
                    <b>
                      <li>The Africahacks Hackathon is a one week Hackathon for developers</li>
                      <li>Build An Ideal to Product</li>
                      <li>Work with new Technologies</li>
                      <li>Build a platform that helps to provide quality teachers to schools </li>
                      <li>Read  More About Africahacks <a href = 'https://apply.africahacks.com/'>Click Here</a></li>
                    </b>
                  </ul>
                  <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/newAfrica.png")}
                        ></img>
                  </h5>
                  </Col>
                  </Row>
                  </Col>
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections"> 
                  <h2 style = {size1} className= "title" >Projects</h2>
                      <Col md="12">
            <h5 className="description" style={{ color: 'white', fontWeight: 80}}>
            <p className="title">Hosce-Platform</p>
            <ul>
              <b>
              <li>A Networking Platform that helps people to generate funds and educate them with business skills</li> 
              <li>Built with NodeJs, ReactJs, SQL, Sequelize</li>
              <li>View live site with source code <a href = 'https://www.trfhosce.com'>Live Site</a> <a href = 'https://github.com/alexzender45/Hosce-Backend/tree/develop'>Source code</a></li>
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
              <li>Login with this details Email: admin@gmail.com, Password: alexzender45</li>
              <li>View live site with source code <a href = 'https://alexzender45.github.io/teamwork-frontend/#/articles'>Live Site</a> <a href = 'https://github.com/alexzender45/teamwork-frontend'>Source Code</a></li>
              </b>
              </ul>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg4.PNG")}
                        ></img>
                        <p className="title">Card Validation</p>
            <ul>
              <b>
              <li>Built with Javascript(ES6), HTML, CSS</li>
              <li> This program is built with Luhn's Algorithm, it checks if credit/debit card is valid or not</li>
              <li>View live app <a href = 'https://codepen.io/alexzender45/full/gqRoVp'>Live App</a></li>
              </b>
              </ul>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/luhn.PNG")}
                        ></img>
                         <p className="title">Password-Strength</p>
            <ul>
              <b>
              <li>Built with Javascript(ES6), HTML, CSS</li>
              <li> This program helps to check how strong or weak your Password is</li>
              <li>View live app <a href = 'https://codepen.io/alexzender45/full/BPGRxL'>Live App</a></li>
              </b>
              </ul>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/password.PNG")}
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
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                    <h2 className="title">Work Experience</h2>
            <h5 className="description" style = {size3} style={{ color: 'white', fontWeight: 80}}>
            <p className="title">Backend Developer @Softblue 2021-Present</p>
            <ul>
              <b>
                <li> I work as a Backend Developer</li>
              <li>Build series of Backend applications</li>
              <li>Work with AWS Labdam Function and Nodejs</li>
              </b>
              </ul>
              <p className="title">Web Developer @AzuresTech 2021-Present </p>
            <ul>
              <b>
                <li>Work as a fullstack developer, build both frontend and backend</li>
              <li>Work with teams</li>
              <li>Work with Nodejs and Reactjs</li>
              <li>Link to company's website<a href="http://www.azurestech.com/" > Click Here</a></li>
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
            </h5>
                    </Row>
                  </Col>
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                    <h2 style = {size1} className= "title" >Eductation/Cert</h2>
            <h5 className="description" style = {size2} style={{ color: 'white', fontWeight: 80}}>
            <p  className="title">Certificate From Africahacks Hackathon<a href = 'https://drive.google.com/file/d/1VHWTW-G7Xb6WGH3ktfpv857eCc0W5ZZE/view?usp=sharing'> View Certificate</a></p>
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