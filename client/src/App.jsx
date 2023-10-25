import AboutMe from "./components/AboutMe";
import { lisetProjects } from "./components/dataProjects";
import "./App.css";
import Skills from "./components/Skills";
import Project from "./components/Project";
import ResumePage from "./components/ResumePage";
import Links from "./components/Links";

const pathServerTest = "http://localhost:5050";

export default function App() {
  return (
    <>
      <div className="main">
        <div className="name">
          <span>I'm Moshe Brizel</span>
        </div>
        <h1></h1>
        <div className="my-pectuer">
          <img src={pathServerTest + "/my pectuer.JPG"} alt="" />
        </div>
        <AboutMe />
        <ResumePage />
        <Skills />
        <div id="Projects" className="projects project-text type-text">
          <h1 className="titles-text">Projects:</h1>
          <div className="all-projectes">
            {lisetProjects.map((item, index) => {
              return <Project pro={item} key={index} />;
            })}
          </div>
        </div>
        <div className="end">
          <Links/>
        </div>
      </div>
    </>
  );
}
