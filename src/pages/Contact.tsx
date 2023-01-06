import "./../assets/css/Contact.css";
import { BsLinkedin, BsGithub, BsDiscord } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";
import { FormEvent, FormEventHandler, useState } from "react";

//interfaces for states
interface FormI {
  name: string;
  email: string;
  content: string;
}
const Contact = () => {
  let serverurl = "http://localhost:4000";
  const [form, setForm] = useState<FormI>({ name: "", email: "", content: "" });
  const changeForm = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let name = e.currentTarget.name;
    let value = e.currentTarget.value;
    setForm({ ...form, [name]: value });
  };
  const postMessage = async (msg: FormI) => {
    let res = await fetch(serverurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(msg),
    });
    if (res.status === 200 || res.status === 204) {
      alert("succes message send");
      setForm({ name: "", content: "", email: "" });
    }
  };
  const saveMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    postMessage(form);
  };
  return (
    <div className="content-container">
      <div className="contact content-width">
        <h1>Contact Me</h1>
        <div className="contact-form">
          <h3>contact form</h3>
          <form onSubmit={saveMessage} action="">
            <fieldset>
              <label htmlFor="name_contact">name</label>
              <input autoComplete="off" value={form.name} onChange={changeForm} id="name_contact" name="name" type="text" />
            </fieldset>
            <fieldset>
              <label htmlFor="email_contact">email</label>
              <input autoComplete="off" value={form.email} onChange={changeForm} id="email_contact" name="email" type="email" />
            </fieldset>
            <fieldset>
              <label htmlFor="message_contact">content</label>
              <textarea value={form.content} onChange={changeForm} name="content" id="message_contact" cols={30} rows={5}></textarea>
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
