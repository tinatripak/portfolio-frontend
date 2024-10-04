interface Resume {
  id: number;
  name: string;
  subName: string;
  date: string;
  description: string;
}

const educationItems: Resume[] = [
  {
    id: 1,
    name: "Diploma, Software Engineering",
    subName: "BrainStation",
    date: "Jul 2024 - Oct 2024",
    description:
      "Completed a Software Engineering Bootcamp focusing on programming technologies including React, React Router, Node.JS, Express.JS, HTML, CSS, JS, Sass, MySQL, AXIOS, Knex.js, Jira, vite, testing - vitest.",
  },
  {
    id: 2,
    name: "React Course",
    subName: "SoftServe company",
    date: "Aug 2023 - Nov 2023",
    description:
      "Developed web pages using React, Redux, MUI. Hands-on course work in Error Handling in React,  Tests, Refs, Higher-Order Components, DefaultProps, Redux in React, Composition, Context, Storage, Sockets, Hooks, OOP.",
  },
  {
    id: 3,
    name: "Bachelor's degree in Software Engineering",
    subName: "Kyiv Polytechnic Institute",
    date: "Sep 2019 - Jun 2023",
    description: "A Bachelor's degree with honors and 3.95/4 GPA.",
  },
  {
    id: 4,
    name: "Front-End Development Course",
    subName: "Epam Systems company",
    date: "Apr 2022 - Jul 2022",
    description:
      "A course where I developed basic skills of web development with HTML, CSS, JavaScript, Pre & Post Processing CSS, Responsive Design, Frontend Optimization.",
  },
];
const experienceItems: Resume[] = [
  {
    id: 1,
    name: "Frontend Developer & UI/UX Designer",
    subName: "Pilot X Technologies",
    date: "Jul 2024 - Oct 2024",
    description:
      "Designing user interfaces and user experiences for web and mobile applications using Figma. Developing frontend components using React, TypeScript, and CSS.  Ensuring the technical feasibility of UI/UX designs.",
  },
  {
    id: 2,
    name: "Freelance Front End Developer",
    subName: "Freelance",
    date: "Dec 2023 - Jul 2024",
    description:
      " Implementing and desinging frontend web applications using React, TypeScript, SCSS, Redux and fullstack web application using MERN.",
  },
];

export { educationItems, experienceItems };
