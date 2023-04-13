import { IProject } from "@/components/Project";
import { GrCss3, GrHtml5, GrJs } from "react-icons/gr";
import { SiJavascript } from "react-icons/si";

const projects: IProject[] = [
  {
    title: "Timer and Pomodoro",
    description: `This little project built in vanilla JS is a timer that can be used for the Pomodoro technique, a time management method that uses a timer to break down work into intervals followed by short breaks, typically 25 minutes in length The timer is customizable, allowing users to set their preferred work and break intervals, and it switches seamlessly between the two until the user stops the timer. It features a progress bar that shows the remaining time for the current interval, making it a useful tool for improving productivity and focus. Its simplicity, effectiveness, and easy implementation make it a valuable addition to any work or study routine, especially for those new to JavaScript or programming in general.`,
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
