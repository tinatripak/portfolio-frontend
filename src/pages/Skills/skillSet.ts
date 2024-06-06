interface Skill {
  id: number;
  name: string;
  description: string;
  percentage: number;
}

const skills: Skill[] = [
  {
    id: 1,
    name: "React",
    description:
      "React is an open-source JS library, which I used in all my projects for last 2 years.",
    percentage: 0.8,
  },
  {
    id: 2,
    name: "Redux",
    description:
      "Redux is Js library for managing states in applications, which I used to manage data in my web applications as BookStore, Yoga and Harmony.",
    percentage: 0.6,
  },
  {
    id: 3,
    name: "HTML5/CSS3/JS",
    description:
      "There are the fundamental Web technologies which I learnt from the Epam Systems's course",
    percentage: 0.9,
  },
  {
    id: 4,
    name: "TypeScript",
    description:
      "TypeScript is a strongly typed programming language, which I've started to use since this year.",
    percentage: 0.5,
  },
  {
    id: 5,
    name: "SCSS/SASS preprocessors",
    description:
      "There are preprocessors that I used for styling components in React projects.",
    percentage: 0.7,
  },
  {
    id: 6,
    name: "Bootstrap",
    description:
      "Bootstrap is an open-source CSS framework which do easier a responsive design.",
    percentage: 0.6,
  },
  {
    id: 7,
    name: "TailwindCSS",
    description:
      "TailwindCSS is an open-source CSS framework that similar to Boostrap, but it has more customization options.",
    percentage: 0.6,
  },
  {
    id: 8,
    name: "Node.js",
    description:
      "Node.js is an open source server environment, which I used to use with Express.js to build REST APIs.",
    percentage: 0.6,
  },
  {
    id: 9,
    name: "MongoDB",
    description: "MongoDB is an open source NoSQL database management program.",
    percentage: 0.8,
  },
];

export default skills;
