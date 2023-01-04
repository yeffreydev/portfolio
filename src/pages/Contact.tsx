import "./../assets/css/Contact.css";
import { BsLinkedin, BsGithub, BsDiscord } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";
const Contact = () => {
  return (
    <div className="content-container">
      <div className="contact content-width">
        <h1>Contact Me</h1>
        <div className="contact-form">
          <h3>contact form</h3>
          <form action="">
            <fieldset>
              <label htmlFor="">name</label>
              <input type="text" />
            </fieldset>
            <fieldset>
              <label htmlFor="">message</label>
              <textarea name="" id="" cols={30} rows={5}></textarea>
            </fieldset>
            <fieldset>
              <input type="submit" />
            </fieldset>
          </form>
        </div>
        <div className="social-media">
          <h3>social media</h3>
          <ul>
            <li>
              <a target="_blank" href="https://www.github.com/yeffreycode">
                <span>
                  <BsGithub />
                </span>
                github
              </a>
            </li>
            <li>
              <a target={"_blank"} href="https://www.linkedin.com/in/yeffrey-zlk-074227246/">
                <span>
                  <BsLinkedin />
                </span>
                Linkedin
              </a>
            </li>
            <li>
              <a target="_blank" href="https://tiktok.com">
                <span>
                  <SiTiktok />
                </span>
                tiktok
              </a>
            </li>
            <li>
              <a target="_blank" href="https://discord.gg/pQpRvY9p">
                <span>
                  <BsDiscord />
                </span>
                discord
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
