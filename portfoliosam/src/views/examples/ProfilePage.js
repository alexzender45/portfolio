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
        <div className="section" style={{ backgroundColor: 'black', color: 'white' }}>
          <Container>
            <div className="button-container">
              <a href="https://github.com/alexzender45" >
                <Button className="btn-round" color="info" size="sm">
                  <span style={size4}>Github</span>
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/abiokorigho-samuel-371b08149/" >
                <Button
                  className="btn-round btn-icon"
                  color="info"
                  id="tooltip515203352"
                  size="lg"
                >
                  <span style={size4}><i className="fab fa-linkedin"></i></span>
                </Button>
              </a>
              <UncontrolledTooltip delay={0} target="tooltip515203352">
                Check My Project ON linkedin
              </UncontrolledTooltip>
              <a href="https://drive.google.com/file/d/1Whb1w8xWCkmxTnI4bVMYD9qOqkdLTlJR/view?usp=sharing" >
                <Button className="btn-round" color="info" size="sm" id='tooltip340339231' >
                  <span style={size4}>Resume</span>
                </Button>
              </a>
              <UncontrolledTooltip delay={0} target="tooltip340339231">
                View My Resume
              </UncontrolledTooltip>
            </div>
            <h2 className="title" >About Me</h2>
            <h5 className="description" style={{ color: 'white' }}>
              <b> A Backend Developer, who is dedicated to helping clients accomplish technical goals.</b>
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
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
                    <h2 style={size1} className="title" >Technical Skills</h2>
                    <h5 className="description" style={size2} style={{ color: 'white', fontWeight: 80 }}>
                      <Button className="btn-round" color="danger" size="sm"> Javascript</Button>
                      <Button className="btn-round" color="primary" size="sm"> NodeJs</Button>
                      <Button className="btn-round" color="secondary" size="sm"> ReactJs</Button>
                      <Button className="btn-round" color="light" size="sm">HTML5</Button>
                      <Button className="btn-round" color="primary" size="sm">Sql</Button>
                      <Button className="btn-round" color="secondary" size="sm">MongoDB</Button>
                      <Button className="btn-round" color="warning" size="sm">Github</Button>
                      <Button className="btn-round" color="primary" size="sm">Heroku</Button>
                      <Button className="btn-round" color="info" size="sm">CSS</Button>
                      <Button className="btn-round" color="secondary" size="sm">AWS</Button>
                      <Button className="btn-round" color="info" size="sm">Java</Button>
                      <Button className="btn-round" color="success" size="sm">Postgres</Button>
                    </h5>
                  </Row>
                </Col>
                <Col className="ml-auto mr-auto" md="10">
                  <Row className="collections">
                    <h2 style={size1} className="title" >Projects</h2>
                    <Col md="12">
                      <h5 className="description" style={{ color: 'white', fontWeight: 80 }}>
                        <p className="title">Hosce-Platform</p>
                        <ul>
                          <b>
                            <li>A Networking Platform that helps people to generate funds and educate them with business skills</li>
                            <li>Built with NodeJs, ReactJs, SQL, Sequelize</li>
                            <li>View source code on Github<a href='https://github.com/alexzender45/Hosce-Backend/tree/develop'>Source code</a></li>
                          </b>
                        </ul>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg3.PNG")}
                        ></img>
                        <p className="title">Felt-Teacher</p>
                        <ul>
                          <b>
                            <li>A platform that allows schools and parents employ quality teachers.</li>
                            <li>Build Backend API’s with Nodejs and Mongodb,Cloudinary, Heroku, Sendgrid,VonageAPI</li>
                            <li>View source code on Github<a href='https://github.com/alexzender45/Africahacks-Felt-teacher/tree/backend'>Source code</a>
                            <a href = 'https://felt-teacher.vercel.app/'>  Live Site</a></li>
                          </b>
                        </ul>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/felt-teacher.PNG")}
                        ></img>
                        <p className="title">Vs-Code User Status</p>
                        <ul>
                          <b>
                            <li>A  VS code extension built with Javascript for updating user Github, Slack and Discord Status right from your VS code Editor</li>
                            <li>Built with Javascript and GraphQL</li>
                            <li>View source code on Github<a href='https://github.com/alexzender45/explorer-sprint0/tree/staging'>Source Code</a> </li>
                          </b>
                        </ul>
                        <p className="title">Shopaholic 3D</p>
                        <ul>
                          <b>
                            <li>A Game Built  with Unity 3D for shopping Experience</li>
                            <li>Built with Unity 3D and C#</li>
                            <li>View source code on Github and Live Game<a href='https://github.com/alexzender45/Shopaholic-3D/tree/staging'>Source Code</a> <a href='https://saksham1991999.itch.io/shopaholic-3-d'>Live App</a> </li>
                          </b>
                        </ul>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/game.png")}
                        ></img>
                        <p className="title">CRUD App</p>
                        <ul>
                          <b>
                            <li>A web site that Follows the CRUD functionality, (Create, Read, Update, Destroy)</li>
                            <li>Built with Javascript(ES6), HTML, CSS, mongoDB, node, PassportJs, Connect-flash, Methodoverride, express-exession, mongoose, Semantic-Ui</li>
                            <li>View live site with source code <a href='https://crud-site.herokuapp.com/'>Live Site</a> <a href='https://github.com/alexzender45/yelpCamp'>Source Code</a></li>
                          </b>
                        </ul>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.PNG")}
                        ></img>
                        <p className="title">Text-To-Speech </p>
                        <ul>
                          <b>
                            <li>A program that helps to read text.</li>
                            <li>Built with Javascript(ES6), HTML, CSS</li>
                            <li>View live site with source code <a href='https://speech-talk.herokuapp.com/'>Live Site</a> <a href='https://github.com/alexzender45/speech-text'>Source Code</a></li>
                          </b>
                        </ul>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg9.PNG")}
                        ></img>
                      </h5>
                    </Col>
                  </Row>
                </Col>
                <Col className="ml-auto mr-auto" md="10">
                  <Row className="collections">
                    <h2 className="title">Work Experience</h2>
                    <h5 className="description" style={size3} style={{ color: 'white', fontWeight: 80 }}>
                      <p className="title">Backend Developer @Softblue 2021-Present</p>
                      <ul>
                        <b>
                          <li> I work as a Backend Developer</li>
                          <li>Build series of Backend applications</li>
                          <li>Work with AWS Labdam Function and Nodejs</li>
                        </b>
                      </ul>
                      <p className="title">Backend Developer @AzuresTech Feb/2021 - June/2021 </p>
                      <ul>
                        <b>
                          <li>Build API’s with Nodejs, Setup Projects Stories</li>
                          <li>Work with teams</li>
                          <li>Link to company's website<a href="http://www.azurestech.com/" > Click Here</a></li>
                        </b>
                      </ul>
                      <p className="title">The Rock Fes--Software Engineer Jan/2020 - Dec/2020 </p>
                      <ul>
                        <b>
                          <li>Build Networking Platform with Reactjs and Nodejs </li>
                          <li>Build a networking platform that enables people to raise funds</li>
                          <li>Hosce is the name of the platform, it also educate people with business skills</li>
                          <li>Link to Hosce  platform<a href="https://www.trfhosce.com" > Live Link</a></li>
                        </b>
                      </ul>
                      <p className="title">Blizz Tech--Front-end Engineer  Nov 2018 – March 2019</p>
                      <ul>
                        <b>
                          <li> Build Voiceer Platform with HTLM, CSS, Javascript </li>
                          <li>Voiceer is a competition platform </li>
                          <li>Link to Voiceer platform<a href="https://alexzender45.github.io/Voiceer1/front%20end/landing-page/landing.html#" > Live Link</a></li>
                        </b>
                      </ul>
                    </h5>
                  </Row>
                </Col>
                <Col className="ml-auto mr-auto" md="10">
                  <Row className="collections">
                    <h2 style={size1} className="title" >Eductation/Cert</h2>
                    <h5 className="description" style={size2} style={{ color: 'white', fontWeight: 80 }}>
                      <p className="title">Certificate From Africahacks Hackathon<a href='https://drive.google.com/file/d/1VHWTW-G7Xb6WGH3ktfpv857eCc0W5ZZE/view?usp=sharing'> View Certificate</a></p>
                      <p className="title">Uopeople (University Of The People) Studing Computer Science <a href='https://www.uopeople.edu/'> School Site</a></p>
                      <p className="title">Alc (Andela Learning Community) This is a <b>Web Specialist certificate</b> offered by Andela Tech Company
             <a href='https://drive.google.com/file/d/1COM_OqQwZyeuikkTfvlbl8t1aagyitVO/view?usp=sharing'> View certificate</a></p>
                      <p className="title">Certificate Of Participation From #BuildforSDG Challenge Sponsor By Andela and Facebook
             <a href='https://drive.google.com/file/d/1ed_ZMGE3eYCb9UwfCdBicywu4kG_wCbu/view?usp=sharing'> View certificate</a></p>
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
const size2 = {
  fontWeight: '100%'
}
const size3 = {
  fontWeight: '50%'
}
const size4 = {
  color: 'white'
}