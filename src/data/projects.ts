import { ProjectI } from "../types";

const projects: ProjectI[] = [
  {
    id: 0,
    imgsProject: [require("./../assets/img/pomodoro1.png"), require("./../assets/img/pomodoro2.png"), require("./../assets/img/pomodoro3.png")],
    description: `
    Pomodoro Timer is a productivity tool that helps users manage their time by breaking down work into 25-minute intervals called "pomodoros" followed by breaks. It can be customized and used for various tasks to increase productivity.
        `,
    title: "Pomodoro and timer",
    codeurl: "https://github.com/yeffreycode/timer-and-pomo-app",
    projecturl: "https://yeffreycode.github.io/timer-and-pomo-app/",
    stackTech: [
      { name: "HTML5", link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5" },
      { name: "Css3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    ],
  },
  {
    id: 1,
    imgsProject: ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"],
    description: `
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut facere tenetur eaque non. Tenetur repellendus, natus, aperiam veniam blanditiis autem non sapiente quae temporibus dolores fugit
        exercitationem consequatur esse adipisci.`,
    title: "project 2",
    codeurl: "https://github.com/yeffreycode/",
  },
  {
    id: 2,
    imgsProject: ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"],
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut facere tenetur eaque non. Tenetur repellendus, natus, aperiam veniam blanditiis autem non sapiente quae temporibus dolores fugit
        exercitationem consequatur esse adipisci.`,
    title: "project 3",
    codeurl: "https://github.com/yeffreycode/",
  },
  {
    id: 3,
    imgsProject: ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"],
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut facere tenetur eaque non. Tenetur repellendus, natus, aperiam veniam blanditiis autem non sapiente quae temporibus dolores fugit
        exercitationem consequatur esse adipisci.`,
    title: "project 4",
    codeurl: "https://github.com/yeffreycode/",
  },
  {
    id: 4,
    imgsProject: ["img4.jpg", "img5.jpg"],
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut facere tenetur eaque non. Tenetur repellendus, natus, aperiam veniam blanditiis autem non sapiente quae temporibus dolores fugit
        exercitationem consequatur esse adipisci.`,
    title: "project 5",
    codeurl: "https://github.com/yeffreycode/",
  },
  {
    id: 5,
    imgsProject: ["img5.jpg"],
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut facere tenetur eaque non. Tenetur repellendus, natus, aperiam veniam blanditiis autem non sapiente quae temporibus dolores fugit
        exercitationem consequatur esse adipisci.`,
    title: "project 6",
    codeurl: "https://github.com/yeffreycode/",
  },
];

export default projects;
