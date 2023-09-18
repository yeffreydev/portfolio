export interface ICourse {
  title: string;
  chapters: IChapter[];
}

export interface IChapter {
  title: string;
  topics: ITopic[];
}

export interface ITopic {
  title: string;
  subtopics: ISubtopic[];
}

export interface ISubtopic {
  title: string;
  slug: string;
  content: string;
  link: string;
}

export const courseData: ICourse = {
  title: "Curso de NodeJS Version 1.0",
  chapters: [
    {
      title: "JavaScript",
      topics: [
        {
          title: "Introduction avaScript",
          subtopics: [
            {
              slug: "introduction-to-javascript",
              title: "Introduction to JavaScript",
              content:
                "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)",
              link: "https://www.w3schools.com/js/js_intro.asp",
            },
            {
              slug: "introduction-to-javascript",
              title: "Introduction to JavaScript",
              content:
                "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)",
              link: "https://www.w3schools.com/js/js_intro.asp",
            },
            {
              slug: "introduction-to-javascript",
              title: "Introduction to JavaScript",
              content:
                "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)",
              link: "https://www.w3schools.com/js/js_intro.asp",
            },
          ],
        },
      ],
    },
    {
      title: "NodeJS",
      topics: [
        {
          title: "Introduction a NodeJS",
          subtopics: [
            {
              slug: "introduction-to-nodejs",
              title: "Introduction to NodeJS",
              content: "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.",
              link: "https://www.w3schools.com/nodejs/nodejs_intro.asp",
            },
          ],
        },
      ],
    },
  ],
};
