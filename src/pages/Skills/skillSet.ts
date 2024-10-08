interface Skill {
  id: number;
  name: string;
  description: string;
}

const skills: Skill[] = [
  {
    id: 1,
    name: "React",
    description:
      "React is an open-source JS library, which I used in all my projects for last 2 years.",
  },
  {
    id: 2,
    name: "Redux",
    description:
      "Redux is Js library for managing states in applications, which I used to manage data in my web applications as BookStore, Yoga and Harmony.",
  },
  {
    id: 3,
    name: "HTML5/CSS3/JS",
    description:
      "There are the fundamental Web technologies which I learnt from the Epam Systems's course",
  },
  {
    id: 4,
    name: "TypeScript",
    description:
      "TypeScript is a strongly typed programming language, which I've started to use since this year.",
  },
  {
    id: 5,
    name: "SCSS/SASS preprocessors",
    description:
      "There are preprocessors that I used for styling components in React projects.",
  },
  {
    id: 6,
    name: "Bootstrap",
    description:
      "Bootstrap is an open-source CSS framework which do easier a responsive design.",
  },
  {
    id: 7,
    name: "TailwindCSS",
    description:
      "TailwindCSS is an open-source CSS framework that similar to Boostrap, but it has more customization options.",
  },
  {
    id: 8,
    name: "Node.js",
    description:
      "Node.js is an open source server environment, which I used to use with Express.js to build REST APIs.",
  },
  {
    id: 9,
    name: "MongoDB",
    description: "MongoDB is an open source NoSQL database management program.",
  },
];

export default skills;
