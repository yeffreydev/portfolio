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
          title: "Fundamentos de JavaScript",
          subtopics: [
            {
              slug: "clase-completa-fundamentos-de-javascript",
              title: "Fundamentos de JavaScript",
              content:
                "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)",
              link: "https://drive.google.com/file/d/1hk4P4iHem0AMf20RM0CZlffjYje2BgWg/view?usp=drive_link",
            },
          ],
        },
        {
          title: "Fundamentos de JavaScript - Estructuras de Datos",
          subtopics: [
            {
              slug: "fundamentos-de-javascript-estructuras-de-datos",
              title: "Fundamentos de JavaScript - Estructuras de Datos",
              content:
                "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)",
              link: "https://drive.google.com/file/d/1xBe3sIWXwROLBLAWeO24BTLMfmGBnI98/view?usp=sharing",
            },
          ],
        },
        {
          title: "Estructuras de Datos - Proyecto CRUD",
          subtopics: [
            {
              slug: "estructuras-de-datos-proyecto-crud",
              title: "Estructuras de Datos - Proyecto CRUD",
              content:
                "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)",
              link: "https://drive.google.com/file/d/18KH7zH9YzMlH5StjBFNs23Eo3Aph-Xok/view?usp=drive_link",
            },
            {
              slug: "reto-estructuras-de-datos-proyecto-crud",
              title: "Reto Estructuras de Datos - Proyecto CRUD",
              content:
                "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)",
              link: "https://drive.google.com/file/d/1n9bp21xHg974k4I2LpNJdPFdusrD1Gml/view?usp=drive_link",
            },
            {
              slug: "funcionalidad-usuarios-proyecto-crud",
              title: "Funcionalidad CRUD de usuarios - Proyecto CRUD",
              content: "",
              link: "https://drive.google.com/file/d/1Ifk7GbaCzcpELlKXR_L90NSWGTUjXY36/view?usp=sharing",
            },
            {
              slug: "design-usuarios-proyecto-crud",
              title: "Diseño CRUD de usuarios - Proyecto CRUD",
              content: "",
              link: "https://drive.google.com/file/d/1h8tB0wImwr5mGf9eHPJMEtNjNj7zimCP/view?usp=drive_link",
            },
          ],
        },
        {
          title: "Algoritmos con JavaScript",
          subtopics: [
            {
              slug: "algoritmos-con-javascript",
              title: "Algoritmos con JavaScript",
              content: "",
              link: "https://drive.google.com/file/d/1FiLhipi8wYRtz6Ok1q2MooGhJqZfdz2a/view?usp=drive_link",
            },
          ],
        },
        {
          title: "Programación Orientada a Objetos con JavaScript",
          subtopics: [
            {
              slug: "poo-introduccion",
              title: "Introducción a la Programación Orientada a Objetos",
              content: "",
              link: "https://drive.google.com/file/d/1-jm8W-sahomeMnXl6Qprue8PaRXNSh9s/view?usp=drive_link",
            },
            {
              slug: "abstraccion-y-encapsulamiento",
              title: "Abstracción y Encapsulamiento",
              content: "",
              link: "https://drive.google.com/file/d/1pxLlUAMuHnfMbUgN4VnfEM91Bph3iVrF/view?usp=drive_link",
            },
            {
              slug: "herencia",
              title: "Herencia",
              content: "",
              link: "https://drive.google.com/file/d/1_c3Q8jqQqDv8ZN7cgVmYzyxNhFCpJtqp/view?usp=sharing",
            },
            {
              slug: "polimorfismo",
              title: "Polimorfismo",
              content: "",
              link: "https://drive.google.com/file/d/1vnUJSAf1LvgmbpDGrYKtG3LmDp7XxSTg/view?usp=drive_link",
            },
            {
              slug: "caso-practico-poo",
              title: "Caso Práctico de Programación Orientada a Objetos",
              content: "",
              link: "https://drive.google.com/file/d/16JSaYuW2QYn5LWtPO-5Jekkdmy3Ow1U7/view?usp=drive_link",
            },
          ],
        },
        {
          title: "DOM",
          subtopics: [
            {
              slug: "dom-part-1",
              title: "DOM parte 1",
              content: "",
              link: "https://drive.google.com/file/d/1GWpf4DpUyicxuLuJujRaubz1gBGkZOMX/view?usp=drive_link",
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
