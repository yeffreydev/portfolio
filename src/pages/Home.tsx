import svgimg from "./../assets/svg/profile-coder.svg";
import { Link } from "react-router-dom";
import styles from "./../assets/css/Home.module.css";

const Home = () => {
  return (
    <div className="content-container">
      <div className={styles["home"] + " animate-content"}>
        <h1 className={styles["home-title"]}>About Me</h1>
        <section className={styles["home-section"]}>
          <div className={styles["home-img-div"]}>
            <img src={svgimg} alt={styles["profile-coder"]} />
          </div>
          <div className={styles["home-presentation"]}>
            <h3> Yefrey - Full Stack Web Developer</h3>
            <p>
              I am a skilled software developer with experience in front-end technologies such as <b>JavaScript</b>, <b>HTML5</b>, and <b>CSS3</b>.
              <br /> I am proficient in popular JavaScript libraries and frameworks such as <b>React</b> and have experience working with back-end technologies like <b>Node.js</b>, <b>Express</b>, and{" "}
              <b>MySQL</b>.
              <br /> I am also familiar with NoSQL databases like <b>MongoDB</b>. <br />
              In my professional experience, I have worked on a variety of projects and have made open source contributions.
              <br />
              You can see some of my projects{" "}
              <b>
                <Link to={"/projects"}>here</Link>
              </b>
              .<br /> I am confident in my ability to develop and maintain full-stack applications and am always eager to learn and grow as a developer.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
