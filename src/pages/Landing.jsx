import containerCSS from "../component/Component.module.css";
import me from "../assets/asu.png";
import html from "../assets/html.svg";
import CSS from "../assets/css-3.svg";
import javascript from "../assets/js.png";
import typescript from "../assets/typescript.svg";
import reactJS from "../assets/react.svg";
import nextJS from "../assets/next.png";
import nodeJS from "../assets/nodejs.png";
import expressJS from "../assets/express-109.svg";
import git from "../assets/git-icon.svg";
import gitHub from "../assets/github-icon.svg";
import mySQL from "../assets/mysql-6.svg";
import docker from "../assets/docker.svg";
import cms from "../assets/cms.svg";
import redux from "../assets/redux.svg";
import redis from "../assets/redis-logo.svg";
import tailwind from "../assets/tailwind-css-1.svg";
import project1 from "../assets/Project1.png";
import project2 from "../assets/Project2.png";
import awan from "../assets/awann.jpg";
import office from '../assets/office.png'

const Landing = () => {
  return (
    <div>
    <div className={containerCSS.container}>
      <div className={containerCSS.gridSatu}>
      <div className={containerCSS.navlist}>
        <div className={containerCSS.navlogo}>
          <h1>Auuu<span>uuw.</span></h1>
        </div>
        <div className={containerCSS.navitems}>
          <h3>Home</h3>
          <h3>My Project</h3>
          <h3>My Skill</h3>
        </div>
      </div>
      </div>
      <div className={containerCSS.gridDua}>
        <div className={containerCSS.leftGrid}>
          <div className={containerCSS.box}>
            <img src={me} alt="me" />
            <h4></h4>
            <h3></h3>
          </div>
        </div>
        <div className={containerCSS.rightGrid}>
          <div className={containerCSS.aboutMe}>
            <h1>
              HELLO
              <span>
                <br />
                EVERYONE :)
              </span>
            </h1>
            <h4>Here is what i am & what i do.</h4>
            <p>
              My name is <span>ALFAN ALDO HERNATA</span>, i am a junior who is passionate about becoming a full stack web
              developer,proficient in HTML, CSS, JavaScript, React, Node.js, and
              commit to learn, seek opportunities to gain
              experience,collaborate, and develop in this field.
            </p>
          </div>
        </div>
      </div>
      <div className={containerCSS.gridTiga}>
        <div>
          <h1>-- My Project --</h1>
        </div>
        <div className={containerCSS.project}>
          <div>
            <img src={project1} alt="" />
          </div>
          <div>
            <img src={project2} alt="" />
          </div>
        </div>
      </div>
      <div className={containerCSS.gridEmpat}>
        <div>
          <h1>-- My Skill --</h1>
        </div>
        <div className={containerCSS.logo}>
          <div>
            {" "}
            <img src={html} alt="" />
          </div>
          <div>
            <img src={CSS} alt="" />
          </div>
          <div>
            <img src={tailwind} alt="" />
          </div>
          <div>
            <img src={javascript} alt="" />
          </div>
          <div>
            <img src={typescript} alt="" />
          </div>
          <div>
            <img src={reactJS} alt="" />
          </div>
          <div>
            <img src={nodeJS} alt="" />
          </div>
          <div>
            <img src={expressJS} alt="" />
          </div>
          <div>
            <img src={git} alt="" />
          </div>
          <div>
            <img src={gitHub} alt="" />
          </div>
          <div>
            <img src={mySQL} alt="" />
          </div>
          <div>
            <img src={docker} alt="" />
          </div>
          <div>
            <img src={cms} alt="" />
          </div>
          <div>
            <img src={redux} alt="" />
          </div>
          <div>
            <img src={redis} alt="" />
          </div>
          <div>
            <img src={office} alt="" />
          </div>
        </div>
      </div>
      <div className={containerCSS.gridLima}>
        <p>
          © 2024 by alfanaldoh <br />
          Created with reactJS
        </p>
        <p>
          <span>
            <b>CALL</b>
          </span>{" "}
          <br />
          📞 (+62)85171077729
        </p>
        <p>
          <span>
            <b>EMAIL</b>
          </span>{" "}
          <br /> ✉️ alfanaldoh@gmail.com
        </p>
      </div>
    </div>
    </div>

  );
};

export default Landing;
