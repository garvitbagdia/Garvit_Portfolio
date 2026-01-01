// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/encryptix_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/acropolis.png';
import bsaLogo from './assets/education_logo/ip.png';


// Project Section Logo's
import githubdetLogo from './assets/work_logo/blogify.png';
import csprepLogo from './assets/work_logo/assissfy.png';




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 1,
      img: webverseLogo,
      role: "Frontend Developer",
      company: "Encryptix",
      date: "March 2023 ",
      desc: "Frontend Development Intern at Encryptix, focused on building responsive and user-friendly web interfaces using React.js and modern CSS.Collaborated with cross-functional teams to deliver optimized, scalable, and maintainable frontend solutions.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Acropolis Institute of Technology and Research, Indore",
      date: "Sept 2022 - July 2026",
      grade: "7.11 CGPA",
      desc: "I am pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering, where I have gained a strong foundation in programming, data structures, algorithms, and core computer science concepts. Through academic coursework and practical projects, I have developed skills in software development, problem-solving, and logical reasoning.",
      degree: "Bachelor of Technology - BTECH",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "Indore Public School, Indore",
      date: "Sept 2021 - Aug 2022",
      grade: "83%",
      desc: "I completed my Class 12 education in the PCM (Physics, Chemistry, Mathematics) stream at Indore Public School, under the CBSE board. My studies focused on developing strong problem-solving abilities, numerical aptitude, and analytical thinking, especially through in-depth learning of Physics and Mathematics. I gained hands-on experience through laboratory experiments in Physics and Chemistry, which enhanced my practical understanding of scientific concepts. This phase of my education prepared me for engineering and technology-oriented studies and strengthened my discipline and academic consistency.",
      degree: "CBSE(XII) - PCM with Hindi Music Vocal",
    },
    {
      id: 2,
      img: bsaLogo,
      school: "Indore Public School, Indore",
      date: "Apr 2019 - March 2020",
      grade: "86.6%",
      desc: "I completed my Class 10 education at Indore Public School, following the CBSE curriculum, where I built a strong academic foundation across core subjects such as Mathematics, Science, English, and Social Science. During this period, I developed essential skills including logical reasoning, analytical thinking, and time management through regular assessments, projects, and examinations. I actively participated in classroom learning and practical activities, which helped strengthen my conceptual understanding and prepared me for higher secondary education.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Blogify",
      description:
        "Most of the bloggers buy expensive website building plans and also suffer from slow loading time. The idea is to help these people by building an Open-source Blogging website/Web App. This Web App will help them in creating a seamless reading experience for their users.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript","Node.js","Express","MongoDB", "API"],
      github: "",
      webapp: "",
    },
    {
      id: 1,
      title: "Assissfy",
      description:
        "It is an AI-powered assessment platform. Its goal is to make education and skill assessments more accessible, inclusive, and data-driven across India.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "",
      webapp: "https://assissfy-6c5v.vercel.app",
    },
  ];  