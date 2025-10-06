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

// Experience Section Logo's
import sunLogo from './assets/company_logo/sun.png';
import fptLogo from './assets/company_logo/fptlogo.png';

// Education Section Logo's
import dutLogo from './assets/education_logo/dut.png';
import cyberLogo from './assets/education_logo/cybersoft.png';

// Project Section Logo's
import markCart from './assets/work_logo/markcart.png';
import markchat from './assets/work_logo/markchat.png';
import markinterviewprep from './assets/work_logo/markinterviewprep.png';
import markblog from './assets/work_logo/markblog.png';



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
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
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
      id: 0,
      img: fptLogo,
      role: "Fullstack Developer",
      company: "FPT Software",
      date: "December 2022 - Present",
      desc: "Led full-stack development with React/Next.js, TypeScript, Redux, Node.js, Java, and MongoDB/SQL, including a legacy-to-modern migration (Biz/Browser → web stack). Built responsive UIs, designed RESTful APIs, and improved performance & accessibility in an agile setup.",
      skills: [
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Java",
        "MongoDb",
        "Redux",
        " NextJs",
        "SQL"
      ],
    },
    {
      id: 1,
      img: sunLogo,
      role: "Fullstack Engineer",
      company: "Sun Asterisk",
      date: "July 2021 - October 2021",
      desc: "Full-stack Intern (3 months): contributed features on ReactJS front end and Java (Spring Boot) back end—built responsive UI components, integrated REST APIs, wrote basic unit tests, fixed bugs, and collaborated in Agile sprints using Git and SQL.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Java",
        "Tailwind CSS",
        "SQL",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: dutLogo,
      school: "Danang University of Science and Technology",
      date: "Sept 2018 - Oct 2022",
      grade: "18CLC",
      desc: "Built a solid foundation in Data Structures & Algorithms, Object-Oriented Programming (Java), Databases (SQL), Computer Networks, Operating Systems, and Web Technologies through coursework and team projects, developing practical problem-solving and software engineering habits.",
      degree: "Degree In Information Technology",
    },
    {
      id: 1,
      img: cyberLogo,
      school: "Cybersoft Academy",
      date: "Jan 2021 - Mar 2021",
      grade: "Developer Academy",
      desc: "Completed the Cybersoft Full-Stack Program, focusing on Frontend (React, TypeScript, Redux) and Backend (Java Spring Boot, JPA/Hibernate, MySQL). Built multiple mini-projects and a capstone integrating auth, REST APIs, and clean component architecture. Worked with Git/GitHub and Agile practices, emphasizing readable code and practical problem-solving.",
      degree: "Certificate of Completion – Software Developer Course at Cybersoft",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "MarkCart Market",
      description:
        "Fresh food & drinks shop built with Next.js & MERN. Secure Stripe payments, fast checkout, and mobile-first experience.",
      image: markCart,
      tags: ["Nextjs", "Nodejs", "Stripe", "MongoDB", "Tailwind"],
      github: "https://github.com/popmusicfan1992/mark-cart",
      webapp: "https://mark-cart-waac.vercel.app/",
    },
    {
      id: 1,
      title: "Mark Chat",
      description:
        "MarkChat is a real-time messaging web app built with React and Node.js, using Socket.IO for instant communication, MongoDB for persistent chat data, and JWT for secure token-based authentication.",
      image: markchat,
      tags: ["React JS", "Node.js", "MongoDB", "SocketIO", "JWT"],
      github: "https://github.com/popmusicfan1992/chatify-master",
      webapp: "https://chatify-master-1tx4z.sevalla.app/",
    },
    {
      id: 2,
      title: "Mark Interview Prep",
      description:
        "A React-based web application that provides interview preparation resources, including common interview questions, coding challenges, and tips for success. The intuitive design and smooth experience make it a go-to app for job seekers.",
      image: markinterviewprep,
      tags: ["ReactJS", "NodeJS", "AI-Powered Q&A", "Mongodb", "JWT"],
      github: "https://github.com/popmusicfan1992/Mark_interview_prep_AI_app_07052025",
      webapp: "https://mark-interview-prep-ai-app-07052025-three.vercel.app/",
    },
    {
      id: 3,
      title: "Mark Blog",
      description:
        "Mark Blog is a modern, AI-powered developer journal where I share clear, practical posts on JavaScript, React, Node.js, testing, and product thinking. Articles are drafted with Google Gemini and refined by hand for accuracy and real-world usefulness, featuring runnable snippets, checklists, and visuals. The site runs on React JS (front end) and Node.js (API), with ImageKit handling fast, optimized images and CDNs—so pages stay quick, clean, and readable across devices. Subscribe for hands-on guides, deep dives, and experiments that turn ideas into working code.",
      image: markblog,
      tags: ["React JS", "Node.js", "AI-Powered Blog", "ImageKit"],
      github: "https://github.com/popmusicfan1992/MarkBlog",
      webapp: "https://mark-blog-gwid.vercel.app/",
    },
  ];  