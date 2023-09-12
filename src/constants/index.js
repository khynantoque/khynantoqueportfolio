import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Junior Software Developer",
    company_name: "Ebbing Forward LLC | Remote Internship",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Aug 2022 - Dec 2022",
    points: [
      "Assisted in the design and contribution of several REST API using the FastAPI micro framework in Python.",
      "Constructed REST API unit tests to exercise API requests and validate their responses using Postman.",
      "Exposed to using Visual Studio Code as the code editor in the development of REST APIs that execute POST, GET, DELETE, and UPDATE HTTP methods.",
      "Used the FastAPI micro framework to build the backend of an application and connect it to a PostgreSQL database."
    ],
    link: "https://www.ebbingforward.com/",
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as I expected, but Khyn proved me wrong.",
    name: "Chan Sucgang",
    designation: "Freelancer",
    company: "",
    image: "https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/326530443_886578422537458_6365792971641025779_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeETpBDoPtg0RhIMo4sQGHkGzaju83Yh-qrNqO7zdiH6qn0W9hNY8jzDfWOI00FGViEmShWG_Ga1l80gvU77myfy&_nc_ohc=KJusbrJJkGoAX9D77xZ&_nc_ht=scontent.fceb1-2.fna&oh=00_AfB2_bvpevqfcpdsFcbpkfrhibXdvuup-tkSif7wGJJnkQ&oe=65039A7C",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Khyn does.",
    name: "Jimrie Perez",
    designation: "Freelancer",
    company: "",
    image: "https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/358526493_2011991002483379_2829139894856747080_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeGbaN0sFdWuakC6vVJFxGhEwUeMhy6wPDLBR4yHLrA8MoAdz_9j0dHHfFCM8MjeKdLmCLbElHd2B0Ji-Dk8TxT5&_nc_ohc=kqb5vTK6_oIAX-Ah6VC&_nc_ht=scontent.fcgy2-1.fna&oh=00_AfCglsSyYaI7M8IEBozFn8qJO0T_acnGghzXP1NLqv6B4Q&oe=650298E6",
  },
  {
    testimonial:
      "After Khyn optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "",
    designation: "Tech Support",
    company: "| VXI",
    image: "https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/351159752_569841295301207_6200153810540878642_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeH918h2Ww_SgqD9qJX_gHcVjnhPBem3ewmOeE8F6bd7Cesa3zWqEo1o7thkgwMTGxEU5WTVuMgCEFEUBzCWa45n&_nc_ohc=XvE10y_gMMsAX8ccQD4&_nc_ht=scontent.fceb1-2.fna&oh=00_AfBBXH7TUF5YNBY6xZkxsJD-d0NBU6x_knFZwo6hQxWcFg&oe=6503FD32",
  },
];

const projects = [
  {
    name: "Joblessed",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django-rest",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/khynantoque/Joblessed",
  },
];

export { services, technologies, experiences, testimonials, projects };
