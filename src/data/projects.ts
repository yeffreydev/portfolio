import { IProject } from "@/components/Project";
import { GrCss3, GrHtml5, GrJs } from "react-icons/gr";
import { SiJavascript } from "react-icons/si";
import { Project00 } from "./Descriptions";
const projects: IProject[] = [
  {
    title: "Timer and Pomodoro",
    Description: Project00,
    img: "https://media.discordapp.net/attachments/1038833828682272930/1095958031600193596/image.png?width=1215&height=472",
    url: "https://yeffreydev.github.io/timer-and-pomo-app/",
    source: "https://github.com/yeffreydev/timer-and-pomo-app",
    skills: ["Design", "Css3", "structure page", "time logic", "clasess"],
    projectType: "Frontend",
    stack: [
      { icon: GrHtml5, name: "Html5" },
      { icon: GrCss3, name: "Css3" },
      { icon: SiJavascript, name: "JavaScript" },
    ],
  },
];

export default projects;
