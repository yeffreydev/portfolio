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
    imgsProject: [require("./../assets/img/chat1.png"), require("./../assets/img/chat2.png"), require("./../assets/img/chat3.png")],
    description: `
    This chat application is built using Node.js and Socket.io, allowing users to communicate with each other in real-time by sending and receiving messages. The server-side of the application is built using Node.js and uses Socket.io to establish a WebSocket connection with the client. On the client-side, the application is built using HTML, CSS, and JavaScript and uses Socket.io to connect to the server and send and receive messages. This chat application provides a simple and efficient way for users to communicate in real-time.
    `,
    title: "basic chat app",
    codeurl: "https://github.com/yeffreycode/basic-chat-app",
    projecturl: "https://basic-chat-app.onrender.com/",
    stackTech: [
      { name: "NodeJs", link: "https://nodejs.org" },
      { name: "Socket.IO", link: "https://socket.io/" },
      { name: "HTML5", link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5" },
      { name: "Css3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    ],
  },
  {
    id: 2,
    imgsProject: [require("./../assets/img/crud1.png"), require("./../assets/img/crud2.png"), require("./../assets/img/crud3.png")],
    description: `
    React state CRUD refers to the ability to create, read, update, and delete data in a React component's state. This is useful for managing and storing data that is specific to a particular component and needs to be accessible within that component or passed down to child components through props. With state CRUD, a developer can create new data, retrieve and display existing data, update or modify existing data, and delete data as needed within the component. This allows for a more dynamic and interactive user experience in a React application.
        `,
    title: "Users Crud with React",
    projecturl: "https://users-crud-react.netlify.app/",
    codeurl: "https://github.com/yeffreycode/users-crud-react",
  },
];

export default projects;
