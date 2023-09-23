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
      "Contributed to designing and developing REST API using FastAPI in Python for note taking functionality resulting in 20% more efficient learning environment.",
      "Implemented user authentication using JSON Web Tokens including backend integration with PostgreSQL and made comprehensive multiple unit tests using Postman.",
      "Managed and version controlled the codebase using Git and GitLab, gaining 15% proficiency in software development workflows.",
    ],
    link: "https://www.ebbingforward.com/",
  }
];

const testimonials = [
  {
    testimonial:
      "Khyn's coding skills played a transformative role in enhancing our e-commerce site's performance and functionality.",
    name: "Chan Sucgang",
    designation: "Freelancer",
    company: "",
    image: "../assets/avatars/ChanSucgang.jpg",
  },
  {
    testimonial:
      "Collaborating with Khyn was a pleasure. His technical expertise and problem-solving abilities shine, making them a top choice for web development.",
    name: "Jimrie Perez",
    designation: "Freelancer",
    company: "",
    image: "../assets/avatars/JimriePerez.jpg",
  },
  {
    testimonial:
      "Khyn's support ensured a seamless server migration, showcasing their deep understanding of configurations and prompt assistance.",
    name: "Russel Villarin",
    designation: "Tech Support",
    company: "| VXI",
    image: "../assets/avatars/RusselVillarin.jpg",
  },
  {
    testimonial:
      "Khyn's insights during a security audit were invaluable. His keen eye for vulnerabilities and knack for proposing robust solutions make Khyn a trusted web security expert.",
    name: "Bruce Gemilga",
    designation: "Tech Support",
    company: "| VXI",
    image: "../assets/avatars/BruceGemilga.jpg",
  },
  {
    testimonial:
      "Khyn's front-end development sets a high standard. His attention to detail, commitment to user experience, and polished results make Khyn a standout web developer.",
    name: "Michael Vincent Guray",
    designation: "Freelancer",
    company: "",
    image: "../assets/avatars/MichaelGuray.jpg",
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
