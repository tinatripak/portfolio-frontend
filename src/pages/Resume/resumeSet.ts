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
    name: "React Course",
    subName: "SoftServe company",
    date: "Aug 2023 - Nov 2023",
    description:
      "Developed web pages using React, Redux, MUI. Hands-on course work in Error Handling in React,  Tests, Refs, Higher-Order Components, DefaultProps, Redux in React, Composition, Context, Storage, Sockets, Hooks, OOP.",
  },
  {
    id: 2,
    name: "Kyiv Polytechnic Institute",
    subName: "Software Engineering",
    date: "Sep 2019 - Jun 2023",
    description: "A Bachelor's degree with honors and 3.95/4 GPA.",
  },
  {
    id: 3,
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
    name: "Freelance Front End Developer",
    subName: "Freelance",
    date: "2023 - Present",
    description:
      " Implementing and desinging frontend web applications using React, TypeScript, SCSS, Redux and fullstack web application using MERN.",
  },
];

export { educationItems, experienceItems };
